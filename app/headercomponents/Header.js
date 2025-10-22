'use-client'

import Container from "@/app/headercomponents/Container";
import Link from 'next/link'


export default function Header () {
  return (
    <div>
      <Container>
        <div className="@container/main">
          <div className="flex items-center justify-between py-1">
            <div>
              <h2 className="font-bold text-2xl">AESTHETIC</h2>
            </div>
            <div>
              <ul className="flex items-center gap-x-6 cursor-pointer">
                <Link href={"/"} className="font-semibold text-sm hover:border-b-2 border-blue-300">HOME</Link>
                <Link href={"/about"} className="font-semibold text-sm hover:border-b-2 border-blue-300">ABOUT</Link>
                <Link href={"/service"} className="font-semibold text-sm hover:border-b-2 border-blue-300">SERVICES</Link>
                <Link href={"/pages"} className="font-semibold text-sm hover:border-b-2 border-blue-300">PAGES</Link>
                <Link href={"/new"} className="font-semibold text-sm hover:border-b-2 border-blue-300">NEW</Link>
                <Link href={"/contact"} className="font-semibold text-sm hover:border-b-2 border-blue-300">CONTACT</Link>
              </ul>
            </div>
            <div>
              <button className="px-4 py-2 border-2 border-blue-300 text-sm rounded-md cursor-pointer font-semibold">
                APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

