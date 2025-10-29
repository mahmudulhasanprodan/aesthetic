import Container from "./Container"
import Image from 'next/image'
import DoctorOne from '@/app/public/doctorOne.jpg'
import { FaSquareFacebook } from "react-icons/fa6";

export default function Doctors() {
     return (
       <div>
         <Container>
           <div>
             <div className="flex flex-col items-center justify-center gap-y-2">
               <h2 className="font-semibold text-xl text-gray-400">OUR TEAM</h2>
               <h1 className="font-bold text-3xl">Our Expert Doctors</h1>
             </div>
             {/* Doctor details here */}
             <div className="flex items-center">
               <div>
                 <Image
                   src={DoctorOne}
                   alt={DoctorOne}
                   className="w-[300px] h-[300px] bg-white shadow-3xl rounded-full p-3 hover:bg-blue-400 cursor-pointer"
                 />

                 <div className="flex flex-col items-center gap-x-2 w-full mt-4">
                   <div>
                     <h2 className="font-bold text-2xl">Caroline Grant</h2>
                     <p className="font-bold text-xl">Plastic surgeon</p>
                   </div>
                   <div className="flex items-center gap-x-2">
                     <span>
                       <FaSquareFacebook />
                     </span>
                     <span>
                       <FaSquareFacebook />
                     </span>
                     <span>
                       <FaSquareFacebook />
                     </span>
                     <span>
                       <FaSquareFacebook />
                     </span>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </Container>
       </div>
     );
};