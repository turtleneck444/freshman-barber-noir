import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import SEO from "@/components/SEO";
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
      id: 'haircut-sho',
      name: 'Haircut with Sho',
      price: 50,
      duration: '20 min',
      description: 'Detailed haircut custom tailored to the clients\' desire.',
      icon: <Scissors className="h-6 w-6" />,
      popular: true,
      features: ['Custom Tailored Cut', 'Expert Styling', 'Professional Consultation', 'Precision Detailing'],
      gradient: 'from-red-600 to-red-700'
    },
    {
      id: 'haircut-beard-sho',
      name: 'Haircut and Beard with Sho',
      price: 75,
      duration: '30 min',
      description: 'Detailed haircut custom tailored to the clients\' desire with a sharp beard trimmed, outlined and bladed to perfection.',
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: ['Custom Haircut', 'Sharp Beard Trim', 'Precision Outline', 'Blade Detailing'],
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      id: 'haircut-bikram',
      name: 'Haircut with Bikram',
      price: 40,
      duration: '40 min',
      description: 'Haircut with Bikram.',
      icon: <Scissors className="h-6 w-6" />,
      popular: true,
      features: ['Professional Haircut', 'Style Consultation', 'Expert Technique', 'Quality Service'],
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 'haircut-beard-bikram',
      name: 'Haircut and Beard with Bikram',
      price: 60,
      duration: '1 hour',
      description: 'Haircut and Beard with Bikram.',
      icon: <Star className="h-6 w-6" />,
      popular: false,
      features: ['Complete Haircut', 'Beard Grooming', 'Professional Service', 'Detailed Styling'],
      gradient: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <>
      <SEO 
        title="Services & Pricing - The FRESHMEN Barbershop | Professional Haircuts $40-$75 | Mississauga Barbers"
        description="Premium barbering services in Mississauga: Haircut with Sho ($50, 20min), Haircut & Beard with Sho ($75, 30min), Haircut with Bikram ($40, 40min), Full Grooming Packages. Expert barbers, walk-ins welcome. Book online or call (905) 483-7374!"
        canonical="https://thefreshmenbarbershop.com/services"
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
                      ${service.price}
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

      {/* Staff Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-6">
              <Star className="h-4 w-4 text-red-400" />
              <span className="text-red-100 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Our Expert Staff
              </span>
              <Star className="h-4 w-4 text-red-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              Meet Your Barbers
            </h2>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Experienced professionals dedicated to your perfect look
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sho */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>S</span>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Sho
                </h3>
                <p className="text-red-400 font-bold mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Master Barber
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Experienced barber with great skill, artistry and ability to cut any hairstyle and different textures of hair.
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Link to="/booking">
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-3 rounded-xl hover:from-red-400 hover:to-red-500 transition-all duration-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Book with Sho
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bikram */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>B</span>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Bikram
                </h3>
                <p className="text-blue-400 font-bold mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Professional Barber
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Skilled professional barber providing quality haircuts and grooming services with attention to detail.
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Link to="/booking">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Book with Bikram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health & Safety Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-green-100 border border-green-300 shadow-lg mb-6">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-green-800 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Your Safety First
              </span>
              <Shield className="h-4 w-4 text-green-600" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              Health & Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              We maintain the highest standards of hygiene and safety for our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Disinfection of All Surfaces
                </h3>
                <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  All surfaces, tools, and equipment are thoroughly disinfected before and after each client to ensure a clean and safe environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Disinfection Between Clients
                </h3>
                <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  We maintain strict hygiene protocols with complete disinfection between every client visit for your peace of mind and safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      
      <Footer />
      <FloatingActionWidget />
    </div>
    </>
  );
};

export default Services;
