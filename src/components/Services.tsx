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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-black mb-6">
            PREMIUM <span className="text-barber-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elevate your style with our comprehensive range of professional barbering services. 
            Each service is crafted with precision and delivered with excellence.
          </p>
        </div>

        {/* Services Image */}
        <div className="relative mb-16">
          <img
            src={servicesImage}
            alt="Premium barbering services and tools"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-powerful"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-barber-red/20 to-barber-blue/20 rounded-2xl" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-barber transition-all duration-300 border-2 hover:border-barber-red/30 bg-gradient-subtle"
              >
                <CardContent className="p-8">
                  {/* Service Icon */}
                  <div className="bg-gradient-barber p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
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