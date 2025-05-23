import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Target, Heart, Users } from 'lucide-react';
import Contact from '@/components/Contact';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-pastel-blue/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Crafting memorable gifting experiences for corporate clients since 2015.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/about-story.jpeg" 
                alt="Our Story" 
                className="w-full h-[500px] object-cover rounded-lg shadow-md"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-pastel-pink rounded-full text-primary text-sm font-medium">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                Creating Thoughtful Gifting Experiences
              </h2>
              <p className="text-muted-foreground">
                Founded in 2015 in the heart of Hyderabad, Kuvaira began with a simple mission: to elevate corporate gifting into an art form that builds meaningful connections between businesses and their stakeholders.
              </p>
              <p className="text-muted-foreground">
                What started as a small boutique operation has grown into a premier gifting service trusted by over 200 corporate clients across India. Our journey has been driven by attention to detail, commitment to quality, and a passion for creating memorable unboxing experiences.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to innovate and expand our collections while maintaining the personalized service and meticulous curation that set us apart from the beginning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-pastel-mint/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Kuvaira.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-lavender flex items-center justify-center mx-auto mb-6">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every gift we curate, ensuring premium quality and attention to detail.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-pink flex items-center justify-center mx-auto mb-6">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Purposeful</h3>
              <p className="text-muted-foreground">
                Each gift is purposefully selected to create a meaningful connection and lasting impression.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-peach flex items-center justify-center mx-auto mb-6">
                <Heart size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Passion</h3>
              <p className="text-muted-foreground">
                We're passionate about creating exceptional gifting experiences that delight and surprise.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-blue flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Relationships</h3>
              <p className="text-muted-foreground">
                We believe in building lasting relationships with our clients through trust and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact-section">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
