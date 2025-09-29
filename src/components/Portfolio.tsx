import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Scissors, 
  Star, 
  Award, 
  Crown, 
  Shield, 
  Zap,
  ArrowRight,
  ArrowLeft,
  Play,
  Eye,
  Heart,
  Sparkles,
  Camera,
  Users,
  Clock,
  CheckCircle,
  Zap as Lightning,
  Target,
  Sparkles as StarIcon
} from 'lucide-react';

interface HairStyle {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  duration: string;
  price: string;
  popular: boolean;
  svg: string;
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState<HairStyle | null>(null);
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

  const categories = [
    { id: 'all', name: 'All Styles', icon: Scissors },
    { id: 'classic', name: 'Classic', icon: Crown },
    { id: 'modern', name: 'Modern', icon: Zap },
    { id: 'fade', name: 'Fades', icon: Target },
    { id: 'beard', name: 'Beard Styles', icon: Shield }
  ];

  const hairStyles: HairStyle[] = [
    {
      id: '1',
      name: 'Classic Side Part',
      category: 'classic',
      description: 'Timeless elegance with clean side parting',
      difficulty: 'Easy',
      duration: '25 min',
      price: '$35',
      popular: true,
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    },
    {
      id: '2',
      name: 'Modern Fade',
      category: 'fade',
      description: 'Sharp fade with clean lines and precision',
      difficulty: 'Advanced',
      duration: '45 min',
      price: '$55',
      popular: true,
      svg: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      id: '3',
      name: 'Pompadour',
      category: 'modern',
      description: 'Voluminous style with height and volume',
      difficulty: 'Medium',
      duration: '35 min',
      price: '$45',
      popular: false,
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
    },
    {
      id: '4',
      name: 'Buzz Cut',
      category: 'classic',
      description: 'Clean, low-maintenance military style',
      difficulty: 'Easy',
      duration: '15 min',
      price: '$25',
      popular: true,
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },
    {
      id: '5',
      name: 'Undercut',
      category: 'modern',
      description: 'Sharp contrast with longer top and short sides',
      difficulty: 'Medium',
      duration: '40 min',
      price: '$50',
      popular: true,
      svg: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      id: '6',
      name: 'Quiff',
      category: 'modern',
      description: 'Stylish forward-swept style with texture',
      difficulty: 'Medium',
      duration: '30 min',
      price: '$40',
      popular: false,
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    }
  ];

  const filteredStyles = selectedCategory === 'all' 
    ? hairStyles 
    : hairStyles.filter(style => style.category === selectedCategory);

  const stats = [
    { number: '50+', label: 'Hair Styles', icon: <Scissors className="h-4 w-4" /> },
    { number: '4.9', label: 'Rating', icon: <Star className="h-4 w-4" /> },
    { number: '20+', label: 'Years', icon: <Award className="h-4 w-4" /> },
    { number: '100%', label: 'Satisfaction', icon: <CheckCircle className="h-4 w-4" /> }
  ];

