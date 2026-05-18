'use client'


import { ChevronRight } from 'lucide-react'
import account from "../../assets/account.png"
export default function Section1() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="text-4xl md:text-3xl lg:text-3xl font-bold text-[#40196d] leading-tight font-sans">
              Your phone + our app + a debit card = a simpler life.
            </h2>

            <p className="text-base md:text-sm text-black leading-relaxed font-sans max-w-lg">
              We designed a money app for your lifestyle, and you <br/>can get a debit card to go with it. That&apos;s all you need <br/>to make the right money moves.
            </p>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#40196d] font-medium hover:gap-3 transition-all duration-300 text-base md:text-lg underline"
              >
                Open An Account in Minutes
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
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
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
