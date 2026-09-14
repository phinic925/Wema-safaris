import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    location: 'Colorado, USA',
    title: 'Shadowpeak Canyon',
    price: '240',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
    location: 'Wadi Rum Desert, Jordan',
    title: 'Crimson Rift',
    price: '400',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    location: 'Namib Desert, Namibia',
    title: 'Whispering Dunes',
    price: '300',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    location: 'Svalbard, Norway',
    title: 'Frostveil Summit',
    price: '300',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop',
    location: 'Iceland’s Highlands',
    title: 'The Obsidian Hollow',
    price: '250',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop',
    location: 'Faroe Islands, Denmark',
    title: 'Stormbreaker Isles',
    price: '450',
  },
];

const Discover = () => {
  return (
    <section className="w-full bg-[#F9F8F6] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Discover the world
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {destinations.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="w-full h-64 overflow-hidden rounded-[32px] mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold mb-1">
                <MapPin size={14} className="text-[#F36F0F]" />
                <span>{item.location}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {item.title}
              </h3>

              {/* Orange Price Bar */}
              <div className="w-full bg-[#F36F0F] rounded-2xl py-3 px-5 flex justify-between items-center text-white mt-auto hover:bg-orange-600 transition-colors">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold">${item.price}</span>
                  <span className="text-xs opacity-90">/person</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <span>View Details</span>
                  <ChevronRight size={16} />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Discover;