import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Features } from "@/components/blocks/features-9";
import ShopShowcase from "@/components/ShopShowcase";
import GoogleBusinessWidget from "@/components/GoogleBusinessWidget";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="The FRESHMEN Barbershop | Best Barber in Mississauga | Premium Haircuts $40-$75 | Book Now"
        description="Mississauga's top-rated barbershop! Professional haircuts by expert barbers Sho ($50) & Bikram ($40). Premium fades, beard grooming, hot towel shaves. 200+ 5-star reviews. Walk-ins welcome at 167 Queen St S. Call (905) 483-7374. Open daily!"
        canonical="https://thefreshmenbarbershop.com"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <ShopShowcase />
        <Features />
        <GoogleBusinessWidget />
        <LocationMap />
        <Testimonials />
        <Footer />
        <FloatingActionWidget />
      </div>
    </>
  );
};

export default Index;
