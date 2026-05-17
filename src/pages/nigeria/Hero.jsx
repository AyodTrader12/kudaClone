import { motion } from 'framer-motion'
import nigeria from '../../data/countries/nigeria.js'
import googleplay from "../../assets/google-play.svg"
import appstore from "../../assets/appstore.svg"
import heroImg from "../../assets/herong.svg"
const { hero } = nigeria

'use client'

export default function Hero() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#40196d] leading-tight">
                Get more with Kuda.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-black leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 lg:px-0">
              Earn 50 Kuda Coins on your Tier 3 Kuda account to unlock cashback, discounts, budgeting, and more Premium rewards.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appstore}
                  alt="Download on App Store"
                  className="h-10 sm:h-14"
                />
              </a>
              <a
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googleplay}
                  alt="Get it on Google Play"
                  className="h-10 sm:h-14"
                />
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600">Fully Licensed by the</span>
                <span className="font-semibold text-xs sm:text-sm text-gray-900">CBN</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600">Deposits Insured by</span>
                <span className="font-semibold text-xs sm:text-sm text-gray-900">NDIC</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src={heroImg}
                alt="Kuda App Mobile Interface"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
