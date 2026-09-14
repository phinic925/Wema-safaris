import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    name: "Jenny Wilson",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    name: "Dennis Borura",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    name: "Mariita Benson",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F9F8F6] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              /* The custom border-radius creates the unique card shape */
              className="bg-white p-8 pt-12 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              style={{ borderRadius: '24px 24px 120px 24px' }}
            >
              
              {/* Quote Icon */}
              <div className="text-[#F36F0F] text-5xl font-serif leading-none mb-8">
                &ldquo;&ldquo;
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-12">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-black text-base">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;