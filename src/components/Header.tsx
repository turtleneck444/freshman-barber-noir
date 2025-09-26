import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 mobile-backdrop-blur shadow-xl border-b border-gray-200/50' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto mobile-px">
        <nav className="flex items-center justify-between py-3 sm:py-4">
          {/* Mobile-Optimized Logo */}
          <div 
            className="group cursor-pointer relative touch-target" 
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/logo.png" 
                alt="The Freshmen Barbershop" 
                className="h-10 sm:h-12 lg:h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
              {/* Simplified overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-300 font-semibold text-sm whitespace-nowrap group overflow-hidden ${
                    isActive
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {/* Simplified background */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-50 to-red-100 scale-100' 
                      : 'bg-gray-50 scale-0 group-hover:scale-100'
                  }`} />
                  
                  <span className="relative z-10 transition-all duration-300">
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-red-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Contact Info - Hidden on smaller screens */}
            <div className="hidden xl:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 group cursor-pointer touch-target">
                <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-red-600" />
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  (905) 123-CUTS
                </span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer touch-target">
                <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-gray-500" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  167 Queen St S
                </span>
              </div>
            </div>

            {/* CTA Button - Responsive */}
            <Button 
              className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:flex group overflow-hidden touch-target"
              onClick={() => scrollToSection('#booking')}
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Scissors className="h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Now</span>
              </div>
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 sm:p-3 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 group touch-target"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Optimized */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 mobile-backdrop-blur border-t border-gray-200/50 shadow-xl animate-mobile-fade mobile-scroll-safe">
            <div className="container mx-auto mobile-px py-4 sm:py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  
                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full px-4 py-4 rounded-xl transition-all duration-300 text-base font-semibold group relative overflow-hidden touch-target ${
                        isActive
                          ? 'text-red-600 bg-gradient-to-r from-red-50 to-red-100'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    </button>
                  );
                })}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 touch-target">
                    <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                      <Phone className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-semibold group-hover:text-gray-900 transition-colors duration-300">(905) 123-CUTS</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 touch-target">
                    <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <MapPin className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">167 Queen Street South, Unit 4</span>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group touch-target"
                      onClick={() => scrollToSection('#booking')}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Scissors className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Book Now</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
