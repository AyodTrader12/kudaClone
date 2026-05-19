import { ArrowRight, Briefcase, Send, User } from 'lucide-react';
import loans from "../../assets/loans.svg"
import spend from "../../assets/spend.svg"
import business from "../../assets/business.svg"
export default function MoreForYou() {
  const cards = [
    {
      icon: <img src={business} alt="" />,
      title: "Kuda Business",
      description: "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more."
    },
    {
      icon: <img src={spend} alt="" />,
      title: "Transfer & Spend",
      description: "Send money for free to any Nigerian account with 25 free transfers every month."
    },
    {
      icon: <img src={loans} alt="" />,
      title: "Loans",
      description: "Get instant loans up to ₦150,000 in the Kuda loan app easily in Nigeria without paperwork."
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center  text-[#40196d] mb-16">
          More for you
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
           
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-10 flex flex-col shadow-md"
              >
                {/* Icon */}
                <div className="mb-8">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold  text-[#40196d] mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 text-base leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className=" text-[#40196d] font-semibold inline-flex items-center gap-2 hover:underline transition-all"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
