import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        observer.observe(el);
      });
    }
    
    return () => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-5xl md:text-6xl font-bold leading-tight mb-6">
              Crafting Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF]">Experiences</span> That Inspire
            </h1>
            <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-xl mb-8">
              We design and develop stunning websites that help businesses stand out in the digital landscape.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 flex flex-col sm:flex-row gap-4">
              <Button size="large">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="large">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Web design team working together" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-r from-[#C7B0CC]/10 via-[#FFB3CD]/10 to-[#E5DEFF]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-[#E5DEFF]/10 via-[#FFB3CD]/10 to-[#C7B0CC]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;