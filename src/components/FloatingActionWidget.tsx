import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Scissors, 
  Phone, 
  MapPin, 
  X, 
  Sparkles,
  ArrowRight,
  Clock,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after a small delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const widgets = [
    {
      id: 'booking',
      icon: <Calendar className="h-6 w-6" />,
      label: 'Book Now',
      description: 'Schedule your appointment',
      link: '/booking',
      gradient: 'from-red-500 to-red-600',
      glowColor: 'red-500',
      external: false
    },
    {
      id: 'services',
      icon: <Scissors className="h-6 w-6" />,
      label: 'Our Services',
      description: 'View all grooming options',
      link: '/services',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'blue-500',
      external: false
    },
    {
      id: 'contact',
      icon: <Phone className="h-6 w-6" />,
      label: 'Contact Us',
      description: 'Get in touch today',
      link: '/contact',
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'purple-500',
      external: false
    },
    {
      id: 'directions',
      icon: <MapPin className="h-6 w-6" />,
      label: 'Get Directions',
      description: '167 Queen St S, Unit 4',
      link: 'https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z',
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'green-500',
      external: true
    }
  ];

  const handleWidgetClick = () => {
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3), 0 0 80px rgba(239, 68, 68, 0.1);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .fab-button {
          animation: float-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .fab-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .widget-item {
          animation: slide-up 0.4s ease-out forwards;
        }
        
        .widget-item:nth-child(1) { animation-delay: 0.05s; }
        .widget-item:nth-child(2) { animation-delay: 0.1s; }
        .widget-item:nth-child(3) { animation-delay: 0.15s; }
        .widget-item:nth-child(4) { animation-delay: 0.2s; }
        
        .rotating-border {
          animation: spin-slow 8s linear infinite;
        }
        
        .backdrop-blur-glass {
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
        }
      `}</style>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Widget Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 lg:right-8 z-50 w-80 sm:w-96 max-w-[calc(100vw-2rem)]">
          <div className="backdrop-blur-glass bg-white/95 rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Header */}
            <div className="relative px-6 py-5 bg-gradient-to-r from-slate-900 via-gray-900 to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Quick Actions
                    </h3>
                    <p className="text-gray-300 text-xs" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      How can we help you?
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:rotate-90"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {/* Widget Items */}
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
              {widgets.map((widget) => {
                const content = (
                  <div 
                    className="widget-item opacity-0 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={handleWidgetClick}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${widget.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${widget.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                    
                    <div className="relative px-5 py-4 flex items-center gap-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${widget.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {widget.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-bold text-base mb-1 group-hover:text-gray-900 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {widget.label}
                        </h4>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          {widget.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight className={`h-5 w-5 text-${widget.glowColor}`} />
                      </div>
                    </div>
                  </div>
                );

                return widget.external ? (
                  <a 
                    key={widget.id}
                    href={widget.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <Link key={widget.id} to={widget.link}>
                    {content}
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200/50">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span style={{ fontFamily: 'Gotham Light, sans-serif' }}>Open Daily 9AM-8PM</span>
                </div>
                <a href="tel:9054837374" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>(905) 483-7374</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fab-button relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-2xl transition-all duration-500 transform ${
            isOpen ? 'scale-95 rotate-90' : 'hover:scale-110 fab-glow'
          } group overflow-hidden`}
          aria-label="Quick Actions"
        >
          {/* Rotating border effect */}
          <div className="absolute inset-0 rounded-2xl">
            <div className="rotating-border absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-red-400 via-blue-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </div>
          
          {/* Button content */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
          
          {/* Pulse rings */}
          {!isOpen && (
            <>
              <div className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20" />
              <div className="absolute inset-0 rounded-2xl bg-red-500 animate-pulse opacity-10" />
            </>
          )}
        </button>

        {/* Tooltip on hover (when closed) */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="backdrop-blur-glass bg-gray-900/90 text-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
              <span className="text-sm font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Quick Actions
              </span>
              <div className="absolute top-full right-6 w-2 h-2 bg-gray-900/90 rotate-45 -mt-1" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingActionWidget;
