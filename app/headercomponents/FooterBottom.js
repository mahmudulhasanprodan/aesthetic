import Container from "./Container"
import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


export default function FooterBottom() {
       return (
         <div className="bg-[#212529]">
           <Container>
             <div className="flex item-center justify-between py-16">
               <div>
                 <h2 className="font-bold text-xl text-blue-400 pb-4">
                   Company
                 </h2>
                 <div className="flex flex-col gap-y-2">
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     About Us
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Departments
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Find a Doctor
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     FAQ
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     News
                   </Link>
                 </div>
               </div>
               <div>
                 <h2 className="font-bold text-xl text-blue-400 pb-4">
                   Quick links
                 </h2>
                 <div className="flex flex-col gap-y-2">
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Facial Fillers
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Breast Surgery
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Body Lifts
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Face & Neck
                   </Link>
                   <Link className="text-sm font-normal text-white" href={"#"}>
                     Fat Reduction
                   </Link>
                 </div>
               </div>
               <div>
                 <h2 className="font-bold text-xl text-blue-400 pb-4">
                   Contact Us
                 </h2>
                 <div className="flex flex-col gap-y-8">
                   <div className="flex items-center gap-x-2">
                     <span className="text-blue-400">
                       <FaLocationDot />
                     </span>
                     <p className="text-white">
                       {" "}
                       Los Angeles Gournadi, 1230 Bariasl
                     </p>
                   </div>
                   <div className="flex items-center gap-x-2">
                     <span className="text-blue-400">
                       <FaPhoneAlt />
                     </span>
                     <p className="text-white"> 1-677-124-44227</p>
                   </div>
                   <div className="flex items-center gap-x-2">
                     <span className="text-blue-400">
                       <IoMail />
                     </span>
                     <p className="text-white"> Support@gmail.com</p>
                   </div>
                 </div>
               </div>
               <div>
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29387.243870587496!2d90.21377902917192!3d22.972112251227014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLos%20Angeles%20Gournadi%2C%201230%20Bariasl!5e0!3m2!1sen!2sbd!4v1762403249724!5m2!1sen!2sbd"
                   width="400"
                   height="200"
                   pointer = "cursor"
                   loading="lazy"
                 ></iframe>
               </div>
             </div>
           </Container>
         </div>
       );
};