import React, { useEffect, useRef } from 'react';

interface TickerGalleryItem {
  image: string;
  title: string;
  category: string;
}

const TickerGallery = () => {
  const tickerRef1 = useRef<HTMLDivElement>(null);
  const tickerRef2 = useRef<HTMLDivElement>(null);
  
  const galleryItems: TickerGalleryItem[] = [
    {
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Modern E-commerce",
      category: "Web Design"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Corporate Rebrand",
      category: "Branding"
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Creative Portfolio",
      category: "Development"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      title: "Analytics Dashboard",
      category: "Web App"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Mobile App Design",
      category: "UI/UX"
    },
    {
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
      title: "Restaurant Website",
      category: "Web Design"
    }
  ];
  
  const galleryItems2: TickerGalleryItem[] = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Fitness App",
      category: "Mobile Design"
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Travel Blog",
      category: "Web Design"
    },
    {
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
      title: "Online Store",
      category: "E-commerce"
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Finance Dashboard",
      category: "Web App"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Business Consulting",
      category: "Corporate Site"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Real Estate Platform",
      category: "Web Design"
    }
  ];
  
  useEffect(() => {
    // First ticker (left to right)
    const tickerElement1 = tickerRef1.current;
    if (tickerElement1) {
      const tickerContent = tickerElement1.querySelector('.ticker-gallery-content');
      if (tickerContent) {
        tickerElement1.appendChild(tickerContent.cloneNode(true));
        
        const tickerWidth = tickerContent.scrollWidth;
        let position = 0;
        
        const animate = () => {
          position -= 0.5; // Speed of the ticker
          
          if (position <= -tickerWidth) {
            position = 0;
          }
          
          tickerElement1.style.transform = `translateX(${position}px)`;
          requestAnimationFrame(animate);
        };
        
        const animationId = requestAnimationFrame(animate);
        
        return () => {
          cancelAnimationFrame(animationId);
        };
      }
    }
  }, []);
  
  useEffect(() => {
    // Second ticker (right to left)
    const tickerElement2 = tickerRef2.current;
    if (tickerElement2) {
      const tickerContent = tickerElement2.querySelector('.ticker-gallery-content');
      if (tickerContent) {
        tickerElement2.appendChild(tickerContent.cloneNode(true));
        
        const tickerWidth = tickerContent.scrollWidth;
        let position = 0;
        
        const animate = () => {
          position += 0.5; // Opposite direction
          
          if (position >= 0) {
            position = -tickerWidth;
          }
          
          tickerElement2.style.transform = `translateX(${position}px)`;
          requestAnimationFrame(animate);
        };
        
        const animationId = requestAnimationFrame(animate);
        
        return () => {
          cancelAnimationFrame(animationId);
        };
      }
    }
  }, []);
  
  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Take a look at some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>
      </div>
      
      {/* First ticker - left to right */}
      <div className="w-full overflow-hidden mb-6">
        <div className="relative">
          <div ref={tickerRef1} className="inline-block whitespace-nowrap">
            <div className="ticker-gallery-content inline-block">
              {galleryItems.map((item, index) => (
                <div 
                  key={index} 
                  className="inline-block w-[280px] h-[250px] mx-3 rounded-2xl overflow-hidden shadow-lg relative group"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-sm font-medium text-[#FFB3CD]">{item.category}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Second ticker - right to left */}
      <div className="w-full overflow-hidden">
        <div className="relative">
          <div ref={tickerRef2} className="inline-block whitespace-nowrap">
            <div className="ticker-gallery-content inline-block">
              {galleryItems2.map((item, index) => (
                <div 
                  key={index} 
                  className="inline-block w-[280px] h-[250px] mx-3 rounded-2xl overflow-hidden shadow-lg relative group"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-sm font-medium text-[#FFB3CD]">{item.category}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TickerGallery;