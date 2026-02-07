import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
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

      {/* How Kuvaira Started */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                How Kuvaira Started
              </h2>
              <p className="text-lg text-muted-foreground">
                We exist because gifting became lazy.
              </p>
              <p className="text-xl font-medium">
                Click. Buy. Send. Done.
              </p>
              <p className="text-muted-foreground">
                No thought.<br />No connection.
              </p>
              <p className="text-lg font-medium">
                We decided to change that.
              </p>
              <p className="text-lg text-muted-foreground">
                We help people gift responsibly, smartly, and meaningfully.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-pastel-mint/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                We dream of a world where gifts are not chosen in hurry.
              </p>
              <p className="text-lg text-muted-foreground">
                Where people pause and think:
              </p>
              <p className="text-xl font-serif font-medium italic text-primary">
                “What would really make them happy?”
              </p>
              <p className="text-lg text-muted-foreground">
                We want Kuvaira to be the place people come to when they want to gift from the heart.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                What We Promise
              </h2>
              <p className="text-muted-foreground">We promise to:</p>
              <ul className="space-y-4 text-left">
                {[
                  'Listen before suggesting',
                  'Understand before curating',
                  'Care before packing',
                  'Deliver with honesty',
                  'Grow with our customers',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={14} className="text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium">
                We are here to make gifting meaningful again.
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
