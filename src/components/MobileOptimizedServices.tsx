import React, { useState, useEffect, useRef } from "react";
import { Scissors, Crown, Calendar, ArrowRight, Clock, Star, CheckCircle, Award, Users, Shield, Heart, Gem, Target, Timer, Zap, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MobileOptimizedServices = () => {
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
      icon: Scissors,
      name: "Signature Cut",
      description: "Precision haircut tailored to your unique style and face shape",
      price: "$45",
      duration: "45 min",
      features: ["Consultation", "Wash & Cut", "Style Finish"]
    },
    {
      icon: Crown,
      name: "Traditional Shave",
      description: "Classic straight razor shave with hot towel treatment",
      price: "$35",
      duration: "30 min",
      features: ["Hot Towel", "Straight Razor", "Aftercare"]
    },
    {
      icon: Gem,
      name: "The Royal Package",
      description: "Complete grooming experience: cut, shave, and styling",
      price: "$80",
      duration: "90 min",
      features: ["Premium Cut", "Hot Shave", "Beard Trim", "Styling"]
    },
    {
      icon: Award,
      name: "Beard Grooming",
      description: "Professional beard trimming and shaping service",
      price: "$25",
      duration: "20 min",
      features: ["Trim & Shape", "Oil Treatment", "Style Guidance"]
    },
    {
      icon: Users,
      name: "Father & Son",
      description: "Special bonding experience for fathers and their sons",
      price: "$70",
      duration: "60 min",
      features: ["Two Cuts", "Photo Memory", "Special Pricing"]
    },
    {
      icon: Zap,
      name: "Express Cut",
      description: "Quick professional cut for busy professionals",
      price: "$30",
      duration: "25 min",
      features: ["Fast Service", "Professional Cut", "Quick Style"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="mobile-py bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden mobile-scroll-safe">
      {/* Background Effects - Mobile Optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto mobile-px relative z-10">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-100 font-medium text-mobile-sm sm:text-base" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              Premium Services
            </span>
          </div>
          
          <h2 className="text-mobile-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
            <span className="block">Expert</span>
            <span className="block text-gradient bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Barbering Services
            </span>
          </h2>
          
          <p className="text-mobile-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Gotham Medium, sans-serif' }}>
            Experience the pinnacle of men's grooming with our comprehensive range of professional services
          </p>
        </div>

        {/* Services Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mobile-gap">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/50 transition-all duration-500 group cursor-pointer overflow-hidden mobile-scale-hover ${
                isVisible ? 'animate-mobile-fade' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                {/* Service Icon */}
                <div className={`mb-4 sm:mb-6 transition-all duration-500 ${hoveredService === index ? 'scale-110 rotate-12' : ''}`}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-mobile-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      {service.name}
                    </h3>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-mobile-xs sm:text-sm ml-2 flex-shrink-0">
                      {service.duration}
                    </Badge>
                  </div>
                  
                  <p className="text-mobile-sm sm:text-base text-gray-300 leading-relaxed" style={{ fontFamily: 'Gotham Medium, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* Features List - Mobile Optimized */}
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-mobile-xs sm:text-sm text-gray-400">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                    <span className="text-mobile-lg sm:text-xl font-bold text-red-400" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      {service.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 touch-target"
                      style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <span className="text-mobile-xs sm:text-sm">Book Now</span>
                      <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>

                {/* Mobile-safe hover effects */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`} />
                <div className={`absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold py-4 px-8 sm:px-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group touch-target"
            style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-mobile-base sm:text-lg">Book Your Service Today</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MobileOptimizedServices;