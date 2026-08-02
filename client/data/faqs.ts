export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'about-afh' | 'daily-life' | 'medical-care' | 'costs-admission';
}

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'about-afh', label: 'About Adult Family Homes' },
  { id: 'daily-life', label: 'Daily Life & Living' },
  { id: 'medical-care', label: 'Medical & Personal Care' },
  { id: 'costs-admission', label: 'Costs & Admission Process' },
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What exactly is an Adult Family Home (AFH)?",
    answer: "An Adult Family Home (AFH) is a licensed, residential facility located in a regular neighborhood that provides personal care, medication management, meals, and 24/7 supervision for up to 6 adult residents. It offers a intimate, home-like setting compared to large institutional facilities.",
    category: "about-afh"
  },
  {
    id: "faq-2",
    question: "How is an Adult Family Home different from a nursing home or assisted living?",
    answer: "The primary difference is scale and atmosphere. While nursing homes house dozens or hundreds of residents in a clinical setting, an AFH serves a maximum of six residents in a true single-family home. Caregivers know each resident personally, providing higher caregiver-to-resident ratios and tailored attention.",
    category: "about-afh"
  },
  {
    id: "faq-3",
    question: "Are Adult Family Homes licensed in Washington State?",
    answer: "Yes. All Adult Family Homes in Washington are strictly licensed, inspected, and regulated by the Department of Social and Health Services (DSHS). Caregivers complete background checks, state-mandated training, and continuing education.",
    category: "about-afh"
  },
  {
    id: "faq-4",
    question: "What does daily life look like for residents?",
    answer: "Days follow a peaceful, predictable rhythm centered around resident comfort. Mornings include personal care routines and fresh breakfast. Afternoons feature light activities, social interaction, or garden relaxation. Evenings include family-style dinners and quiet wind-down routines.",
    category: "daily-life"
  },
  {
    id: "faq-5",
    question: "Can family members visit whenever they want?",
    answer: "Absolutely. We maintain an open-door policy for families. Visiting hours are flexible, and families are always welcome to share meals, celebrate birthdays, or spend quality time together.",
    category: "daily-life"
  },
  {
    id: "faq-6",
    question: "How do you handle dietary restrictions and meal preparation?",
    answer: "All meals are cooked fresh in our home kitchen. We accommodate specialized dietary needs, including low-sodium, diabetic, renal, puree, or allergen-free requirements, planned in consultation with healthcare providers.",
    category: "daily-life"
  },
  {
    id: "faq-7",
    question: "How is medication managed for residents?",
    answer: "Our certified caregivers handle all prescription storage, organization, and timely administration under precise protocols. We coordinate directly with doctors and pharmacies for timely refills and delivery.",
    category: "medical-care"
  },
  {
    id: "faq-8",
    question: "Do you provide care for seniors with dementia or Alzheimer's?",
    answer: "Yes. Our small, calm, and predictable home environment is ideal for seniors living with memory loss. Familiar faces, consistent staff, and structured routines minimize anxiety and confusion.",
    category: "medical-care"
  },
  {
    id: "faq-9",
    question: "What happens if a resident has a medical emergency?",
    answer: "Our caregivers are trained in CPR and emergency response protocols. In the event of an urgent medical situation, emergency medical services (911) are contacted immediately, followed by prompt notification of the resident's primary physician and family.",
    category: "medical-care"
  },
  {
    id: "faq-10",
    question: "How do we schedule a tour of 1st Blessed AFH?",
    answer: "Scheduling a tour is simple and stress-free. You can call us directly at 206-303-0549 or fill out the contact form on our website. We welcome tours 7 days a week by appointment.",
    category: "costs-admission"
  },
  {
    id: "faq-11",
    question: "What is the process for moving into 1st Blessed AFH?",
    answer: "The process begins with an initial conversation and home tour. If it's a mutual fit, a state-required pre-admission assessment is completed by our care manager to tailor a personalized care plan before move-in day.",
    category: "costs-admission"
  },
  {
    id: "faq-12",
    question: "What items should a resident bring on move-in day?",
    answer: "Residents are encouraged to bring personal bedroom furnishings, comfortable clothing, familiar family photos, favorite blankets, and personal toiletries to make their private bedroom feel like home.",
    category: "costs-admission"
  }
];
