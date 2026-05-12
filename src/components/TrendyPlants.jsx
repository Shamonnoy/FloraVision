import React from 'react';
import pot2 from '../assets/pot2.png';
import pot3 from '../assets/pot3.png';
import bag from '../assets/bag.png';
import vector5 from '../assets/Vector 5.png';
import vector6 from '../assets/Vector 6.png';

const TrendyPlants = () => {
    return (
        <section className="relative py-20 w-full overflow-hidden flex flex-col items-center [font-family:Inter]">
            
            <div className="relative mb-20 md:mb-25 flex justify-center w-full">
                <div className="relative inline-block px-4 py-2">
                    <img src={vector5} alt="Corner Decoration" className="absolute -bottom-1 -left-2 w-12 md:w-13 z-0 pointer-events-none" />
                    <h2 className="relative text-xl md:text-5xl font-medium text-white z-10">
                        Our Trendy plants
                    </h2>
                    <img src={vector6} alt="Corner Decoration" className="absolute -top-1 -right-2 w-12 md:w-13 z-0 pointer-events-none" />
                </div>
            </div>

            <div className="flex flex-col gap-32 md:gap-40 w-full max-w-5xl px-6">
                <div className="relative border border-white/20 rounded-[3rem] md:rounded-[5rem] bg-white/5 backdrop-blur-md px-6 md:px-10 py-16 flex flex-col md:flex-row items-center justify-center md:min-h-[350px]">
                    <div className="relative w-full md:w-5/12 flex justify-center">
                        <img src={pot2} alt="Plant" className="md:absolute static -mt-32 md:-top-32 md:-left-12 w-[280px] md:w-[400px] object-contain drop-shadow-2xl z-10" />
                    </div>
                    <div className="md:ml-auto w-full md:w-7/12 flex flex-col gap-5 pt-8 md:pt-0 relative z-20 text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white">For Your Desks Decorations</h3>
                        <p className="text-sm font-medium text-white/90">
                            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                        </p>
                        <div className="text-2xl font-medium text-white mt-1">Rs. 599/-</div>
                        <div className="flex gap-4 mt-2 items-center justify-center md:justify-start">
                            <button className="px-10 py-2 rounded-xl text-white font-medium border border-white hover:bg-white/10 transition">
                                Explore
                            </button>
                            <button className="p-2 rounded-xl border border-white hover:bg-white/10 transition group">
                                <img src={bag} alt="Bag" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative border border-white/20 rounded-[3rem] md:rounded-[5rem] bg-white/5 backdrop-blur-md px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-center md:min-h-[350px]">
                    <div className="w-full md:w-7/12 flex flex-col gap-5 pt-8 md:pt-0 relative z-20 text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white">For Your Desks Decorations</h3>
                        <p className="text-sm font-medium leading-relaxed text-white/90 max-w-md mx-auto md:mx-0">
                            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
                        </p>
                        <div className="text-2xl font-medium text-white mt-1">Rs. 399/-</div>
                        <div className="flex gap-4 mt-2 items-center justify-center md:justify-start">
                            <button className="px-10 py-2 rounded-xl text-white font-medium border border-white hover:bg-white/10 transition">
                                Explore
                            </button>
                            <button className="p-2 rounded-xl border border-white hover:bg-white/10 transition group">
                                <img src={bag} alt="Bag" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full md:w-5/12 flex justify-center -mt-32 md:-mt-0">
                        <img src={pot3} alt="Plant" className="md:absolute static -mt-10 md:-bottom-32 md:-right-12 w-[240px] md:w-[400px] object-contain drop-shadow-2xl z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendyPlants;