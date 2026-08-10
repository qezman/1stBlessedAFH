import React from "react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "../../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 flex flex-col justify-between relative hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
      <Quote className="absolute top-6 right-6 text-gold-500/20 w-10 h-10" />
      <div>
        <div className="flex items-center space-x-1 mb-4 text-gold-500">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 italic text-sm leading-relaxed mb-6">
          "{testimonial.quote}"
        </p>
      </div>
      <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-navy-950 text-sm">
            {testimonial.author}
          </h4>
          <span className="text-xs text-gray-500">{testimonial.relation}</span>
        </div>
        <span className="text-xs text-gray-400 font-medium">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
};
