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
    <section id="chairs" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-black mb-6">
            JOIN OUR <span className="text-barber-gradient">TEAM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Take your barbering career to the next level. Rent a chair at The Freshman Barbershop 
            and join our community of elite professionals in Mississauga's premier location.
          </p>
        </div>

        {/* Chairs Showcase */}
        <div className="relative mb-16">
          <img
            src={chairsImage}
            alt="Various modern barber chairs available for rental"
            className="w-full h-96 object-cover rounded-2xl shadow-powerful"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-barbershop-black/60 to-transparent rounded-2xl" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-bold text-white mb-2">
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
              <div key={index} className="text-center group">
                <div className="bg-gradient-barber p-6 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-barbershop-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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
              className={`relative group transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-barber-red shadow-barber scale-105' 
                  : 'border-2 hover:border-barber-red/30 hover:shadow-barber'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-barber text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-barbershop-black mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-orbitron font-bold text-barber-red">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-barbershop-black">
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
          <div className="bg-barbershop-black rounded-2xl p-12 shadow-powerful">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join The Freshman Team?
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