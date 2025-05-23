
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-pastel-pink">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
