import React from 'react';

const adventures = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    alt: 'Swiss Mountain Village',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop',
    alt: 'Overwater Bungalows',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    alt: 'Tropical Beach Cove',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxury Resort Pool',
  },
];

const Gallery = () => {
  return (
    <section className="w-full bg-[#F9F8F6] py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight text-center">
            Our Adventure Collection
          </h2>
        </div>

        {/* Gallery Flex Container */}
        <div className="flex justify-center items-center">
          
          {adventures.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                relative overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-105
                /* Perfect circle: equal width/height + rounded-full */
                w-[26%] aspect-square rounded-full shrink-0
                /* Negative margins create the overlap between circles */
                ${index > 0 ? '-ml-[6%]' : ''}
                /* Staggered heights for the wave effect */
                ${index === 1 ? '-mt-16' : ''}
                ${index === 2 ? 'mt-16' : ''}
              `}
              style={{ zIndex: adventures.length - index }}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;