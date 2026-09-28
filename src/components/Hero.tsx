
// import React from 'react';
import HeroImage from "../assets/banner-stack.png"

const Hero = () => {
    return (
        
    

       <div className='flex gap-4 items-center w-full max-w-7xl mx-auto px-6'>

            <div>

                <h2 className="text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]">Build Your Ideal</h2>
                <h2 className="text-6xl font-bold leading-[1.15] tracking-tight bg-gradient-to-r from-[#FD5426] via-[#E22B65] to-[#8437E3] bg-clip-text text-transparent">Development Stack</h2>
                <p className='mt-7 mr-[255px]'>Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project.</p>

            <div className='mt-13'>
                <button className=" bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white px-5 py-2 hover:scale-105 rounded-[8px]">Explore Technologies</button>

                <button className=" ml-3 border border-gray-300 text-black px-11 py-2 rounded-[8px]">Learn More</button>
            </div>


            </div>
                <img src={HeroImage} alt="" />
            <div>

            </div>


        </div>

           


    );
};

export default Hero;