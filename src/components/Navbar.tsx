import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home-section' },
  { label: 'Occasions', id: 'occasions-section' },
  { label: 'How It Works', id: 'how-it-works-section' },
  { label: 'About', id: 'about-section' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
      const sectionId = (location.state as { scrollTo: string }).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 150);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#FAF8F4]/92 backdrop-blur-2xl shadow-sm border-b border-[#D9D0C7]/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home-section')}
            className="flex items-center gap-3 group"
          >
            <img src="/logo/3.png" alt="Kuvaira" className="h-9 w-auto" />
            <div className="leading-none">
              <span
                className={`block text-[1.2rem] font-serif font-bold tracking-tight transition-colors duration-400 ${
                  isScrolled ? 'text-[#111111]' : 'text-white'
                }`}
              >
                Kuvaira
              </span>
              <span
                className={`block text-[9px] tracking-[0.22em] uppercase font-medium transition-colors duration-400 ${
                  isScrolled ? 'text-[#111111]/45' : 'text-white/55'
                }`}
              >
                A Signature Touch
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#111111]/65 hover:text-[#111111] hover:bg-[#EEE8E0]'
                    : 'text-white/75 hover:text-white hover:bg-white/12'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/916304408747"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#111111] text-[#FAF8F4] hover:bg-[#1e1e1e] shadow-md hover:shadow-lg'
                  : 'btn-glass'
              }`}
            >
              <MessageCircle size={14} />
              Let's Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'text-[#111111]' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden transition-all duration-350 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-card rounded-2xl p-5 space-y-1">
            {[...navLinks, { label: 'Contact', id: 'contact-section' }].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 text-[#111111] text-sm font-medium rounded-xl hover:bg-[#EEE8E0] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="https://wa.me/916304408747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] text-[#FAF8F4] rounded-full text-sm font-medium hover:bg-[#1e1e1e] transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
              <a
                href="tel:+916304408747"
                className="flex items-center justify-center gap-2 px-5 py-3 border border-[#D9D0C7] text-[#111111] rounded-full text-sm font-medium hover:border-[#111111] transition-colors"
              >
                <Phone size={15} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
