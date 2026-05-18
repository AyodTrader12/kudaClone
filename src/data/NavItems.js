import discoverPersonal from "../assets/discoverPersonal.svg"
import transferSpend from "../assets/transferSpend.svg"
import save from "../assets/save.svg"
import investments from "../assets/investment.svg"
import kudaCard from "../assets/kudaCard.svg"
import businessreg from "../assets/businessreg.svg"
import kudapayroll from "../assets/kudapayroll.svg"
import Electricity from "../assets/electricity.svg"
import airtime from "../assets/airtime.svg"
import internet from "../assets/internet.svg"   
import giftcard from "../assets/giftcard.svg"
import cardless from "../assets/cardless.svg"
import tv from "../assets/tv.svg"
import betting from "../assets/betting.svg"
import transport from "../assets/transport.svg"
export const NAV_PERSONAL = {
  label: 'Personal',
  sections: [
    {
   
      items: [
        { label: 'Discover Personal', icon: discoverPersonal,  },
        { label: 'Transfer & Spend',  icon: transferSpend,  },
        { label: 'Save',              icon: save,  },
        { label: 'Investments',       icon: investments,  },
        { label: 'Kuda Card',         icon: kudaCard,  },
      ],
    },
    {
      title: 'PAYMENTS',
      items: [
        { label: 'Electricity',        icon: Electricity,     },
        { label: 'Airtime',            icon: airtime,   },
        { label: 'Internet',           icon: internet,      },
        { label: 'Gift Cards',         icon: giftcard     },
        { label: 'Cardless Payments',  icon: cardless     },
        { label: 'TV',                 icon: tv        },
        { label: 'Betting',            icon: betting   },
        { label: 'Transport',          icon: transport },
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
        { label: ' DiscoverBusiness ', icon: discoverPersonal,  },
        { label: 'Business Registration', icon: businessreg,  },
        { label: 'Kuda Payroll',    icon: kudapayroll,  },
        { label: 'Invoicing',        iconBg: '#fef3c7', iconColor: '#d97706', iconSvg: 'invoice'   },
        { label: 'Team Access',      iconBg: '#e0e7ff', iconColor: '#4338ca', iconSvg: 'team'      },
        { label: 'Analytics',        iconBg: '#d1fae5', iconColor: '#059669', iconSvg: 'analytics' },
      ],
    },
    {
      title:"PAYMENTS",
      items: [
        {label:"Send Money",icon: discoverPersonal},
        {label:"TV",icon: discoverPersonal},
        {label:"Airtime &Internet Data",icon: discoverPersonal},
        {label:"Electricity",icon: discoverPersonal},
        {label:"Bill Payments",icon: discoverPersonal},
      
      ]
    },
    {
      title:"CREEDITS",
      items:[
        {label:"Business Loan",icon: discoverPersonal},
      ]
    },
    {
      title:"COLLECTIONS",
      items:[
        {label:"softPOS",icon: discoverPersonal},
        {label:"Invoicing for Businesses",icon: discoverPersonal},
        {label:"POS Machine",icon: discoverPersonal},
        {label:"Virtual POS",icon: discoverPersonal},
      ]
    }
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
