
import Logo from "../assets/logo-text.png";


const Nav = ()=> {


 return <div className="border-b border-gray-300">
  <nav className="flex justify-between gap-4  w-full max-w-7xl mx-auto px-4 py-4 ">
     
   <img src={Logo} className="w-[120px] h-[35px]" alt="" />

   <ul className="flex gap-4 items-center">

     <li className="text-[#D91B7E] p-[0px_5px]"><a href="#">Home</a></li>
     <li className="p-[0px_5px]"><a href="#">Technologies</a></li>
     <li className="p-[0px_5px]"><a href="#">Projects</a></li>
     <li className="p-[0px_5px]"><a href="#">About</a></li>
     <li className="p-[0px_5px]"><a href="#">Contact</a></li>

   </ul>

   <div className="flex gap-4 items-center">
    <button className="px-5 text-gray-500 py-2 hover:text-[#D91B7E] rounded-4xl font-semibold">Sign In</button>
    <button className="bg-[#D91B7E] text-white px-5 py-2 hover:scale-105 rounded-4xl">Sign Up</button>
   </div>

 </nav>

 </div>
};

export default Nav;

