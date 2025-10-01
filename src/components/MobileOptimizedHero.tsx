import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Calendar, Phone, MapPin, Clock, Star, Award, User, Mail, Book, Zap, Crown, Brush, Eye, Wind, Feather, CheckCircle, TrendingUp, Users, Target, Shield, Clock3, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileOptimizedHero() {
    return (
        <main id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative mobile-scroll-safe">
            {/* Mobile-Optimized Background */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/bg.jpg')`,
                    filter: 'brightness(0.3) contrast(1.2)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/80 to-black/85" />
            
            <section className="relative z-10 min-h-screen flex items-center pt-20">
                <div className="mx-auto max-w-7xl mobile-px mobile-py">
                    <div className="grid lg:grid-cols-2 mobile-gap items-center">
                        {/* Content Column - Mobile Optimized */}
                        <div className="text-center lg:text-left">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-6 sm:mb-8">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-red-100 font-medium text-mobile-sm sm:text-base" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                    Mississauga's #1 Rated Barbershop
                                </span>
                            </div>

                            {/* Main Headline - Mobile First */}
                            <h1 className="text-mobile-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 sm:mb-8" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                <span className="block text-white font-bold tracking-tight drop-shadow-2xl">
                                    The Freshmen
                                </span>
                                <span className="block text-red-500 font-bold tracking-tight drop-shadow-2xl">
                                    Style Barbershop
                                </span>
                            </h1>

                            {/* Subtitle - Mobile Optimized */}
                            <p className="text-mobile-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ fontFamily: 'Gotham Medium, sans-serif' }}>
                                Where <span className="text-red-400 font-semibold">premium styling</span> meets <span className="text-blue-400 font-semibold">traditional craftsmanship</span>. 
                                Experience the art of barbering at its finest.
                            </p>

                            {/* CTA Buttons - Mobile First */}
                            <div className="flex flex-col sm:flex-row mobile-gap items-center justify-center lg:justify-start">
                                <button
                                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group touch-target"
                                    style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="text-mobile-base sm:text-lg">Book Appointment</span>
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </button>
                                
                                <button
                                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-xl backdrop-blur-sm transition-all duration-300 group touch-target"
                                    style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <Scissors className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="text-mobile-base sm:text-lg">View Services</span>
                                    </div>
                                </button>
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90 mt-8 mb-8 touch-target">
                                <Phone className="h-5 w-5 text-red-500" />
                                <span className="text-mobile-lg sm:text-xl font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                    (905) 483-7374
                                </span>
                            </div>

                            {/* Mobile Stats */}
                            <div className="grid grid-cols-3 mobile-gap text-center">
                                <div>
                                    <div className="text-mobile-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>2,500+</div>
                                    <div className="text-mobile-xs sm:text-sm text-gray-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-mobile-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>15+</div>
                                    <div className="text-mobile-xs sm:text-sm text-gray-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-mobile-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>4.9★</div>
                                    <div className="text-mobile-xs sm:text-sm text-gray-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Mobile Optimized */}
                        <div className="relative mt-12 lg:mt-0">
                            {/* Mobile-friendly image container */}
                            <div className="relative max-w-md mx-auto lg:max-w-none">
                                <img 
                                    src="/bg.jpg" 
                                    alt="Premium Barbershop Experience" 
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                                
                                {/* Mobile-optimized overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20 rounded-2xl"></div>
                                
                                {/* Floating elements - simplified for mobile */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                    <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                </div>
                                
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                    <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}