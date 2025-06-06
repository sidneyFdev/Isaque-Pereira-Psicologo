'use client'

import { useEffect, useState } from "react";
import { WhatsApp } from "../items/whatsapp";

const Hero = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
     <section id="header" className={`transition-all duration-400 ease-in-out
      flex flex-col items-center justify-center bg-(--c60) text-white text-center select-none
      ${scrolled ? 'h-[30vh]' : 'h-[92vh]'}
      `}>
        
        <h1 className="text-4xl font-bold">Isaque Pereira de Melo</h1>
        <p className="mt-10 text-2xl px-8 text-amber-50 transition-all duration-400 sm:px-4">Profissional especializado em psicologia analítica.</p>
        <div className={`transition-all duration-200 ease-in-out ${scrolled ? 'scale-0' : 'scale-100'}`}>
        <WhatsApp text="Saiba mais!"/>

        </div>
    </section>
  );
}

export default Hero;