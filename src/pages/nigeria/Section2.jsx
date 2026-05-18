'use client'


import { ChevronRight } from 'lucide-react'
import account from "../../assets/account.png"
export default function Section2() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src={account}
                alt="Woman using Kuda app with debit card"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>


<div className="flex flex-col gap-6 md:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#40196d] leading-tight font-sans">
             It’s your money, we just <br/>help you manage it.

            </h2>

            <p className="text-base md:text-sm text-black leading-relaxed font-sans max-w-lg">
         Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.
            </p>

          
          </div>
        </div>
      </div>
    </section>
  )
}