  return (
    <>
      <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Crown className="h-4 w-4" />
              Professional Styling
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              HAIR STYLE
              <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                GALLERY
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our curated collection of professional hair styles. 
              Each style is crafted with precision and tailored to your unique look.
            </p>
          </div>

          {/* Stats - Compact & Mobile-Friendly */}
          <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-black text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Hair Styles Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {filteredStyles.map((style, index) => (
              <Card 
                key={style.id} 
                className="group cursor-pointer bg-white border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onClick={() => setSelectedStyle(style)}
              >
                <CardContent className="p-6">
                  {/* Style Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d={style.svg} />
                      </svg>
                    </div>
                  </div>

                  {/* Style Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{style.name}</h3>
                      {style.popular && (
                        <Badge className="bg-red-500 text-white text-xs">Popular</Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{style.description}</p>
                    
                    {/* Style Details */}
                    <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                      <span className={`px-2 py-1 rounded-full ${
                        style.difficulty === 'Easy' ? 'bg-green-100 text-green-600' :
                        style.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {style.difficulty}
                      </span>
                      <span>{style.duration}</span>
                      <span className="font-bold text-red-600">{style.price}</span>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                      <Scissors className="h-4 w-4 mr-2" />
                      Select Style
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action Banner - Brand Colors */}
          <div className={`text-center mt-12 lg:mt-16 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-blue-900 shadow-2xl border border-red-700/50">
              {/* Background Pattern - Brand Colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 to-blue-900/20"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                {/* Header with Icons */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                    READY FOR YOUR TRANSFORMATION?
                  </h3>
                  <div className="p-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Join <span className="font-bold text-yellow-400">500+ satisfied clients</span> who have experienced the 
                  <span className="font-bold text-white"> Shoaib Ghori difference</span>. 
                  Book your appointment today and see the transformation for yourself.
                </p>
                
                {/* Enhanced Buttons - Brand Colors */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0">
                    <Scissors className="inline h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Book Your Transformation
                    <ArrowRight className="inline h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button className="group bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <Camera className="inline h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    View Full Gallery
                    <Eye className="inline h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
                
                {/* Trust Indicators - Brand Colors */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-red-200">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">20+ Years Experience</span>
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

export default Portfolio; 
      title: 'Executive Transformation',
      category: 'signature-cut',
      description: 'Complete executive makeover with precision cut and professional styling',
      beforeImage: '/imgi_28_91273985_890308014724053_9084689863751011578_n.jpg',
      afterImage: '/imgi_29_91508539_1031237737259773_3158859722929790590_n.jpg',
      rating: 5,
      clientName: 'Michael Chen',
      service: 'Signature Cut',
      duration: '45 min',
      featured: true
    },
    {
      id: '2',
      title: 'Classic Gentleman',
      category: 'traditional-shave',
      description: 'Traditional hot towel shave with premium grooming experience',
      beforeImage: '/imgi_30_91112175_793531424468514_7739180485424798523_n.jpg',
      afterImage: '/imgi_31_90088672_115060690114029_2775280927924311927_n.jpg',
      rating: 5,
      clientName: 'David Rodriguez',
      service: 'Traditional Shave',
      duration: '30 min',
      featured: true
    },
    {
      id: '3',
      title: 'Royal Package Experience',
      category: 'royal-package',
      description: 'Complete luxury grooming package with cut, shave, and premium treatments',
      beforeImage: '/imgi_32_89041857_141581543761454_7948278722813866830_n.jpg',
      afterImage: '/imgi_33_84176926_126404842139727_6389121118071636171_n.jpg',
      rating: 5,
      clientName: 'James Thompson',
      service: 'Royal Package',
      duration: '90 min',
      featured: true
    },
    {
      id: '4',
      title: 'Beard Mastery',
      category: 'beard-grooming',
      description: 'Professional beard trimming and styling for the perfect look',
      beforeImage: '/imgi_28_91273985_890308014724053_9084689863751011578_n.jpg', // Use actual beard image
      afterImage: '/imgi_29_91508539_1031237737259773_3158859722929790590_n.jpg', // Use actual beard image
      rating: 5,
      clientName: 'Robert Kim',
      service: 'Beard Grooming',
      duration: '20 min',
      featured: false
    },
    {
      id: '5',
      title: 'Family Grooming Experience', // Changed from "Father & Son Special"
      category: 'family-package',
      description: 'Premium grooming experience for family members together',
      beforeImage: '/imgi_36_84691260_158181368973567_3198901910180450919_n.jpg',
      afterImage: '/imgi_38_83234014_188112842416900_635945828494612146_n.jpg',
      rating: 5,
      clientName: 'Alex Johnson',
      service: 'Family Package', // Changed from "Father & Son"
      duration: '60 min',
      featured: false
    },
    {
      id: '6',
      title: 'Modern Fade',
      category: 'signature-cut',
      description: 'Contemporary fade with precision detailing and modern styling',
      beforeImage: '/imgi_28_91273985_890308014724053_9084689863751011578_n.jpg',
      afterImage: '/imgi_29_91508539_1031237737259773_3158859722929790590_n.jpg',
      rating: 5,
      clientName: 'Mark Wilson',
      service: 'Signature Cut',
      duration: '45 min',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'signature-cut', name: 'Signature Cuts', count: portfolioItems.filter(item => item.category === 'signature-cut').length },
    { id: 'traditional-shave', name: 'Traditional Shaves', count: portfolioItems.filter(item => item.category === 'traditional-shave').length },
    { id: 'royal-package', name: 'Royal Packages', count: portfolioItems.filter(item => item.category === 'royal-package').length },
    { id: 'beard-grooming', name: 'Beard Grooming', count: portfolioItems.filter(item => item.category === 'beard-grooming').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Transformations', icon: <Scissors className="h-6 w-6" /> },
    { number: '4.9', label: 'Average Rating', icon: <Star className="h-6 w-6" /> },
    { number: '20+', label: 'Years Experience', icon: <Award className="h-6 w-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <CheckCircle className="h-6 w-6" /> }
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

      <section ref={sectionRef} id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
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
                PORTFOLIO SHOWCASE
              </span>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse glow" />
            </div>
            
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
              <span className="block tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                SHOAIB'S MASTERPIECES
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text font-light mt-2 lg:mt-4 tracking-widest">
                TRANSFORMATION GALLERY
              </span>
            </h2>
            
            <div className={`flex items-center gap-4 sm:gap-6 mt-6 lg:mt-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-blue-600 font-medium tracking-widest uppercase text-sm sm:text-lg">
                  BEFORE & AFTER
                </span>
                <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1" />
            </div>
          </div>

          {/* Stats - Compact & Mobile-Friendly */}
          <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-black text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border-2 border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0">
                  {/* Before/After Images */}
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img 
                          src={item.beforeImage} 
                          alt={`${item.title} - Before`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={item.afterImage} 
                          alt={`${item.title} - After`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                          AFTER
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Eye className="h-6 w-6" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Heart className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    {item.featured && (
                      <Badge className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 text-xs font-bold">
                        <Sparkles className="h-3 w-3 mr-1" />
                        FEATURED
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>{item.clientName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Scissors className="h-4 w-4" />
                        <span>{item.service}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 lg:mt-16 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Crown className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-3xl sm:text-4xl font-black">READY FOR YOUR TRANSFORMATION?</h3>
                  <Crown className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Join 500+ satisfied clients who have experienced the Shoaib Ghori difference. 
                  Book your appointment today and see the transformation for yourself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Scissors className="inline h-5 w-5 mr-2" />
                    Book Your Transformation
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Camera className="inline h-5 w-5 mr-2" />
                    View Full Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio; 