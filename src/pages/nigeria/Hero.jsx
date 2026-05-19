import { motion } from 'framer-motion'
import nigeria from '../../data/countries/nigeria.js'
import googleplay from "../../assets/google-play.svg"
import appstore from "../../assets/appstore.svg"
import heroImg from "../../assets/herong.svg"
import cbnBadge from "../../assets/cbn.png"
import ndicBadge from "../../assets/ndic.png"
// const { hero } = nigeria

// 'use client'

// export default function Hero() {
//   return (
//     <div className="min-h-screen bg-white py-16">
//       <div className="w-full max-w-site mx-auto px-14">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <div className="flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
//             <div>
//               <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#40196d] leading-tight">
//                 Get more with<br/> Kuda.
//               </h1>
//             </div>

//             <p className="text-base sm:text-sm text-black leading-relaxed max-w-lg mx-auto lg:mx-0">
//               Earn 50 Kuda Coins on your Tier 3 Kuda account to unlock<br/> cashback, discounts, budgeting, and more Premium <br/>rewards.
//             </p>

//             {/* App Store Buttons */}
//             <div className="flex sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
//               <a
//                 href="#"
//                 className="inline-block"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={appstore}
//                   alt="Download on App Store"
//                   className="h-10 sm:h-14"
//                 />
//               </a>
//               <a
//                 href="#"
//                 className="inline-block"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={googleplay}
//                   alt="Get it on Google Play"
//                   className="h-10 sm:h-14"
//                 />
//               </a>
//             </div>

//             {/* Badges */}
//             <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-200">
//               <div className="flex items-center gap-2">
//                 <span className="text-xs sm:text-sm text-gray-600">Fully Licensed by the</span>
//                 <span className="font-semibold text-xs sm:text-sm text-gray-900">CBN</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-xs sm:text-sm text-gray-600">Deposits Insured by</span>
//                 <span className="font-semibold text-xs sm:text-sm text-gray-900">NDIC</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex items-center justify-center lg:justify-end">
//             <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
//               <img
//                 src={heroImg}
//                 alt="Kuda App Mobile Interface"
//                 className="w-full h-95 object-contain drop-shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center lg:px-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Heading */}
            <h1 className="text-3xl lg:text-5xl font-bold text-[#2D1B4E] leading-tight text-center lg:text-left">
              Get more with<br/> Kuda.
            </h1>

            {/* Description */}
            <p className="text-sm text-black max-w-md leading-relaxed">
              Earn 50 Kuda Coins on your Tier 3 Kuda account to unlock cashback, discounts, budgeting, and more Premium rewards.
            </p>

            {/* App Store Buttons */}
            <div className="flex justify-center md:justify-start gap-4 ">
              <img src={appstore} alt="" />
           <img src={googleplay} alt="" />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col md:flex-row items-center gap-6  border-t border-gray-200 ">
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-black">Fully Licensed by the CBN</span>
                <span className="text-xl"><img src={cbnBadge} alt="CBN License" className='w-5 h-5' /></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Deposits Insured by</span>
                <span className="font-bold text-gray-800"><img src={ndicBadge} alt="NDIC Insurance" className='w-8 h-4' /></span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative h-96 lg:h-full lg:min-h-[600px] flex items-center justify-center">
            {/* Decorative circles background */}
        

            {/* Image Container - Replace with your image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
             
           <img src={heroImg} alt="Kuda App Mobile Interface" className='w-89 h-97' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
