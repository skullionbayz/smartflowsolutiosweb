import React from 'react';
import { Palette, Mail, Phone, MapPin, Instagram, BookText as TikTok, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D3647] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 text-xl font-bold mb-6">
              <Palette className="h-8 w-8" />
              <span>PixelPerfect</span>
            </a>
            <p className="mb-6 text-gray-300">
              Creating stunning digital experiences that captivate your audience and drive results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] hover:text-[#2D3647] transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTok className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] hover:text-[#2D3647] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] hover:text-[#2D3647] transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-[#FFB3CD] transition-colors">Content Creation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#FFB3CD]" />
                <span>123 Design Street, Creative City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#FFB3CD]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#FFB3CD]" />
                <span>hello@pixelperfect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PixelPerfect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;