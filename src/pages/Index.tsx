import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChairRental from "@/components/ChairRental";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ChairRental />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
