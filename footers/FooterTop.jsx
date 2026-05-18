'use client'

export default function FooterTop() {
  const footerLinks = {
    Personal: [
      'Discover Personal',
      'Transfer & Spend',
      'Save',
      'Investments',
      'Kuda card',
      'Loans',
      'Overdrafts',
    ],
    Business: [
      'Discover Business',
      'Business Registration',
      'softPOS',
      'Invoicing',
      'POS Machine',
      'Business Loan',
      'Business API',
      'Join Kuda Business',
    ],
    Company: [
      'Blog',
      'Press',
      'Join Our Team',
      'About Us',
      'Kuda in Nigeria',
    ],
    Help: [
      'Get Help',
      'Scam Awareness',
      'FAQs',
      'Security',
      'Contact Us',
      'Self Help',
    ],
    Transparency: [
      'Terms & Conditions',
      'Privacy Policy',
      'Information Security Policy',
      'Cookie Policy',
      'Whistleblowing Policy',
    ],
  }

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-14">
      {/* Main Footer Content (flex layout) */}
      <div className="max-w-site mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Logo */}
          <div className="w-full lg:w-1/4 flex items-start">
            <div className="text-left">
              <div className="text-2xl font-bold text-purple-900 mb-1">
                K kuda.
              </div>
              <div className="text-xs font-semibold text-purple-900 tracking-widest">
                MICROFINANCE BANK
              </div>
            </div>
          </div>

          {/* Links Columns (wrap) */}
          <div className="flex-1 flex flex-wrap gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="w-1/2 sm:w-1/3 lg:w-auto">
                <h3 className="font-bold text-purple-900 text-sm mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-700 text-sm hover:text-purple-900 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-site mx-auto mb-8 border-t border-gray-200"></div>

      {/* Download Buttons Section */}
      <div className="max-w-site mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* App Store Buttons (centered on mobile) */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 13.5c-.91 0-1.64.46-2.14 1.35h5.1c-.5-1.44-1.95-2.35-3.96-2.35zm.15-3.5c1.51 0 2.75-.84 2.75-2.19 0-1.44-1.24-2.19-2.75-2.19-1.6 0-2.84.84-2.84 2.19 0 1.35 1.24 2.19 2.84 2.19zM23.5 8c0 4-2.97 7.5-7.5 7.5S8.5 12 8.5 8 11.47.5 16 .5 23.5 4 23.5 8z" />
              </svg>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 3l10.5 10.5L3 24V3m0 0l18-3-18 13.5M3 3l18 21v-24L3 3z" />
              </svg>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Web Sign In Button (aligned to right on desktop) */}
          <a
            href="#"
            className="flex items-center gap-2 bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors"
            style={{ marginLeft: 'auto' }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
            </svg>
            <div className="text-sm font-semibold">
              Sign in to Kuda.<br />
              <span className="text-xs">On The Web</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}