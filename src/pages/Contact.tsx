import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import SEO from "@/components/SEO";
import LocationMap from "@/components/LocationMap";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us - The FRESHMEN Barbershop | Book Appointment | (905) 483-7374"
        description="Contact The FRESHMEN Barbershop in Mississauga. Visit us at 167 Queen St S, Unit 4 or call (905) 483-7374. Open 7 days a week. Walk-ins welcome! Email: freshmen.style16@gmail.com"
        canonical="https://thefreshmenbarbershop.com/contact"
      />
      <div className="min-h-screen">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-8">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-100 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Contact Us
              </span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              GET IN TOUCH
              <span className="block text-2xl sm:text-3xl md:text-4xl text-red-500 font-light mt-3 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                WE'RE HERE TO HELP
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Have a question? Want to book an appointment? We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border border-gray-200 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-bold mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-red-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-bold mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-red-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-bold mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(905) 483-7374"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-red-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-bold mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-red-500 transition-all resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 rounded-xl text-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Phone className="h-6 w-6 mr-3 text-red-500" />
                    Call Us
                  </h3>
                  <p className="text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    (905) 483-7374
                  </p>
                  <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                    Available during business hours
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Mail className="h-6 w-6 mr-3 text-red-500" />
                    Email Us
                  </h3>
                  <p className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    freshmen.style16@gmail.com
                  </p>
                  <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <MapPin className="h-6 w-6 mr-3 text-red-500" />
                    Visit Us
                  </h3>
                  <p className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    167 Queen St S, Unit 4
                  </p>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                    Mississauga, ON L5M 1L2
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-black text-white mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Twitter className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />
      
      <Footer />
      <FloatingActionWidget />
    </div>
    </>
  );
};

export default Contact;
