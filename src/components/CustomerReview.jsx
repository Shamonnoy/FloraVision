import React from 'react';
import rectangle7 from '../assets/Rectangle 7.png';
import { Star, StarHalf } from 'lucide-react';

import shelly from '../assets/shelly.png';
import lula from '../assets/lula.jpg';
import carol from '../assets/carol.png';

import vector5 from '../assets/Vector 5.png';
import vector6 from '../assets/Vector 6.png';

const reviews = [
  {
    id: 1,
    name: 'Shelly Russel',
    avatar: shelly,
    rating: 4.5,
    text: 'Just got my hands on some absolutely awesome plants, and I couldn\'t be happier!',
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    avatar: lula,
    rating: 4.5,
    text: 'Each one has its own unique charm and personality, and they\'ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
  },
  {
    id: 3,
    name: 'Carol Huels',
    avatar: carol,
    rating: 4.5,
    text: 'It\'s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!',
  },
];

const CustomerReview = () => {
  return (
    <section className="bg-[#1a2016] py-20 px-6 md:px-12 lg:px-24">
      {/* Title */}
      <div className="flex justify-center mb-20">
        <div className="relative inline-block px-4 py-2">
          
        <img src={vector5} alt="Corner Decoration" className="absolute -bottom-1 -left-2 w-12 md:w-13 z-0 pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-wide">
            Customer Review
          </h2>
        <img src={vector6} alt="Corner Decoration" className="absolute -top-1 -right-2 w-12 md:w-13 z-0 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="relative px-10 py-15 min-h-[280px] flex flex-col justify-center">
            <img src={rectangle7} alt="bg" className="absolute inset-0 w-full h-full object-fill z-0" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6 mt-4">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover bg-gray-700" />
                <div>
                  <h3 className="text-[22px] text-white font-medium mb-1">{review.name}</h3>
                  <div className="flex text-yellow-400 gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <StarHalf className="w-3 h-3 fill-current" />
                    </div>
                </div>
              </div>
              
              <p className="text-[15px] text-[#d1d5db] font-light leading-relaxed">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
