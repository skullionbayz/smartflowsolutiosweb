import React, { useState, useEffect } from 'react';
import { Palette, Instagram, BookText as TikTok, Youtube, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <Palette className="h-8 w-8" />
            <span>PixelPerfect</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-[#C7B0CC] transition-colors">Home</a>
            <a href="#" className="font-medium hover:text-[#C7B0CC] transition-colors">Services</a>
            <a href="#" className="font-medium hover:text-[#C7B0CC] transition-colors">Pricing</a>
            <a href="#" className="font-medium hover:text-[#C7B0CC] transition-colors">Portfolio</a>
            <a href="#" className="font-medium hover:text-[#C7B0CC] transition-colors">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTok className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <a href="#" className="block font-medium hover:text-[#C7B0CC]">Home</a>
            <a href="#" className="block font-medium hover:text-[#C7B0CC]">Services</a>
            <a href="#" className="block font-medium hover:text-[#C7B0CC]">Pricing</a>
            <a href="#" className="block font-medium hover:text-[#C7B0CC]">Portfolio</a>
            <a href="#" className="block font-medium hover:text-[#C7B0CC]">Contact</a>
            
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF]"
                aria-label="TikTok"
              >
                <TikTok className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF]"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;