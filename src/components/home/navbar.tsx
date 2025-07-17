'use client'
import { Logs, PhoneOutgoing } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
  const navItems = ['Our Story', 'Offerings', 'Events', 'Media Center']
    return (
        <div className="h-full w-full py-5 px-3 md:px-20 flex justify-between md:justify-around  items-center bg-orange-100 text-black font-serif">
            <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/logo/logo_png.png" alt="logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                <div className="flex flex-col leading-tight">
                    <p className="font-semibold text-xs md:text-sm">Richness</p>
                    <p className="text-xs md:text-sm font-semibold">Creator</p>
                </div>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    <Logs />
                </button>
            </div>
              <div
        className={`${
          isOpen ? 'absolute top-20 right-5 z-30 bg-orange-100 shadow-md rounded-md p-4' : 'hidden'
        } md:static md:flex md:gap-5 md:bg-transparent md:shadow-none md:p-0`}
      >
        {navItems.map((item) => (
          <p
            key={item}
            className="cursor-pointer hover:text-yellow-400 transition text-sm md:text-lg px-2 py-1"
          >
            {item}
          </p>
        ))}
      </div>
            <div className="hidden md:flex items-center">
                <div className="p-3 border-2 border-yellow-400 bg-black rounded-full">
                    <PhoneOutgoing className="text-yellow-400" />
                </div>
                <div className=" mx-2">
                    <p>call us or whatsapp</p>
                    <p>(+91) 9600658789</p>
                </div>
            </div>
        </div>
    )
}