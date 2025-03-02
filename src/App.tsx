import React, { useEffect, useState } from 'react';
import { ArrowRight, Instagram, BookText as TikTok, Youtube } from 'lucide-react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import PricingSection from './components/PricingSection';
import Button from './components/Button';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import TickerGallery from './components/TickerGallery';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-[#2D3647]">
      <Navbar />
      
      <main className="pt-20">
        <HeroSection />
        
        <Ticker />
        
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We create stunning digital experiences that captivate your audience and drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Design',
                description: 'Beautiful, responsive websites that look great on any device.',
                icon: '🎨'
              },
              {
                title: 'Development',
                description: 'Custom web applications built with the latest technologies.',
                icon: '💻'
              },
              {
                title: 'Branding',
                description: 'Cohesive brand identity that resonates with your audience.',
                icon: '✨'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="mb-6">{service.description}</p>
                <Button>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
        
        <TickerGallery />
        
        <PricingSection />
        
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Let's create something amazing together. Reach out to discuss your project.
            </p>
            <Button size="large">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;