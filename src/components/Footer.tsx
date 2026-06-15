import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF8F4] border-t border-[#D9D0C7]/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-14 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <img src="/logo/3.png" alt="Kuvaira" className="h-9 w-auto" />
              <div className="leading-none">
                <span className="block text-[1.15rem] font-serif font-bold text-[#111111]">
                  Kuvaira
                </span>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-[#111111]/40 font-medium">
                  A Signature Touch
                </span>
              </div>
            </div>
            <p className="text-sm text-[#111111]/50 leading-relaxed max-w-xs">
              Premium corporate gifting from Hyderabad — creating memorable experiences
              through thoughtful, beautifully presented gifts.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/_kuvaira_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#D9D0C7] flex items-center justify-center text-[#111111]/50 hover:text-[#111111] hover:border-[#111111] transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#D9D0C7] flex items-center justify-center text-[#111111]/50 hover:text-[#111111] hover:border-[#111111] transition-all"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#111111]/40">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home-section' },
                { label: 'Occasions', id: 'occasions-section' },
                { label: 'How It Works', id: 'how-it-works-section' },
                { label: 'About Us', id: 'about-section' },
                { label: 'Contact', id: 'contact-section' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-[#111111]/55 hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#111111]/40">
              What We Do
            </h3>
            <ul className="space-y-3">
              {[
                'Employee Onboarding Kits',
                'Festive Corporate Gifting',
                'Client Appreciation',
                'Event Gifting',
                'Custom & Branded Gifts',
                'Wedding Return Gifts',
              ].map((service) => (
                <li key={service} className="text-sm text-[#111111]/50">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#111111]/40">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+916304408747"
                  className="flex items-start gap-3 text-sm text-[#111111]/55 hover:text-[#111111] transition-colors group"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#111111]" />
                  +91 63044 08747
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/916304408747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#111111]/55 hover:text-[#111111] transition-colors group"
                >
                  <svg
                    className="mt-0.5 flex-shrink-0 w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.522 5.845L0 24l6.351-1.502A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.875 0-3.632-.492-5.155-1.352l-.371-.214-3.773.892.906-3.677-.235-.388A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:shravya@kuvaira.in"
                  className="flex items-start gap-3 text-sm text-[#111111]/55 hover:text-[#111111] transition-colors group"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  shravya@kuvaira.in
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/z2DUUC4pezxmpxS59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#111111]/55 hover:text-[#111111] transition-colors group"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  <span>Tulip-D, Star Homes, IDPL,<br />Balanagar, Hyderabad — 500054</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#D9D0C7]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#111111]/35">
          <p>© {new Date().getFullYear()} Kuvaira. All rights reserved.</p>
          <p>Made with care in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
