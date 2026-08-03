import React from "react";
import { faqCategories } from "../../data/faqs";
import { ChevronRight } from "lucide-react";

interface FAQSidebarProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const FAQSidebar: React.FC<FAQSidebarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-28">
      <h3 className="text-xs font-semibold text-gold-600 tracking-wider uppercase mb-4">
        Filter Topics
      </h3>
      <nav className="space-y-1">
        {faqCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-navy-800 text-white font-semibold shadow-sm"
                  : "text-navy-950/80 hover:bg-gold-50 hover:text-gold-600"
              }`}
            >
              <span>{cat.label}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  isSelected ? "rotate-90 text-gold-400" : "text-gray-400"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
};
