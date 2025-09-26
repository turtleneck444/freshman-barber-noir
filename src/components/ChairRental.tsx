import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Armchair, DollarSign, Calendar, Users, Wifi, Coffee, Shield, Star } from "lucide-react";
import chairsImage from "@/assets/barber-chairs.jpg";

const ChairRental = () => {
  const chairFeatures = [
    {
      icon: Armchair,
      title: "Premium Equipment",
      description: "Professional-grade chairs and barbering tools"
    },
    {
      icon: Users,
      title: "Built-in Clientele",
      description: "Access to our established customer base"
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "High-speed WiFi, music system, and climate control"
    },
    {
      icon: Coffee,
      title: "Client Comfort",
      description: "Complimentary beverages and premium atmosphere"
    },
    {
      icon: Shield,
      title: "Full Insurance",
      description: "Complete liability coverage included"
    },
    {
      icon: Star,
      title: "Marketing Support",
      description: "Social media promotion and booking system"
    }
  ];

  const rentalPlans = [
    {
      name: "Weekly Rental",
      price: "$350",
      period: "per week",
      features: [
        "Premium barber chair",
        "All tools and equipment",
        "Client booking system",
        "Marketing support",
        "Flexible schedule"
      ],
      popular: false
    },
    {
      name: "Monthly Rental",
      price: "$1,200",
      period: "per month",
      features: [
        "Everything in Weekly",
        "Priority chair selection",
        "Extended hours access",
        "Product sales commission",
        "Personal branding space",
        "Advanced booking features"
      ],
      popular: true
    },
    {
      name: "Partnership",
      price: "50/50",
      period: "split",
      features: [
        "Zero upfront costs",
        "Revenue sharing model",
        "Full business support",
        "Marketing & promotion",
        "Mentorship program",
        "Growth opportunities"
      ],
      popular: false
    }
  ];

  return (
    <section id="chairs" className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            JOIN OUR <span className="text-shimmer">TEAM</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up-delay">
            Take your barbering career to the next level. Rent a chair at The FRESHMEN Barbershop 
            and join our community of elite professionals in Mississauga's premier location.
          </p>
        </div>

        {/* Chairs Showcase */}
        <div className="relative mb-16 animate-fade-in-scale">
          <img
            src={chairsImage}
            alt="Various modern barber chairs available for rental"
            className="w-full h-96 md:h-[32rem] object-cover rounded-3xl shadow-luxury hover-lift"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-barbershop-black/70 via-barbershop-black/20 to-transparent rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-barber-red/20 to-barber-blue/20 rounded-3xl" />
          
          {/* Floating Elements */}
          <div className="absolute top-8 right-8 bg-barbershop-white/90 backdrop-luxury text-barbershop-black px-6 py-3 rounded-full border border-barber-red/30 animate-float">
            <span className="text-sm font-bold">CHAIRS AVAILABLE</span>
          </div>
          
          <div className="absolute bottom-8 left-8 animate-slide-in-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 animate-shimmer">
              Premium Chair Selection Available
            </h3>
            <p className="text-barbershop-gray-light text-lg">
              Choose from our collection of professional barber chairs
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chairFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover-lift"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.8s ease-out both'
                }}
              >
                <div className="bg-gradient-barber p-8 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 group-hover:glow-barber transition-all duration-500 shadow-floating">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-barbershop-white mb-3 group-hover:text-barber-red transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-barbershop-gray-light group-hover:text-barbershop-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Rental Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rentalPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group transition-luxury hover-lift bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border-2 ${
                plan.popular 
                  ? 'border-barber-red shadow-luxury scale-105 glow-barber' 
                  : 'border-barber-red/30 hover:border-barber-red/60 hover:shadow-luxury hover-glow'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in-scale 0.8s ease-out both'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-barber text-white px-8 py-3 rounded-full text-sm font-bold shadow-floating animate-glow-pulse backdrop-luxury">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-barber-red/5 to-barber-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-bold text-barbershop-white mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-orbitron font-bold text-barber-red">
                    {plan.price}
                  </span>
                  <span className="text-barbershop-gray-light ml-2">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-barbershop-white">
                      <div className="w-2 h-2 bg-barber-red rounded-full mr-3 flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={plan.popular ? "btn-hero w-full" : "btn-outline-hero w-full"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl rounded-2xl p-12 shadow-powerful border border-barber-red/30">
            <h3 className="text-3xl font-bold text-barbershop-white mb-4">
              Ready to Join The FRESHMEN Team?
            </h3>
            <p className="text-barbershop-gray-light text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a tour, meet our team, and find the perfect chair for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Schedule Tour
              </Button>
              <Button className="btn-outline-hero">
                Call (905) 123-CUTS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairRental;
