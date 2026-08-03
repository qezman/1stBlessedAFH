import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../../data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-navy-600/30 shadow-md ring-1 ring-gold-500/20"
                : "bg-white border-gray-100 shadow-sm hover:border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
            >
              <div className="flex items-start space-x-3 pr-4">
                <HelpCircle
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isOpen ? "text-gold-500" : "text-navy-600/60"
                  }`}
                />
                <span className="font-bold text-navy-950 text-base sm:text-lg">
                  {item.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen
                    ? "bg-gold-500 text-white"
                    : "bg-gray-100 text-navy-800"
                }`}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100/80 animate-in fade-in-50 duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
