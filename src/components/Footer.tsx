import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-barbershop-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-barber p-3 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl">THE FRESHMAN</h3>
                <p className="text-xs text-barbershop-gray-light font-medium">BARBERSHOP</p>
              </div>
            </div>
            <p className="text-barbershop-gray-light leading-relaxed mb-6">
              Mississauga's premier barbershop experience. Where tradition meets innovation 
              in the art of barbering.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-barber-red/20 p-2 rounded-lg hover:bg-barber-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-barber-blue/20 p-2 rounded-lg hover:bg-barber-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-barber-red/20 p-2 rounded-lg hover:bg-barber-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Home</a></li>
              <li><a href="#services" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Services</a></li>
              <li><a href="#chairs" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Chair Rental</a></li>
              <li><a href="#booking" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Book Now</a></li>
              <li><a href="#" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-barber-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-barbershop-gray-light">167 Queen Street South</p>
                  <p className="text-barbershop-gray-light">Unit 4, Mississauga</p>
                  <p className="text-barbershop-gray-light">Ontario Canada L5M1L2</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-barber-blue" />
                <span className="text-barbershop-gray-light">(905) 123-CUTS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-barber-red" />
                <span className="text-barbershop-gray-light">info@thefreshmanbarbershop.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-barber-blue" />
              Hours
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-white">Monday - Friday</p>
                <p className="text-barbershop-gray-light">9:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Saturday</p>
                <p className="text-barbershop-gray-light">8:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Sunday</p>
                <p className="text-barbershop-gray-light">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-barbershop-gray-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-barbershop-gray-light text-center md:text-left">
              © 2025 The Freshman Barbershop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Privacy Policy</a>
              <a href="#" className="text-barbershop-gray-light hover:text-barber-red transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;