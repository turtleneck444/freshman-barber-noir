import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Chair Rental", href: "#chairs" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
      isScrolled 
        ? 'bg-barbershop-black/95 backdrop-luxury shadow-luxury border-b border-barber-red/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-barber rounded-xl flex items-center justify-center shadow-floating animate-glow-pulse">
              <span className="text-white font-orbitron font-black text-xl">F</span>
            </div>
            <div>
              <h1 className="text-barbershop-white font-orbitron font-bold text-xl">
                THE FRESHMAN
              </h1>
              <p className="text-barber-red text-xs font-medium tracking-widest">
                BARBERSHOP
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-barbershop-white hover:text-barber-red transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-barber-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-barbershop-gray-light">
              <Phone className="h-4 w-4 text-barber-red" />
              <span className="text-sm font-medium">(905) 123-CUTS</span>
            </div>
            <Button className="btn-hero">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-barbershop-white hover:text-barber-red"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-barbershop-black/95 backdrop-luxury border-b border-barber-red/20 animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-barbershop-white hover:text-barber-red transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-barbershop-gray-dark">
                <div className="flex items-center space-x-2 text-barbershop-gray-light mb-4">
                  <Phone className="h-4 w-4 text-barber-red" />
                  <span className="text-sm">(905) 123-CUTS</span>
                </div>
                <Button className="btn-hero w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;