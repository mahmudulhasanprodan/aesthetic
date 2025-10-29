import Container from "./Container"
import Image from 'next/image'
import background from "@/app/public/servicebg.jpg"

export default function Services() {
      return (
        <div className="py-32">
          <div className="relative">
            <Image
              src={background}
              alt={background}
              className="opacity-80"  
            />
            <Container>
              <div className="absolute top-20 z-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-xl text-blue-400">Our services</h2>
                    <h1 className="font-bold text-3xl mt-2 text-white">Offer for you</h1>
                  </div>
                  <div>
                    <button className="inline-block px-8 text-xl text-white py-2 border-4 border-blue-400 rounded-md font-bold cursor-pointer">
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center mt-20">
                  <div className="flex items-center gap-x-4">
                    <div className="w-[600px] h-56 bg-white shadow-md hover:bg-blue-400 rounded-md cursor-pointer"></div>
                    <div className="w-[600px] h-56 bg-white shadow-md hover:bg-blue-400 rounded-md cursor-pointer"></div>
                  </div>
                    <div className="flex items-center gap-x-4">
                    <div className="w-[600px] h-56 bg-white shadow-md hover:bg-blue-400 rounded-md cursor-pointer"></div>
                    <div className="w-[600px] h-56 bg-white shadow-md hover:bg-blue-400 rounded-md cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
};