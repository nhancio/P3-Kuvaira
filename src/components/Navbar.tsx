import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Gift } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  // Listen for navigation state containing scroll target
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'py-3 bg-white/90 shadow-lg' 
          : 'py-6 bg-gradient-to-b from-black/20 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity"
          >
            <img 
              src="/logo/3.png" 
              alt="Kuvaira Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-serif font-bold text-black">Kuvaira</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('home-section')}
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio-section')}
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none text-black" // Changed from text-white to text-black
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'max-h-screen opacity-100 py-6' 
              : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            <button 
              onClick={() => scrollToSection('home-section')}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio-section')}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
