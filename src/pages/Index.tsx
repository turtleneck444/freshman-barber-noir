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
        title="The FRESHMEN Barbershop - #1 Barber in Mississauga | 4.9★ Rated | Expert Fades & Haircuts"
        description="Mississauga's premier barbershop with 200+ 5-star reviews. Expert fades, precision haircuts, beard grooming & hot towel shaves. Walk-ins welcome! 167 Queen St S. Call (905) 483-7374. Open 7 days."
        canonical="https://thefreshmenbarbershop.com"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <ShopShowcase />
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
