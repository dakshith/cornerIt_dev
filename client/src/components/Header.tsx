import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/constants';

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if the current location matches the given href
  const isActive = (href: string) => {
    if (href === '/') {
      return location === href;
    }
    return location.startsWith(href);
  };

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/100 dark:bg-slate-900/80 shadow-lg py-2' 
          : 'backdrop-blur-md bg-white/100 dark:bg-slate-900/80 shadow-lg py-2'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={`w-full h-full transition-opacity duration-300 ${isScrolled ? 'opacity-20' : 'opacity-20'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2A1AD8] via-[#7231EC] to-[#B94BFF]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <span className="bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text text-3xl font-bold font-heading">Cornerstone</span>
            <span className="bg-gradient-to-r from-[#7231EC] to-[#B94BFF] text-transparent bg-clip-text text-2xl font-bold font-heading">IT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${
                isActive('/') 
                  ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium'
              } transition-colors duration-300 relative group`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] transition-all duration-300 group-hover:w-full ${isActive('/') ? 'w-full' : ''}`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium'
              } transition-colors duration-300 relative group`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] transition-all duration-300 group-hover:w-full ${isActive('/about') ? 'w-full' : ''}`}></span>
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`${
                    isActive('/services') 
                      ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' 
                      : 'text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium'
                  } transition-colors duration-300 flex items-center relative group`}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] transition-all duration-300 group-hover:w-full ${isActive('/services') ? 'w-full' : ''}`}></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-xl p-1 dark:bg-slate-900/90 dark:border-slate-800">
                {services.map((service) => (
                  <DropdownMenuItem key={service.id} asChild>
                    <Link 
                      href={`/services/${service.id}`}
                      className="w-full rounded-lg px-4 py-2 hover:bg-gray-50/80 dark:hover:bg-slate-800/80 hover:text-[#7231EC] cursor-pointer"
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/contact" 
              className={`${
                isActive('/contact') 
                  ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium'
              } transition-colors duration-300 relative group`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] transition-all duration-300 group-hover:w-full ${isActive('/contact') ? 'w-full' : ''}`}></span>
            </Link>
            
            <Button 
              asChild
              variant="default" 
              className="bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] hover:opacity-90 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-xl border border-white/20"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 bg-white/95 backdrop-blur-lg dark:bg-slate-900/95">
              <SheetHeader className="p-6 border-b border-gray-100 dark:border-slate-800">
                <SheetTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text text-2xl font-bold font-heading">Cornerstone</span>
                    <span className="bg-gradient-to-r from-[#7231EC] to-[#B94BFF] text-transparent bg-clip-text text-xl font-bold font-heading">IT</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col px-6 py-6 space-y-5">
                <Link 
                  href="/" 
                  className={`text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium py-2 border-b border-gray-100 dark:border-slate-800 ${
                    isActive('/') ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium py-2 border-b border-gray-100 dark:border-slate-800 ${
                    isActive('/about') ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b border-gray-100 dark:border-slate-800">
                    <AccordionTrigger className={`text-left py-2 ${
                      isActive('/services') 
                        ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' 
                        : 'text-gray-800 dark:text-gray-200 hover:text-[#7231EC]'
                    } font-medium hover:no-underline`}>
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 mt-2 border-l-2 border-[#7231EC]/20">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="block py-2.5 text-gray-700 dark:text-gray-300 hover:text-[#7231EC]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Link 
                  href="/contact" 
                  className={`text-gray-800 dark:text-gray-200 hover:text-[#7231EC] font-medium py-2 border-b border-gray-100 dark:border-slate-800 ${
                    isActive('/contact') ? 'bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] text-transparent bg-clip-text font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] hover:opacity-90 text-white rounded-full mt-4 border border-white/20 shadow-md transition-all duration-300"
                >
                  <Link 
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
