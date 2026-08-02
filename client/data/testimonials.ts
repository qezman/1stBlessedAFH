export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  relation: string;
  rating: number;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "Finding 1st Blessed AFH was an absolute answer to our prayers. My mother receives attentive, loving care every single day. The small 6-resident setting means she is treated like family rather than a room number.",
    author: "Sarah Jenkins",
    relation: "Daughter of Resident",
    rating: 5,
    date: "May 2026",
  },
  {
    id: "2",
    quote:
      "The caregivers here are extraordinary. Their medication tracking, home-cooked meals, and clean, warm environment gave our family peace of mind from day one. I cannot recommend them highly enough.",
    author: "Robert Miller",
    relation: "Son of Resident",
    rating: 5,
    date: "March 2026",
  },
  {
    id: "3",
    quote:
      "Moving Dad out of a large facility into 1st Blessed restored his smile and calmness. The continuous routines, friendly staff, and home-like atmosphere made a world of difference for his dementia care.",
    author: "Elena Rostova",
    relation: "Family Representative",
    rating: 5,
    date: "January 2026",
  },
];
