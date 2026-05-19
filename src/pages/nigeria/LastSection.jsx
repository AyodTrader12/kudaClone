import googleplay from "../../assets/google-play.svg"
import appstore from "../../assets/appstore.svg"
import heroImg from "../../assets/herong.svg"
import cbnBadge from "../../assets/cbn.png"
import ndicBadge from "../../assets/ndic.png"

export default function LastSection() {
  return (
    <section className="bg-[#EFF1FF] min-h-screen flex items-center rounded-xl ">
      <div className="max-w-6xl mx-auto w-full px-6  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center lg:px-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#40196d]  leading-tight text-center lg:text-left">
            The money app for Africans.
            </h1>

            {/* Description */}
        <p className="text-sm text-black max-w-md leading-relaxed">
           It only takes a few minutes to start enjoying free benefits. Download Kuda on Google Play or the App Store.
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
