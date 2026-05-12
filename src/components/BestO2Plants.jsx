import React from 'react';
import vectorgl from '../assets/Vector gl.png';
import vectorgr from '../assets/Vector gr.png';
import rectangle9 from '../assets/Rectangle 9.png';
import pot1 from '../assets/pot1.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BestO2Plants = () => {
  return (
    <section className="bg-[#1a2016] py-20 px-6 md:px-12 lg:px-24">
      <div className="flex justify-center mb-28">
        <div className="relative inline-block px-4 py-2">
          <img src={vectorgl} alt="Corner Decoration" className="absolute -bottom-1 -left-2 w-12 md:w-13 z-0 pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-wide relative z-10">
            Our Best o2
          </h2>
          <img src={vectorgr} alt="Corner Decoration" className="absolute -top-1 -right-2 w-12 md:w-13 z-0 pointer-events-none" />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto relative rounded-[40px] mt-10">
        <img 
          src={rectangle9} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover rounded-[40px] z-0" 
        />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-16 gap-10">
          
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute -top-[120px] md:-top-[160px] lg:-top-[150px] -left-[20px] md:-left-[40px] lg:-left-[100px] w-[300px] md:w-[400px] lg:w-[500px]">
              <img 
                src={pot1} 
                alt="Aglaonema plant" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="h-[250px]  w-full"></div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center text-left mt-10 md:mt-0">
            <h3 className="text-xl md:text-2xl font-medium text-white mb-6 leading-tight">
              We Have Small And Best O2 Plants Collection's
            </h3>
            
            <div className="flex flex-col gap-6 text-[#d1d5db] text-[15px] font-light leading-relaxed">
              <p>
                Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p>
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>
            </div>

            <div className="flex justify-between items-center ">
              <button className="px-8 py-2.5 rounded-lg border border-white/30 text-[#f3f4f6] text-sm hover:bg-white/10 transition-colors">
                Explore
              </button>

              <div className="flex items-center gap-4 text-[#d1d5db] font-light text-sm">
                <ChevronLeft size={18} className="cursor-pointer hover:text-white transition-colors" />
                <span>01/04</span>
                <ChevronRight size={18} className="cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-16">
        <div className="w-6 h-1.5 rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
      </div>

    </section>
  );
};

export default BestO2Plants;