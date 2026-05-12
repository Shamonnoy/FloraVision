import React from 'react';
import { ShoppingBag } from 'lucide-react';
import pot1 from '../assets/pot1.png';
import pot6 from '../assets/pot6.png';
import pot4 from '../assets/pot4.png';
import pot3 from '../assets/pot3.png';
import pot2 from '../assets/pot2.png';
import pot5 from '../assets/pot5.png';
import pot7 from '../assets/pot7.png';
import pot8 from '../assets/pot8.png';
import bagIcon from '../assets/bag.png';
import rectangle6 from '../assets/Rectangle 6.png';
import vector5 from '../assets/Vector 5.png';
import vector6 from '../assets/Vector 6.png';
const plants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: '300',
    image: pot1,
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: '380',
    image: pot2,
  },
  {
    id: 3,
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: '259',
    image: pot5,
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: '400',
    image: pot6,
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: '450',
    image: pot7,
  },
  {
    id: 6,
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: '359',
    image: pot8,
  },
];

const TopSellingPlants = () => {
  return (
    <section className="bg-[#1a2016] py-20 px-6 md:px-12 lg:px-24">
      <div className="flex justify-center mb-10">
        <div className="relative inline-block px-4 py-2">
          
          
          <img src={vector5} alt="Corner Decoration" className="absolute -bottom-1 -left-2 w-12 md:w-13 z-0 pointer-events-none" />
            <h2 className="relative text-xl md:text-5xl font-medium text-white z-10">
                Our Top Selling Plants
            </h2>
            <img src={vector6} alt="Corner Decoration" className="absolute -top-1 -right-2 w-12 md:w-13 z-0 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 justify-items-center max-w-7xl mx-auto">
        {plants.map((plant) => (
          <div 
            key={plant.id} 
            className="relative mt-24 h-[450px] w-full max-w-[400px] flex flex-col items-center justify-end"
          >
            <img 
              src={rectangle6} 
              alt="card background" 
              className="absolute inset-0 w-110 h-120 object-fill z-0"
            />

            <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-65 h-[300px] flex justify-center items-end z-10">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col p-10 w-full text-left bg-transparent justify-end">
              <h3 className="text-[26px] text-[#f3f4f6] font-normal tracking-wide mb-3">
                {plant.name}
              </h3>
              <p className="text-[15px] text-[#d1d5db] font-light leading-relaxed mb-6 line-clamp-3 max-w-sm">
                {plant.description}
              </p>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-[26px] text-[#f3f4f6] font-normal">
                  Rs. {plant.price}/-
                </span>
                <button className="w-12 h-12 rounded-[14px] border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ShoppingBag size={20} strokeWidth={1.5} className="text-[#f3f4f6]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingPlants;
