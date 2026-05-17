import { motion } from 'framer-motion'
import nigeria from '../../data/countries/nigeria.js'

import heroImg from "../../assets/kudaherong.png"
const { hero } = nigeria

export default function Hero() {
  return (
    <section className="gradient-hero overflow-hidden">
      <div className="w-full h-90  bg-slate-400 px-20 py-20">

        {/* ── Left: text ── */}
        <div className=''>
        <h1 className='sm:text-4xl md:text-6xl font-bold sm:text-center lg:text-left text-kuda-purple leading-tight'>
            Get more with kuda
        </h1>
        </div>

        {/* ── Right: phone ── */}
        <div className="flex-shrink-0 flex justify-center lg:justify-end mt-6 lg:mt-0">
   
        </div>
      
      </div>
    </section>
  )
}

 <img src={heroImg} alt="Kuda Hero" />