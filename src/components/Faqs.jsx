import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faqs = () => {
  const faqs = [
    {
      question: "What is Big-O?",
      answer:
        "Big-O notation is used to describe the time and space complexity of algorithms coded by you~.",
    },
    {
      question: "Why Big-O?",
      answer:
        "Big-O helps in understanding how algorithms scale with input size and in choosing the most efficient solution.",
    },
    {
      question: "How we help?",
      answer:
        "We provide guidance on optimizing code, improving performance, and understanding algorithm efficiency.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
        Frequently Asked Question's
      </h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative p-[2px] rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onClick={() => toggleFaq(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>

            <div className="relative z-10 bg-gray-900 p-5 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform text-white ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
