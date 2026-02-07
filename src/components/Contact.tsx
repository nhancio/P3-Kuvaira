import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: "Our Location",
      content: (
        <a
          href="https://maps.app.goo.gl/z2DUUC4pezxmpxS59"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          Tulip-D, Star Homes, IDPL, Balanagar, Hyderabad-500054
        </a>
      )
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Phone Number",
      content: (
        <a href="tel:+916304408747" className="text-muted-foreground hover:text-primary transition-colors">
          +91 63044 08747
        </a>
      )
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email Address",
      content: (
        <a href="mailto:shravya@kuvaira.in" className="text-muted-foreground hover:text-primary transition-colors">
          shravya@kuvaira.in
        </a>
      )
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full max-w-none sm:max-w-none md:max-w-none">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                  Let's Create Something Special
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tell us who you're gifting. Tell us why. We'll take care of the rest.
                </p>
                <div className="mb-10">
                  <a href="#contact-form" className="btn-primary min-w-[200px] inline-flex justify-center">
                    Start Your Gifting Journey
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="p-6 bg-background rounded-lg border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      {item.icon}
                      <h3 className="font-medium text-lg">{item.title}</h3>
                    </div>
                    <div className="text-muted-foreground">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg border border-border"
          >
            <h2 className="text-2xl font-medium mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
