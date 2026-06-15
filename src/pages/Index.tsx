import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, Phone, ChevronLeft, ChevronRight,
  Sparkles, Heart, CheckCircle2, Package, ArrowRight,
} from 'lucide-react';
import Hero from '@/components/HeroCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Data ──────────────────────────────────────────────────────────────────

const occasions = [
  { emoji: '👋', title: 'Employee Onboarding', desc: 'Make first days feel like a warm welcome.' },
  { emoji: '🎉', title: 'Festive Gifting', desc: 'Celebrate every season with something meaningful.' },
  { emoji: '🤝', title: 'Client Appreciation', desc: 'Show gratitude that leaves a lasting impression.' },
  { emoji: '🎤', title: 'Corporate Events', desc: 'Branded moments that people take home.' },
  { emoji: '✨', title: 'Something Unique', desc: "Tell us your vision. We'll make it happen." },
];

const whyKuvaira = [
  {
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    title: 'Thoughtfully Curated',
    desc: 'We select gifts based on your people and purpose, not just your budget.',
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: 'Personalized Experiences',
    desc: "Every detail reflects who you are and who you're gifting.",
  },
  {
    icon: <CheckCircle2 size={22} strokeWidth={1.5} />,
    title: 'Reliable Execution',
    desc: 'On time, every time. No chasing, no last-minute stress.',
  },
  {
    icon: <Package size={22} strokeWidth={1.5} />,
    title: 'Premium Presentation',
    desc: 'From packaging to delivery, the entire experience is flawless.',
  },
];

const steps = [
  { n: '01', title: 'Share Your Requirement', desc: 'Tell us the occasion, quantity, and budget.' },
  { n: '02', title: 'We Curate Ideas', desc: 'We present thoughtful options tailored to your brief.' },
  { n: '03', title: 'Customize & Personalize', desc: 'Your brand, your message, your signature touch.' },
  { n: '04', title: 'Deliver Seamlessly', desc: 'White-glove delivery — right place, right time.' },
];

const occasionImages = [
  { title: 'Employee Onboarding', image: '/images/onboarding.jpeg' },
  { title: 'Festive Gifting', image: '/images/festive-gift-1.jpeg' },
  { title: 'Client Appreciation', image: '/images/corporate-gift-2.jpeg' },
  { title: 'Corporate Events', image: '/images/gourmet-gift-1.jpeg' },
  { title: 'Wedding Gifting', image: '/images/wedding-2.png' },
  { title: 'Custom Creations', image: '/images/customade.jpeg' },
];

const testimonials = [
  {
    text: 'Kuvaira understood our brand in a way no other gifting partner has. The boxes felt like they were made for us — our clients noticed.',
    author: 'Priya Sharma',
    role: 'HR Director, Tech Solutions Inc.',
  },
  {
    text: 'We needed 500 premium gift sets for Diwali. Kuvaira delivered every single one on time, perfectly packaged. Zero stress on our end.',
    author: 'Rajesh Kumar',
    role: 'Marketing Head, Global Finance',
  },
  {
    text: "It wasn't just gifting — it was storytelling. Every detail felt intentional. Our clients actually called to say thank you.",
    author: 'Ananya Desai',
    role: 'CEO, Innovate Studios',
  },
];

const clients = [
  { name: 'Jubilee Hills', logo: '/clients/JUBILEE HILLS (5).png' },
  { name: 'Nhancio', logo: '/clients/Nhancio-logo.png' },
  { name: 'TidyTouch', logo: '/clients/Tidytouch logo-1.png' },
  { name: 'Halmark', logo: '/clients/Halmark_logo-01.png' },
  { name: 'Client 5', logo: '/clients/WhatsApp Image 2025-10-18 at 17.33.31.jpeg' },
  { name: 'Client 6', logo: '/clients/WhatsApp Image 2025-10-18 at 17.33.33.jpeg' },
];

// ─── Fade-in wrapper ────────────────────────────────────────────────────────

const FadeUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Section 2 — What Brings You Here ──────────────────────────────────────

