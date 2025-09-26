import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Features } from "@/components/blocks/features-9";
import Services from "@/components/Services";
import AIBooking from "@/components/AIBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <AIBooking />
      <Footer />
    </div>
  );
};

export default Index;
