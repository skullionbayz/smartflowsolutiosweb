import React, { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$999',
      description: 'Perfect for small businesses just getting started.',
      features: [
        'Responsive website (up to 5 pages)',
        'Basic SEO optimization',
        'Contact form integration',
        'Mobile-friendly design',
        '1 month of support'
      ]
    },
    {
      name: 'Professional',
      price: '$2,499',
      description: 'Ideal for growing businesses with specific needs.',
      features: [
        'Responsive website (up to 10 pages)',
        'Advanced SEO optimization',
        'Content management system',
        'E-commerce functionality (up to 20 products)',
        'Social media integration',
        '3 months of support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      description: 'Comprehensive solution for established businesses.',
      features: [
        'Custom web application',
        'Unlimited pages',
        'Full e-commerce functionality',
        'Custom animations and interactions',
        'Advanced analytics integration',
        'Performance optimization',
        '6 months of priority support'
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our award-winning design process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 opacity-0 translate-y-10 ${
                plan.popular ? 'border-2 border-[#C7B0CC] relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#C7B0CC] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button fullWidth>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;