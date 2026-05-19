'use client'


import { ChevronRight } from 'lucide-react'
import card from "../../assets/kudacard1.svg"
export default function Section4() {
  return (
    <section className="w-full  bg-white px-6 py-10 md:py-16 lg:py-5 lg:px-24">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24 items-center flex-col-reverse">
          {/* Left Column - Text Content */}
          

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src={card}
                alt="Woman using Kuda app with debit card"
                fill
                className="object-contain w-full"
                priority
              />
            </div>
          </div>


<div className="flex flex-col gap-6 md:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#40196d] leading-tight font-sans">
            Turn off access, turn on<br/> safety.


            </h2>

            <p className="text-sm md:text-sm text-black leading-relaxed font-sans max-w-lg align-middle">
     Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.


            </p>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#40196d] font-medium hover:gap-3 transition-all duration-300 text-sm md:text-sm underline"
              >
           Learn more about our card
                <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
