import React from 'react';
import { motion } from 'framer-motion';

interface GiftCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  delay?: number;
}

const GiftCard: React.FC<GiftCardProps> = ({ image, title, category, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="aspect-square relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </motion.div>
  );
};

export default GiftCard;
