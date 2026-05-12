import React from 'react';
import { Play, ChevronRight, Star, StarHalf, Search, ShoppingBag, AlignRight } from 'lucide-react';
import pot1 from '../assets/pot1.png';
import ronnie from '../assets/Ronnie.png';
import bgimg from '../assets/bgimg.jpg';
import logo from '../assets/logo.png';
import TrendyPlants from './TrendyPlants';

const Hero = () => {
  return (
    <section 
      className="relative pb-10 w-full overflow-hidden min-h-screen" 
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <header className="relative z-20 flex flex-col gap-6 py-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="FloraVision logo" className="h-10 w-10" />
          <span className="text-2xl font-bold tracking-tight [font-family:Inter] text-white">FloraVision.</span>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-lg font-medium text-[#E8F2DA] md:gap-8 font-['Indie_Flower']">
          <a href="#" className="hover:text-white">Home</a>
          <button className="flex items-center gap-2 hover:text-white" type="button">
            Plants Type
            <span className="text-sm">▾</span>
          </button>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full hover:bg-white/10 p-2 text-white transition" aria-label="Search">
            <Search className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button className="rounded-full hover:bg-white/10 p-2 text-white transition" aria-label="Cart">
            <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button className="rounded-full hover:bg-white/10 p-2 text-white transition" aria-label="Menu">
            <AlignRight className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between px-6 pt-10">
        
        
        <div className="flex flex-col flex-1 pt-10">
          <div className='text-6xl md:text-8xl font-semibold [font-family:Inter] mb-2 text-[#E8F2DA]'>
            Earth's Exhale
          </div>
          <div className='text-lg md:text-lg mb-5 text-[#E8F2DA]/80 max-w-xl'>
            <p>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 mb-24">
            <button className="rounded-xl border border-[#E8F2DA] px-8 py-3 text-lg font-medium text-[#E8F2DA] transition hover:bg-[#E8F2DA] hover:text-[#1B2316]">
              Buy Now
            </button>
            <button className="group flex items-center gap-4 text-[#E8F2DA] transition hover:text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8F2DA] group-hover:bg-white/10">
                <Play className="h-5 w-5 ml-1 fill-current" />
              </span>
              <span className="text-xl font-['Indie_Flower'] tracking-wide">Live Demo...</span>
            </button>
          </div>

          <div className="relative p-4  rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md max-w-[300px] mt-auto">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-gray-800">
                <img src={ronnie} alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-medium">Ronnie Hamill</h4>
                <div className="flex text-yellow-400 gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <StarHalf className="w-3 h-3 fill-current" />
                </div>
              </div>
              
              
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>

        
        <div className="relative w-full max-w-md lg:w-[450px] mt-24 lg:mt-0 mx-auto">
          <div className="relative pb-10 pt-2 px-8 mx-5 min-h-[400px]">
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="card-curve" clipPathUnits="objectBoundingBox">
                  <path d="M 0,0.15 C 0,0.02 0.1,0 0.2,0.04 C 0.35,0.08 0.4,0.12 0.5,0.12 C 0.6,0.12 0.65,0.08 0.8,0.04 C 0.9,0 1,0.02 1,0.15 L 1,0.92 C 1,0.97 0.95,1 0.9,1 L 0.1,1 C 0.05,1 0,0.97 0,0.92 Z" />
                </clipPath>
              </defs>
            </svg>

            <div 
              className="absolute inset-0 bg-white/5 backdrop-blur-xl" 
              style={{ clipPath: 'url(#card-curve)' }}
            ></div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none">
              <path d="M 0,0.15 C 0,0.02 0.1,0 0.2,0.04 C 0.35,0.08 0.4,0.12 0.5,0.12 C 0.6,0.12 0.65,0.08 0.8,0.04 C 0.9,0 1,0.02 1,0.15 L 1,0.92 C 1,0.97 0.95,1 0.9,1 L 0.1,1 C 0.05,1 0,0.97 0,0.92 Z" 
                    fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>

            <div className="relative z-10 flex flex-col pt-4">
              <div className="relative mb-6 flex justify-center mt-[-100px]">
                <img src={pot1} alt="Aglaonema plant" className="w-[300px] h-auto object-contain z-10 drop-shadow-2xl" />
              </div>

              <div className="text-gray-300 text-sm mb-1">Indoor Plant</div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl text-white font-medium tracking-wide">Aglaonema plant</h3>
                <ChevronRight className="w-5 h-5 text-white" />
              </div>

              <div className="flex flex-col gap-10">
                <button className="px-8 py-3 w-max rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition">
                  Buy Now
                </button>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="relative z-10 w-full mt-10">
        <TrendyPlants />
      </div>
    </section>
  );
};

export default Hero;
