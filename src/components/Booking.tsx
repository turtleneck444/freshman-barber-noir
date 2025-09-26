import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Scissors, Star, Award, Crown, Shield, Zap } from "lucide-react";

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
    "Shoaib Ghori - Master Barber (20+ Years Experience)",
    "Shoaib Ghori - Signature Cut Specialist",
    "Shoaib Ghori - Traditional Shave Expert",
    "Shoaib Ghori - Premium Grooming Specialist"
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
    <section id="booking" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-black/95" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Master Barber Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Crown className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-semibold text-sm tracking-wide font-inter">
              MASTER BARBER
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-playfair">
            <span className="block">Shoaib Ghori</span>
            <span className="block text-blue-400 text-2xl md:text-3xl font-light mt-2">The James Bond of Haircutting</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
            With over 20+ years of mastery in the art of barbering, Shoaib Ghori delivers 
            precision cuts and grooming experiences that define professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Master Barber Profile */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-6 shadow-2xl">
                  SG
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-playfair">Shoaib Ghori</h3>
                <p className="text-blue-400 text-lg font-semibold mb-4 font-inter">Master Barber & Style Architect</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-white font-semibold ml-2">5.0 (500+ Reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-playfair">
                    <Award className="h-6 w-6 text-yellow-400" />
                    Expertise
                  </h4>
                  <ul className="space-y-3 text-gray-300 font-inter">
                    <li className="flex items-center gap-3">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span>20+ Years Professional Experience</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Scissors className="h-4 w-4 text-blue-400" />
                      <span>All Hair Types & Textures</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Crown className="h-4 w-4 text-purple-400" />
                      <span>Premium Grooming Specialist</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span>Precision & Attention to Detail</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                  <h4 className="text-lg font-bold text-white mb-3 font-playfair">Signature Style</h4>
                  <p className="text-gray-300 leading-relaxed font-inter">
                    "Every cut is a masterpiece, every client a VIP. I don't just cut hair, 
                    I craft confidence and style that lasts beyond the chair."
                  </p>
                  <p className="text-blue-400 text-sm mt-3 font-semibold font-inter">- Shoaib Ghori</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Book with Shoaib</h3>
                <p className="text-gray-300 font-inter">Secure your appointment with Mississauga's premier barber</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white font-semibold mb-2 block font-inter">Full Name *</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-white font-semibold mb-2 block font-inter">Phone Number *</Label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="(905) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white font-semibold mb-2 block font-inter">Email Address</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <Label className="text-white font-semibold mb-2 block font-inter">Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="text-white hover:bg-blue-600">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Barber Selection - Now featuring Shoaib */}
                <div>
                  <Label className="text-white font-semibold mb-2 block font-inter">Barber Selection</Label>
                  <Select value={formData.barber} onValueChange={(value) => setFormData({...formData, barber: value})}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Choose your barber" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {barbers.map((barber) => (
                        <SelectItem key={barber} value={barber} className="text-white hover:bg-blue-600">
                          {barber}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white font-semibold mb-2 block font-inter">Date *</Label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-white font-semibold mb-2 block font-inter">Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="text-white hover:bg-blue-600">
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <Label className="text-white font-semibold mb-2 block font-inter">Special Requests</Label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Any specific styling preferences or requests for Shoaib..."
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 font-inter"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Book with Shoaib Ghori
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;