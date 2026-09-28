import { use } from "react";
import type { ITechnologies } from "../types";

interface ITechnologiesProps {
    userPromise : Promise<ITechnologies[]>;
}

const Technologies = ({ usersPromise }:ITechnologiesProps) => {
    console.log(usersPromise,"userPromise");
    const data = use(usersPromise);
    console.log(data,"data")

    return (
         <div className='w-full max-w-7xl mx-auto px-6'>

            
            <div className='mb-[40px]'>
               <h2 className='text-5xl font-bold leading-[1]'>Explore the <span className="text-5xl font-bold leading-[1] bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
               <p className='mt-2 ml-1'>Pick one technology per category to build your ideal stack.</p>
           </div>


           <div className='grid grid-cols-12 gap-4 mb-8 '>
            {/* parent div Start */}


          <div className='col-span-9 grid grid-cols-3 gap-4'>

            {/* card div */}
                
    {
            
            data.map((technology) => (
        <div
            key={technology.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
            <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex justify-between items-start mb-6">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-10 h-10 object-contain"
                    />
                    {technology.badge && (
                        <span className="text-xs font-medium bg-sky-50 text-sky-600 px-3 py-1 rounded-full">
                            {technology.badge}
                        </span>
                    )}
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {technology.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {technology.description}
                </p>
            </div>

            <div>
                {/* Tags & Rating Row */}
                <div className="flex justify-between items-center mb-6 text-xs">
                    <div className="flex items-center gap-2">
                        <span className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md font-medium">
                            {technology.category}
                        </span>
                        <span className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md font-medium">
                            {technology.difficulty}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 font-medium text-gray-800">
                        <span className="text-amber-400">★</span>
                        <span>{technology.rating}</span>
                    </div>
                </div>

                {/* Add to Stack Button */}
                <button 
                    onClick={() => console.log('Added to stack:', technology.name)}
                    className="w-full bg-[#0B0F19] text-white text-sm font-medium py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                    Add to Stack
                </button>
            </div>
        </div>
    ))}
             
          </div>



          <div className='col-span-3  bg-blue-500 h-[500px]'>   
            {/* cart div */}

          </div>
          



            {/* Parent div End */}
            
           </div>

        </div>
    );
};

export default Technologies;

