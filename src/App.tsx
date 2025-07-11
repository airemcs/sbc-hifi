import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from "react";

type Concern = {
  label: string;
  value: string;
  group: "report" | "inquiry" | "redirect";
  bold?: boolean;
};

const concerns: Concern[] = [
  { label: "Lost or stolen card", value: "form:lost-card", group: "report" },
  { label: "Phishing attempt", value: "form:phishing", group: "report" },

  { label: "I want to inquire about a product", value: "form:product-inquiry", group: "inquiry" },
  { label: "Card promo question", value: "form:card-promo", group: "inquiry" },
  { label: "SBO/Mobile App help", value: "form:online-help", group: "inquiry" },
  { label: "Product/service-related concern", value: "form:service-concern", group: "inquiry" },

  { label: "Apply for a product", value: "redirect:/apply", group: "redirect", bold: true },
  { label: "Check application status", value: "redirect:/application-status", group: "redirect", bold: true },
  { label: "Explore SBC careers", value: "redirect:/careers", group: "redirect", bold: true },
];

const products: string[] = [
  "Bank Accounts",
  "Credit Cards",
  "Home Loan",
  "Auto Loan",
  "Personal Loan",
  "Corporate Salary Loan",
  "Business Loans",
  "UITF",
  "Trust Services",
  "Investment Management",
  "Bancassurance / FWD",
  "Fixed Income Securities",
  "Foreign Exchange / Gold Circle",
];

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "I want to report a lost or stolen card.",
    answer:
      "You may report your lost or stolen ATM card through our bank services form. For lost or stolen credit card, file your report here.",
  },
  {
    question: "I have a question related to Security Bank Online / Mobile App.",
    answer:
      "If you wish to know more about Security Bank Online, you may check out our FAQs here. For Security Bank Online requests and concerns, you may access our dedicated helpdesk here.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec bibendum libero. Proin at purus sit amet elit luctus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec bibendum libero. Proin at purus sit amet elit luctus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec bibendum libero. Proin at purus sit amet elit luctus faucibus.",
  }
];

