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
  Sparkles as StarIcon,
  Sparkles as Glow,
  TrendingUp,
  Filter,
  Grid3X3
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
  gradient: string;
  glow: string;
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState<HairStyle | null>(null);
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

  const categories = [
    { id: 'all', name: 'All Styles', icon: Grid3X3, count: 12 },
    { id: 'classic', name: 'Classic', icon: Crown, count: 3 },
    { id: 'modern', name: 'Modern', icon: Zap, count: 4 },
    { id: 'fade', name: 'Fades', icon: Target, count: 4 },
    { id: 'beard', name: 'Beard Styles', icon: Shield, count: 3 }
  ];

  const hairStyles: HairStyle[] = [
    // FADES
    {
      id: '1',
      name: 'High Fade',
      category: 'fade',
      description: 'Sharp high fade with clean lines and precision',
      difficulty: 'Advanced',
      duration: '45 min',
      price: '$55',
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
    },
    {
      id: '2',
      name: 'Mid Fade',
      category: 'fade',
      description: 'Balanced mid fade for versatile styling',
      difficulty: 'Medium',
      duration: '35 min',
      price: '$45',
      popular: true,
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25',
      svg: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      id: '3',
      name: 'Low Fade',
      category: 'fade',
      description: 'Subtle low fade with natural transition',
      difficulty: 'Easy',
      duration: '30 min',
      price: '$40',
      popular: false,
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    },
    {
      id: '4',
      name: 'Skin Fade',
      category: 'fade',
      description: 'Ultra-clean skin fade to the scalp',
      difficulty: 'Advanced',
      duration: '50 min',
      price: '$60',
      popular: true,
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },

    // CLASSIC STYLES
    {
      id: '5',
      name: 'Classic Side Part',
      category: 'classic',
      description: 'Timeless elegance with clean side parting',
      difficulty: 'Easy',
      duration: '25 min',
      price: '$35',
      popular: true,
      gradient: 'from-amber-500 to-yellow-500',
      glow: 'shadow-amber-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    },
    {
      id: '6',
      name: 'Buzz Cut',
      category: 'classic',
      description: 'Clean, low-maintenance military style',
      difficulty: 'Easy',
      duration: '15 min',
      price: '$25',
      popular: true,
      gradient: 'from-gray-500 to-slate-500',
      glow: 'shadow-gray-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },

    // MODERN STYLES
    {
      id: '7',
      name: 'Pompadour',
      category: 'modern',
      description: 'Voluminous style with height and volume',
      difficulty: 'Medium',
      duration: '35 min',
      price: '$45',
      popular: false,
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
    },
    {
      id: '8',
      name: 'Undercut',
      category: 'modern',
      description: 'Sharp contrast with longer top and short sides',
      difficulty: 'Medium',
      duration: '40 min',
      price: '$50',
      popular: true,
      gradient: 'from-teal-500 to-blue-500',
      glow: 'shadow-teal-500/25',
      svg: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      id: '9',
      name: 'Textured Crop',
      category: 'modern',
      description: 'Modern textured crop with messy finish',
      difficulty: 'Medium',
      duration: '35 min',
      price: '$45',
      popular: true,
      gradient: 'from-rose-500 to-pink-500',
      glow: 'shadow-rose-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    },

    // BEARD STYLES
    {
      id: '10',
      name: 'Full Beard',
      category: 'beard',
      description: 'Complete full beard with professional trim',
      difficulty: 'Medium',
      duration: '30 min',
      price: '$40',
      popular: true,
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },
    {
      id: '11',
      name: 'Goatee',
      category: 'beard',
      description: 'Classic goatee with mustache',
      difficulty: 'Easy',
      duration: '20 min',
      price: '$30',
      popular: false,
      gradient: 'from-violet-500 to-purple-500',
      glow: 'shadow-violet-500/25',
      svg: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      id: '12',
      name: 'Stubble',
      category: 'beard',
      description: 'Perfect stubble length and shape',
      difficulty: 'Easy',
      duration: '15 min',
      price: '$25',
      popular: true,
      gradient: 'from-slate-500 to-gray-500',
      glow: 'shadow-slate-500/25',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    }
  ];

  const filteredStyles = selectedCategory === 'all' 
    ? hairStyles 
    : hairStyles.filter(style => style.category === selectedCategory);

  const stats = [
    { number: '12+', label: 'Hair Styles', icon: <Scissors className="h-4 w-4" />, gradient: 'from-red-500 to-pink-500' },
    { number: '4.9', label: 'Rating', icon: <Star className="h-4 w-4" />, gradient: 'from-yellow-500 to-orange-500' },
    { number: '20+', label: 'Years', icon: <Award className="h-4 w-4" />, gradient: 'from-blue-500 to-cyan-500' },
    { number: '100%', label: 'Satisfaction', icon: <CheckCircle className="h-4 w-4" />, gradient: 'from-green-500 to-emerald-500' }
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
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4);
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
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>

      <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-full blur-3xl pulse-glow" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Ultra-Modern Header */}
          <div className={`text-center mb-16 lg:mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glassmorphism shadow-2xl mb-8">
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse glow" />
              <span className="text-white font-bold text-lg tracking-widest uppercase bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Professional Styling
              </span>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse glow" />
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              HAIR STYLE
              <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                GALLERY
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our curated collection of professional hair styles. 
              Each style is crafted with precision and tailored to your unique look.
            </p>
          </div>

          {/* Enhanced Stats with Glassmorphism */}
          <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 glassmorphism rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Ultra-Modern Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 card-hover ${
                    selectedCategory === category.id
                      ? 'glassmorphism text-white shadow-2xl'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
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

          {/* Ultra-Modern Hair Styles Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {filteredStyles.map((style, index) => (
              <Card 
                key={style.id} 
                className={`group cursor-pointer glassmorphism border-0 shadow-2xl card-hover ${
                  hoveredCard === style.id ? 'shadow-3xl' : ''
                }`}
                onClick={() => setSelectedStyle(style)}
                onMouseEnter={() => setHoveredCard(style.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8">
                  {/* Ultra-Modern Style Visual */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative w-28 h-28 rounded-3xl bg-gradient-to-br ${style.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl ${style.glow}`}>
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 rounded-3xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Head Silhouette with Enhanced Styling */}
                      <svg className="w-24 h-24 text-white relative z-10" viewBox="0 0 100 100" fill="currentColor">
                        {/* Head shape with gradient */}
                        <defs>
                          <linearGradient id={`head-${style.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="45" r="35" fill="url(#head-${style.id})" opacity="0.6"/>
                        
                        {/* Enhanced hair styles with gradients */}
                        {style.category === 'fade' && (
                          <>
                            <path d="M25 25 Q50 15 75 25 L75 35 Q50 25 25 35 Z" fill="rgba(255,255,255,0.9)" opacity="0.9"/>
                            <path d="M30 35 Q50 30 70 35 L70 40 Q50 35 30 40 Z" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                            <path d="M35 40 Q50 37 65 40 L65 45 Q50 42 35 45 Z" fill="rgba(255,255,255,0.5)" opacity="0.5"/>
                          </>
                        )}
                        
                        {style.category === 'classic' && style.name === 'Buzz Cut' && (
                          <path d="M25 25 Q50 20 75 25 L75 40 Q50 35 25 40 Z" fill="rgba(255,255,255,0.8)" opacity="0.8"/>
                        )}
                        
                        {style.category === 'classic' && style.name === 'Classic Side Part' && (
                          <>
                            <path d="M25 25 Q50 20 75 25 L75 40 Q50 35 25 40 Z" fill="rgba(255,255,255,0.8)" opacity="0.8"/>
                            <path d="M45 25 L45 40" stroke="rgba(255,255,255,0.6)" strokeWidth="2" opacity="0.6"/>
                          </>
                        )}
                        
                        {style.category === 'modern' && style.name === 'Pompadour' && (
                          <>
                            <path d="M25 20 Q50 10 75 20 L75 35 Q50 25 25 35 Z" fill="rgba(255,255,255,0.9)" opacity="0.9"/>
                            <path d="M30 25 Q50 20 70 25 L70 30 Q50 25 30 30 Z" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                          </>
                        )}
                        
                        {style.category === 'modern' && style.name === 'Undercut' && (
                          <>
                            <path d="M25 25 Q50 20 75 25 L75 30 Q50 25 25 30 Z" fill="rgba(255,255,255,0.9)" opacity="0.9"/>
                            <path d="M30 30 Q50 28 70 30 L70 35 Q50 33 30 35 Z" fill="rgba(255,255,255,0.5)" opacity="0.5"/>
                          </>
                        )}
                        
                        {style.category === 'modern' && style.name === 'Textured Crop' && (
                          <path d="M25 25 Q50 20 75 25 L75 40 Q50 35 25 40 Z" fill="rgba(255,255,255,0.8)" opacity="0.8" className="animate-pulse"/>
                        )}
                        
                        {style.category === 'beard' && (
                          <>
                            <path d="M40 60 Q50 65 60 60 L60 75 Q50 70 40 75 Z" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                            {style.name === 'Goatee' && (
                              <path d="M45 60 Q50 65 55 60 L55 70 Q50 68 45 70 Z" fill="rgba(255,255,255,0.9)" opacity="0.9"/>
                            )}
                            {style.name === 'Stubble' && (
                              <path d="M40 60 Q50 65 60 60 L60 70 Q50 68 40 70 Z" fill="rgba(255,255,255,0.5)" opacity="0.5"/>
                            )}
                          </>
                        )}
                      </svg>
                    </div>
                  </div>

                  {/* Enhanced Style Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">{style.name}</h3>
                      {style.popular && (
                        <Badge className={`bg-gradient-to-r ${style.gradient} text-white text-xs px-3 py-1 shadow-lg`}>
                          <Sparkles className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">{style.description}</p>
                    
                    {/* Enhanced Style Details */}
                    <div className="flex justify-between items-center text-xs mb-6">
                      <span className={`px-3 py-2 rounded-xl ${
                        style.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        style.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {style.difficulty}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {style.duration}
                      </span>
                      <span className={`font-bold bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
                        {style.price}
                      </span>
                    </div>

                    {/* Ultra-Modern Action Button */}
                    <Button className={`w-full bg-gradient-to-r ${style.gradient} text-white font-semibold py-3 rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 border-0 shadow-xl`}>
                      <Scissors className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Select Style
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ultra-Modern Call to Action Banner */}
          <div className={`text-center mt-16 lg:mt-20 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-3xl glassmorphism shadow-2xl border border-white/20">
              {/* Advanced Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-blue-500/10" />
              <div className="absolute inset-0 shimmer opacity-20" />
              
              {/* Content */}
              <div className="relative z-10 p-12 sm:p-16 lg:p-20">
                {/* Ultra-Modern Header */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 shadow-2xl">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                    READY FOR YOUR TRANSFORMATION?
                  </h3>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-2xl">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Enhanced Subtitle */}
                <p className="text-xl sm:text-2xl text-slate-200 mb-12 max-w-5xl mx-auto leading-relaxed">
                  Join <span className="font-bold text-yellow-400">500+ satisfied clients</span> who have experienced the 
                  <span className="font-bold text-white"> Shoaib Ghori difference</span>. 
                  Book your appointment today and see the transformation for yourself.
                </p>
                
                {/* Ultra-Modern Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button className="group bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-10 py-5 rounded-2xl text-xl hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-0">
                    <Scissors className="inline h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Book Your Transformation
                    <ArrowRight className="inline h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button className="group glassmorphism border-2 border-white/30 text-white font-bold px-10 py-5 rounded-2xl text-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    <Camera className="inline h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    View Full Gallery
                    <Eye className="inline h-6 w-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </div>
                
                {/* Enhanced Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-300">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-base font-medium">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-base font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-400" />
                    <span className="text-base font-medium">20+ Years Experience</span>
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