const WhatBringsYouHere = () => (
  <section className="section-py bg-[#EEE8E0]" id="occasions-section">
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <FadeUp className="text-center mb-14">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#111111]/40 mb-4">
          Tell us your need
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
          What brings you here today?
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {occasions.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group"
          >
            <div className="h-full p-6 rounded-2xl glass-card hover:shadow-xl transition-all duration-300 cursor-default">
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {o.emoji}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2 leading-tight">
                {o.title}
              </h3>
              <p className="text-sm text-[#111111]/55 leading-relaxed">
                {o.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 3 — Brand Philosophy ──────────────────────────────────────────

const BrandPhilosophy = () => (
  <section className="section-py bg-[#111111] overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
      <FadeUp>
        <p className="text-white/35 text-xs tracking-[0.25em] uppercase font-medium mb-10">
          Our philosophy
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-10">
          We don't sell gifts.
          <br />
          <span className="italic font-normal text-white/75">
            We create reasons to feel remembered.
          </span>
        </h2>
        <div className="w-16 h-px bg-white/20 mx-auto mb-10" />
        <p className="text-white/55 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-4">
          The best gifts are not measured by their price.
        </p>
        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
          They're remembered because of how they make people feel.
        </p>
      </FadeUp>
    </div>
  </section>
);

// ─── Section 4 — Why Kuvaira ────────────────────────────────────────────────

const WhyKuvaira = () => (
  <section className="section-py bg-[#FAF8F4]" id="about-section">
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <FadeUp className="text-center mb-14">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#111111]/40 mb-4">
          Why us
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111]">
          Why Kuvaira
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyKuvaira.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.1}>
            <div className="h-full p-8 rounded-2xl bg-white border border-[#D9D0C7]/60 hover:border-[#D9D0C7] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#EEE8E0] flex items-center justify-center mb-6 text-[#111111]/70 group-hover:bg-[#D9D0C7] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#111111]/55 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 5 — How It Works ───────────────────────────────────────────────

const HowItWorks = () => (
  <section className="section-py bg-[#EEE8E0]" id="how-it-works-section">
    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <FadeUp className="text-center mb-16">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#111111]/40 mb-4">
          The process
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111]">
          How It Works
        </h2>
      </FadeUp>

      {/* Desktop: horizontal steps */}
      <div className="hidden md:grid grid-cols-4 gap-0 relative">
        {/* Connector line */}
        <div className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-[#D9D0C7] z-0" />

        {steps.map((step, i) => (
          <FadeUp key={step.n} delay={i * 0.12} className="relative z-10 px-4 text-center">
            <div className="w-11 h-11 rounded-full bg-[#111111] text-[#FAF8F4] flex items-center justify-center text-sm font-semibold mx-auto mb-6 shadow-lg">
              {step.n}
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#111111] mb-3 leading-snug">
              {step.title}
            </h3>
            <p className="text-sm text-[#111111]/55 leading-relaxed">
              {step.desc}
            </p>
          </FadeUp>
        ))}
      </div>

      {/* Mobile: vertical steps */}
      <div className="md:hidden space-y-0">
        {steps.map((step, i) => (
          <FadeUp key={step.n} delay={i * 0.1}>
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FAF8F4] flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow">
                  {step.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#D9D0C7] my-2" style={{ minHeight: '2.5rem' }} />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#111111]/55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 6 — Occasions We Serve ────────────────────────────────────────

const OccasionsWeServe = () => (
  <section className="section-py bg-[#FAF8F4]">
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <FadeUp className="text-center mb-14">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#111111]/40 mb-4">
          Our expertise
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111]">
          Occasions We Serve
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {occasionImages.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-40px' }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-default"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/75" />
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl font-semibold text-white leading-snug">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section 7 — Testimonials ───────────────────────────────────────────────

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="section-py bg-[#EEE8E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeUp className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#111111]/40 mb-4">
            Kind words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111]">
            What Our Clients Say
          </h2>
        </FadeUp>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center px-4 md:px-12"
            >
              <div className="font-serif text-6xl text-[#D9D0C7] leading-none mb-6 select-none">
                "
              </div>
              <p className="font-serif text-xl md:text-2xl font-medium text-[#111111] leading-[1.55] mb-8 italic">
                {testimonials[active].text}
              </p>
              <div>
                <p className="font-semibold text-[#111111] text-sm tracking-wide">
                  {testimonials[active].author}
                </p>
                <p className="text-xs text-[#111111]/45 mt-1">
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#D9D0C7] text-[#111111]/60 flex items-center justify-center hover:border-[#111111] hover:text-[#111111] transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-6 h-2 bg-[#111111]'
                      : 'w-2 h-2 bg-[#D9D0C7] hover:bg-[#111111]/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#D9D0C7] text-[#111111]/60 flex items-center justify-center hover:border-[#111111] hover:text-[#111111] transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section 8 — Final CTA ──────────────────────────────────────────────────

const FinalCTA = () => (
  <section className="section-py bg-[#111111]" id="contact-section">
    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
      <FadeUp>
        <p className="text-white/35 text-xs tracking-[0.25em] uppercase font-medium mb-6">
          Ready to begin?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          Let's create something
          <br />
          <span className="italic font-normal text-white/75">people remember.</span>
        </h2>
        <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Whether you're welcoming employees, appreciating clients, or celebrating milestones —
          we'll help you make it meaningful.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+916304408747"
            className="btn-glass gap-2.5 min-w-[172px]"
          >
            <Phone size={15} />
            Talk To Us
          </a>
          <a
            href="https://wa.me/916304408747"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glass gap-2.5 min-w-[172px]"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>

        {/* Contact details */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
          <a href="tel:+916304408747" className="flex items-center gap-2 hover:text-white/70 transition-colors">
            <Phone size={13} />
            +91 63044 08747
          </a>
          <span className="hidden sm:block text-white/20">·</span>
          <a href="mailto:shravya@kuvaira.in" className="hover:text-white/70 transition-colors">
            shravya@kuvaira.in
          </a>
          <span className="hidden sm:block text-white/20">·</span>
          <span>Hyderabad, India</span>
        </div>
      </FadeUp>
    </div>
  </section>
);

// ─── Clients Section ────────────────────────────────────────────────────────

const ClientsSection = () => (
  <section className="py-14 bg-[#FAF8F4] border-t border-[#D9D0C7]/40">
    <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
      <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#111111]/35">
        Trusted by businesses across Hyderabad
      </p>
    </div>
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll w-max">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-14 md:h-18 w-auto object-contain opacity-55 hover:opacity-85 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Page ───────────────────────────────────────────────────────────────────

const Index = () => (
  <div className="min-h-screen bg-[#FAF8F4]">
    <Navbar />
    <Hero />
    <WhatBringsYouHere />
    <BrandPhilosophy />
    <WhyKuvaira />
    <HowItWorks />
    <OccasionsWeServe />
    <Testimonials />
    <FinalCTA />
    <ClientsSection />
    <Footer />
  </div>
);

export default Index;
