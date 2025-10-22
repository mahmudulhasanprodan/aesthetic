'use-client'

import Container from "@/app/headercomponents/Container"


export default function Banner() {
    return (
      <div className="bg-[#E7F6F3]">
        <Container>
          <div className="flex items-center py-40">
            <div className="w-1/2 flex flex-col gap-y-6">
              <h2 className="font-semibold text-md text-blue-300">
                Eiusmod tempor incididunt
              </h2>
              <h1 className="font-bold text-5xl">
                Take the world's best <br /> quality Treadment
              </h1>
              <button className="w-36 py-2 bg-blue-400 text-sm text-white rounded-md cursor-pointer font-semibold">
                CONTACT US
              </button>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    );
};