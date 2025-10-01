'use client'
import { Scissors, Clock, Star, Users, Award, Shield, Calendar, Phone, MapPin, CheckCircle, User, Mail, CreditCard, Clock3, ScissorsIcon, Sparkles, Crown, Zap, ArrowRight, Sparkle, Diamond } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export function Features() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header - Ultra Luxurious 007 Style */}
        <div className="mb-16">
          {/* Ultra Premium Headlines */}
          <div className="space-y-4 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <span className="block tracking-tight">PREMIUM GROOMING</span>
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-2 tracking-wide" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                AT THE FRESHMEN STYLE BARBERSHOP
              </span>
            </h2>
            
            {/* Subtitle with 007 styling */}
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
              <span className="text-lg text-gray-500 font-medium tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                EXCLUSIVE BARBERING EXCELLENCE
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
            </div>
          </div>
          
          {/* Ultra Premium Description */}
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light mb-6" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Step into the <span className="font-bold text-gray-900">most exclusive</span> barbershop in Mississauga, where 
              <span className="font-bold text-gray-900"> traditional craftsmanship</span> meets 
              <span className="font-bold text-gray-900"> cutting-edge precision</span>.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Experience the perfect fusion of <span className="font-semibold text-gray-800">classic barbering mastery</span> and 
              <span className="font-semibold text-gray-800"> contemporary luxury</span>—where every cut is a 
              <span className="font-bold text-gray-900"> masterpiece</span> and every client receives 
              <span className="font-bold text-gray-900"> VIP treatment</span>.
            </p>
          </div>
          
          {/* Premium Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>20+</div>
              <div className="text-sm text-gray-600 font-medium tracking-widest uppercase">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>500+</div>
              <div className="text-sm text-gray-600 font-medium tracking-widest uppercase">VIP Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>100%</div>
              <div className="text-sm text-gray-600 font-medium tracking-widest uppercase">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Advanced Booking Widget */}
        <AdvancedBookingWidget />
      </div>
    </section>
  );
};

