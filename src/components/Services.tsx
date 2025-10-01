import { Scissors, Crown, Calendar, ArrowRight, Clock, Star, CheckCircle, Award, Users, Shield, Heart, Gem, Target, Timer, Zap, Sparkles, ScissorsIcon, Phone, Sparkle, Diamond, StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      id: 1,
      name: "Signature Cut",
      price: "$45",
      duration: "45 min",
      description: "Precision cuts by Shoaib Ghori with premium styling",
      features: ["Professional Consultation", "Premium Wash", "Hot Towel Finish", "Style Tips"],
      icon: <Scissors className="h-8 w-8" />,
      popular: true,
      tier: "Elite",
      color: "from-red-500 to-red-700",
      bgColor: "from-white to-gray-50",
      borderColor: "border-gray-200",
      experience: "20+ Years",
      rating: "4.9/5",
      clients: "500+"
    },
    {
      id: 2,
      name: "Royal Package",
      price: "$85",
      duration: "90 min",
      description: "Complete premium grooming experience with Shoaib",
      features: ["Signature Cut", "Traditional Shave", "Beard Styling", "Head Massage"],
      icon: <Crown className="h-8 w-8" />,
      popular: false,
      tier: "Royal",
      color: "from-amber-500 to-yellow-600",
      bgColor: "from-white to-gray-50",
      borderColor: "border-gray-200",
      experience: "20+ Years",
      rating: "5.0/5",
      clients: "300+"
    },
    {
      id: 3,
      name: "Executive Experience",
      price: "$120",
      duration: "120 min",
      description: "Ultimate luxury grooming experience with premium amenities",
      features: ["All Services Included", "Premium Products", "Champagne Service", "Personal Consultation"],
      icon: <Award className="h-8 w-8" />,
      popular: false,
      tier: "Executive",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-white to-gray-50",
      borderColor: "border-gray-200",
      experience: "20+ Years",
      rating: "5.0/5",
      clients: "150+"
    }
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
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1);
          }
        }
        
        @keyframes card-hover {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-8px) scale(1.02);
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
        
        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .card-hover {
          animation: card-hover 0.3s ease-out forwards;
        }
      `}</style>
      
      <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-red-500/3 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Professional Section Header */}
          <div className="text-center mb-24">
            <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-600/10 backdrop-blur-xl border border-red-500/20 shadow-lg mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse glow" />
              <span className="text-red-600 font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                PREMIUM BARBERING SERVICES
              </span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse glow" />
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-8 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <span className="block tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                PROFESSIONAL
              </span>
              <span className="block text-3xl md:text-4xl text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text font-light mt-4 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                GROOMING SERVICES
              </span>
            </h2>
            
            <div className={`flex items-center gap-6 mt-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <Diamond className="h-5 w-5 text-red-400" />
                <span className="text-red-600 font-medium tracking-widest uppercase text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  EXCLUSIVE ACCESS
                </span>
                <Diamond className="h-5 w-5 text-red-400" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent flex-1" />
            </div>
            
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-12 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Experience the <span className="text-red-600 font-bold">most exclusive</span> barbering services in Mississauga. 
              Every service is crafted with <span className="text-red-600 font-bold">surgical precision</span> and 
              <span className="text-red-600 font-bold"> luxury excellence</span>.
            </p>
          </div>

          {/* Professional Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
            {services.map((service, index) => (
              <div key={service.id} className="relative group">
                {/* Tier Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold tracking-widest shadow-lg`}>
                    {service.tier}
                  </div>
                </div>
                
                {/* Most Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -left-3 z-20">
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold tracking-widest shadow-lg">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        POPULAR
                      </div>
                    </div>
                  </div>
                )}
                
                <Card 
                  className={`relative overflow-hidden bg-gradient-to-br ${service.bgColor} backdrop-blur-xl border-2 ${service.borderColor} hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group shadow-xl hover:shadow-2xl ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Professional Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="relative z-10 p-8">
                    {/* Header Section */}
                    <div className="text-center mb-6">
                      {/* Service Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-500 ${
                        hoveredService === service.id 
                          ? `bg-gradient-to-br ${service.color} text-white shadow-2xl` 
                          : 'bg-gray-100 text-gray-700 group-hover:bg-gradient-to-br group-hover:shadow-2xl'
                      }`}>
                        {service.icon}
                      </div>
                      
                      {/* Service Title */}
                      <h3 className="text-2xl font-black text-[#0e4297] mb-2 group-hover:text-red-600 transition-colors duration-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {service.name}
                      </h3>
                      
                      {/* Price and Duration */}
                      <div className="mb-4">
                        <div className="text-3xl font-black text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {service.price}
                        </div>
                        <div className="text-gray-600 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-center" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span style={{ fontFamily: 'Gotham Light, sans-serif' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {service.experience}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {service.rating}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          Rating
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {service.clients}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          Clients
                        </div>
                      </div>
                    </div>
                    
                    {/* Book Now Button */}
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-black py-3 px-6 rounded-xl text-base transition-all duration-500 transform hover:scale-105 shadow-xl`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        BOOK NOW
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Professional Call to Action */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-16 border-2 border-gray-200 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Diamond className="h-8 w-8 text-red-500" />
                  <h3 className="text-5xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    READY FOR YOUR PREMIUM EXPERIENCE?
                  </h3>
                  <Diamond className="h-8 w-8 text-red-500" />
                </div>
                
                <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Book your appointment with <span className="text-red-600 font-bold">Shoaib Ghori</span> and 
                  experience the difference of <span className="text-red-600 font-bold">professional barbering excellence</span>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-12 py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 glow" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Calendar className="mr-3 h-6 w-6" />
                    BOOK APPOINTMENT
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-black px-12 py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Phone className="mr-3 h-6 w-6" />
                    CALL (905) 483-7374
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
