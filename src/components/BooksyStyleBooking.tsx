import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Scissors, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Star,
  Crown,
  Zap,
  Shield,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const BooksyStyleBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const services = [
    {
      id: 'haircut-sho',
      name: 'Haircut with Sho',
      price: 50,
      duration: '20 min',
      description: 'Detailed haircut custom tailored to the clients\' desire.',
      icon: <Scissors className="h-6 w-6" />,
      popular: true,
      features: ['Custom Tailored Cut', 'Expert Styling', 'Professional Consultation', 'Precision Detailing']
    },
    {
      id: 'haircut-beard-sho',
      name: 'Haircut and Beard with Sho',
      price: 75,
      duration: '30 min',
      description: 'Detailed haircut custom tailored to the clients\' desire with a sharp beard trimmed, outlined and bladed to perfection.',
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: ['Custom Haircut', 'Sharp Beard Trim', 'Precision Outline', 'Blade Detailing']
    },
    {
      id: 'haircut-bikram',
      name: 'Haircut with Bikram',
      price: 40,
      duration: '40 min',
      description: 'Haircut with Bikram.',
      icon: <Scissors className="h-6 w-6" />,
      popular: true,
      features: ['Professional Haircut', 'Style Consultation', 'Expert Technique', 'Quality Service']
    },
    {
      id: 'haircut-beard-bikram',
      name: 'Haircut and Beard with Bikram',
      price: 60,
      duration: '1 hour',
      description: 'Haircut and Beard with Bikram.',
      icon: <Star className="h-6 w-6" />,
      popular: false,
      features: ['Complete Haircut', 'Beard Grooming', 'Professional Service', 'Detailed Styling']
    }
  ];

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 12;
    const endHour = 20;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute of [0, 30]) {
        const time = new Date();
        time.setHours(hour, minute, 0);
        const timeString = time.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const selectedServiceData = services.find(s => s.id === selectedService);

  const handleNext = () => {
    if (currentStep === 1 && !selectedService) {
      alert('Please select a service');
      return;
    }
    if (currentStep === 2 && !selectedDate) {
      alert('Please select a date');
      return;
    }
    if (currentStep === 3 && !selectedTime) {
      alert('Please select a time');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Please fill in all required fields');
      return;
    }
    // Here you would submit to your booking system
    alert(`Booking confirmed!\n\nService: ${selectedServiceData?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nName: ${customerName}\nPhone: ${customerPhone}`);
  };

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()]
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {[
            { num: 1, label: 'Service' },
            { num: 2, label: 'Date' },
            { num: 3, label: 'Time' },
            { num: 4, label: 'Details' }
          ].map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  currentStep >= step.num 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {currentStep > step.num ? <Check className="h-6 w-6" /> : step.num}
                </div>
                <span className={`text-sm mt-2 font-medium ${
                  currentStep >= step.num ? 'text-red-600' : 'text-gray-500'
                }`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {step.label}
                </span>
              </div>
              {index < 3 && (
                <div className={`flex-1 h-1 mx-2 rounded transition-all ${
                  currentStep > step.num ? 'bg-red-600' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Card className="border-2 border-gray-100 shadow-xl">
        <CardContent className="p-6 sm:p-8">
          {/* Step 1: Select Service */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Select a Service
                </h2>
                <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Choose the service that best fits your needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedService === service.id
                        ? 'border-2 border-red-600 shadow-lg bg-red-50'
                        : 'border-2 border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          selectedService === service.id
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                {service.name}
                              </h3>
                              {service.popular && (
                                <Badge className="bg-red-100 text-red-700 text-xs">Most Popular</Badge>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                ${service.price}
                              </div>
                              <div className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                                {service.duration}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Choose a Date
                </h2>
                <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Select your preferred appointment date
                </p>
              </div>

              {selectedServiceData && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-600 rounded-lg text-white">
                      {selectedServiceData.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {selectedServiceData.name}
                      </div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        ${selectedServiceData.price} • {selectedServiceData.duration}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                {availableDates.map((date, index) => {
                  const formatted = formatDate(date);
                  const dateString = date.toISOString().split('T')[0];
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(dateString)}
                      className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                        selectedDate === dateString
                          ? 'border-red-600 bg-red-600 text-white shadow-lg'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="text-xs font-medium mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {formatted.day}
                      </div>
                      <div className="text-2xl font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {formatted.date}
                      </div>
                      <div className="text-xs" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        {formatted.month}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Select Time */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Pick a Time
                </h2>
                <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Select your preferred appointment time
                </p>
              </div>

              {selectedServiceData && selectedDate && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-600 rounded-lg text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {selectedServiceData.name} • {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        ${selectedServiceData.price} • {selectedServiceData.duration}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      selectedTime === time
                        ? 'border-red-600 bg-red-600 text-white shadow-lg'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <div className="font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      {time}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Customer Details */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Your Information
                </h2>
                <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Complete your booking details
                </p>
              </div>

              {selectedServiceData && selectedDate && selectedTime && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Booking Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Scissors className="h-5 w-5 text-red-600" />
                      <span className="text-gray-900 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {selectedServiceData.name}
                      </span>
                      <span className="text-red-600 font-bold ml-auto" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        ${selectedServiceData.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        {selectedTime} ({selectedServiceData.duration})
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <User className="h-4 w-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="John Doe"
                    className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                    required
                    style={{ fontFamily: 'Gotham Light, sans-serif' }}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Phone className="h-4 w-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(905) 123-4567"
                    className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                    required
                    style={{ fontFamily: 'Gotham Light, sans-serif' }}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Mail className="h-4 w-4" />
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                    style={{ fontFamily: 'Gotham Light, sans-serif' }}
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Sparkles className="h-4 w-4" />
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any special requests or preferences..."
                    className="border-2 border-gray-200 focus:border-red-500 rounded-xl text-lg"
                    rows={4}
                    style={{ fontFamily: 'Gotham Light, sans-serif' }}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl rounded-xl shadow-lg"
                  style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                >
                  <Check className="h-6 w-6 mr-3" />
                  Confirm Booking
                  <ArrowRight className="h-6 w-6 ml-3" />
                </Button>
              </form>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
            {currentStep > 1 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 h-12 border-2 border-gray-300 hover:border-gray-400 font-bold"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
            )}
            {currentStep < 4 && (
              <Button
                onClick={handleNext}
                className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white font-bold"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                Continue
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-500" />
          <span className="text-sm font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
            Secure Booking
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-red-500" />
          <span className="text-sm font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
            Best Rated Barber
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
            4.9/5 Rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default BooksyStyleBooking;
