import { useState, useEffect, useRef } from 'react';
import { Star, MapPin, Phone, ExternalLink, ThumbsUp, Clock, Navigation, MessageCircle, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const GoogleBusinessWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { 
      value: '4.9', 
      label: 'Star Rating', 
      icon: <Star className="h-4 w-4" />,
      gradient: 'from-yellow-500 to-orange-500',
      detail: '200+ reviews'
    },
    { 
      value: '1000+', 
      label: 'Happy Clients', 
      icon: <ThumbsUp className="h-4 w-4" />,
      gradient: 'from-blue-500 to-cyan-500',
      detail: 'This year'
    },
    { 
      value: '20+', 
      label: 'Years Experience', 
      icon: <Award className="h-4 w-4" />,
      gradient: 'from-purple-500 to-pink-500',
      detail: 'Established 2004'
    },
    { 
      value: '#1', 
      label: 'Top Rated', 
      icon: <TrendingUp className="h-4 w-4" />,
      gradient: 'from-green-500 to-emerald-500',
      detail: 'In Streetsville'
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(66, 133, 244, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(66, 133, 244, 0.4), 0 0 50px rgba(66, 133, 244, 0.1);
          }
        }
        
        .slide-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .glow-effect {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Header */}
          <div className={`text-center mb-8 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg mb-3">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ffffff"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ffffff"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#ffffff"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ffffff"/>
              </svg>
              <span className="text-white font-bold text-xs tracking-wider uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Google Verified Business
              </span>
            </div>
          </div>

          {/* Compact Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Google Business Card - Compact */}
            <div className={`lg:col-span-2 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <Card className="bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full glow-effect">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: Rating & Info */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>4.9</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                        Based on 200+ verified reviews
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700" style={{ fontFamily: 'Gotham Light, sans-serif' }}>167 Queen St S, Unit 4</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <a href="tel:9054837374" className="text-blue-600 hover:text-blue-700 font-semibold">(905) 483-7374</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-green-600 font-semibold">Open 12 PM - 8 PM Daily</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?hl=en-CA&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 text-xs hover:scale-105"
                        >
                          <Navigation className="h-3.5 w-3.5" />
                          Directions
                        </a>
                        <a
                          href="tel:9054837374"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 text-xs hover:scale-105"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Call Now
                        </a>
                      </div>
                    </div>

                    {/* Right: Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${stat.gradient} p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1`}
                          onMouseEnter={() => setHoveredStat(index)}
                          onMouseLeave={() => setHoveredStat(null)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white">
                              {stat.icon}
                            </div>
                            <div className={`transition-all duration-300 ${hoveredStat === index ? 'rotate-12 scale-110' : ''}`}>
                              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/90 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                            {stat.label}
                          </p>
                          <p className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                            {stat.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Card - Compact & Powerful */}
            <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <Card className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 border-0 shadow-2xl h-full gradient-animate overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Love Our Service?
                    </h3>
                    <p className="text-white/90 text-sm mb-6" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      Share your experience and help others discover Mississauga's #1 barbershop!
                    </p>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?hl=en-CA&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-50 font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                      Write a Review
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/70 text-xs text-center" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      Verified on Google Business
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleBusinessWidget;
