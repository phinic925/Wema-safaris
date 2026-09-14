import React from 'react';

const features = [
  {
    id: '01',
    title: 'Tour guide',
    subtitle: 'Local experts by your side',
    description: 'Explore every destination with our certified local experts who bring hidden gems to life. From historical landmarks to secret trails, our guides ensure you never miss a moment worth remembering.',
  },
  {
    id: '02',
    title: 'Reliable tour',
    subtitle: 'Plans you can trust',
    description: 'Count on us for seamless planning, punctual departures, and trusted partners worldwide. Every itinerary is carefully crafted and fully insured so you can focus purely on the adventure.',
  },
  {
    id: '03',
    title: 'Friendly price',
    subtitle: 'Luxury without the markup',
    description: 'Enjoy premium travel experiences without the premium price tag. Transparent pricing, no hidden fees, and flexible payment plans that fit every budget and every dream.',
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#F9F8F6] py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* ================= HEADING ================= */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 max-w-3xl mx-auto">
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6">
            Why Choose Us
          </h2>
    
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
          
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="relative flex flex-col items-center justify-center text-center py-20 px-8"
            >
              
              {/* SVG Shapes Layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-[140%] h-[140%] md:w-[130%] md:h-[130%]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {index === 0 && (
                      <mask id="mask-1">
                        <rect width="400" height="400" fill="black" />
                        <circle cx="200" cy="200" r="195" fill="white" />
                        <circle cx="-130" cy="200" r="195" fill="black" />
                      </mask>
                    )}

                    {index === 1 && (
                      <mask id="mask-2">
                        <rect width="400" height="400" fill="black" />
                        <circle cx="200" cy="200" r="195" fill="white" />
                        <circle cx="-130" cy="200" r="195" fill="black" />
                      </mask>
                    )}

                    {index === 2 && (
                      <mask id="mask-3">
                        <rect width="400" height="400" fill="black" />
                        <circle cx="200" cy="200" r="195" fill="white" />
                        <circle cx="-130" cy="200" r="195" fill="black" />
                      </mask>
                    )}
                  </defs>

                  <circle 
                    cx="200" 
                    cy="200" 
                    r="195" 
                    fill="white" 
                    mask={index === 0 ? 'url(#mask-1)' : index === 1 ? 'url(#mask-2)' : 'url(#mask-3)'}
                    style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.03))' }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-lg md:text-xl font-semibold text-gray-400 mb-4">
                  {feature.id}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 tracking-tight">
                  {feature.title}
                </h3>

                {/* NEW: Small Description Below Title */}
                <p className="text-[#F36F0F] text-xs md:text-sm font-semibold uppercase tracking-wider mb-5">
                  {feature.subtitle}
                </p>
                
                <p className="text-gray-500 text-sm md:text-base max-w-[240px] leading-relaxed">
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