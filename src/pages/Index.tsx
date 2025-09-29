import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Features } from "@/components/blocks/features-9";
import Portfolio from "@/components/Portfolio"; // Replace Services
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Portfolio /> {/* New portfolio section */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
