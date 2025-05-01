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
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-primary-dark text-3xl font-bold font-heading">TechCore</span>
            <span className="text-secondary text-2xl font-bold font-heading">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${
                isActive('/') 
                  ? 'text-primary font-medium' 
                  : 'text-gray-800 hover:text-primary font-medium'
              } transition-colors duration-300`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${
                isActive('/about') 
                  ? 'text-primary font-medium' 
                  : 'text-gray-800 hover:text-primary font-medium'
              } transition-colors duration-300`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`${
                    isActive('/services') 
                      ? 'text-primary font-medium' 
                      : 'text-gray-800 hover:text-primary font-medium'
                  } transition-colors duration-300 flex items-center`}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.id} asChild>
                    <Link 
                      href={`/services/${service.id}`}
                      className="w-full px-4 py-2 hover:bg-gray-50 hover:text-primary cursor-pointer"
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
                  ? 'text-primary font-medium' 
                  : 'text-gray-800 hover:text-primary font-medium'
              } transition-colors duration-300`}
            >
              Contact
            </Link>
            
            <Button 
              asChild
              variant="default" 
              className="bg-primary hover:bg-primary-dark text-white rounded-full"
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
            <SheetContent side="right" className="p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-primary-dark text-2xl font-bold font-heading">TechCore</span>
                    <span className="text-secondary text-xl font-bold font-heading">Solutions</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col px-6 py-4 space-y-4">
                <Link 
                  href="/" 
                  className={`text-gray-800 hover:text-primary font-medium py-2 ${
                    isActive('/') ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`text-gray-800 hover:text-primary font-medium py-2 ${
                    isActive('/about') ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-0">
                    <AccordionTrigger className={`text-left py-2 ${
                      isActive('/services') ? 'text-primary' : 'text-gray-800'
                    } hover:text-primary font-medium hover:no-underline`}>
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 mt-2 border-l-2 border-gray-200">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="block py-2 text-gray-700 hover:text-primary"
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
                  className={`text-gray-800 hover:text-primary font-medium py-2 ${
                    isActive('/contact') ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary-dark text-white rounded-full mt-4"
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
