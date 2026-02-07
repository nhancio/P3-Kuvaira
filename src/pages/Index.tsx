import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroCarousel from '@/components/HeroCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Gift, Clock, Package, Users, ArrowRight } from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "Kuvaira provided exceptional service for our company event. The customized gift boxes were elegant and perfectly aligned with our brand identity.",
    author: "Priya Sharma",
    position: "HR Director, Tech Solutions Inc."
  },
  {
    id: 2,
    text: "We needed 500 premium gift sets for our clients during Diwali, and Kuvaira delivered beyond expectations. The attention to detail was impressive.",
    author: "Rajesh Kumar",
    position: "Marketing Head, Global Finance"
  },
  {
    id: 3,
    text: "The personalized touch that Kuvaira adds to every product makes them stand out. Our clients loved the thoughtful corporate gifts.",
    author: "Ananya Desai",
    position: "CEO, Innovate Studios"
  }
];

// Our Collections with taglines
const collections = [
  {
    id: 'onboarding',
    name: 'First Impressions',
    category: 'Onboarding',
    taglines: ['Welcome them right.', 'First days matter.'],
    image: '/images/onboarding.jpeg',
  },
  {
    id: 'festive',
    name: 'Festive Favourites',
    category: 'Festive',
    taglines: ['Festive. Done better.', 'Not the usual.'],
    image: '/images/festive-gift-1.jpeg',
  },
  {
    id: 'client',
    name: 'Client Privileges',
    category: 'Client Gifting',
    taglines: ['Respect, delivered.', 'Loyalty starts here.'],
    image: '/images/corporate-gift-2.jpeg',
  },
  {
    id: 'custom',
    name: 'Signature Customs',
    category: 'Custom Made',
    taglines: ['Made your way.', 'No templates.'],
    image: '/images/customade.jpeg',
  },
  {
    id: 'wedding',
    name: 'Wedding Keepsakes',
    category: 'Return Gifts',
    taglines: ['Remembered forever.', 'Worth keeping.'],
    image: '/images/gifts.jpeg',
  },
  {
    id: 'electronic',
    name: 'Smart Essentials',
    category: 'Electronic Gadgets',
    taglines: ['Use it daily.', 'Smart gifting.'],
    image: '/images/electronic-gift-1.jfif',
  },
];

// Add clients data
const clients = [
  {
    id: 1,
    name: "Jubilee Hills",
    logo: "/clients/JUBILEE HILLS (5).png"
  },
  {
    id: 2,
    name: "Nhancio",
    logo: "/clients/Nhancio-logo.png"
  },
  {
    id: 3,
    name: "TidyTouch",
    logo: "/clients/Tidytouch logo-1.png"
  },
  {
    id: 4,
    name: "Halmark",
    logo: "/clients/Halmark_logo-01.png"
  },
  {
    id: 5,
    name: "Client 5",
    logo: "/clients/WhatsApp Image 2025-10-18 at 17.33.31.jpeg"
  },
  {
    id: 6,
    name: "Client 6",
    logo: "/clients/WhatsApp Image 2025-10-18 at 17.33.33.jpeg"
  }
];

const ClientsSection = () => (
  <section className="pt-8 pb-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-semibold mb-4">Our Clients</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted by leading organizations for their corporate gifting needs.
        </p>
      </div>

      {/* Smooth scrolling carousel */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll w-max">
          {/* First set of logos */}
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-20 md:h-32 w-auto object-contain hover:scale-110 hover:shadow-lg transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <div
              key={`duplicate-${client.id}`}
              className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-20 md:h-32 w-auto object-contain hover:scale-110 hover:shadow-lg transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home-section" className="relative">
        <HeroCarousel />
      </section>

      {/* Our Collections */}
      <section id="portfolio-section" className="py-12 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-5xl font-serif font-semibold mb-4"
            >
              Our Collections
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {collections.map((col, index) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link to="/portfolio" className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all h-full">
                  <div className="aspect-[4/3] relative">
                    <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-primary font-medium mb-1">{col.category}</p>
                    <h3 className="font-serif font-semibold text-lg mb-2">{col.name}</h3>
                    <p className="text-sm text-muted-foreground italic">
                      {col.taglines.join(' ')}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/portfolio" className="text-primary font-medium inline-flex items-center gap-2 hover:underline">
              <span>View All Collections</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* You think about gifting. We think about everything else. */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground mb-4"
            >
              You think about gifting.
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-5xl font-serif font-semibold mb-10"
            >
              We think about everything else.
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 text-base md:text-lg text-muted-foreground text-left max-w-md mx-auto"
            >
              <li>From selecting products</li>
              <li>To matching personalities</li>
              <li>To packaging with care</li>
              <li>To delivering on time</li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 text-lg md:text-xl font-medium"
            >
              So when it reaches them…
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-semibold text-primary"
            >
              It feels special.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground"
            >
              Every single time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="py-12 md:py-20 bg-pastel-mint/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-semibold mb-4">About Us</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discovered in the meaning of "Kuvaira"—the truly unique and rare—our signature touch transforms the art of giving into an emotional journey. Each handcrafted gift carries warmth that lingers long after the moment passes, blending luxurious elements with personal sentiment that speaks directly to the heart. In a world of fleeting exchanges, we craft lasting impressions through packages that tell sophisticated stories. Kuvaira doesn't simply deliver gifts; we create unforgettable experiences where every gesture is not just exchanged, but deeply felt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-lavender flex items-center justify-center mx-auto mb-6">
                <Gift size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully curated high-quality products that leave a lasting impression.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-pink flex items-center justify-center mx-auto mb-6">
                <Package size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Custom Packaging</h3>
              <p className="text-muted-foreground">
                Bespoke packaging solutions tailored to your brand identity.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-blue flex items-center justify-center mx-auto mb-6">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Efficient logistics ensuring your gifts arrive exactly when needed.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-peach flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Personalized assistance throughout your gifting journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Fix Your Gifting Decisions */}
      <section className="py-16 md:py-24 bg-pastel-lavender/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-sm font-medium tracking-wide text-primary uppercase">
                How we help
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-center text-foreground mb-12"
            >
              We Fix Your Gifting Decisions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border shadow-sm p-8 md:p-10 mb-10"
            >
              <div className="text-center space-y-4 mb-8">
                <p className="text-base md:text-lg text-muted-foreground">
                  You come with: <span className="font-medium text-foreground">&ldquo;I need gifts.&rdquo;</span>
                </p>
                <p className="text-base md:text-lg font-medium text-primary">
                  We turn it into: <span className="italic">&ldquo;This is perfect.&rdquo;</span>
                </p>
              </div>
              <p className="text-center text-muted-foreground text-sm md:text-base mb-5">
                By understanding:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                {['Your purpose', 'Your budget', 'Your people', 'Your image'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Start Your Gifting Journey Section */}
      <section id="contact-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-serif font-semibold mb-4">Start Your Gifting Journey</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us who you're gifting and why—we'll take care of the rest.
            </p>
          </div>
        </div>
        <Contact />
      </section>

      {/* Clients Section */}
      <ClientsSection />

      <Footer />
    </div>
  );
};

export default Index;
