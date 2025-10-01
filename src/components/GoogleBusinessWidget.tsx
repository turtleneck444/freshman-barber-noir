import { useState, useEffect, useRef } from 'react';
import { Star, MapPin, Phone, ExternalLink, ThumbsUp, Clock, Navigation, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const GoogleBusinessWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    { value: '4.9', label: 'Star Rating', icon: <Star className="h-5 w-5" /> },
    { value: '200+', label: 'Reviews', icon: <MessageCircle className="h-5 w-5" /> },
    { value: '1000+', label: 'Happy Clients', icon: <ThumbsUp className="h-5 w-5" /> },
  ];

  return (
    <>
      <style>{`
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .google-shadow {
          box-shadow: 0 10px 40px rgba(66, 133, 244, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600/10 backdrop-blur-sm border border-blue-500/20 shadow-lg mb-6">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Google Business
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              VERIFIED ON GOOGLE
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              See what our customers are saying and leave your own review
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left: Google Business Card */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <Card className="google-shadow bg-white border-0 overflow-hidden h-full float-card">
                <CardContent className="p-0">
                  {/* Google Header */}
                  <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ffffff"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ffffff"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#ffffff"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ffffff"/>
                          </svg>
                          <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                            The FRESHMEN Barbershop
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                            ))}
                          </div>
                          <span className="text-2xl font-black text-white" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>4.9</span>
                          <span className="text-white/90 text-sm">(200+ reviews)</span>
                        </div>
                        <p className="text-white/90 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          Barbershop · Mississauga, ON
                        </p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?hl=en-CA&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <Navigation className="h-4 w-4" />
                        <span className="text-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Directions</span>
                      </a>
                      <a
                        href="tel:9054837374"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Call</span>
                      </a>
                    </div>
                  </div>

                  {/* Business Info */}
                  <div className="p-8 space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Address</p>
                        <p className="text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>167 Queen St S, Unit 4, Mississauga, ON L5M 1L2</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Phone</p>
                        <a href="tel:9054837374" className="text-blue-600 hover:text-blue-700 font-semibold">(905) 483-7374</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Hours</p>
                        <div className="text-sm space-y-1 text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                          <p>Saturday: 9:00 AM - 7:00 PM</p>
                          <p>Sunday: 10:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Stats & CTA */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                          {stat.icon}
                        </div>
                        <div>
                          <p className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                          <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Light, sans-serif' }}>{stat.label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 border-0 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 shimmer-effect" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    Love Our Service?
                  </h3>
                  <p className="text-white/90 mb-6" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                    Share your experience with others! Your review helps us grow and serve you better.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?hl=en-CA&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
                      Leave a Review on Google
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
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
