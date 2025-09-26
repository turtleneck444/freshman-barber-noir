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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Enhanced Logo with Animation */}
          <div 
            className="group cursor-pointer relative" 
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/freshmenlogo.jpg" 
                alt="The Freshmen Barbershop" 
                className="h-16 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />
            </div>
            
            {/* Floating particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-full transition-all duration-500 font-semibold text-sm whitespace-nowrap group overflow-hidden ${
                    isActive
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-50 to-red-100 scale-100' 
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 scale-0 group-hover:scale-100'
                  }`} />
                  
                  {/* Text with smooth transitions */}
                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    {item.label}
                  </span>
                  
                  {/* Active indicator - animated underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                  )}
                  
                  {/* Hover effect - subtle glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/10 to-blue-500/10" />
                </button>
              );
            })}
          </div>

          {/* Enhanced Right Side Controls */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Contact Info */}
            <div className="hidden xl:flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  (905) 123-CUTS
                </span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-300" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  167 Queen St S
                </span>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <Button 
              className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 text-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hidden md:flex group overflow-hidden"
              onClick={() => scrollToSection('#booking')}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button content */}
              <div className="relative flex items-center space-x-2">
                <Scissors className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:scale-105 transition-transform duration-300">Book Now</span>
                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Button>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </Button>
            </div>
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  
                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full px-4 py-4 rounded-xl transition-all duration-300 text-sm font-semibold group relative overflow-hidden ${
                        isActive
                          ? 'text-red-600 bg-gradient-to-r from-red-50 to-red-100'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  );
                })}
                
                {/* Enhanced Mobile Contact Info */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-all duration-300">
                      <Phone className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-semibold group-hover:text-gray-900 transition-colors duration-300">(905) 123-CUTS</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all duration-300">
                      <MapPin className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">167 Queen Street South, Unit 4</span>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group"
                      onClick={() => scrollToSection('#booking')}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Scissors className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="group-hover:scale-105 transition-transform duration-300">Book Now</span>
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
