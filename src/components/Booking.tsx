import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Scissors, 
  Star, 
  Award, 
  Crown, 
  Shield, 
  Zap,
  Check,
  ArrowRight,
  ArrowLeft,
  CreditCard,
  MapPin,
  Timer,
  DollarSign,
  Sparkles,
  CheckCircle
} from 'lucide-react';

// Types for the booking system
interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  popular?: boolean;
}

interface BookingData {
  service: Service | null;
  date: string;
  time: string;
  clientInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes: string;
  };
}

const BookingSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    date: '',
    time: '',
    clientInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      notes: ''
    }
  });

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

  // Service data - STEP 2: ServiceSelection Component Data
  const services: Service[] = [
    {
      id: 'signature-cut',
      name: 'Signature Cut',
      price: 45,
      duration: 45,
      description: 'Premium haircut with consultation, wash, cut, and styling. Includes beard trim.',
      popular: true
    },
    {
      id: 'traditional-shave',
      name: 'Traditional Shave',
      price: 35,
      duration: 30,
      description: 'Classic hot towel shave with premium shaving cream and aftercare treatment.'
    },
    {
      id: 'royal-package',
      name: 'The Royal Package',
      price: 80,
      duration: 90,
      description: 'Complete grooming experience: cut, shave, beard styling, and premium treatments.',
      popular: true
    },
    {
      id: 'beard-grooming',
      name: 'Beard Grooming',
      price: 25,
      duration: 20,
      description: 'Professional beard trimming, shaping, and conditioning treatment.'
    },
    {
      id: 'father-son',
      name: 'Father & Son',
      price: 70,
      duration: 60,
      description: 'Special package for father and son - two signature cuts together.'
    }
  ];

  // Available time slots
  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  // Step navigation
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Service selection handler
  const selectService = (service: Service) => {
    setBookingData(prev => ({
      ...prev,
      service: service
    }));
    nextStep();
  };

  // Form submission handler
  const handleSubmit = () => {
    console.log('Booking submitted:', bookingData);
    // Here you would typically send to your backend
    alert('Booking confirmed! You will receive a confirmation email shortly.');
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
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
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3);
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
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} id="booking" className="min-h-screen py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className={`inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-600/20 backdrop-blur-xl border border-blue-500/30 shadow-2xl mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse glow" />
              <span className="text-blue-100 font-bold text-sm sm:text-lg tracking-widest uppercase">
                BOOK YOUR APPOINTMENT
              </span>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse glow" />
            </div>
            
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 lg:mb-8 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
              <span className="block tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                BOOK WITH
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text font-light mt-2 lg:mt-4 tracking-widest">
                SHOAIB GHORI
              </span>
            </h2>
            
            <div className={`flex items-center gap-4 sm:gap-6 mt-6 lg:mt-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-blue-300 font-medium tracking-widest uppercase text-sm sm:text-lg">
                  MASTER BARBER
                </span>
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1" />
            </div>
          </div>

          {/* Progress Indicator */}
          <div className={`flex justify-center mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-full p-2 border border-white/20">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-white/20 text-gray-400'
                  }`}>
                    {currentStep > step ? <Check className="h-5 w-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-8 h-1 mx-2 rounded-full transition-all duration-300 ${
                      currentStep > step ? 'bg-blue-500' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Steps */}
          <div className="max-w-4xl mx-auto px-1 sm:px-2">
            {/* STEP 1: Service Selection */}
            {currentStep === 1 && (
              <Card className={`bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center justify-center gap-3">
                    <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    Choose Your Service
                  </CardTitle>
                  <p className="text-gray-700 text-lg">Select the perfect service for your grooming needs</p>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => selectService(service)}
                        className="relative p-3 sm:p-4 md:p-6 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:scale-105 bg-white group overflow-hidden"
                      >
                        {service.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 sm:px-3 py-1 text-xs font-bold flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            <span className="hidden sm:inline">POPULAR</span>
                          </Badge>
                        )}
                        
                        <div className="flex justify-between items-start mb-3 gap-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-shrink-0 max-w-[60%]">
                            {service.name}
                          </h3>
                          <div className="text-right flex-shrink-0">
                            <div className="text-lg sm:text-xl md:text-2xl font-black text-blue-600 whitespace-nowrap">
                              ${service.price}
                            </div>
                            <div className="flex items-center justify-end text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                              <Timer className="h-3 w-3 mr-1" />
                              {service.duration}min
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 pr-1">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-gray-600 text-xs sm:text-sm">5.0</span>
                          </div>
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* STEP 2: Date & Time Selection */}
            {currentStep === 2 && bookingData.service && (
              <Card className={`bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center justify-center gap-3">
                    <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    Select Date & Time
                  </CardTitle>
                  <p className="text-gray-700 text-lg">
                    {bookingData.service.name} - ${bookingData.service.price} ({bookingData.service.duration} minutes)
                  </p>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Date Selection */}
                    <div>
                      <Label className="text-lg font-bold text-gray-900 mb-4 block">
                        Choose Date
                      </Label>
                      <Input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData(prev => ({
                          ...prev,
                          date: e.target.value
                        }))}
                        min={getMinDate()}
                        className="w-full h-14 text-lg border-2 border-gray-300 focus:border-blue-500 rounded-xl"
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <Label className="text-lg font-bold text-gray-900 mb-4 block">
                        Choose Time
                      </Label>
                      <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setBookingData(prev => ({
                              ...prev,
                              time: time
                            }))}
                            className={`p-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                              bookingData.time === time
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-900 hover:bg-blue-100 hover:text-blue-600'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center gap-2 px-6 py-3 text-lg"
                    >
                      <ArrowLeft className="h-5 w-5" />
                      Back to Services
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!bookingData.date || !bookingData.time}
                      className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      Continue
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* STEP 3: Client Information */}
            {currentStep === 3 && (
              <Card className={`bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center justify-center gap-3">
                    <User className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    Your Information
                  </CardTitle>
                  <p className="text-gray-700 text-lg">Please provide your contact details</p>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block flex items-center gap-2">
                        <User className="h-4 w-4 text-blue-600" />
                        First Name *
                      </Label>
                      <Input
                        value={bookingData.clientInfo.firstName}
                        onChange={(e) => setBookingData(prev => ({
                          ...prev,
                          clientInfo: {
                            ...prev.clientInfo,
                            firstName: e.target.value
                          }
                        }))}
                        placeholder="Enter your first name"
                        className="h-12 border-2 border-gray-300 focus:border-blue-500 rounded-xl text-lg"
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block flex items-center gap-2">
                        <User className="h-4 w-4 text-blue-600" />
                        Last Name *
                      </Label>
                      <Input
                        value={bookingData.clientInfo.lastName}
                        onChange={(e) => setBookingData(prev => ({
                          ...prev,
                          clientInfo: {
                            ...prev.clientInfo,
                            lastName: e.target.value
                          }
                        }))}
                        placeholder="Enter your last name"
                        className="h-12 border-2 border-gray-300 focus:border-blue-500 rounded-xl text-lg"
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block flex items-center gap-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        value={bookingData.clientInfo.email}
                        onChange={(e) => setBookingData(prev => ({
                          ...prev,
                          clientInfo: {
                            ...prev.clientInfo,
                            email: e.target.value
                          }
                        }))}
                        placeholder="your@email.com"
                        className="h-12 border-2 border-gray-300 focus:border-blue-500 rounded-xl text-lg"
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-bold text-gray-900 mb-2 block flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        Phone Number *
                      </Label>
                      <Input
                        type="tel"
                        value={bookingData.clientInfo.phone}
                        onChange={(e) => setBookingData(prev => ({
                          ...prev,
                          clientInfo: {
                            ...prev.clientInfo,
                            phone: e.target.value
                          }
                        }))}
                        placeholder="(905) 483-7374"
                        className="h-12 border-2 border-gray-300 focus:border-blue-500 rounded-xl text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label className="text-sm font-bold text-gray-900 mb-2 block">
                      Special Requests (Optional)
                    </Label>
                    <Textarea
                      value={bookingData.clientInfo.notes}
                      onChange={(e) => setBookingData(prev => ({
                        ...prev,
                        clientInfo: {
                          ...prev.clientInfo,
                          notes: e.target.value
                        }
                      }))}
                      placeholder="Any specific styling preferences or requests..."
                      className="border-2 border-gray-300 focus:border-blue-500 rounded-xl text-lg min-h-[100px]"
                      rows={4}
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center gap-2 px-6 py-3 text-lg"
                    >
                      <ArrowLeft className="h-5 w-5" />
                      Back to Date & Time
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!bookingData.clientInfo.firstName || !bookingData.clientInfo.lastName || !bookingData.clientInfo.email || !bookingData.clientInfo.phone}
                      className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      Review Booking
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* STEP 4: Confirmation */}
            {currentStep === 4 && bookingData.service && (
              <Card className={`bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center justify-center gap-3">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    Confirm Your Booking
                  </CardTitle>
                  <p className="text-gray-700 text-lg">Please review your appointment details</p>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Service Details */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Scissors className="h-5 w-5 text-blue-600" />
                          Service Details
                        </h4>
                        <div className="space-y-2">
                          <p><span className="font-semibold">Service:</span> {bookingData.service.name}</p>
                          <p><span className="font-semibold">Duration:</span> {bookingData.service.duration} minutes</p>
                          <p><span className="font-semibold">Price:</span> ${bookingData.service.price}</p>
                        </div>
                      </div>

                      {/* Appointment Details */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          Appointment Details
                        </h4>
                        <div className="space-y-2">
                          <p><span className="font-semibold">Date:</span> {new Date(bookingData.date).toLocaleDateString()}</p>
                          <p><span className="font-semibold">Time:</span> {bookingData.time}</p>
                          <p><span className="font-semibold">Barber:</span> Shoaib Ghori</p>
                        </div>
                      </div>
                    </div>

                    {/* Client Information */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-600" />
                        Client Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p><span className="font-semibold">Name:</span> {bookingData.clientInfo.firstName} {bookingData.clientInfo.lastName}</p>
                        <p><span className="font-semibold">Email:</span> {bookingData.clientInfo.email}</p>
                        <p><span className="font-semibold">Phone:</span> {bookingData.clientInfo.phone}</p>
                        {bookingData.clientInfo.notes && (
                          <p className="md:col-span-2"><span className="font-semibold">Notes:</span> {bookingData.clientInfo.notes}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total Amount:</span>
                      <span className="text-3xl font-black text-blue-600">${bookingData.service.price}</span>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center gap-2 px-6 py-3 text-lg"
                    >
                      <ArrowLeft className="h-5 w-5" />
                      Back to Information
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-8 py-4 text-lg bg-green-600 hover:bg-green-700 shadow-lg glow"
                    >
                      <CheckCircle className="h-6 w-6" />
                      Confirm Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Barber Info Card */}
          <div className={`mt-12 lg:mt-16 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl mx-auto mb-4 shadow-2xl">
                    SG
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Shoaib Ghori</h3>
                  <p className="text-blue-400 text-lg font-semibold mb-4">Master Barber & Style Architect</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-white font-semibold ml-2">5.0 (500+ Reviews)</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    With over 20+ years of mastery in the art of barbering, Shoaib Ghori delivers 
                    precision cuts and grooming experiences that define professional excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSystem;