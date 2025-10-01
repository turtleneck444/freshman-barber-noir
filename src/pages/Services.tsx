import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import { Features } from "@/components/blocks/features-9";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Scissors, 
  Crown, 
  Clock, 
  Star, 
  CheckCircle, 
  Award, 
  Shield,
  Sparkles,
  ArrowRight,
  Calendar,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Signature Cut",
      price: "$45",
      duration: "45 min",
      description: "Premium haircut with consultation, hot towel service, and detailed styling",
      features: ["Style Consultation", "Hot Towel Treatment", "Precision Cut", "Professional Styling"],
      icon: <Scissors className="h-8 w-8" />,
      gradient: "from-red-500 to-red-600",
      popular: true
    },
    {
      id: 2,
      name: "The Royal Package",
      price: "$85",
      duration: "90 min",
      description: "Complete grooming experience including haircut, beard trim, and traditional hot towel shave",
      features: ["Haircut", "Beard Sculpting", "Hot Towel Shave", "Facial Treatment", "Head Massage"],
      icon: <Crown className="h-8 w-8" />,
      gradient: "from-yellow-500 to-orange-500",
      popular: true
    },
    {
      id: 3,
      name: "Skin Fade",
      price: "$50",
      duration: "50 min",
      description: "Expert skin fade with precision blending and sharp line work",
      features: ["Skin Fade", "Line Up", "Hot Towel", "Styling"],
      icon: <Sparkles className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      id: 4,
      name: "Beard Grooming",
      price: "$35",
      duration: "30 min",
      description: "Professional beard trim, shaping, and conditioning treatment",
      features: ["Beard Trim", "Shape & Style", "Hot Towel", "Conditioning"],
      icon: <Award className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      id: 5,
      name: "Traditional Shave",
      price: "$40",
      duration: "40 min",
      description: "Classic hot towel shave with premium products and relaxing experience",
      features: ["Hot Towel Prep", "Straight Razor Shave", "Aftershave Treatment", "Face Massage"],
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      id: 6,
      name: "Kids Cut",
      price: "$30",
      duration: "30 min",
      description: "Patient and friendly haircut service for children under 12",
      features: ["Patient Service", "Kid-Friendly", "Style Consultation", "Quick Service"],
      icon: <Star className="h-8 w-8" />,
      gradient: "from-indigo-500 to-blue-500",
      popular: false
    }
  ];

  return (
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
                Our Services
              </span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              PREMIUM BARBERING
              <span className="block text-2xl sm:text-3xl md:text-4xl text-red-500 font-light mt-3 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                SERVICES & PACKAGES
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Experience professional barbering excellence with our curated selection of premium grooming services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-8 py-6 rounded-2xl text-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-2xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Calendar className="mr-3 h-5 w-5" />
                  Book Appointment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white/10 border-2 border-white/30 text-white font-bold px-8 py-6 rounded-2xl text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Phone className="mr-3 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-3 py-1">
                      POPULAR
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    {service.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-black text-red-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      {service.price}
                    </span>
                    <span className="flex items-center text-gray-500" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-xl hover:from-red-400 hover:to-red-500 transition-all duration-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      
      <Footer />
      <FloatingActionWidget />
    </div>
  );
};

export default Services;