const AdvancedBookingWidget = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    {
      id: "signature-cut",
      name: "Signature Cut",
      price: "$45",
      duration: "45 min",
      description: "Precision cuts tailored to your style",
      features: ["Professional Consultation", "Premium Wash", "Hot Towel Finish", "Style Tips"],
      popular: true,
      icon: <Scissors className="h-6 w-6" />,
      color: "from-red-500 to-red-700"
    },
    {
      id: "royal-package",
      name: "Royal Package",
      price: "$85",
      duration: "90 min",
      description: "Complete premium grooming experience",
      features: ["Signature Cut", "Traditional Shave", "Beard Styling", "Head Massage"],
      popular: false,
      icon: <Crown className="h-6 w-6" />,
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: "executive-experience",
      name: "Executive Experience",
      price: "$120",
      duration: "120 min",
      description: "Ultimate luxury grooming experience with premium amenities",
      features: ["All Services Included", "Premium Products", "Champagne Service", "Personal Consultation"],
      popular: false,
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: "traditional-shave",
      name: "Traditional Shave",
      price: "$35",
      duration: "30 min",
      description: "Classic straight razor shave experience",
      features: ["Hot Towel Prep", "Straight Razor Shave", "Aftershave Treatment", "Skin Care Tips"],
      popular: false,
      icon: <Zap className="h-6 w-6" />,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: "beard-styling",
      name: "Beard Styling",
      price: "$30",
      duration: "25 min",
      description: "Expert beard trimming and shaping",
      features: ["Beard Consultation", "Precision Trimming", "Beard Oil Treatment", "Styling Tips"],
      popular: false,
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-green-500 to-green-700"
    },
    {
      id: "hair-wash",
      name: "Premium Hair Wash",
      price: "$20",
      duration: "15 min",
      description: "Luxurious hair washing and conditioning",
      features: ["Premium Shampoo", "Deep Conditioning", "Scalp Massage", "Blow Dry"],
      popular: false,
      icon: <Shield className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !customerName || !customerPhone) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Here you would typically send the booking data to your backend
    alert(`Booking confirmed! ${selectedServiceData?.name} on ${selectedDate} at ${selectedTime} for ${customerName}`);
  };

  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <div className="relative">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-3xl"></div>
        
        {/* Main Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Enhanced Header */}
          <div className="relative bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 px-8 py-8 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 shimmer-effect opacity-20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse-slow"></div>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Book Your Premium Experience
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <Diamond className="h-5 w-5 text-red-400" />
                  <span className="text-red-300 text-sm font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    EXCLUSIVE
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-4" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                Reserve your appointment with <span className="text-red-400 font-bold">Shoaib Ghori</span> - Master Barber
              </p>
              
              {/* Progress Steps */}
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  currentStep >= 1 ? 'bg-red-500 text-white' : 'bg-white/20 text-gray-300'
                }`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                  Select Service
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  currentStep >= 2 ? 'bg-red-500 text-white' : 'bg-white/20 text-gray-300'
                }`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                  Book Appointment
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Enhanced Service Selection */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Scissors className="h-5 w-5 text-red-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Select Your Service
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service, index) => (
                    <Card 
                      key={service.id} 
                      className={`border-2 cursor-pointer transition-all duration-500 group hover:shadow-xl animate-slide-in-up ${
                        selectedService === service.id 
                          ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl transition-all duration-300 ${
                            selectedService === service.id 
                              ? `bg-gradient-to-r ${service.color} text-white shadow-lg` 
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:shadow-lg'
                          }`}>
                            {service.icon}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h5 className={`text-xl font-bold mb-1 ${
                                  selectedService === service.id 
                                    ? 'text-red-600' 
                                    : 'text-gray-900 group-hover:text-red-600'
                                }`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                  {service.name}
                                </h5>
                                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                                  {service.description}
                                </p>
                              </div>
                              
                              <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                  {service.price}
                                </div>
                                <div className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                                  {service.duration}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                  {feature}
                                </Badge>
                              ))}
                              {service.features.length > 3 && (
                                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                  +{service.features.length - 3} more
                                </Badge>
                              )}
                            </div>
                            
                            {service.popular && (
                              <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-bold text-yellow-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                  Most Popular Choice
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Enhanced Booking Form */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Book Your Appointment
                  </h4>
                </div>
                
                {selectedServiceData && (
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6 mb-6 animate-slide-in-up">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedServiceData.color} text-white shadow-lg`}>
                        {selectedServiceData.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-red-800 text-lg mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {selectedServiceData.name} - {selectedServiceData.price}
                        </h5>
                        <p className="text-sm text-red-600 mb-2" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          {selectedServiceData.duration} • {selectedServiceData.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-600" />
                          <span className="text-sm text-red-700 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                            Service Selected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-sm font-bold text-gray-700 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                        required
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-sm font-bold text-gray-700 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Clock className="h-4 w-4 inline mr-2" />
                        Time *
                      </Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime} required>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time} className="text-lg">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                      required
                      style={{ fontFamily: 'Gotham Light, sans-serif' }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-bold text-gray-700 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Phone className="h-4 w-4 inline mr-2" />
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(905) 483-7374"
                        className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                        required
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Mail className="h-4 w-4 inline mr-2" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requests" className="text-sm font-bold text-gray-700 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      <Sparkle className="h-4 w-4 inline mr-2" />
                      Special Requests
                    </Label>
                    <Textarea
                      id="requests"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Any specific styling preferences or special requests..."
                      className="border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg min-h-[100px]"
                      rows={4}
                      style={{ fontFamily: 'Gotham Light, sans-serif' }}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 px-8 rounded-xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25" 
                    style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                    disabled={!selectedService}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Calendar className="h-6 w-6" />
                      {selectedService ? `Book ${selectedServiceData?.name}` : 'Select a Service First'}
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

