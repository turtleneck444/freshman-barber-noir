import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Booking", href: "/booking" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between py-3 sm:py-4">
          {/* Enhanced Logo with Animation */}
          <Link 
            to="/"
            className="group cursor-pointer relative block" 
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/logo.png" 
                alt="The Freshmen Barbershop" 
                className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                style={{ maxHeight: '64px', objectFit: 'contain' }}
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
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-500 font-semibold text-sm whitespace-nowrap group overflow-hidden ${
                    active
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    active 
                      ? 'bg-gradient-to-r from-red-50 to-red-100 scale-100' 
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 scale-0 group-hover:scale-100'
                  }`} />
                  
                  {/* Text with smooth transitions */}
                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    {item.label}
                  </span>
                  
                  {/* Active indicator - animated underline */}
                  {active && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" />
                  )}
                  
                  {/* Hover effect - subtle glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/10 to-blue-500/10" />
                </Link>
              );
            })}
          </div>

          {/* Enhanced Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
            {/* Enhanced Contact Info - Hidden on mobile, visible on larger screens */}
            <div className="hidden xl:flex items-center space-x-6 text-sm">
              <a href="tel:9054837374" className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  (905) 483-7374
                </span>
              </a>
              <a 
                href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?hl=en-CA&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-semibold">
                  Review Us
                </span>
              </a>
            </div>

            {/* Mobile Phone Number - Visible on mobile */}
            <div className="flex items-center gap-1 text-gray-700 lg:hidden">
              <Phone className="h-3 w-3 text-red-600" />
              <span className="text-xs font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                (905) 483-7374
              </span>
            </div>

            {/* Enhanced CTA Button */}
            <Link to="/booking">
              <Button 
                className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hidden sm:flex group overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Button content */}
                <div className="relative flex items-center space-x-1 sm:space-x-2">
                  <Scissors className="h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:scale-105 transition-transform duration-300">Book Now</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Button>
            </Link>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 sm:p-3 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
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
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full px-4 py-4 rounded-xl transition-all duration-300 text-sm font-semibold group relative overflow-hidden ${
                        active
                          ? 'text-red-600 bg-gradient-to-r from-red-50 to-red-100'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span>{item.label}</span>
                        {active && (
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  );
                })}
                
                {/* Enhanced Mobile Contact Info */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    <div className="p-2 rounded-full bg-red-50 group-hover:bg-red-100 transition-all duration-300">
                      <Phone className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-semibold group-hover:text-gray-900 transition-colors duration-300">(905) 483-7374</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all duration-300">
                      <MapPin className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">167 Queen Street South, Unit 4</span>
                  </div>
                  <div className="pt-4">
                    <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                      <Button 
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <Scissors className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          <span className="group-hover:scale-105 transition-transform duration-300">Book Now</span>
                        </div>
                      </Button>
                    </Link>
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
