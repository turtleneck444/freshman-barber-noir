import MobileOptimizedHero from "@/components/MobileOptimizedHero";
import MobileOptimizedServices from "@/components/MobileOptimizedServices";
import { Features } from "@/components/blocks/features-9";
import AIBooking from "@/components/AIBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen mobile-scroll-safe">
      <MobileOptimizedHero />
      <Features />
      <MobileOptimizedServices />
      <AIBooking />
      <Footer />
    </div>
  );
};

export default Index;
