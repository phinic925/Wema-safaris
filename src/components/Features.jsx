import React from 'react';

const features = [
  {
    id: '01',
    title: 'Tour guide',
    description: 'Our best feature for the customer who believe',
  },
  {
    id: '02',
    title: 'Reliable tour',
    description: 'Our best feature for the customer who believe',
  },
  {
    id: '03',
    title: 'Friendly price',
    description: 'Our best feature for the customer who believe',
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#F9F8F6] py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
          
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="relative flex flex-col items-center justify-center text-center py-16 px-4"
            >
              {/* 
                The Wavy Background Effect:
                We use two overlapping circles (one white, one background color) 
                to create the illusion of a wavy, scalloped edge.
              */}
              
              {/* Main White Shape Container */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                {/* Central White Circle */}
                <div className="w-[120%] h-[120%] bg-white rounded-full"></div>
                
                {/* Side Cutout Circles (Creates the wave) */}
                {/* Top/Bottom cutouts for the middle item */}
                {index === 1 && (
                  <>
                    <div className="absolute -left-[30%] top-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#F9F8F6] rounded-full"></div>
                    <div className="absolute -right-[30%] top-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#F9F8F6] rounded-full"></div>
                  </>
                )}
                
                {/* Right cutout for the first item */}
                {index === 0 && (
                  <div className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#F9F8F6] rounded-full"></div>
                )}

                {/* Left cutout for the last item */}
                {index === 2 && (
                  <div className="absolute -left-[35%] top-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#F9F8F6] rounded-full"></div>
                )}
              </div>

              {/* Content (Z-index to sit above the shapes) */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Number */}
                <span className="text-xl md:text-2xl font-semibold text-gray-400 mb-2">
                  {feature.id}
                </span>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;