import React, { useEffect, useRef } from 'react';

const Ticker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;
    
    const tickerContent = tickerElement.querySelector('.ticker-content');
    if (!tickerContent) return;
    
    // Clone the content for seamless looping
    tickerElement.appendChild(tickerContent.cloneNode(true));
    
    // Start the animation
    const tickerWidth = tickerContent.scrollWidth;
    let position = 0;
    
    const animate = () => {
      position -= 0.5; // Speed of the ticker
      
      // Reset position when first content is fully scrolled
      if (position <= -tickerWidth) {
        position = 0;
      }
      
      tickerElement.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="w-full overflow-hidden bg-[#FEFEFE] border-y border-gray-200 py-4">
      <div className="relative">
        <div ref={tickerRef} className="inline-block whitespace-nowrap">
          <div className="ticker-content inline-block">
            {[
              "Award-winning web design agency",
              "• Transforming ideas into digital experiences",
              "• 100+ satisfied clients worldwide",
              "• Custom web solutions for your business",
              "• Responsive designs for all devices",
              "• SEO-optimized websites",
              "• E-commerce specialists",
              "• Let's create something amazing together"
            ].map((text, index) => (
              <span key={index} className="inline-block mx-8 text-lg font-medium">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;