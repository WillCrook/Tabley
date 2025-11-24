import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-emerald-600' : 'text-zinc-900 group-hover:text-zinc-700'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-emerald-600" />
          ) : (
            <Plus className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-zinc-600 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need to buy new hardware?",
      answer: "Not at all. Tabley works on any device with a web browser. You can use the iPad, laptop, or Android tablet you already have at the host stand."
    },
    {
      question: "Is there really no contract?",
      answer: "Correct. We believe we should earn your business every month. You are on a flexible rolling monthly plan that you can cancel at any time without penalty."
    },
    {
      question: "How hard is it to switch from OpenTable/ResDiary?",
      answer: "Easier than you think. We can import your existing customer database (CSV) so you don't lose your history. Most restaurants are fully set up and live in under 15 minutes."
    },
    {
      question: "Do you charge per-cover fees?",
      answer: "On our standard 'Independent Hero' plan, we charge 0% commission on bookings made through your website. You pay a flat monthly fee, and that's it. No punishment for being busy."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-soft border border-zinc-100 px-8 md:px-12 py-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Still have questions? <a href="#" className="text-emerald-600 font-medium hover:underline">Chat to our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;