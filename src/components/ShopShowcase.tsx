import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Star, 
  Award, 
  Crown, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Navigation, 
  Calendar,
  Users,
  Scissors,
  Camera,
  Eye,
  Heart,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  MessageCircle,
  Share2,
  Bookmark,
  Play,
  Pause
} from 'lucide-react';

const ShopShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const shopFeatures = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Premium Experience",
      description: "Luxury barbershop with premium amenities",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sanitized & Safe",
      description: "Highest hygiene standards maintained",
      gradient: "from-gray-600 to-gray-700"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "20+ Years Experience",
      description: "Master barber with decades of expertise",
      gradient: "from-gray-600 to-gray-700"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "4.9/5 Rating",
      description: "Consistently rated by satisfied clients",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" }
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
        }
        
        .image-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%);
        }
      `}</style>

      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Professional Header - Optimized Spacing */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-red-600/10 backdrop-blur-sm border border-red-500/20 shadow-lg mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-600 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Visit Our Shop
              </span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-none ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <span className="block tracking-tight">WELCOME TO</span>
              <span className="block text-xl sm:text-2xl md:text-3xl text-red-600 font-light mt-1.5 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                THE FRESHMEN STYLE BARBERSHOP
              </span>
            </h2>
            
            <div className={`flex items-center gap-3 sm:gap-4 mt-4 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
                <span className="text-gray-600 font-medium tracking-widest uppercase text-xs sm:text-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  MISSISSAUGA, ON
                </span>
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
            </div>
          </div>

          {/* Main Shop Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Shop Image */}
            <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/outside.jpg" 
                  alt="The Freshmen Style Barbershop - Premium Barber Shop in Mississauga"
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Clean Bottom Info Card (No dark overlay) */}
                <div className="absolute inset-x-0 bottom-0 flex items-end">
                  <div className="p-8 w-full">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                          <Crown className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>The Freshmen Style Barbershop</h3>
                          <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Premium Barbering Experience</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Mississauga, ON
                        </span>
                        <span className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          4.9/5 Rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              {/* Shop Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {shopFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-lg card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{feature.title}</h4>
                          <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Information */}
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Contact Us</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-red-500" />
                      <a href="tel:9054837374" className="text-gray-600 hover:text-red-600 transition-colors" style={{ fontFamily: 'Gotham Light, sans-serif' }}>(905) 483-7374</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-red-500" />
                      <a href="mailto:freshmen.style16@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors" style={{ fontFamily: 'Gotham Light, sans-serif' }}>freshmen.style16@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-red-500" />
                      <span className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>167 Queen St S, Unit 4, Mississauga, ON L5M 1L2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Professional Call to Action Section */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-2xl">
              {/* Content */}
              <div className="relative z-10 p-12 sm:p-16 lg:p-20">
                {/* Professional Header */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 shadow-2xl">
                    <Navigation className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    VISIT US TODAY
                  </h3>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-700 shadow-2xl">
                    <Navigation className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Professional Subtitle */}
                <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Experience the <span className="font-bold text-red-600">premium barbering experience</span> that has made us 
                  <span className="font-bold text-gray-900"> Mississauga's #1 barbershop</span>. Walk-ins welcome, appointments recommended!
                </p>
                
                {/* Professional Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-10 py-5 rounded-2xl text-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-0" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Calendar className="inline h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Book Appointment
                    <ArrowRight className="inline h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button className="group bg-white border-2 border-gray-300 text-gray-900 font-bold px-10 py-5 rounded-2xl text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Navigation className="inline h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Get Directions
                    <MapPin className="inline h-6 w-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </div>
                
                {/* Professional Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-base font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Walk-ins Welcome</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-base font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>4.9/5 Google Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-red-500" />
                    <span className="text-base font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Premium Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopShowcase;
