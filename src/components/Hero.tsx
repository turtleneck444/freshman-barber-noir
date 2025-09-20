import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Luxury Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          <img
            src={heroImage}
            alt="Modern futuristic barbershop interior"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 video-overlay" />
        <div className="absolute inset-0 video-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-barbershop-black/20 to-barbershop-black/60" />
      </div>

      {/* Ultra-Premium Floating Elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-barber-red rounded-full animate-premium-float opacity-80 shadow-ultra" />
      <div className="absolute top-40 left-16 w-4 h-4 bg-barber-blue rounded-full animate-premium-float opacity-60 shadow-platinum" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-barber-gold rounded-full animate-premium-float opacity-70 shadow-luxury" style={{ animationDelay: '4s' }} />
      <div className="absolute top-60 right-60 w-2 h-2 bg-barber-platinum rounded-full animate-luxury-scale opacity-50" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 left-60 w-5 h-5 bg-gradient-luxury rounded-full animate-ultra-glow opacity-40" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-barber-red/20 text-barber-red px-6 py-3 rounded-full border border-barber-red/30 mb-8 backdrop-luxury hover-glow animate-fade-in-up">
            <MapPin className="h-5 w-5 animate-glow-pulse" />
            <span className="text-sm font-bold tracking-wide">MISSISSAUGA'S PREMIER BARBERSHOP</span>
          </div>

          {/* Ultra-Premium Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-orbitron font-black text-barbershop-white leading-[0.85] mb-12 animate-fade-in-up-delay tracking-tighter">
            <span className="block animate-slide-in-left text-ultra-glow">THE</span>
            <span className="block text-shimmer animate-slide-in-right animate-ultra-glow" style={{ animationDelay: '0.4s' }}>FRESHMAN</span>
            <span className="block animate-slide-in-left-delay text-luxury">BARBERSHOP</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-barbershop-gray font-light max-w-3xl mb-10 leading-relaxed animate-fade-in-scale-delay">
            Experience the future of barbering. Premium cuts, classic techniques, 
            modern atmosphere. <span className="text-barber-gradient font-medium">Where tradition meets innovation.</span>
          </p>

          {/* Location Info */}
          <div className="flex flex-wrap items-center gap-8 mb-12 text-barbershop-gray-light animate-slide-in-left-delay">
            <div className="flex items-center space-x-3 bg-barbershop-black/30 px-4 py-2 rounded-full backdrop-luxury">
              <MapPin className="h-6 w-6 text-barber-red animate-glow-pulse" />
              <span className="font-medium">167 Queen Street South, Unit 4, Mississauga</span>
            </div>
            <div className="flex items-center space-x-3 bg-barbershop-black/30 px-4 py-2 rounded-full backdrop-luxury">
              <Clock className="h-6 w-6 text-barber-blue animate-glow-pulse" />
              <span className="font-medium">Open 7 Days a Week</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-scale" style={{ animationDelay: '1.2s' }}>
            <Button className="btn-hero text-xl px-12 py-8 shadow-luxury hover-lift">
              <Calendar className="mr-3 h-6 w-6" />
              Book Appointment
            </Button>
            <Button className="btn-outline-hero text-xl px-12 py-8 backdrop-luxury hover-glow">
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Luxury Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-48 h-48 bg-barber-red/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-barber-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-barber-red/5 to-barber-blue/5 rounded-full blur-3xl animate-glow-pulse" />
      
      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
};

export default Hero;