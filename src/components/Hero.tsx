import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern futuristic barbershop interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-barbershop-black/80 to-barbershop-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-barber-red/20 text-barber-red px-4 py-2 rounded-full border border-barber-red/30 mb-8">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Mississauga's Premier Barbershop</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-barbershop-white leading-tight mb-6">
            THE
            <br />
            <span className="text-barber-gradient">FRESHMAN</span>
            <br />
            BARBERSHOP
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-barbershop-gray font-light max-w-2xl mb-8 leading-relaxed">
            Experience the future of barbering. Premium cuts, classic techniques, 
            modern atmosphere. Where tradition meets innovation.
          </p>

          {/* Location Info */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-barbershop-gray-light">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-barber-red" />
              <span>167 Queen Street South, Unit 4, Mississauga</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-barber-blue" />
              <span>Open 7 Days a Week</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button className="btn-outline-hero text-lg px-8 py-6">
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-barber-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-barber-blue/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;