import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Features } from "@/components/blocks/features-9";
import ShopShowcase from "@/components/ShopShowcase";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ShopShowcase />
      <LocationMap />
      <Testimonials />
      <Footer />
      <FloatingActionWidget />
    </div>
  );
};

export default Index;
