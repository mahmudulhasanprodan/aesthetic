import Container from "@/app/headercomponents/Container"
import Image from 'next/image'
import Imgone from "@/app/public/one.png"
import Imgtwo from "@/app/public/two.png"
import Imgthree from "@/app/public/three.png"
import Imgfour from "@/app/public/four.png"

export default function Offer() {
     return (
       <div className="mt-10">
         <Container>
           <div className="flex flex-col items-center justify-center py-16">
             <h2 className="font-semibold text-gray-400 text-lg">
               Why choose us?
             </h2>
             <h1 className="font-bold text-3xl mt-2">Offer for you</h1>
           </div>
           <div className="flex items-center justify-between">
             <div className="w-1/5 flex flex-col items-center gap-y-4">
               <Image src={Imgone} alt={Imgone} />
               <h2 className="font-bold text-lg">Advanced equipment</h2>
               <p className="font-md text-sm text-center font-semibold text-gray-500">
                 Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
                 tempor cididunt facilisis.
               </p>
             </div>
             <div className="w-1/5 flex flex-col items-center gap-y-4">
               <Image src={Imgtwo} alt={Imgtwo} />
               <h2 className="font-bold text-lg">Advanced equipment</h2>
               <p className="font-md text-sm text-center font-semibold text-gray-500">
                 Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
                 tempor cididunt facilisis.
               </p>
             </div>
              <div className="w-1/5 flex flex-col items-center gap-y-4">
               <Image src={Imgthree} alt={Imgthree} />
               <h2 className="font-bold text-lg">Advanced equipment</h2>
               <p className="font-md text-sm text-center font-semibold text-gray-500">
                 Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
                 tempor cididunt facilisis.
               </p>
             </div>
              <div className="w-1/5 flex flex-col items-center gap-y-4">
               <Image src={Imgfour} alt={Imgfour} />
               <h2 className="font-bold text-lg">Advanced equipment</h2>
               <p className="font-md text-sm text-center font-semibold text-gray-500">
                 Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
                 tempor cididunt facilisis.
               </p>
             </div>
           </div>
         </Container>
       </div>
     );
};