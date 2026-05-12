import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a2016] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="FloraVision Logo" className="w-12 h-12 object-contain" />
            <span className="text-3xl font-bold tracking-wide">FloraVision.</span>
          </div>
          <p className="text-[#e5e7eb] text-[15px] font-light leading-relaxed mb-12">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
          <div className="flex gap-6 font-bold text-[15px] tracking-wide">
            <a href="#" className="hover:text-[#b5c977] transition-colors">FB</a>
            <a href="#" className="hover:text-[#b5c977] transition-colors">TW</a>
            <a href="#" className="hover:text-[#b5c977] transition-colors">LI</a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6">Quick Link's</h3>
          <nav className="flex flex-col gap-4 text-[15px] font-light">
            <a href="#" className="underline underline-offset-4 hover:text-[#b5c977] transition-colors">Home</a>
            <a href="#" className="underline underline-offset-4 hover:text-[#b5c977] transition-colors">Type's Of plant's</a>
            <a href="#" className="underline underline-offset-4 hover:text-[#b5c977] transition-colors">Contact</a>
            <a href="#" className="underline underline-offset-4 hover:text-[#b5c977] transition-colors">Privacy</a>
          </nav>
        </div>

        <div className="flex flex-col justify-between max-w-sm w-full">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-left">For Every Update.</h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border sm:border-white/40 rounded-lg overflow-hidden sm:h-12 w-full">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent border border-white/40 sm:border-transparent rounded-lg sm:rounded-none px-4 py-3 sm:py-2 w-full outline-none text-[#d1d5db] font-light text-[14px]"
              />
              <button className="bg-white text-black font-semibold text-[13px] tracking-wide px-6 py-3 sm:py-2 rounded-lg sm:rounded-none hover:bg-gray-200 transition-colors w-full sm:w-auto">
                SUBSCRIBE
              </button>
            </div>
          </div>
          
          <div className="mt-16 md:mt-0 text-left md:text-right">
            <p className="text-[14px] text-[#e5e7eb] font-light">FloraVision © all right reserve</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;