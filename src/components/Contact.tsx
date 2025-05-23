import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: "Our Location",
      details: [
        <a 
          key="address"
          href="https://maps.app.goo.gl/z2DUUC4pezxmpxS59"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          Tulip-D, Star Homes, IDPL, Balanagar, Hyderabad-500054
        </a>
      ]
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Phone Number",
      details: ["+91 63044 08747"]
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email Address",
      details: ["shravya@kuvaira.in"]
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
                <h2 className="text-3xl font-medium mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground mb-10">
                  Whether you have a question about our products, custom orders, or want to discuss a bulk order for your next corporate event, our team is here to help.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="p-6 bg-background rounded-lg border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      {item.icon}
                      <h3 className="font-medium text-lg">{item.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
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
