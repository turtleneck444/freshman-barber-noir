import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import SEO from "@/components/SEO";
import { Features } from "@/components/blocks/features-9";

const BookingPage = () => {
  return (
    <>
      <SEO 
        title="Book Appointment - The FRESHMEN Barbershop | Online Booking Mississauga"
        description="Book your haircut appointment online at The FRESHMEN Barbershop in Mississauga. Fast, easy booking. Walk-ins welcome! Call (905) 483-7374 or book online now. Open 7 days."
        canonical="https://thefreshmenbarbershop.com/booking"
      />
      <div className="min-h-screen">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-8">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-100 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Book Appointment
              </span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              SCHEDULE YOUR
              <span className="block text-2xl sm:text-3xl md:text-4xl text-red-500 font-light mt-3 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                PREMIUM GROOMING EXPERIENCE
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Book your appointment online or call us at <span className="text-red-400 font-bold">(905) 483-7374</span>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <Features />
      
      <Footer />
      <FloatingActionWidget />
    </div>
    </>
  );
};

export default BookingPage;
