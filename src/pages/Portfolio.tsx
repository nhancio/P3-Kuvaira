import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GiftCard from '@/components/GiftCard';

// Collection display names and taglines (category value -> display info)
const collectionInfo: Record<string, { name: string; taglines: string[] }> = {
  "Onboarding": { name: "First Impressions (Onboarding)", taglines: ["Welcome them right.", "First days matter."] },
  "Festive": { name: "Festive Favourites", taglines: ["Festive. Done better.", "Not the usual."] },
  "Client Gifting": { name: "Client Privileges", taglines: ["Respect, delivered.", "Loyalty starts here."] },
  "Custom Made": { name: "Signature Customs", taglines: ["Made your way.", "No templates."] },
  "Wedding": { name: "Wedding Keepsakes (Return Gifts)", taglines: ["Remembered forever.", "Worth keeping."] },
  "Electronic Gadgets": { name: "Smart Essentials", taglines: ["Use it daily.", "Smart gifting."] },
  "Hampers": { name: "Hampers", taglines: [] },
  "Gift Sets": { name: "Gift Sets", taglines: [] },
};

// Portfolio items data
const portfolioItems = [
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
  {
    id: "3",
    image: "/images/gifts.jpeg",
    title: "Wedding Welcome Kit",
    category: "Wedding"
  },
  {
    id: "4",
    image: "/images/gifts.jpeg",
    title: "Couple Gift Set",
    category: "Wedding"
  },
  {
    id: "5",
    image: "/images/onboarding.jpeg",
    title: "Welcome Kit Premium",
    category: "Onboarding"
  },
  {
    id: "6",
    image: "/images/onboarding.jpeg",
    title: "New Joiner Package",
    category: "Onboarding"
  },
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

// Get unique categories with "All" first
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
      
      {/* Our Collections */}
      <section className="pt-40 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Our Collections</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our curated gift collections. Each one tells a story.
            </p>
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
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
                {category === "All" ? "All" : (collectionInfo[category]?.name ?? category)}
              </button>
            ))}
          </div>
          {/* Taglines when a specific category is selected */}
          {activeCategory !== "All" && collectionInfo[activeCategory]?.taglines?.length > 0 && (
            <div className="text-center mb-10">
              <p className="text-muted-foreground italic">
                {collectionInfo[activeCategory].taglines.join(' · ')}
              </p>
            </div>
          )}
          
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
              Let's Create Something Special
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us who you're gifting. Tell us why. We'll take care of the rest.
            </p>
            <button onClick={handleRequirementsClick} className="btn-primary">
              Start Your Gifting Journey
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
