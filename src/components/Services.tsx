import { Scissors, Zap, Sparkles, Crown, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import servicesImage from "@/assets/services-showcase.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Signature Cuts",
      price: "$45",
      description: "Precision cuts tailored to your style. Classic to contemporary, we've got you covered.",
      features: ["Consultation", "Wash & Style", "Hot Towel Finish"]
    },
    {
      icon: Zap,
      title: "Traditional Shave",
      price: "$35",
      description: "Experience the art of traditional barbering with our hot towel straight razor shave.",
      features: ["Hot Towel Prep", "Straight Razor", "Aftershave Treatment"]
    },
    {
      icon: Crown,
      title: "The Royal Package",
      price: "$80",
      description: "The ultimate barbershop experience. Cut, shave, styling, and premium treatment.",
      features: ["Premium Cut", "Traditional Shave", "Beard Styling", "Head Massage"]
    },
    {
      icon: Sparkles,
      title: "Beard Grooming",
      price: "$25",
      description: "Professional beard trimming and styling to keep you looking sharp and refined.",
      features: ["Trim & Shape", "Beard Oil", "Style Consultation"]
    },
    {
      icon: Users,
      title: "Father & Son",
      price: "$70",
      description: "Create memories together with our special father and son package.",
      features: ["2 Premium Cuts", "Father & Son Experience", "Special Memories"]
    },
    {
      icon: Star,
      title: "VIP Membership",
      price: "$199/mo",
      description: "Unlimited premium services with priority booking and exclusive perks.",
      features: ["Unlimited Services", "Priority Booking", "Exclusive Products", "Special Events"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-barbershop-white">
      <div className="container mx-auto px-4">
        {/* Ultra-Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative mb-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-barbershop-black mb-6 animate-fade-in-up tracking-tighter">
              PREMIUM <span className="text-shimmer animate-ultra-glow">SERVICES</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-luxury rounded-full animate-premium-float" />
          </div>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay font-light">
            Elevate your style with our comprehensive range of <span className="text-luxury font-medium">ultra-premium barbering services</span>. 
            Each service is crafted with precision and delivered with <span className="text-barber-gradient font-semibold">absolute excellence</span>.
          </p>
        </div>

        {/* Services Image */}
        <div className="relative mb-16 animate-fade-in-scale">
          <img
            src={servicesImage}
            alt="Premium barbering services and tools"
            className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-luxury hover-lift"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-barber-red/30 to-barber-blue/30 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-barbershop-black/50 via-transparent to-transparent rounded-3xl" />
          
          {/* Floating Badge */}
          <div className="absolute top-8 left-8 bg-barbershop-black/80 backdrop-luxury text-barbershop-white px-6 py-3 rounded-full border border-barber-red/30 animate-float">
            <span className="text-sm font-bold tracking-wider">PROFESSIONAL SERVICES</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
                <Card 
                key={index}
                className="group hover:shadow-ultra transition-luxury border-2 hover:border-barber-gold/70 bg-gradient-subtle hover-lift hover:animate-ultra-glow backdrop-ultra relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animation: 'fade-in-up 1s ease-out both'
                }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-barber-red/10 to-barber-blue/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  {/* Service Icon */}
                  <div className="bg-gradient-barber p-5 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:glow-barber transition-all duration-500 relative z-10">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  {/* Service Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-barbershop-black">
                      {service.title}
                    </h3>
                    <span className="text-2xl font-orbitron font-bold text-barber-red">
                      {service.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-barbershop-black">
                        <div className="w-2 h-2 bg-barber-red rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;