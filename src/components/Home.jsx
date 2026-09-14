import React from 'react';
import { ArrowRight, Flower, Asterisk } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#F36F0F] selection:text-white overflow-hidden">
      
      <main className="max-w-7xl mx-auto px-6 mt-12 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="relative">
            
            {/* Title Line 1 */}
            <div className="relative flex items-center">
              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter leading-none text-black z-10">
                EXPLORE
              </h1>

              {/* Badge - Positioned on the far right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center z-20">
                <img 
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=200&auto=format&fit=crop" 
                  alt="Landscape" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#F9F8F6]"
                />
                <div className="w-20 h-20 bg-[#F9F8F6] rounded-full flex items-center justify-center -ml-6 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 animate-spin-slow">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[11px] font-bold tracking-widest uppercase fill-black">
                      <textPath href="#circlePath" startOffset="0%">
                        VIDEO • DEMO •
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-8 h-8 bg-[#F36F0F] rounded-full flex items-center justify-center z-10">
                     <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Title Line 2 */}
            <div className="flex items-center gap-6 mt-2 md:mt-4">
              {/* Orange Arrow Shape */}
              <div className="w-28 h-14 md:w-36 md:h-20 bg-[#F36F0F] rounded-full rounded-bl-none relative shadow-lg shadow-orange-500/20 hidden sm:block">
                <ArrowRight className="text-white absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter leading-none text-black">
                WORLD
              </h1>
            </div>

            {/* Subtext & Icons */}
            <div className="flex items-start gap-6 mt-12 max-w-md">
              <div className="flex gap-2 text-black">
                <Flower size={28} />
                <Asterisk size={28} />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle.
              </p>
            </div>

          </div>

          {/* ================= RIGHT COLUMN - DOME SHAPE ================= */}
          <div className="relative flex justify-center items-end mt-12 lg:mt-0 pt-16">
            
            {/* Wrapper holds image + SVG together so they align perfectly */}
            <div className="relative">
              
              {/* Curved Text SVG - Sits exactly on top of the dome edge */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[520px] md:w-[620px] flex justify-center z-20 pointer-events-none">
                <svg viewBox="0 0 500 300" className="w-full h-auto">
                  <path 
                    id="text-arc" 
                    d="M 50, 250 A 200,200 0 0,1 450,250" 
                    fill="transparent" 
                  />
                  <text className="text-[12px] md:text-[14px] font-semibold tracking-[0.3em] uppercase fill-[#111]">
                    <textPath href="#text-arc" startOffset="50%" textAnchor="middle">
                      FIND THE BEST PLACE TO TRAVEL AND RELAX YOURSELF
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Dome Image Container */}
              <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-t-full overflow-hidden border-t-[8px] border-l-[8px] border-r-[8px] border-[#F9F8F6] shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                  alt="Beach Resort" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 mb-20 items-center">
          
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-16 shrink-0">
               <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=200&auto=format&fit=crop" alt="Travel" className="absolute left-0 bottom-0 w-16 h-16 rounded-full object-cover border-2 border-[#F9F8F6] z-10" />
               <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=200&auto=format&fit=crop" alt="Travel" className="absolute right-0 top-0 w-16 h-16 rounded-full object-cover border-2 border-[#F9F8F6]" />
            </div>
            <div>
              <h3 className="text-4xl font-black text-black">10,000+</h3>
              <p className="text-gray-500 text-sm mt-1">Travel places</p>
            </div>
          </div>

          <div className="bg-white rounded-full p-2 pr-4 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="ml-5">
              <h4 className="font-bold text-base text-black">Features</h4>
              <p className="text-gray-500 text-xs mt-1 pr-4 leading-tight">Places people love to visit more and more time</p>
            </div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=200&auto=format&fit=crop" alt="Feature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <ArrowRight className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Our story</h3>
              <p className="text-gray-500 text-sm max-w-[220px] leading-relaxed">Travel is the movement of people between distant geographical locations.</p>
            </div>
            <div className="w-16 h-16 bg-[#F36F0F] rounded-full rounded-bl-none flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20 cursor-pointer hover:bg-orange-600 transition-colors">
               <ArrowRight className="text-white w-6 h-6" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;