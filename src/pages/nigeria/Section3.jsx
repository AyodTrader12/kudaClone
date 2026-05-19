'use client'


import { ChevronRight } from 'lucide-react'
import account from "../../assets/section6.jpg"
export default function Section3() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-16 lg:py-5 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#40196d] leading-tight font-sans">
            Save money as you spend it, seriously.
            </h1>

            <p className="text-base md:text-sm text-black leading-relaxed font-sans max-w-lg">
             You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.
            </p>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#40196d] font-medium hover:gap-3 transition-all duration-300 text-base md:text-sm underline"
              >
               See all our savings
                <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src={account}
                alt="Woman using Kuda app with debit card"
                fill
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
