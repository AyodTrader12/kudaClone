
import { CreditCard, Moon, Users, Send, PiggyBank } from 'lucide-react'
import features1 from "../../assets/features1.svg"
import features2 from "../../assets/feature2.svg"
import features3 from "../../assets/feature3.svg"
import features4 from "../../assets/feature4.svg"
import features5 from "../../assets/feature5.svg"

const topFeatures = [
  {
    icon:<img src={features1} alt="Feature 1" className="w-6 h-6" />,
    title: 'Order a Kuda card on the app with pickup and delivery options.'
  },
  {
    icon:<img src={features2} alt="Feature 2" className="w-6 h-6" />,
    title: 'Enjoy cashless payment options online and offline.'
  },
  {
    icon: <img src={features3} alt="Feature 3" className="w-6 h-6" />,
    title: 'Pay your essential bills and buy gift cards easily.'
  }
]

const bottomFeatures= [
  {
    icon: <img src={features4} alt="Feature 4" className="w-6 h-6" />,
    title: 'Get 25 free transfers to Nigerian banks every month.'
  },
  {
    icon: <img src={features5} alt="Feature 5" className="w-6 h-6" />,
    title: 'Save money automatically any time you spend.'
  }
]

export default function Features() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-14 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 mb-8 md:mb-10">
          {topFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-3 md:p-4 flex items-center md:flex-col md:items-start gap-3 max-w-sm md:max-w-sm"
            >
              <div className="w-11 h-11 bg-purple-200 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-[12px] md:text-sm font-bold text-purple-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-3 justify-center">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 md:p-4 flex items-center md:flex-col md:items-start gap-3 max-w-xs"
            >
              <div className="w-11 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-[12px] md:text-sm font-bold text-purple-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}