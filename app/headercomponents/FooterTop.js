import Container from "./Container"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


export default function FooterTop() {
     return (
       <div className="bg-[#212529] border-2 border-b-white">
         <Container>
           <div className="flex items-center justify-between py-10">
             <div>
               <h1 className="font-bold text-2xl text-white">AESTHETIC</h1>
             </div>
             <div>
               <input
                 type="search"
                 placeholder="Email"
                 className="border-2 border-blue-400 outline-0 py-3 rounded-l-full pl-3 font-bold text-white"
               />
               <button className="outline-0 text-md rounded-r-full cursor-pointer py-3 border-2 border-blue-400 pl-3 font-bold bg-blue-400 px-6 text-white">
                 SUBCRIBES
               </button>
             </div>
             <div className="flex items-center gap-x-2">
               <div className="w-12 h-12 bg-slate-800 cursor-pointer rounded-full flex items-center justify-center text-2xl">
                 <FaFacebookF  className="text-white"/>
               </div>
                <div className="w-12 h-12 bg-slate-800 cursor-pointer rounded-full flex items-center justify-center text-2xl">
                 <FaTwitter  className="text-white"/>
               </div>
               <div className="w-12 h-12 bg-slate-800 cursor-pointer rounded-full flex items-center justify-center text-2xl">
                 <FaLinkedinIn  className="text-white"/>
               </div>
               <div className="w-12 h-12 bg-slate-800 cursor-pointer rounded-full flex items-center justify-center text-2xl">
                 <FaGithub  className="text-white"/>
               </div>
             </div>
           </div>
         </Container>
       </div>
     );
};