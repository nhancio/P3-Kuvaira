import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GiftCard from '@/components/GiftCard';

// Portfolio items data
const portfolioItems = [
  // Festive Collection
  {
    id: "1",
    image: "/images/festive-gift-1.jpeg",
    title: "Diwali Special Box",
    category: "Festive"
  },
  {
    id: "2",
    image: "/images/new-year.png",
    title: "New Year Celebration Kit",
    category: "Festive"
  },
  // Wedding Collection
  {
    id: "3",
    image: "/images/wedding.png",
    title: "Wedding Welcome Kit",
    category: "Wedding"
  },
  {
    id: "4",
    image: "/images/wedding-2.png",
    title: "Couple Gift Set",
    category: "Wedding"
  },
  // Onboarding Collection
  {
    id: "5",
    image: "/images/onboarding-gift-1.jpeg",
    title: "Welcome Kit Premium",
    category: "Onboarding"
  },
  {
    id: "6",
    image: "/images/onboarding-gift-2.jpeg",
    title: "New Joiner Package",
    category: "Onboarding"
  },
  // Electronic Gadgets
  {
    id: "7",
    image: "/images/electronic-gift-1.jfif",
    title: "Tech Essentials Pack",
    category: "Electronic Gadgets"
  },
  {
    id: "8",
    image: "/images/electronic-gift-2.png",
    title: "Smart Workspace Bundle",
    category: "Electronic Gadgets"
  },
  // Hampers
  {
    id: "9",
    image: "/images/hamper-1.jpeg",
    title: "Gourmet Delight Hamper",
    category: "Hampers"
  },
  {
    id: "10",
    image: "/images/hamper-2.jpeg",
    title: "Wellness & Spa Hamper",
    category: "Hampers"
  },
  // Gift Sets
  {
    id: "11",
    image: "/images/hero-gift-collections.jpeg",
    title: "Executive Desk Set",
    category: "Gift Sets"
  },
  {
    id: "12",
    image: "/images/corporate-gift-2.jpeg",
    title: "Premium Stationery Set",
    category: "Gift Sets"
  }
];

// Get unique categories
const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category));
    }
  };

  const handleRequirementsClick = () => {
    navigate('/', { state: { scrollTo: 'contact-section' } });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Portfolio Gallery */}
      <section className="pt-40 py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterItems(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <GiftCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                delay={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-pastel-lavender/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Looking for Something Custom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in creating bespoke gifts tailored to your specific requirements and brand identity.
            </p>
            <button onClick={handleRequirementsClick} className="btn-primary">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
