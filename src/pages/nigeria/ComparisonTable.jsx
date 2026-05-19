'use client';

import { Check, Minus } from 'lucide-react';
import kudaCheck from "../../assets/kuda.svg"
import otherBanks from "../../assets/otherbanks.svg"
export default function ComparisonTable() {
  const features = [
    {
      name: 'Transfer Fee',
      otherBanks: 'Up to ₦50 plus V.A.T.',
      kuda: '25 free transfers every month',
    },
    {
      name: 'Card Delivery',
      otherBanks: '😞',
      kuda: 'Yes',
    },
    {
      name: 'Card Maintenance Fee',
      otherBanks: 'Up to ₦50 per quarter',
      kuda: 'No',
    },
    {
      name: 'Alerts',
      otherBanks: 'Charge for SMS alerts',
      kuda: 'Free instant notifications',
    },
    {
      name: 'Annual Interest',
      otherBanks: '4%',
      kuda: 'Up to 12%',
    },
    {
      name: 'Bill Payment Fee',
      otherBanks: 'Up to ₦100 per bill',
      kuda: 'No',
    },
    {
      name: 'Instant Reversals',
      otherBanks: '😞',
      kuda: 'Yes',
    },
    {
      name: 'Maintenance',
      otherBanks: 'Yes',
      kuda: 'No',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center  text-[#40196d] mb-12 md:mb-16 leading-tight">
          Choose the freedom you need.
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-white border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 text-base"></th>
                <th className="px-6 py-4 text-left text-sm font-bold text-[#2D1B4E] text-lg">Other Banks</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-[#2D1B4E] text-lg">Kuda.</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-white'
                  }`}
                >
                  <td className="px-6 py-5 text-left font-semibold text-gray-900 text-base">
                    {feature.name}
                  </td>
                  <td className="px-6 py-5 text-left text-gray-600 text-base">
                    {feature.otherBanks}
                  </td>
                  <td className="px-6 py-5 text-left">
                    {feature.kuda === 'No' || feature.kuda === 'Yes' ? (
                      <div className="flex items-center gap-2">
                       <img src={kudaCheck} alt="Kuda Check" className='w-5 h-5' />
                        <span className="text-gray-900 text-base">{feature.kuda}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                       <img src={kudaCheck} alt="Kuda Check" className='w-5 h-5' />
                        <span className="text-gray-900 text-base">{feature.kuda}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 text-base mb-3">
                {feature.name}
              </h3>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Other Banks</p>
                  <p className="text-gray-600 text-sm">{feature.otherBanks}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Kuda</p>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2D1B4E]" strokeWidth={3} />
                    <span className="text-gray-900 text-sm">{feature.kuda}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
