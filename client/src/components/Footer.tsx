import { Link } from 'wouter';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import { services, companyInformation } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-white text-2xl font-bold font-heading">TechCore</span>
              <span className="text-secondary text-xl font-bold font-heading">Solutions</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovative technology solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a 
                href={companyInformation.social.facebook} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href={companyInformation.social.twitter} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href={companyInformation.social.linkedin} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href={companyInformation.social.instagram} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about#team" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services#software" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Software Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  {companyInformation.address.street}<br />
                  {companyInformation.address.city}, {companyInformation.address.state} {companyInformation.address.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-secondary mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">{companyInformation.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-secondary mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">{companyInformation.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} TechCore Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
