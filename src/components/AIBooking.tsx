import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Scissors, 
  Award, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  Phone,
  Mail,
  User,
  FileText,
  Sparkles,
  Crown,
  Shield,
  Target,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react';

const JoinOurTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    specialties: '',
    portfolio: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application data to your backend
    alert('Application submitted successfully! We will contact you within 24 hours.');
  };

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Commission",
      description: "Earn 60-70% commission on all services",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Choose your own working hours",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Environment",
      description: "Work in Mississauga's most exclusive barbershop",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "High-End Clientele",
      description: "Serve discerning professionals and executives",
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Opportunities",
      description: "Advance your career with ongoing training",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full Support",
      description: "Marketing, supplies, and client management included",
      color: "from-indigo-500 to-indigo-700"
    }
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
        }
        
        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <section ref={sectionRef} id="join-team" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 backdrop-blur-xl border border-red-500/30 shadow-2xl mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse glow" />
              <span className="text-red-100 font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                JOIN OUR ELITE TEAM
              </span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse glow" />
            </div>
            
            <h2 className={`text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <span className="block tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                MASTER BARBER
              </span>
              <span className="block text-3xl md:text-4xl text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text font-light mt-4 tracking-widest" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                OPPORTUNITIES
              </span>
            </h2>
            
            <div className={`flex items-center gap-6 mt-8 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent flex-1" />
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-red-400" />
                <span className="text-red-300 font-medium tracking-widest uppercase text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  EXCLUSIVE POSITIONS
                </span>
                <Crown className="h-5 w-5 text-red-400" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent flex-1" />
            </div>
            
            <p className={`text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-12 ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`} style={{ fontFamily: 'Gotham Light, sans-serif' }}>
              Join <span className="text-red-400 font-bold">The Freshmen Style Barbershop</span> and become part of 
              <span className="text-red-400 font-bold"> Mississauga's most prestigious</span> barbering team. 
              Work alongside <span className="text-red-400 font-bold">master barber Shoaib Ghori</span> in an 
              <span className="text-red-400 font-bold"> ultra-luxury environment</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits Section */}
            <div className="space-y-8">
              <div className={`${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
                <h3 className="text-4xl font-black text-white mb-6" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Why Join Our Team?
                </h3>
                <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Experience the ultimate barbering career with unmatched benefits and opportunities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className={`bg-white/95 backdrop-blur-xl border border-gray-200 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group shadow-xl hover:shadow-2xl ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} text-white shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                            {benefit.title}
                          </h4>
                          <p className="text-gray-700 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className={`${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
              <Card className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Apply Now
                    </h3>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      Ready to join the elite? Submit your application and we'll contact you within 24 hours.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          <User className="h-4 w-4 inline mr-2 text-red-600" />
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="h-12 border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                          required
                          style={{ fontFamily: 'Gotham Light, sans-serif' }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          <Phone className="h-4 w-4 inline mr-2 text-red-600" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(905) 483-7374"
                          className="h-12 border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                          required
                          style={{ fontFamily: 'Gotham Light, sans-serif' }}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Mail className="h-4 w-4 inline mr-2 text-red-600" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="h-12 border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                        required
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Award className="h-4 w-4 inline mr-2 text-red-600" />
                        Years of Experience *
                      </Label>
                      <Input
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g., 5+ years"
                        className="h-12 border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                        required
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialties" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Scissors className="h-4 w-4 inline mr-2 text-red-600" />
                        Specialties & Skills
                      </Label>
                      <Input
                        id="specialties"
                        name="specialties"
                        value={formData.specialties}
                        onChange={handleInputChange}
                        placeholder="e.g., Fades, Beard Styling, Traditional Shaves"
                        className="h-12 border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolio" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <FileText className="h-4 w-4 inline mr-2 text-red-600" />
                        Portfolio/Instagram
                      </Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="Link to your work portfolio"
                        className="h-12 border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-bold text-gray-900 mb-2 block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        <Heart className="h-4 w-4 inline mr-2 text-red-600" />
                        Why Join Our Team?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us why you want to join The Freshmen Style Barbershop..."
                        className="border-2 border-gray-300 focus:border-red-500 rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 min-h-[120px] shadow-sm"
                        rows={4}
                        style={{ fontFamily: 'Gotham Light, sans-serif' }}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 px-8 rounded-xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 glow"
                      style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Zap className="h-6 w-6" />
                        SUBMIT APPLICATION
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-2xl rounded-3xl p-16 border border-gray-200 shadow-2xl overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Crown className="h-8 w-8 text-red-600" />
                  <h3 className="text-5xl font-black text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    READY TO JOIN THE ELITE?
                  </h3>
                  <Crown className="h-8 w-8 text-red-600" />
                </div>
                
                <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                  Join <span className="text-red-600 font-bold">Shoaib Ghori</span> and become part of 
                  <span className="text-red-600 font-bold"> Mississauga's most exclusive</span> barbering team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-12 py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 glow" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Calendar className="mr-3 h-6 w-6" />
                    APPLY NOW
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-black px-12 py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    <Phone className="mr-3 h-6 w-6" />
                    CALL (905) 483-7374
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinOurTeam;
