import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, ArrowRight, Crown, Award, Star, Shield, Heart, Zap, Calendar, Users, Award as AwardIcon, Sparkles } from "lucide-react";
import { Button } from '@/components/ui/button';

const Footer = () => {
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
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1 animate-fade-in-up">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-2xl shadow-2xl glow">
                    <Scissors className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      THE FRESHMAN
                    </h3>
                    <p className="text-red-400 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      STYLE BARBERSHOP
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Mississauga's most exclusive barbershop experience. Where 
                  <span className="text-red-400 font-bold"> traditional craftsmanship</span> meets 
                  <span className="text-red-400 font-bold"> cutting-edge precision</span>.
                </p>
                
                {/* Social Media */}
                <div className="flex space-x-4 mb-8">
                  <a href="#" className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25">
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25">
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25">
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                </div>
                
                {/* Trust Badges */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-red-400" />
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Mississauga's #1 Rated
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      4.9/5 Average Rating
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Licensed & Insured
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-fade-in-up-delay">
                <h4 className="text-2xl font-black text-white mb-8 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Crown className="h-6 w-6 mr-3 text-red-400" />
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Home", href: "#home", icon: <Heart className="h-4 w-4" /> },
                    { name: "Services", href: "#services", icon: <Scissors className="h-4 w-4" /> },
                    { name: "Book Appointment", href: "#booking", icon: <Calendar className="h-4 w-4" /> },
                    { name: "Chair Rental", href: "#chairs", icon: <Users className="h-4 w-4" /> },
                    { name: "Join Our Team", href: "#join-team", icon: <AwardIcon className="h-4 w-4" /> },
                    { name: "Gift Cards", href: "#gift-cards", icon: <Sparkles className="h-4 w-4" /> }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-all duration-300 group text-lg"
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300 text-red-500">
                          {link.icon}
                        </span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in-up-delay-2">
                <h4 className="text-2xl font-black text-white mb-8 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <MapPin className="h-6 w-6 mr-3 text-red-400" />
                  Contact Info
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl shadow-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        167 Queen Street South
                      </p>
                      <p className="text-gray-400" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        Unit 4, Mississauga, Ontario
                      </p>
                      <p className="text-gray-400" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        Canada L5M1L2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-bold text-xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        (905) 123-4567
                      </p>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        Call for appointments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl shadow-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-bold text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        info@thefreshmanbarbershop.com
                      </p>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        Email us anytime
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours & CTA */}
              <div className="animate-fade-in-up-delay-3">
                <h4 className="text-2xl font-black text-white mb-8 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Clock className="h-6 w-6 mr-3 text-red-400" />
                  Hours
                </h4>
                <div className="space-y-4 mb-8">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
                    { day: "Saturday", time: "8:00 AM - 7:00 PM" },
                    { day: "Sunday", time: "10:00 AM - 6:00 PM" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-gray-300 font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {schedule.day}
                      </span>
                      <span className="text-red-400 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 px-6 rounded-xl text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 glow" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Calendar className="mr-3 h-5 w-5" />
                  BOOK NOW
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-lg" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  © 2025 The Freshmen Style Barbershop. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Crafting excellence in men's grooming since 2005
                </p>
              </div>
              
              <div className="flex space-x-8">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-all duration-300 font-medium text-lg" 
                  style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-all duration-300 font-medium text-lg" 
                  style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-400 transition-all duration-300 font-medium text-lg" 
                  style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
