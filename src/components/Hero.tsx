import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Scissors, Calendar, Phone, MapPin, Clock, Star, Award, User, Mail, Book, Zap, Crown, Brush, Eye, HairDryer, Feather, CheckCircle, TrendingUp, Users, Target, Shield, Clock3, Sparkles, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Ensure video plays
            video.play().catch(error => {
                console.log('Video autoplay failed:', error);
                // If autoplay fails, show the fallback image
                const img = video.querySelector('img');
                if (img) {
                    img.style.display = 'block';
                }
            });
        }
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative">
            {/* Background */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/bg.jpg')`,
                    filter: 'brightness(0.3) contrast(1.2)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/80 to-black/85" />
            
            <section className="relative z-10 min-h-screen flex items-center pt-20">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="text-left">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 shadow-lg mb-8">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-red-100 font-medium text-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                    Mississauga's #1 Rated Barbershop
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                <span className="block text-white font-bold tracking-tight drop-shadow-2xl">
                                    The Freshmen
                                </span>
                                <span className="block text-red-500 font-bold tracking-tight drop-shadow-2xl">
                                    Style Barbershop
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light mb-8 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                Premium Men's Grooming Excellence in Mississauga
                            </p>

                            {/* Value Proposition */}
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                Transform your professional image with precision cuts, traditional shaves, and expert grooming services.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 px-6 md:px-8 rounded-xl border-2 border-red-500 bg-red-600 text-white hover:bg-red-700 hover:border-red-400 font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-base md:text-lg min-w-[200px] md:min-w-[240px]"
                                    style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                    <Link to="#services" className="flex items-center justify-center gap-3">
                                        Book Appointment
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 px-6 md:px-8 rounded-xl border-2 border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-base md:text-lg min-w-[200px] md:min-w-[240px] backdrop-blur-sm"
                                    style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                    <Link to="#services" className="flex items-center justify-center gap-3">
                                        View Services
                                        <Scissors className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center gap-3 text-white/90 mb-8">
                                <Phone className="h-5 w-5 text-red-500" />
                                <span className="text-base md:text-lg font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                    (905) 123-4567
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 md:gap-6">
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>2,500+</div>
                                    <div className="text-xs text-gray-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Happy Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>20+</div>
                                    <div className="text-xs text-gray-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>4.9/5</div>
                                    <div className="text-xs text-gray-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Average Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Video with Testimonials */}
                        <div className="relative mt-8 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <video
                                    ref={videoRef}
                                    className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    onError={(e) => {
                                        console.log('Video error:', e);
                                        // Show fallback image on error
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) {
                                            img.style.display = 'block';
                                        }
                                    }}
                                >
                                    <source src="/vid1.mp4" type="video/mp4" />
                                    {/* Fallback image if video doesn't load */}
                                    <img 
                                        src="/imgi_38_83234014_188112842416900_635945828494612146_n.jpg" 
                                        alt="Professional barber work at The Freshmen Barbershop"
                                        className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
                                        style={{ display: 'none' }}
                                    />
                                </video>
                                
                                {/* Video Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                {/* Testimonial Overlay */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <span className="text-sm font-semibold text-gray-800">5.0</span>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                                            "Best haircut I've ever had! Shoaib is a true artist."
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                            <span className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Mike R.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Instagram Gallery Preview */}
                            <div className="mt-6 grid grid-cols-4 gap-2">
                                {[
                                    '/imgi_38_83234014_188112842416900_635945828494612146_n.jpg',
                                    '/imgi_36_84691260_158181368973567_3198901910180450919_n.jpg',
                                    '/imgi_35_85011411_493529434641689_6264903484247845515_n.jpg',
                                    '/imgi_33_84176926_126404842139727_6389121118071636171_n.jpg'
                                ].map((img, index) => (
                                    <div key={index} className="relative group cursor-pointer">
                                        <img 
                                            src={img} 
                                            alt={`Barbershop work ${index + 1}`}
                                            className="w-full h-16 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                            onError={(e) => {
                                                // Fallback to a placeholder if image fails to load
                                                e.currentTarget.src = '/placeholder.svg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
