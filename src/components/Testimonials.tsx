import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Quote, 
  User, 
  Calendar,
  Award,
  Heart,
  ThumbsUp,
  Sparkles,
  Crown,
  Shield,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Michael Chen',
      service: 'Signature Cut',
      rating: 5,
      review: 'Shoaib is absolutely incredible! Best haircut I\'ve ever had. The attention to detail and precision is unmatched. I\'ve been coming here for 2 years and every visit is perfect.',
      date: '2 weeks ago',
      verified: true
    },
    {
      id: '2',
      name: 'David Rodriguez',
      service: 'The Royal Package',
      rating: 5,
      review: 'The Royal Package is worth every penny! Complete transformation - haircut, shave, and beard styling. Shoaib made me feel like a king. Highly recommend!',
      date: '1 month ago',
      verified: true
    },
    {
      id: '3',
      name: 'James Thompson',
      service: 'Traditional Shave',
      rating: 5,
      review: 'The traditional shave experience is something every man should try. Hot towels, premium products, and Shoaib\'s expertise made it unforgettable.',
      date: '3 weeks ago',
      verified: true
    },
    {
      id: '4',
      name: 'Robert Kim',
      service: 'Beard Grooming',
      rating: 5,
      review: 'My beard has never looked better! Shoaib\'s beard grooming service is top-notch. Professional, clean, and the results speak for themselves.',
      date: '1 week ago',
      verified: true
    },
    {
      id: '5',
      name: 'Alex Johnson',
      service: 'Father & Son Package',
      rating: 5,
      review: 'Took my 12-year-old son for the Father & Son package. Shoaib made him feel comfortable and gave us both amazing cuts. Great bonding experience!',
      date: '2 weeks ago',
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Heart className="h-6 w-6" /> },
    { number: '4.9', label: 'Average Rating', icon: <Star className="h-6 w-6" /> },
    { number: '20+', label: 'Years Experience', icon: <Award className="h-6 w-6" /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <CheckCircle className="h-6 w-6" /> }
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className={`inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-600/20 backdrop-blur-xl border border-blue-500/30 shadow-2xl mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse glow" />
              <span className="text-blue-600 font-bold text-sm sm:text-lg tracking-widest uppercase">
                CLIENT TESTIMONIALS
              </span>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse glow" />
            </div>
            
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
              <span className="block tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                WHAT OUR CLIENTS
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text font-light mt-2 lg:mt-4 tracking-widest">
                SAY ABOUT US
              </span>
            </h2>
            
            <div className={`flex items-center gap-4 sm:gap-6 mt-6 lg:mt-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-blue-600 font-medium tracking-widest uppercase text-sm sm:text-lg">
                  REAL REVIEWS
                </span>
                <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1" />
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Carousel */}
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <Card className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Quote className="h-8 w-8 text-blue-500" />
                    <span className="text-2xl font-bold text-gray-900">Verified Review</span>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                </div>

                <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 text-center italic">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].service}</p>
                    </div>
                    {testimonials[currentTestimonial].verified && (
                      <Badge className="bg-green-500 text-white px-3 py-1 text-xs font-bold">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        VERIFIED
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].date}</p>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-200"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-200"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 lg:mt-16 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Crown className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-3xl sm:text-4xl font-black">JOIN 500+ SATISFIED CLIENTS</h3>
                  <Crown className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Experience the difference that 20+ years of mastery makes. 
                  Book your appointment with Shoaib Ghori today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Calendar className="inline h-5 w-5 mr-2" />
                    Book Appointment
                  </button>
                  <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Heart className="inline h-5 w-5 mr-2" />
                    Read More Reviews
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials; 