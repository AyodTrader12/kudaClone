
import { CreditCard, Moon, Users, Send, PiggyBank } from 'lucide-react'


const topFeatures = [
  {
    icon: <CreditCard className="w-6 h-6 text-purple-700" />,
    title: 'Order a Kuda card on the app with pickup and delivery options.'
  },
  {
    icon: <Moon className="w-6 h-6 text-purple-700" />,
    title: 'Enjoy cashless payment options online and offline.'
  },
  {
    icon: <Users className="w-6 h-6 text-purple-700" />,
    title: 'Pay your essential bills and buy gift cards easily.'
  }
]

const bottomFeatures= [
  {
    icon: <Send className="w-6 h-6 text-purple-700" />,
    title: 'Get 25 free transfers to Nigerian banks every month.'
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-purple-700" />,
    title: 'Save money automatically any time you spend.'
  }
]

export default function Features() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {topFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-xl p-6 md:p-8 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-purple-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center md:justify-center">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-xl p-6 md:p-8 flex flex-col items-start gap-4 md:max-w-xs"
            >
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-purple-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}