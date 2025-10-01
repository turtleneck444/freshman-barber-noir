import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  ArrowLeft,
  MapPin,
  Clock,
  Scissors,
  Camera,
  MessageCircle,
  TrendingUp,
  Users,
  Zap,
  Filter,
  Grid3X3,
  Play,
  Pause,
  Volume2,
  Share2,
  Bookmark,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Target
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  location?: string;
  avatar?: string;
  helpful?: number;
  photos?: string[];
  response?: {
    owner: string;
    message: string;
    date: string;
  };
  gradient?: string;
  glow?: string;
  profilePhoto?: string;
  initials?: string;
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  // REAL Google Reviews from The FRESHMEN Barbershop
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Mohammad A.',
      service: 'Precision Haircut',
      rating: 5,
      review: 'Moe is a true professional! He pays close attention to detail, listens to what you want, and delivers a perfect cut every time. Friendly, skilled, and passionate about his work — highly recommended!',
      date: '1 month ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 5,
      gradient: 'from-red-500 to-red-600',
      initials: 'MA'
    },
    {
      id: '2',
      name: 'A J',
      service: 'Premium Cut with Moe',
      rating: 5,
      review: 'If your haircut isn\'t outstanding and perfect why waste your money? That\'s why I come here and get cut exclusively by Moe. He takes his time, is a perfectionist, and doesn\'t let you leave until he\'s proud of his work. Ask for Moe when you book!',
      date: '1 month ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 8,
      gradient: 'from-gray-600 to-gray-700',
      initials: 'AJ'
    },
    {
      id: '3',
      name: 'Clarence G.',
      service: 'Signature Cut',
      rating: 5,
      review: 'I started going to Freshmen Barbers in Streetsville last summer (2023). I have never had an issue, always satisfied. My cuts have always been what I have asked for. Mike and Sho are great barbers and they are great with their customers.',
      date: '1 year ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 12,
      gradient: 'from-red-500 to-red-600',
      initials: 'CG',
      response: {
        owner: 'The FRESHMEN Barbershop',
        message: 'Thank you Clarence! We appreciate your continued loyalty and support.',
        date: '1 year ago'
      }
    },
    {
      id: '4',
      name: 'Amit S.',
      service: 'Custom Fade + Shape Up',
      rating: 5,
      review: 'I had the pleasure of getting my hair cut by the one and only Shoaib Ghori - the owner of Freshman Barbershop- from simple fades to complex designs, this guy can do it all. He hooked me up with a custom designed fade and a clean shape up that exceeded my expectations!',
      date: '2 years ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 15,
      gradient: 'from-gray-600 to-gray-700',
      initials: 'AS'
    },
    {
      id: '5',
      name: 'Devine N.',
      service: 'Haircut with Binni',
      rating: 5,
      review: 'Got my haircut from Binni, and I\'m really happy with it! He\'s still a junior barber, but his skills are way beyond that. Professional, detailed, and knows what he\'s doing. Great experience overall.',
      date: '6 months ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 7,
      gradient: 'from-red-500 to-red-600',
      initials: 'DN'
    },
    {
      id: '6',
      name: 'Jorge E.',
      service: 'Haircut with Sho',
      rating: 5,
      review: 'Great experience. Came for the first time last night, and the service was awesome. Sho is very friendly and got me an awesome hair cut. I live far from his shop, but will come again, worth the driving. Gracias bud!',
      date: '1 year ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 6,
      gradient: 'from-gray-600 to-gray-700',
      initials: 'JE'
    },
    {
      id: '7',
      name: 'Sarvesh D.',
      service: 'Consultation + Cut',
      rating: 5,
      review: 'This shop is the best in the ville! Sho is such a genuine guy, he told me what would suit me and what won\'t. Professional service and excellent results every time!',
      date: '1 year ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 9,
      gradient: 'from-red-500 to-red-600',
      initials: 'SD'
    },
    {
      id: '8',
      name: 'Lisa N.',
      service: 'Kids Haircut',
      rating: 5,
      review: 'The two men who cut my boys hair (age 3 and 5) were super kind and patient with the kids. I would take them back again. Kids were happy because they got a lollipop and I was happy because they got nice hair cuts (with a proper fade).',
      date: '6 years ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 4,
      gradient: 'from-gray-600 to-gray-700',
      initials: 'LN',
      response: {
        owner: 'The FRESHMEN Barbershop',
        message: 'We are pleased that you had a pleasant and enjoyable experience at our shop and appreciate the compliments and feedback.',
        date: '6 years ago'
      }
    },
    {
      id: '9',
      name: 'Bruh T.',
      service: 'Family Cut (Father & Sons)',
      rating: 5,
      review: 'Sho is amazing! Takes care of me and my 2 boys. He pays attention to detail and knows how to relate to kids. He is also very punctual and professional, does a great job and does it fast! If you\'re looking for a barber in Mississauga, go with Sho you won\'t regret it!',
      date: '2 years ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 11,
      gradient: 'from-red-500 to-red-600',
      initials: 'BT'
    },
    {
      id: '10',
      name: 'John L.',
      service: 'Regular Cut',
      rating: 5,
      review: 'I\'m a regular bi-weekly client of Freshmen Barbershop, for a REASON!!! Reliable and Quality is how I would describe Freshmen Barbershop. Stay up and stay freshman!',
      date: '8 years ago',
      verified: true,
      location: 'Mississauga, ON',
      helpful: 13,
      gradient: 'from-gray-600 to-gray-700',
      initials: 'JL',
      response: {
        owner: 'The FRESHMEN Barbershop',
        message: 'You\'re always welcome John! Never a dull moment when you are around.',
        date: '8 years ago'
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Heart className="h-4 w-4" />, gradient: 'from-red-500 to-red-600' },
    { number: '4.9', label: 'Google Rating', icon: <Star className="h-4 w-4" />, gradient: 'from-yellow-500 to-orange-500' },
    { number: '20+', label: 'Years Experience', icon: <Award className="h-4 w-4" />, gradient: 'from-gray-600 to-gray-700' },
    { number: '100%', label: 'Satisfaction Rate', icon: <CheckCircle className="h-4 w-4" />, gradient: 'from-green-500 to-emerald-500' }
  ];

  const categories = [
    { id: 'all', name: 'All Reviews', count: testimonials.length, icon: Grid3X3 },
    { id: 'cut', name: 'Haircuts', count: testimonials.filter(t => t.service.toLowerCase().includes('cut') || t.service.toLowerCase().includes('fade')).length, icon: Target },
    { id: 'kids', name: 'Kids & Family', count: testimonials.filter(t => t.service.toLowerCase().includes('kids') || t.service.toLowerCase().includes('family')).length, icon: Users },
    { id: 'premium', name: 'Premium Services', count: testimonials.filter(t => t.service.toLowerCase().includes('custom') || t.service.toLowerCase().includes('premium')).length, icon: Crown }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => {
        if (selectedCategory === 'cut') return testimonial.service.toLowerCase().includes('cut') || testimonial.service.toLowerCase().includes('fade');
        if (selectedCategory === 'kids') return testimonial.service.toLowerCase().includes('kids') || testimonial.service.toLowerCase().includes('family');
        if (selectedCategory === 'premium') return testimonial.service.toLowerCase().includes('custom') || testimonial.service.toLowerCase().includes('premium');
        return true;
      });

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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
        }
        
        .review-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .review-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <section ref={sectionRef} id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/5 via-transparent to-gray-500/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-gray-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-500/10 to-red-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Professional Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-100 font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Google Reviews
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <span className="block tracking-tight">WHAT OUR CLIENTS</span>
              <span className="block text-2xl md:text-3xl text-red-500 font-light mt-2 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                SAY ABOUT US
              </span>
            </h2>
            
            <div className={`flex items-center gap-4 sm:gap-6 mt-6 lg:mt-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                <span className="text-gray-300 font-medium tracking-widest uppercase text-sm sm:text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  VERIFIED REVIEWS
                </span>
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
            </div>
          </div>

          {/* Professional Stats */}
          <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 card-hover ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-2xl'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
                  style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                  <span className="px-2 py-1 rounded-full bg-white/20 text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Professional Testimonials Carousel */}
          <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                {/* Professional Google-style Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Star className="h-6 w-6 text-white fill-current" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Google Reviews</h3>
                      <div className="flex items-center gap-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>4.9 • 500+ reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span style={{ fontFamily: 'Gotham Light, sans-serif' }}>Mississauga, ON</span>
                    </div>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="h-5 w-5 text-gray-600" /> : <Play className="h-5 w-5 text-gray-600" />}
                    </button>
                  </div>
                </div>

                {/* Current Testimonial with Professional Design */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${filteredTestimonials[currentTestimonial]?.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl relative overflow-hidden`}>
                        <span className="relative z-10">{filteredTestimonials[currentTestimonial]?.initials}</span>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                          <CheckCircle className="h-3 w-3 text-white fill-current" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{filteredTestimonials[currentTestimonial]?.name}</h4>
                        <div className="flex items-center gap-3">
                          <div className="flex">
                            {[...Array(filteredTestimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-gray-500" style={{ fontFamily: 'Gotham Light, sans-serif' }}>{filteredTestimonials[currentTestimonial]?.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {filteredTestimonials[currentTestimonial]?.verified && (
                        <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-bold border border-green-200">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          VERIFIED
                        </Badge>
                      )}
                      <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                        <MoreHorizontal className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Badge className={`bg-gradient-to-r ${filteredTestimonials[currentTestimonial]?.gradient} text-white px-4 py-2 text-sm font-semibold mb-4 shadow-lg`}>
                      <Scissors className="h-4 w-4 mr-2" />
                      {filteredTestimonials[currentTestimonial]?.service}
                    </Badge>
                    <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      {filteredTestimonials[currentTestimonial]?.review}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {filteredTestimonials[currentTestimonial]?.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        {filteredTestimonials[currentTestimonial]?.helpful} helpful
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                        <ThumbsUp className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                        <Share2 className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                        <Bookmark className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Professional Owner Response */}
                  {filteredTestimonials[currentTestimonial]?.response && (
                    <div className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                          <Crown className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{filteredTestimonials[currentTestimonial]?.response?.owner}</span>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">Owner</span>
                      </div>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>{filteredTestimonials[currentTestimonial]?.response?.message}</p>
                      <span className="text-xs text-gray-500">{filteredTestimonials[currentTestimonial]?.response?.date}</span>
                    </div>
                  )}
                </div>

                {/* Professional Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevTestimonial}
                    className="p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  {/* Professional Profile Navigation */}
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    {filteredTestimonials.map((testimonial, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`relative transition-all duration-300 ${
                          index === currentTestimonial ? 'scale-110' : 'hover:scale-105'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 ${
                          index === currentTestimonial 
                            ? `bg-gradient-to-br ${testimonial.gradient} shadow-2xl` 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}>
                          <span className="relative z-10">{testimonial.initials}</span>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-white">
                            <CheckCircle className="h-2 w-2 text-white fill-current" />
                          </div>
                        </div>
                        {index === currentTestimonial && (
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Call to Action Banner */}
          <div className={`text-center mt-16 lg:mt-20 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl border border-gray-200">
              {/* Content */}
              <div className="relative z-10 p-12 sm:p-16 lg:p-20">
                {/* Professional Header */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 shadow-2xl">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    JOIN 500+ SATISFIED CLIENTS
                  </h3>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-700 shadow-2xl">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Professional Subtitle */}
                <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Experience the difference that <span className="font-bold text-red-600">professional barbering excellence</span> makes. 
                  <span className="font-bold text-gray-900"> Book your appointment today</span> and see why we have 4.9 stars on Google!
                </p>
                
                {/* Professional Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-10 py-5 rounded-2xl text-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-0" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Calendar className="inline h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Book Your Appointment
                    <ArrowRight className="inline h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button className="group bg-white border-2 border-gray-300 text-gray-900 font-bold px-10 py-5 rounded-2xl text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <MessageCircle className="inline h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Read More Reviews
                    <TrendingUp className="inline h-6 w-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </div>
                
                {/* Professional Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-base font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Google Verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-base font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>4.9/5 Google Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-red-500" />
                    <span className="text-base font-medium" style={{ fontFamily: 'Gotham Light, sans-serif' }}>Professional Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
