import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Gift, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo/3.png" alt="Kuvaira" className="h-8" />
              <span className="text-2xl font-serif font-bold text-black">Kuvaira</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Premium corporate gifting solutions in Hyderabad, 
              creating memorable experiences through thoughtful and elegant gifts.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_kuvaira_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home-section')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about-section')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-section')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Our Offerings</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-muted-foreground cursor-default">
                  Corporate Gifts
                </span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">
                  Custom Packaging
                </span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">
                  Personalized Gifts
                </span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">
                  Bulk Orders
                </span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">
                  Seasonal Gifting
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/z2DUUC4pezxmpxS59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tulip-D, Star Homes, IDPL, Balanagar,
                  Hyderabad-500054
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+9163044 08747" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 63044 08747
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:shravya@kuvaira.in" className="text-muted-foreground hover:text-primary transition-colors">
                  shravya@kuvaira.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Kuvaira. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
