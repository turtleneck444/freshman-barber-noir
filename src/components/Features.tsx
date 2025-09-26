import { Scissors, Clock, Star, Award, Users, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Scissors,
      title: "Expert Barbers",
      description: "Master craftsmen with years of experience in traditional and modern barbering techniques.",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 7 days a week with extended hours to fit your busy schedule.",
      color: "text-blue-500"
    },
    {
      icon: Star,
      title: "Premium Services",
      description: "Luxury treatments including hot towel shaves, beard styling, and premium products.",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as Mississauga's premier barbershop with multiple industry awards.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building relationships and serving our community with pride and excellence.",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Sanitized & Safe",
      description: "Highest standards of cleanliness and safety protocols for your peace of mind.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-red-500">The Freshman</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the perfect blend of traditional craftsmanship and modern innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-red-500/20 group-hover:to-red-600/20 transition-all duration-500`}>
                    <IconComponent className={`h-8 w-8 ${feature.color} group-hover:text-red-400 transition-colors duration-500`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-600/20 to-blue-600/20 px-8 py-4 rounded-full border border-red-500/30">
            <Star className="h-6 w-6 text-red-400 animate-pulse" />
            <span className="text-white font-semibold">
              Join thousands of satisfied customers
            </span>
            <Star className="h-6 w-6 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
