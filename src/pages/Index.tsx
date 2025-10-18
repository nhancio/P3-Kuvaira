import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroCarousel from '@/components/HeroCarousel';
import GiftCard from '@/components/GiftCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Gift, Clock, Package, Users, ArrowRight, Star } from 'lucide-react';

// Featured products data
const featuredProducts = [
  {
    id: "1",
    image: "/images/festive-gift-1.jpeg",
    title: "Diwali Special Box",
    category: "Festive"
  },
  {
    id: "2",
    image: "/images/onboarding-gift-1.jpeg",
    title: "Welcome Kit Premium",
    category: "Onboarding"
  },
  {
    id: "3",
    image: "/images/electronic-gift-1.jfif",
    title: "Tech Essentials Pack",
    category: "Electronic Gadgets"
  },
  {
    id: "4",
    image: "/images/hamper-1.jpeg",
    title: "Gourmet Delight Hamper",
    category: "Hampers"
  }
];

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
    logo: "/clients/nhancio-logo.png"
  },
  {
    id: 3,
    name: "TidyTouch",
    logo: "/clients/Tidytouch logo-1.png"
  },
  {
    id: 4,
    name: "Client 4",
    logo: "/clients/WhatsApp Image 2025-10-18 at 17.33.31.jpeg"
  },
  {
    id: 5,
    name: "Client 5",
    logo: "/clients/WhatsApp Image 2025-10-18 at 17.33.33.jpeg"
  }
];

const ClientsSection = () => (
  <section className="pt-8 pb-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Our Clients</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted by leading organizations for their corporate gifting needs.
        </p>
      </div>
      
      {/* Smooth scrolling carousel */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-32 w-auto object-contain hover:scale-110 hover:shadow-lg transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <div
              key={`duplicate-${client.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-32 w-auto object-contain hover:scale-110 hover:shadow-lg transition-all duration-300"
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
      
      {/* Portfolio Section */}
      <section id="portfolio-section" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif font-semibold mb-4"
              >
                Our Portfolio
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Explore our most popular corporate gifting collections, designed to impress.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/portfolio" className="text-primary font-medium flex items-center gap-2 hover:underline">
                <span>View All Collections</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <GiftCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about-section" className="py-20 bg-pastel-mint/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">About Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discovered in the meaning of "Kuvaira"—the truly unique and rare—our signature touch transforms the art of giving into an emotional journey. Each handcrafted gift carries warmth that lingers long after the moment passes, blending luxurious elements with personal sentiment that speaks directly to the heart. In a world of fleeting exchanges, we craft lasting impressions through packages that tell sophisticated stories. Kuvaira doesn't simply deliver gifts; we create unforgettable experiences where every gesture is not just exchanged, but deeply felt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
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
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
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
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
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
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
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
      
      {/* Contact Section */}
      <section id="contact-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us to discuss your corporate gifting needs.
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
