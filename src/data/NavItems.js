export const NAV_PERSONAL = {
  label: 'Personal',
  sections: [
    {
      title: null,
      items: [
        { label: 'Discover Personal', iconBg: '#ede9fe', iconColor: '#40196d',  iconSvg: 'home',      active: true },
        { label: 'Transfer & Spend',  iconBg: '#d1fae5', iconColor: '#059669',  iconSvg: 'send'                   },
        { label: 'Save',              iconBg: '#fef3c7', iconColor: '#d97706',  iconSvg: 'save'                   },
        { label: 'Investments',       iconBg: '#e0e7ff', iconColor: '#4338ca',  iconSvg: 'chart'                  },
        { label: 'Kuda Card',         iconBg: '#d1fae5', iconColor: '#059669',  iconSvg: 'card'                   },
      ],
    },
    {
      title: 'PAYMENTS',
      items: [
        { label: 'Electricity',        iconBg: '#fee2e2', iconColor: '#dc2626', iconSvg: 'bolt'      },
        { label: 'Airtime',            iconBg: '#d1fae5', iconColor: '#059669', iconSvg: 'phone'     },
        { label: 'Internet',           iconBg: '#dbeafe', iconColor: '#2563eb', iconSvg: 'wifi'      },
        { label: 'Gift Cards',         iconBg: '#1e293b', iconColor: '#f8fafc', iconSvg: 'gift'      },
        { label: 'Cardless Payments',  iconBg: '#fef3c7', iconColor: '#d97706', iconSvg: 'globe'     },
        { label: 'TV',                 iconBg: '#dbeafe', iconColor: '#2563eb', iconSvg: 'tv'        },
        { label: 'Betting',            iconBg: '#fee2e2', iconColor: '#dc2626', iconSvg: 'betting'   },
        { label: 'Transport',          iconBg: '#d1fae5', iconColor: '#059669', iconSvg: 'transport' },
      ],
    },
    {
      title: 'CREDIT',
      items: [
        { label: 'Overdrafts', iconBg: '#dbeafe', iconColor: '#2563eb', iconSvg: 'overdraft' },
        { label: 'Loans',      iconBg: '#ede9fe', iconColor: '#7c3aed', iconSvg: 'loan'      },
      ],
    },
  ],
}

export const NAV_BUSINESS = {
  label: 'Business',
  sections: [
    {
      title: null,
      items: [
        { label: 'Business Account', iconBg: '#ede9fe', iconColor: '#40196d', iconSvg: 'building'  },
        { label: 'Payroll',          iconBg: '#d1fae5', iconColor: '#059669', iconSvg: 'payroll'   },
        { label: 'Payment Links',    iconBg: '#dbeafe', iconColor: '#2563eb', iconSvg: 'link'      },
        { label: 'Invoicing',        iconBg: '#fef3c7', iconColor: '#d97706', iconSvg: 'invoice'   },
        { label: 'Team Access',      iconBg: '#e0e7ff', iconColor: '#4338ca', iconSvg: 'team'      },
        { label: 'Analytics',        iconBg: '#d1fae5', iconColor: '#059669', iconSvg: 'analytics' },
      ],
    },
  ],
}

export const NAV_COMPANY = {
  label: 'Company',
  sections: [
    {
      title: null,
      items: [
       
        { id: 1, label: 'Blog'  },
        { id:2 , label: 'Press'   },
        { id: 3, label: 'join Our Team'},
        { id: 4, label: 'About Us' },
      ],
    },
  ],
}

export const NAV_HELP = {
  label: 'Help',
  sections: [
    {
      title: null,
      items: [
       
        { id: 1, label: 'Get Help'  },
        { id:2 , label: 'Scam Awareness'   },
        { id: 3, label: 'FAQs'},
        { id: 4, label: 'Security' },
        { id: 5, label: 'Contact Us' },
        { id: 6, label: 'Self Help' },
      ],
    },
  ],
}


export const ALL_NAV_ITEMS = [NAV_PERSONAL, NAV_BUSINESS, NAV_COMPANY, NAV_HELP]
