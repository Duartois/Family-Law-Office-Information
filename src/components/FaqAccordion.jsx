import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border border-gray-200 bg-white rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left bg-white hover:bg-gray-50"
            >
              <span className="font-medium text-forest">{item.question}</span>
              <span className="text-ocre text-xl leading-none flex-shrink-0">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="px-4 md:px-5 pb-4 md:pb-5 text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
