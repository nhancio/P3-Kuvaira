import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    title: 'Exclusive Corporate Gifts',
    subtitle: 'Thoughtfully curated premium gifts for your business partners'
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    title: 'Bespoke Gift Collections',
    subtitle: 'Customized gift hampers for every occasion'
  },
  {
    id: 3,
    image: '/images/banner3.jpg',
    title: 'Personalized Luxury',
    subtitle: 'Elegant and personalized gifting solutions'
  }
];

const heroSlides = [
  {
    image: '/images/banner1.jpg',
    title: 'Exclusive Corporate Gifts',
    description: 'Thoughtfully curated premium gifts for your business partners',
    primaryButton: {
      text: 'Explore Collection',
      action: () => {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    secondaryButton: {
      text: 'Contact Us',
      action: () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  },
  {
    image: '/images/banner2.jpg',
    title: 'Bespoke Gift Collections',
    description: 'Customized gift hampers for every occasion',
    primaryButton: {
      text: 'Explore Collection',
      action: () => {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    secondaryButton: {
      text: 'Contact Us',
      action: () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  },
  {
    image: '/images/banner3.jpg',
    title: 'Personalized Luxury',
    description: 'Elegant and personalized gifting solutions',
    primaryButton: {
      text: 'Explore Collection',
      action: () => {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    secondaryButton: {
      text: 'Contact Us',
      action: () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Carousel slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
        >
          {/* Background Image with overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white p-6">
            <div className="max-w-4xl text-center space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight animate-slide-up">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button onClick={slide.primaryButton.action} className="btn-primary min-w-[180px]">
                  {slide.primaryButton.text}
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-primary min-w-[180px]" onClick={slide.secondaryButton.action}>
                  {slide.secondaryButton.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-10"
                : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
