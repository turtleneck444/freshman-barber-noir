import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Star,
  Award,
  Shield,
  ArrowRight,
  Smartphone,
  Globe,
  MessageCircle
} from 'lucide-react';

const LocationMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Business Information from Google Maps
  const businessInfo = {
    name: "The FRESHMEN Barbershop",
    address: "167 Queen St S, Mississauga, ON L5M 1L2",
    coordinates: {
      lat: 43.5823631,
      lng: -79.7144503
    },
    phone: "(905) 483-7374",
    email: "freshmen.style16@gmail.com",
    googleMapsUrl: "https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh",
    hours: [
      { day: "Monday", time: "12:00 PM - 8:00 PM", open: true },
      { day: "Tuesday", time: "12:00 PM - 8:00 PM", open: true },
      { day: "Wednesday", time: "12:00 PM - 8:00 PM", open: true },
      { day: "Thursday", time: "12:00 PM - 8:00 PM", open: true },
      { day: "Friday", time: "12:00 PM - 8:00 PM", open: true },
      { day: "Saturday", time: "11:00 AM - 6:00 PM", open: true },
      { day: "Sunday", time: "12:00 PM - 8:00 PM", open: true }
    ],
    rating: 4.9,
    totalReviews: "500+",
    placeId: "ChIJoaaxqbnBK4gRcO8dz5831OQ"
  };

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

  const copyToClipboard = async (text: string, type: 'phone' | 'address') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openInMaps = () => {
    window.open(businessInfo.googleMapsUrl, '_blank');
  };

  const getDirections = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`;
    window.open(mapsUrl, '_blank');
  };

  const callPhone = () => {
    window.location.href = `tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`;
  };

  const sendEmail = () => {
    window.location.href = `mailto:${businessInfo.email}`;
  };

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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <section ref={sectionRef} id="location" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Professional Header - Compact */}
          <div className="text-center mb-10">
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full bg-red-600/10 backdrop-blur-sm border border-red-500/20 shadow-lg mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-600 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Find Us
              </span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <span className="block tracking-tight">VISIT OUR</span>
              <span className="block text-xl md:text-2xl text-red-600 font-light mt-1.5 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                BARBERSHOP IN MISSISSAUGA
              </span>
            </h2>
            
            <div className={`flex items-center gap-3 sm:gap-4 mt-4 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
                <span className="text-gray-600 font-medium tracking-widest uppercase text-xs sm:text-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  167 QUEEN ST S, MISSISSAUGA
                </span>
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
            </div>
          </div>

          {/* Main Content Grid - Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Google Maps Embed */}
            <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Card className="bg-white border border-gray-200 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Interactive Google Maps */}
                  <div className="relative w-full h-[400px] lg:h-[500px]">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2486845842777!2d-79.7144503!3d43.5823631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41b9a9fea6a1%3A0xe418339f4adcef70!2sThe%20FRESHMEN%20Barbershop!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The FRESHMEN Barbershop Location"
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Map Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                          <Star className="h-5 w-5 text-white fill-current" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{businessInfo.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>{businessInfo.totalReviews} Google Reviews</p>
                        </div>
                      </div>
                      <Button
                        onClick={openInMaps}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Information */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
              {/* Contact Information Card */}
              <Card className="bg-white border border-gray-200 shadow-xl card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Phone className="h-6 w-6 mr-3 text-red-500" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Phone</p>
                          <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{businessInfo.phone}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={callPhone}
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white p-3 rounded-xl transition-all duration-300"
                        >
                          <Smartphone className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => copyToClipboard(businessInfo.phone, 'phone')}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-xl transition-all duration-300"
                        >
                          {copiedPhone ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Email</p>
                          <p className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{businessInfo.email}</p>
                        </div>
                      </div>
                      <Button
                        onClick={sendEmail}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white p-3 rounded-xl transition-all duration-300"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Address */}
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-500 font-medium mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Address</p>
                            <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{businessInfo.address}</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => copyToClipboard(businessInfo.address, 'address')}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-xl transition-all duration-300 ml-2"
                        >
                          {copiedAddress ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours Card */}
              <Card className="bg-white border border-gray-200 shadow-xl card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Clock className="h-6 w-6 mr-3 text-red-500" />
                    Business Hours
                  </h3>
                  
                  <div className="space-y-3">
                    {businessInfo.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-700 font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {schedule.day}
                        </span>
                        <span className={`font-semibold ${schedule.open ? 'text-green-600' : 'text-red-600'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Award className="h-8 w-8 text-white mx-auto mb-2" />
                      <p className="text-2xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>20+</p>
                      <p className="text-xs text-white/80" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Years</p>
                    </div>
                    <div>
                      <Star className="h-8 w-8 text-white mx-auto mb-2 fill-current" />
                      <p className="text-2xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>4.9</p>
                      <p className="text-xs text-white/80" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Rating</p>
                    </div>
                    <div>
                      <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                      <p className="text-2xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>500+</p>
                      <p className="text-xs text-white/80" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Reviews</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <Button 
              onClick={getDirections}
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-10 py-5 rounded-2xl text-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-0"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              <Navigation className="inline h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Get Directions
              <ArrowRight className="inline h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={callPhone}
              className="group bg-white border-2 border-gray-300 text-gray-900 font-bold px-10 py-5 rounded-2xl text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              <Phone className="inline h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Call Now
              <ArrowRight className="inline h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button 
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-5 rounded-2xl text-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-0"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              <Calendar className="inline h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Book Appointment
              <ArrowRight className="inline h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationMap;
