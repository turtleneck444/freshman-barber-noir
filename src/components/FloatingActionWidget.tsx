import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Scissors, 
  Phone, 
  MapPin, 
  X, 
  Zap,
  ArrowRight,
  Clock
} from 'lucide-react';

const FloatingActionWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show widget after a small delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Tooltip animation cycle - show every 10 seconds for 3 seconds
    const tooltipCycle = setInterval(() => {
      if (!isOpen) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }
    }, 10000);
    
    // Show tooltip on first load
    setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(tooltipCycle);
    };
  }, [isOpen]);

  const widgets = [
    {
      id: 'booking',
      icon: <Calendar className="h-5 w-5" />,
      label: 'Book Appointment',
      description: 'Schedule your visit',
      link: '/booking',
      gradient: 'from-red-500 via-red-600 to-red-700',
      hoverGradient: 'from-red-400 via-red-500 to-red-600',
      external: false
    },
    {
      id: 'services',
      icon: <Scissors className="h-5 w-5" />,
      label: 'View Services',
      description: 'Explore our offerings',
      link: '/services',
      gradient: 'from-blue-500 via-blue-600 to-cyan-600',
      hoverGradient: 'from-blue-400 via-blue-500 to-cyan-500',
      external: false
    },
    {
      id: 'contact',
      icon: <Phone className="h-5 w-5" />,
      label: 'Contact Us',
      description: 'Get in touch',
      link: '/contact',
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      hoverGradient: 'from-purple-400 via-purple-500 to-pink-500',
      external: false
    },
    {
      id: 'directions',
      icon: <MapPin className="h-5 w-5" />,
      label: 'Get Directions',
      description: '167 Queen St S, Unit 4',
      link: 'https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?hl=en-CA&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D',
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      hoverGradient: 'from-green-400 via-emerald-500 to-teal-500',
      external: true
    }
  ];

  const handleWidgetClick = () => {
    setIsOpen(false);
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-glow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateX(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateX(-5px) scale(1.05);
            opacity: 1;
          }
        }
        
        .fab-button {
          animation: float-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .widget-item {
          animation: slide-up-fade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .widget-item:nth-child(1) { animation-delay: 0.05s; opacity: 0; }
        .widget-item:nth-child(2) { animation-delay: 0.1s; opacity: 0; }
        .widget-item:nth-child(3) { animation-delay: 0.15s; opacity: 0; }
        .widget-item:nth-child(4) { animation-delay: 0.2s; opacity: 0; }
        
        .spin-border {
          animation: spin-glow 4s linear infinite;
        }
        
        .wave-tooltip {
          animation: wave 0.6s ease-in-out;
        }
        
        .backdrop-blur-premium {
          backdrop-filter: blur(16px) saturate(200%);
          -webkit-backdrop-filter: blur(16px) saturate(200%);
        }
      `}</style>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Widget Menu */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)]">
          <div className="backdrop-blur-premium bg-gradient-to-br from-white/98 to-gray-50/98 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Elegant Header */}
            <div className="relative px-6 py-4 bg-gradient-to-r from-gray-900 via-slate-900 to-black border-b border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-base leading-none mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Quick Actions
                    </h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                      Choose an option below
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

            {/* Luxurious Widget Items */}
            <div className="p-3 space-y-2 max-h-[70vh] overflow-y-auto">
              {widgets.map((widget) => {
                const content = (
                  <div 
                    className="widget-item group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    onClick={handleWidgetClick}
                  >
                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${widget.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                    
                    {/* Outer glow on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${widget.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 -z-10`} />
                    
                    <div className="relative px-4 py-3.5 flex items-center gap-3">
                      {/* Icon with gradient */}
                      <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-r ${widget.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                        <div className="text-white relative z-10">
                          {widget.icon}
                        </div>
                        {/* Icon glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${widget.gradient} blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 group-hover:text-white font-bold text-sm mb-0.5 transition-colors duration-500 truncate" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                          {widget.label}
                        </h4>
                        <p className="text-gray-500 group-hover:text-white/90 text-xs transition-colors duration-500 truncate" style={{ fontFamily: 'Gotham Light, sans-serif' }}>
                          {widget.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4 text-white" />
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

            {/* Elegant Footer */}
            <div className="px-5 py-3 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span style={{ fontFamily: 'Gotham Light, sans-serif' }}>Open Daily</span>
                </div>
                <a href="tel:9054837374" className="flex items-center gap-1.5 text-red-600 hover:text-red-700 font-bold transition-colors">
                  <Phone className="h-3 w-3" />
                  <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>(905) 483-7374</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50">
        {/* Animated Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-full right-0 mb-3 wave-tooltip">
            <div className="backdrop-blur-premium bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2.5 rounded-xl shadow-2xl border border-white/10 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-red-500" />
                <span className="text-xs font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  Quick Actions
                </span>
              </div>
              <div className="absolute top-full right-5 w-2 h-2 bg-gray-900 rotate-45 -mt-1" />
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`fab-button relative w-14 h-14 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white shadow-2xl transition-all duration-500 transform ${
            isOpen ? 'scale-95 rotate-45' : 'hover:scale-110'
          } group overflow-hidden`}
          aria-label="Quick Actions"
        >
          {/* Pulse rings */}
          {!isOpen && (
            <>
              <div className="absolute inset-0 rounded-2xl bg-red-500 pulse-ring" />
              <div className="absolute inset-0 rounded-2xl bg-red-500 pulse-ring" style={{ animationDelay: '1s' }} />
            </>
          )}
          
          {/* Spinning border glow */}
          <div className="absolute inset-[-2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="spin-border absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-red-400 blur-sm" />
          </div>
          
          {/* Button content */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-45 scale-0' : 'rotate-0 scale-100'}`}>
              <Zap className="h-6 w-6" fill="currentColor" />
            </div>
            <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 scale-100' : 'rotate-45 scale-0'}`}>
              <X className="h-6 w-6" />
            </div>
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingActionWidget;
