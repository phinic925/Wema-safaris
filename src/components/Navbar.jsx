import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full bg-[#F9F8F6] font-sans fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo - Links back to Top of Home */}
        <a href="#home" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-black">
          <div className="w-7 h-7 rounded-full border-[3px] border-black flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          </div>
          UiXSHUVO
        </a>

        {/* Navigation Links - Changed to <a> tags with hash links */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#555555]">
          <a href="#discover" className="hover:text-black transition-colors">Discover</a>
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#about" className="hover:text-black transition-colors">About us</a>
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-black transition-colors">Blog</a>
        </nav>

        {/* Book Now Button */}
        <div>
          <a href="#pricing">
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
              Book Now
            </button>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;