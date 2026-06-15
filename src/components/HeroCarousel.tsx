import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="home-section">
      {/* Hero image */}
      <img
        src="/images/hero-corporate-gifts.jpeg"
        alt="Premium corporate gifting by Kuvaira"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Layered gradient overlay — warm dark at bottom, cooler at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/38 to-black/65 z-10" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/55 text-xs font-medium tracking-[0.28em] uppercase mb-8"
          >
            Kuvaira — A Signature Touch
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.06] tracking-tight mb-8"
          >
            Need gifting for your
            <br />
            <em className="not-italic font-normal text-white/88">team, clients,</em>
            <br />
            or event?
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
            className="text-white/68 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-lg mx-auto"
          >
            Tell us the occasion.
            <br />
            We'll handle the rest.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToContact}
              className="btn-glass gap-2.5 min-w-[172px]"
            >
              <Phone size={15} />
              Let's Talk
            </button>
            <a
              href="https://wa.me/916304408747"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glass gap-2.5 min-w-[172px]"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/35 text-[10px] tracking-[0.25em] uppercase font-medium">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