export default function App() {

  const [selectedConcern, setSelectedConcern] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const groupedConcerns = {
    report: concerns.filter((c) => c.group === "report"),
    inquiry: concerns.filter((c) => c.group === "inquiry"),
    redirect: concerns.filter((c) => c.group === "redirect"),
  };

  const shouldShowProductDropdown = selectedConcern === "form:product-inquiry";
  const shouldShowForm = selectedProduct !== "";

  const handleConcernChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedConcern(value);
    setSelectedProduct("");

    if (value.startsWith("redirect:")) {
      window.location.href = value.replace("redirect:", "");
    }
  };

  return (
  <>

    {/* Navigation */}
    <div className="w-full h-[44px] lg:h-[99.33px] bg-[#2C3B55]" />

    {/* CTA Banner */}
    <div className="w-full h-[180px] lg:h-[300px] bg-[#C0DCF4] flex flex-col justify-center items-center space-y-4 lg:space-y-8 text-center px-4">

      <span className="font-montserrat font-semibold text-5xl lg:text-6xl">Talk to Us!</span>

      <div className="relative w-full max-w-md lg:max-w-2xl">
        <div className="absolute inset-y-1 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>

        <input className="w-full !pl-10 p-2 lg:p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-3xl bg-gray-50" placeholder="What do you need help with?" />
      </div>

    </div>

    <div className="grid lg:grid-cols-2 lg:gap-x-12 px-6 md:px-64 py-6 font-montserrat">

      {/* Cards */}
      <div className="lg:hidden order-1 flex flex-col lg:flex-row gap-4">
        <a className="block w-full p-4 lg:p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100" href="https://www.securitybank.com/better-banking-anytime/">
          <span className="text-md lg:text-xl font-bold text-gray-900">Online Bank Services</span>
          <p className="text-sm lg:text-md font-normal text-gray-700 mt-0 lg:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        <a className="block w-full p-4 lg:p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100" href="#">
          <span className="text-md lg:text-xl font-bold text-gray-900">Service #2</span>
          <p className="text-sm lg:text-md font-normal text-gray-700 mt-0 lg:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
      </div>
      
      {/* Left Grid */}
      <div className="order-3 lg:order-2 flex flex-col items-center space-y-8">

          {/* Cards */}
          <div className="hidden order-1 lg:flex flex-col lg:flex-row gap-4">
            <a className="block w-full p-4 lg:p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100" href="https://www.securitybank.com/better-banking-anytime/">
              <span className="text-md lg:text-xl font-bold text-gray-900">Online Bank Services</span>
              <p className="text-sm lg:text-md font-normal text-gray-700 mt-0 lg:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
            <a className="block w-full p-4 lg:p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100" href="#">
              <span className="text-md lg:text-xl font-bold text-gray-900">Service #2</span>
              <p className="text-sm lg:text-md font-normal text-gray-700 mt-0 lg:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
          </div>

          <hr className="flex my-8 lg:my-4 order-2 bg-gray-200 text-gray-50 h-[2px] w-full" />
          
          {/* Accordion */}
          <div className="order-4 mt-0 lg:mt-4 w-full mx-auto space-y-4 font-montserrat text-gray-900">

            <h2 className="text-xl lg:text-2xl font-bold mb-4">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-xl bg-white shadow">
              <button className="w-full flex justify-between items-center px-6 py-4 text-sm lg:text-lg bg-[#C0DCF4] hover:bg-[#b0d0ec] rounded-t-xl focus:outline-none"
              onClick={() => toggle(index)}>
                <span className="text-left">{faq.question}</span>
                <ChevronDownIcon className={`h-5 w-5 transform transition-transform duration-300 ${ openIndex === index ? 'rotate-180' : '' }`} />
              </button>
              {openIndex === index && (
              <div className="px-6 py-4 text-sm lg:text-lg bg-gray-50 rounded-b-xl text-justify">
                {faq.answer}
              </div>
              )}
            </div>
            ))}

            <div className="w-full flex justify-end text-md lg:text-lg">
              <a className="hover:underline" href="#">View All</a>
            </div>

          </div>

      </div>

      <hr className="flex lg:hidden my-8 order-2 bg-gray-200 text-gray-50 h-[2px] w-full" />

      {/* Dropdown */}
      <div className="order-2 flex flex-col items-center space-y-8">
      <div className="w-full lg:px-8 space-y-6">
      
        <label className="block text-md font-medium mb-2">Select a concern:</label>
        <select className="w-full p-3 rounded-xl border border-gray-300 shadow-lg bg-[#F9FAFB] focus:ring-1"
          value={selectedConcern} onChange={handleConcernChange}>
          
          <option value="" disabled>Select a concern</option>

          <optgroup label="Report an Issue">
            {groupedConcerns.report.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </optgroup>

          <optgroup label="Inquiries">
            {groupedConcerns.inquiry.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </optgroup>

          <optgroup label="Customer Service">
            {groupedConcerns.redirect.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </optgroup>
          
        </select>

        {shouldShowProductDropdown && (
        <div className="w-full">
          <label className="block text-md font-medium mb-2">Select a product:</label>
          <select className="w-full p-3 rounded-xl border border-gray-300 shadow-lg bg-white focus:ring-1" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
            <option value="" disabled>Select a product</option>
            {products.map((product) => (
            <option key={product} value={product.toLowerCase().replace(/\s+/g, "-")}>{product}</option>
            ))}
          </select>
        </div>
        )}

        {shouldShowForm && (
        <form className="space-y-4 bg-[#F9FAFB] p-6 rounded-xl shadow-lg border border-gray-200">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name *</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name *</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Doe" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Mobile Number *</label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="+63 123 456 7890" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="john.doe@gmail.com" />
            </div>
          </div>

          <div className="w-full">

            <label className="block text-sm font-medium mb-1">Message or Concern *</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={4} placeholder='Kindly place your concern here...'/>

            <span className="italic text-right mt-2 text-sm">* These fields are required.</span>

            <div className="flex items-center gap-2 mt-3 text-sm">
              <input type="checkbox" className="accent-[#2C3B55]" />
              <span className="flex flex-wrap">
                I agree to the&nbsp;
                <button className="text-blue-600 underline hover:text-blue-800 hover:cursor-pointer" type="button" onClick={() => setShowModal(true)} >acknowledgement</button>
                &nbsp;notice.
              </span>
            </div>

          </div>
          
          <button className="bg-[#2C3B55] text-white px-6 py-3 rounded-xl hover:bg-[#1f2c3d] transition">
            Submit
          </button>

        </form>
        )}

        {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-xl p-6 m-8 space-y-4 shadow-lg max-w-sm lg:max-w-2xl w-full">
          
          <p className="text-lg font-semibold text-gray-900 text-balance">By submitting the information, I hereby indicate my consent to its collection and use by the SBC Group, third parties and SBC partners for the processing of my transaction as required by data privacy laws and in accordance with the SBC Data Privacy Notice.</p>
          <p className="text-xs italic">Click here to read SBC Data Privacy Notice.</p>
          
          <div className="flex flex-col space-y-4">
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
              onClick={() => setShowModal(false)}>
              No, I don't agree.
            </button>
            <button className="px-4 py-2 bg-[#2C3B55] text-white rounded hover:bg-[#1f2c3d]"
              onClick={() => {setShowModal(false);}}>
              Yes, I agree!
            </button>
          </div>
          
        </div>
        </div>
        )}

      </div>
      </div>

      </div>

      <div className="w-full h-[170.17px] lg:h-[300px] bg-[#50849C] flex flex-col justify-center items-center space-y-4 text-center px-4" /> 
      <div className="w-full h-[839.36px] lg:h-[300px] bg-[#303444] flex flex-col justify-center items-center space-y-4 text-center px-4" /> 
      <div className="w-full h-[1046.02px] lg:h-[300px] bg-[#222B37] flex flex-col justify-center items-center space-y-4 text-center px-4" /> 
      <div className="w-full h-[444.75px] lg:h-[300px] bg-[#222B37] flex flex-col justify-center items-center space-y-4 text-center px-4" /> 
      
    </>
  );
}
