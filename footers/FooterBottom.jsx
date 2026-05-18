// 'use client'

// import {  Twitter, Instagram, Facebook, Youtube, MessageCircle, Linkedin } from 'lucide-react'

// const socialLinks = [
//   { icon: Twitter, href: '#', label: 'Twitter', color: 'text-gray-600 hover:text-purple-900' },
//   { icon: Instagram, href: '#', label: 'Instagram', color: 'text-gray-600 hover:text-purple-900' },
//   { icon: Facebook, href: '#', label: 'Facebook', color: 'text-gray-600 hover:text-purple-900' },
//   { icon: Youtube, href: '#', label: 'YouTube', color: 'text-gray-600 hover:text-purple-900' },
//   { icon: MessageCircle, href: '#', label: 'Discord', color: 'text-gray-600 hover:text-purple-900' },
//   { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'text-gray-600 hover:text-purple-900' },
// ]

// export default function FooterBottom() {
//   return (
//     <footer className="bg-white border-t border-gray-200">
//       {/* Disclaimer Banner */}
//       <div className="bg-gray-50 px-6 py-4 md:px-12 text-center">
//         <p className="text-sm text-gray-600">Products may vary by country or market.</p>
//       </div>

//       {/* Office Locations */}
//       <div className="px-6 md:px-12 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Contact Section */}
//           <div>
//             <h3 className="font-bold text-purple-900 text-lg mb-4">Contact</h3>
//             <a href="mailto:help@kuda.com" className="text-purple-900 underline font-medium mb-6 block">
//               help@kuda.com
//             </a>
            
//             {/* Social Icons */}
//             <div className="flex gap-3 flex-wrap">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     aria-label={social.label}
//                     className={`w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all ${social.color}`}
//                   >
//                     <Icon size={18} />
//                   </a>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Logos */}
//           <div>
//             <h3 className="font-bold text-purple-900 text-lg mb-4">Logos</h3>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               1-11 Commercial Avenue, Yaba,
//               <br />
//               Lagos,
//               <br />
//               Nigeria
//             </p>
//           </div>

//           {/* London */}
//           <div>
//             <h3 className="font-bold text-purple-900 text-lg mb-4">London</h3>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               5 New Street Square,
//               <br />
//               London, EC4A 3TW,
//               <br />
//               United Kingdom
//             </p>
//           </div>

//           {/* Canada */}
//           <div>
//             <h3 className="font-bold text-purple-900 text-lg mb-4">Canada</h3>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               707-2 Lansing Square,
//               <br />
//               Toronto, ON M2J 4P8
//               <br />
//               Canada
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-200"></div>

//       {/* Legal Text */}
//       <div className="px-6 md:px-12 py-8 space-y-4">
//         <p className="text-sm text-gray-600">
//           *Kuda Customers get 25 free transfer to other banks every month. Extra transfers to other banks cost ₦10 each.
//           <br />
//           **Kuda account holders can deposit money in over 10,000 branches across Nigeria for free.
//         </p>

//         <p className="text-sm text-gray-600">
//           © 2026 Kuda Technologies Ltd (Company No.11472232). All rights reserved.
//         </p>

//         <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
//           <p>
//             If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).
//           </p>

//           <p>
//             Canada services will be provided by Kuda Technologies Canada Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 707-2 Lansing Square, Toronto, ON M2J 4P8. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }