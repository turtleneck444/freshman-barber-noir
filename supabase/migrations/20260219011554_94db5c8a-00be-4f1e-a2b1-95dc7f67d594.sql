
-- =============================================
-- FRESHMEN BARBERSHOP - COMPLETE DATABASE SCHEMA
-- =============================================

-- 1. ENUM TYPES
CREATE TYPE public.app_role AS ENUM ('admin', 'staff');
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled');
CREATE TYPE public.service_status AS ENUM ('active', 'inactive');
CREATE TYPE public.client_status AS ENUM ('active', 'new', 'inactive', 'vip');
CREATE TYPE public.product_status AS ENUM ('active', 'low_stock', 'out_of_stock', 'inactive');
CREATE TYPE public.staff_status AS ENUM ('active', 'inactive', 'on_leave');

-- 2. PROFILES TABLE (linked to auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. USER ROLES TABLE (separate from profiles per security requirements)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. STAFF / BARBERS TABLE
CREATE TABLE public.staff (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  bio TEXT,
  photo_url TEXT,
  specialty TEXT,
  experience_years INTEGER DEFAULT 0,
  status staff_status NOT NULL DEFAULT 'active',
  commission_rate NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;

-- 5. SERVICES TABLE
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'Hair',
  price NUMERIC(10,2) NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 30,
  status service_status NOT NULL DEFAULT 'active',
  popular BOOLEAN DEFAULT false,
  features TEXT[] DEFAULT '{}',
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- 6. CLIENTS TABLE
CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  birthday DATE,
  status client_status NOT NULL DEFAULT 'new',
  loyalty_points INTEGER DEFAULT 0,
  preferred_barber_id UUID REFERENCES public.staff(id) ON DELETE SET NULL,
  notes TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- 7. BOOKINGS / APPOINTMENTS TABLE
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
  staff_id UUID REFERENCES public.staff(id) ON DELETE SET NULL,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  status booking_status NOT NULL DEFAULT 'pending',
  price NUMERIC(10,2),
  duration_minutes INTEGER,
  notes TEXT,
  client_name TEXT,
  client_email TEXT,
  client_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- 8. PRODUCTS TABLE
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'General',
  price NUMERIC(10,2) NOT NULL,
  cost_price NUMERIC(10,2) DEFAULT 0,
  stock INTEGER NOT NULL DEFAULT 0,
  status product_status NOT NULL DEFAULT 'active',
  sku TEXT,
  image_url TEXT,
  rating NUMERIC(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 9. BUSINESS SETTINGS TABLE
CREATE TABLE public.business_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.business_settings ENABLE ROW LEVEL SECURITY;

-- =============================================
-- HELPER FUNCTIONS
-- =============================================

-- Check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
$$;

-- Check if user is staff or admin
CREATE OR REPLACE FUNCTION public.is_staff_or_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role IN ('admin', 'staff')
  )
$$;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    NEW.email
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_staff_updated_at BEFORE UPDATE ON public.staff FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_business_settings_updated_at BEFORE UPDATE ON public.business_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-update product status based on stock
CREATE OR REPLACE FUNCTION public.update_product_status()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.stock = 0 THEN
    NEW.status = 'out_of_stock';
  ELSIF NEW.stock <= 10 THEN
    NEW.status = 'low_stock';
  ELSIF NEW.status IN ('out_of_stock', 'low_stock') THEN
    NEW.status = 'active';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_product_status_trigger
  BEFORE INSERT OR UPDATE OF stock ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_product_status();

-- =============================================
-- RLS POLICIES
-- =============================================

-- PROFILES: Users read own, admins read all
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT USING (public.is_admin());
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- USER ROLES: Only admins can manage, users can view own
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all roles" ON public.user_roles FOR SELECT USING (public.is_admin());
CREATE POLICY "Admins can insert roles" ON public.user_roles FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admins can delete roles" ON public.user_roles FOR DELETE USING (public.is_admin());

-- SERVICES: Public can read active, admins can manage all
CREATE POLICY "Anyone can view active services" ON public.services FOR SELECT USING (status = 'active');
CREATE POLICY "Staff can view all services" ON public.services FOR SELECT USING (public.is_staff_or_admin());
CREATE POLICY "Admins can insert services" ON public.services FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update services" ON public.services FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admins can delete services" ON public.services FOR DELETE USING (public.is_admin());

-- STAFF: Public can read active, admins can manage
CREATE POLICY "Anyone can view active staff" ON public.staff FOR SELECT USING (status = 'active');
CREATE POLICY "Admins can view all staff" ON public.staff FOR SELECT USING (public.is_staff_or_admin());
CREATE POLICY "Admins can insert staff" ON public.staff FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update staff" ON public.staff FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admins can delete staff" ON public.staff FOR DELETE USING (public.is_admin());

-- CLIENTS: Staff/admins can manage
CREATE POLICY "Staff can view clients" ON public.clients FOR SELECT USING (public.is_staff_or_admin());
CREATE POLICY "Staff can insert clients" ON public.clients FOR INSERT WITH CHECK (public.is_staff_or_admin());
CREATE POLICY "Staff can update clients" ON public.clients FOR UPDATE USING (public.is_staff_or_admin());
CREATE POLICY "Admins can delete clients" ON public.clients FOR DELETE USING (public.is_admin());

-- BOOKINGS: Public can insert (for booking form), staff/admins can manage
CREATE POLICY "Public can create bookings" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Staff can view bookings" ON public.bookings FOR SELECT USING (public.is_staff_or_admin());
CREATE POLICY "Staff can update bookings" ON public.bookings FOR UPDATE USING (public.is_staff_or_admin());
CREATE POLICY "Admins can delete bookings" ON public.bookings FOR DELETE USING (public.is_admin());

-- PRODUCTS: Staff/admins can manage
CREATE POLICY "Staff can view products" ON public.products FOR SELECT USING (public.is_staff_or_admin());
CREATE POLICY "Admins can insert products" ON public.products FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update products" ON public.products FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admins can delete products" ON public.products FOR DELETE USING (public.is_admin());

-- BUSINESS SETTINGS: Staff can read, admins can manage
CREATE POLICY "Staff can view settings" ON public.business_settings FOR SELECT USING (public.is_staff_or_admin());
CREATE POLICY "Admins can insert settings" ON public.business_settings FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update settings" ON public.business_settings FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admins can delete settings" ON public.business_settings FOR DELETE USING (public.is_admin());

-- =============================================
-- SEED DATA: Services matching your current site
-- =============================================

INSERT INTO public.services (name, description, category, price, duration_minutes, status, popular, features, sort_order) VALUES
('Signature Cut', 'Premium haircut with consultation, wash, cut, and styling. Includes beard trim.', 'Hair', 45.00, 45, 'active', true, ARRAY['Professional Consultation', 'Premium Wash', 'Hot Towel Finish', 'Style Tips'], 1),
('Traditional Shave', 'Classic hot towel shave with premium shaving cream and aftercare treatment.', 'Beard', 35.00, 30, 'active', false, ARRAY['Hot Towel', 'Premium Cream', 'Aftercare Treatment'], 2),
('The Royal Package', 'Complete grooming experience: cut, shave, beard styling, and premium treatments.', 'Complete', 80.00, 90, 'active', true, ARRAY['Signature Cut', 'Traditional Shave', 'Beard Styling', 'Head Massage'], 3),
('Beard Grooming', 'Professional beard trimming, shaping, and conditioning treatment.', 'Beard', 25.00, 20, 'active', false, ARRAY['Precise Trimming', 'Beard Oil', 'Conditioning'], 4),
('Father & Son', 'Special package for father and son - two signature cuts together.', 'Complete', 70.00, 60, 'active', false, ARRAY['Two Signature Cuts', 'Family Discount', 'Premium Wash'], 5),
('Executive Experience', 'Ultimate luxury grooming experience with premium amenities.', 'Complete', 120.00, 120, 'active', false, ARRAY['All Services Included', 'Premium Products', 'Champagne Service', 'Personal Consultation'], 6);

-- SEED DATA: Staff/Barbers
INSERT INTO public.staff (name, email, specialty, experience_years, status, bio) VALUES
('Shoaib Ghori', 'sho@freshmenbarber.com', 'Master Barber - Fades & Precision Cuts', 20, 'active', 'Head barber and owner with 20+ years of experience. Known for his signature fades and precision cutting technique.'),
('Bikram', 'bikram@freshmenbarber.com', 'Barber - All Styles', 8, 'active', 'Skilled barber specializing in modern and classic styles. Expert in beard grooming and hot towel shaves.');

-- SEED DATA: Sample Products
INSERT INTO public.products (name, description, category, price, cost_price, stock, sku, rating, review_count) VALUES
('Premium Hair Oil', 'Natural hair oil for styling and nourishment', 'Hair Care', 29.99, 12.00, 45, 'PHO-001', 4.80, 156),
('Beard Balm', 'Moisturizing beard balm with natural ingredients', 'Beard Care', 24.99, 10.00, 32, 'BB-001', 4.60, 89),
('Styling Gel', 'Strong hold styling gel for all hair types', 'Hair Care', 19.99, 8.00, 0, 'SG-001', 4.40, 67),
('Barber Scissors', 'Professional grade barber scissors', 'Tools', 89.99, 45.00, 8, 'BS-001', 4.90, 23);

-- SEED DATA: Business Settings
INSERT INTO public.business_settings (key, value) VALUES
('business_info', '{"name": "The FRESHMEN Barbershop", "address": "167 Queen St S, Mississauga, ON", "phone": "(905) 483-7374", "email": "info@freshmenbarber.com", "website": "https://thefreshmenbarbershop.com"}'),
('opening_hours', '{"monday": {"open": "10:00", "close": "19:00"}, "tuesday": {"open": "10:00", "close": "19:00"}, "wednesday": {"open": "10:00", "close": "19:00"}, "thursday": {"open": "10:00", "close": "20:00"}, "friday": {"open": "10:00", "close": "20:00"}, "saturday": {"open": "09:00", "close": "18:00"}, "sunday": {"open": "10:00", "close": "17:00"}}'),
('booking_settings', '{"min_advance_hours": 2, "max_advance_days": 30, "slot_duration_minutes": 30, "allow_walk_ins": true, "require_deposit": false}');
