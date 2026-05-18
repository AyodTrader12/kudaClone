import { Check } from 'lucide-react'

export default function ComparisonTable() {
  const features = [
    {
      name: 'Transfer Fee',
      otherBanks: { icon: '−', text: 'Up to ₦50 plus V.A.T.' },
      kuda: { icon: '✓', text: '25 free transfers every month' },
    },
    {
      name: 'Card Delivery',
      otherBanks: { icon: '😔', text: '' },
      kuda: { icon: '✓', text: 'Yes' },
    },
    {
      name: 'Card Maintenance Fee',
      otherBanks: { icon: '−', text: 'Up to ₦50 per quarter' },
      kuda: { icon: '✓', text: 'No' },
    },
    {
      name: 'Alerts',
      otherBanks: { icon: '−', text: 'Charge for SMS alerts' },
      kuda: { icon: '✓', text: 'Free instant notifications' },
    },
    {
      name: 'Annual Interest',
      otherBanks: { icon: '−', text: '4%' },
      kuda: { icon: '✓', text: 'Up to 12%' },
    },
    {
      name: 'Bill Payment Fee',
      otherBanks: { icon: '−', text: 'Up to ₦100 per bill' },
      kuda: { icon: '✓', text: 'No' },
    },
    {
      name: 'Instant Reversals',
      otherBanks: { icon: '😔', text: '' },
      kuda: { icon: '✓', text: 'Yes' },
    },
    {
      name: 'Maintenance',
      otherBanks: { icon: '−', text: 'Yes' },
      kuda: { icon: '✓', text: 'No' },
    },
  ]

  return (
    <section className="w-full bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#1a0033] mb-12 md:mb-16">
          Choose the freedom you need.
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-6 px-4 md:px-6 font-semibold text-gray-800"></th>
                <th className="text-center py-6 px-4 md:px-6">
                  <p className="text-lg md:text-xl font-bold text-[#1a0033]">Other Banks</p>
                </th>
                <th className="text-center py-6 px-4 md:px-6">
                  <p className="text-lg md:text-xl font-bold text-[#1a0033]">Kuda</p>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  {/* Feature Name */}
                  <td className="py-5 px-4 md:px-6 font-semibold text-gray-900 text-sm md:text-base">
                    {feature.name}
                  </td>

                  {/* Other Banks Column */}
                  <td className="py-5 px-4 md:px-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{feature.otherBanks.icon}</span>
                      {feature.otherBanks.text && (
                        <p className="text-sm md:text-base text-gray-700">
                          {feature.otherBanks.text}
                        </p>
                      )}
                    </div>
                  </td>

                  {/* Kuda Column */}
                  <td className="py-5 px-4 md:px-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="w-6 h-6 text-[#1a0033]" strokeWidth={3} />
                      <p className="text-sm md:text-base text-gray-700 font-medium">
                        {feature.kuda.text}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}