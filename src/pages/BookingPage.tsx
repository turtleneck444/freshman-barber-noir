import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import SEO from "@/components/SEO";
import { Calendar, Star, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingPage = () => {
  useEffect(() => {
    // Auto-redirect to Booksy after 2 seconds if user doesn't click button
    const timer = setTimeout(() => {
      window.location.href = "https://thefreshmen.booksy.com/a";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    window.location.href = "https://thefreshmen.booksy.com/a";
  };

  return (
    <>
      <SEO 
        title="Book Appointment - The FRESHMEN Barbershop | Online Booking Mississauga"
        description="Book your haircut appointment online at The FRESHMEN Barbershop in Mississauga. Fast, easy booking via Booksy. Walk-ins welcome! Call (905) 483-7374. Open 7 days."
        canonical="https://thefreshmenbarbershop.com/booking"
      />
      <div className="min-h-screen">
        <Header />
      
      {/* Hero Section with Booksy Integration */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-100 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Powered by Booksy
              </span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              BOOK YOUR
              <span className="block text-red-500 mt-2">
                APPOINTMENT
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Easy online booking with our trusted Booksy system
            </p>

            {/* Main CTA Button */}
            <div className="flex flex-col items-center gap-6 mb-12">
              <Button
                onClick={handleBookNow}
                size="lg"
                className="h-16 px-12 rounded-2xl border-2 border-red-500 bg-red-600 text-white hover:bg-red-700 hover:border-red-400 font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl min-w-[280px]"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <Calendar className="h-6 w-6 mr-3" />
                Book on Booksy Now
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              
              <p className="text-sm text-gray-400 animate-pulse" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                Redirecting to Booksy in 3 seconds...
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Easy Booking
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Quick & simple
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Real-Time
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Live availability
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Confirmed
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Instant confirmation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Secure
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Safe & trusted
                </p>
              </div>
            </div>

            {/* Phone Fallback */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-4" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                Prefer to call? We're here to help!
              </p>
              <a 
                href="tel:9054837374" 
                className="inline-flex items-center gap-3 text-2xl text-red-400 hover:text-red-300 font-bold transition-colors"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                  <Calendar className="h-6 w-6" />
                </div>
                (905) 483-7374
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingActionWidget />
    </div>
    </>
  );
};

export default BookingPage;
