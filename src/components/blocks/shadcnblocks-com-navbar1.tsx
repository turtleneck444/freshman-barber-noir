import { Book, Menu, Sunset, Trees, Zap, Scissors, Award, Star, MapPin, Phone, Clock, User, Calendar, Sparkles, ChevronDown, ArrowRight, Crown, Shield, Gem, Brush, Eye, HairDryer, Feather } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-white to-slate-50/50 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden justify-between items-center lg:flex py-3">
          {/* Logo Section - Image Only */}
          <div className="flex items-center gap-8">
            <a href={logo.url} className="flex items-center group">
              <img 
                src={logo.src} 
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105" 
                alt={logo.alt} 
                style={{ maxHeight: '48px', objectFit: 'contain' }}
              />
            </a>
            
            {/* Navigation Menu */}
            <div className="flex items-center">
              <NavigationMenu className="relative">
                <NavigationMenuList className="flex space-x-1">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          {/* Right Section - Phone Number and Auth Buttons */}
          <div className="flex items-center gap-6">
            {/* Phone Number */}
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>(905) 123-CUTS</span>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-4 py-2 transition-all duration-200 hover:scale-105"
              >
                <a href={auth.login.url}>{auth.login.text}</a>
              </Button>
              <Button 
                asChild 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-5 py-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <a href={auth.signup.url} className="flex items-center gap-1.5">
                  {auth.signup.text}
                  <ArrowRight className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between py-3">
            <a href={logo.url} className="flex items-center group">
              <img 
                src={logo.src} 
                className="h-10 w-auto transition-all duration-300" 
                alt={logo.alt} 
                style={{ maxHeight: '40px', objectFit: 'contain' }}
              />
            </a>
            
            {/* Mobile Phone and Menu */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-gray-700">
                <Phone className="h-3 w-3 text-blue-600" />
                <span className="text-xs font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>(905) 123-CUTS</span>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 h-9 w-9"
                  >
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-white z-50 border-l border-gray-200">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center">
                        <img 
                          src={logo.src} 
                          className="h-10 w-auto" 
                          alt={logo.alt} 
                          style={{ maxHeight: '40px', objectFit: 'contain' }}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-4 flex flex-col gap-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-2"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="border-t border-gray-200 py-3">
                      <div className="grid grid-cols-2 justify-start gap-2">
                        {mobileExtraLinks.map((link, idx) => (
                          <a
                            key={idx}
                            className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                            href={link.url}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 h-9">
                        <a href={auth.login.url}>{auth.login.text}</a>
                      </Button>
                      <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-9">
                        <a href={auth.signup.url} className="flex items-center justify-center gap-1.5">
                          {auth.signup.text}
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="relative">
        <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium bg-transparent hover:bg-blue-50 rounded-lg px-3 py-2 transition-all duration-200 group text-sm">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute top-full left-0 w-screen max-w-4xl z-50">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 mx-4 mt-2">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Our Premium Services
              </h2>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Professional grooming services designed for the modern gentleman
              </p>
            </div>

            {/* 2-Column Services Grid */}
            <div className="grid grid-cols-2 gap-6">
              {item.items.map((subItem, index) => (
                <div key={subItem.title} className="group">
                  <a
                    className="flex items-start gap-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-slate-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100 hover:border-blue-200 bg-gradient-to-br from-white to-gray-50"
                    href={subItem.url}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-sm">
                      <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        {subItem.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-3">
                          {subItem.description}
                        </p>
                      )}
                      <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Ready for Your Next Cut?
                    </h3>
                    <p className="text-gray-600 text-sm mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      Book your appointment today and experience the difference
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Same-day appointments available</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-9 w-max items-center justify-center rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-medium hover:no-underline text-gray-900 hover:text-blue-600 transition-colors duration-200 text-sm">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-1">
          <div className="space-y-1">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none gap-3 rounded-lg p-2 leading-none outline-none transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 group"
                href={subItem.url}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                  <div className="text-blue-600">
                    {subItem.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    {subItem.title}
                  </div>
                  {subItem.description && (
                    <p className="text-xs leading-snug text-gray-600 group-hover:text-gray-700 transition-colors duration-200 mt-1">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a 
      key={item.title} 
      href={item.url} 
      className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 py-1 text-sm"
    >
      {item.title}
    </a>
  );
};

export { Navbar1 };
