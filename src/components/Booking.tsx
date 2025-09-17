import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: "",
    notes: ""
  });

  const services = [
    "Signature Cut - $45",
    "Traditional Shave - $35",
    "The Royal Package - $80",
    "Beard Grooming - $25",
    "Father & Son - $70"
  ];

  const barbers = [
    "Any Available Barber",
    "Mike Thompson - Senior Barber",
    "Alex Rodriguez - Master Barber",
    "Jordan Kim - Style Specialist",
    "Sam Johnson - Traditional Expert"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", formData);
  };

  return (
    <section id="booking" className="py-24 bg-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            BOOK YOUR <span className="text-barber-gradient">APPOINTMENT</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed">
            Reserve your spot at The Freshman Barbershop. Experience premium barbering 
            in the heart of Mississauga with our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="shadow-powerful bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center text-barbershop-black mb-2">
                      <User className="h-4 w-4 mr-2 text-barber-red" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="border-barbershop-gray focus:border-barber-red"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center text-barbershop-black mb-2">
                      <Phone className="h-4 w-4 mr-2 text-barber-red" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(905) 123-4567"
                      className="border-barbershop-gray focus:border-barber-red"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center text-barbershop-black mb-2">
                    <Mail className="h-4 w-4 mr-2 text-barber-red" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="border-barbershop-gray focus:border-barber-red"
                  />
                </div>

                {/* Service Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="flex items-center text-barbershop-black mb-2">
                      <MessageSquare className="h-4 w-4 mr-2 text-barber-red" />
                      Service
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="border-barbershop-gray focus:border-barber-red">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="flex items-center text-barbershop-black mb-2">
                      <User className="h-4 w-4 mr-2 text-barber-red" />
                      Barber Preference
                    </Label>
                    <Select value={formData.barber} onValueChange={(value) => setFormData({...formData, barber: value})}>
                      <SelectTrigger className="border-barbershop-gray focus:border-barber-red">
                        <SelectValue placeholder="Choose your barber" />
                      </SelectTrigger>
                      <SelectContent>
                        {barbers.map((barber) => (
                          <SelectItem key={barber} value={barber}>
                            {barber}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="flex items-center text-barbershop-black mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-barber-red" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="border-barbershop-gray focus:border-barber-red"
                    />
                  </div>
                  <div>
                    <Label className="flex items-center text-barbershop-black mb-2">
                      <Clock className="h-4 w-4 mr-2 text-barber-red" />
                      Preferred Time
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                      <SelectTrigger className="border-barbershop-gray focus:border-barber-red">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <Label htmlFor="notes" className="flex items-center text-barbershop-black mb-2">
                    <MessageSquare className="h-4 w-4 mr-2 text-barber-red" />
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Any specific requests or preferences..."
                    className="border-barbershop-gray focus:border-barber-red"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="btn-hero w-full text-lg py-6">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Booking Info */}
          <div className="space-y-8">
            {/* Hours */}
            <Card className="bg-white shadow-powerful">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-barbershop-black mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-barber-red" />
                  Operating Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white shadow-powerful">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-barbershop-black mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-barber-red" />
                    <span>(905) 123-CUTS</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-barber-blue" />
                    <span>booking@thefreshmanbarbershop.com</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-barber-red mt-1" />
                    <div>
                      <p>167 Queen Street South</p>
                      <p>Unit 4, Mississauga</p>
                      <p>Ontario Canada L5M1L2</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card className="bg-gradient-barber text-white shadow-powerful">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Booking Policies</h3>
                <ul className="space-y-2 text-barbershop-gray-light">
                  <li>• 24-hour cancellation policy</li>
                  <li>• Please arrive 10 minutes early</li>
                  <li>• Walk-ins welcome (subject to availability)</li>
                  <li>• We accept cash and all major cards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;