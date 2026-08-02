export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
}

export const servicesData: Service[] = [
  {
    id: "personal-care",
    title: "Personal Care & Assistance",
    shortDesc:
      "Dignified, 24/7 assistance with activities of daily living tailored to individual routines.",
    fullDesc:
      "Our caregivers provide respectful assistance with bathing, dressing, grooming, mobility, and personal hygiene. We honor independence while providing steady, compassionate support whenever needed.",
    iconName: "HeartHandshake",
    highlights: [
      "24/7 awake staff",
      "Bathing & grooming assistance",
      "Mobility & transfer support",
      "Incontinence care",
    ],
  },
  {
    id: "medication-management",
    title: "Medication Management",
    shortDesc:
      "Precise administration, pharmacy coordination, and continuous monitoring for safety.",
    fullDesc:
      "Medication routines are handled with rigorous protocols. Certified caregivers administer prescriptions on time, maintain accurate records, and collaborate directly with physicians and pharmacies.",
    iconName: "Pill",
    highlights: [
      "Timely dosage tracking",
      "Pharmacy delivery coordination",
      "Prescription renewals",
      "Physician updates",
    ],
  },
  {
    id: "meal-service",
    title: "Home-Cooked Nutrition & Meals",
    shortDesc:
      "Three nutritious, freshly prepared meals daily plus wholesome snacks customized to dietary needs.",
    fullDesc:
      "Meals are cooked fresh in our home kitchen. We accommodate diabetic, low-sodium, vegetarian, and soft-food diets, ensuring food is both nourishing and enjoyable in a communal dining setting.",
    iconName: "Utensils",
    highlights: [
      "Freshly cooked daily",
      "Specialized dietary plans",
      "Hydration monitoring",
      "Family-style dining",
    ],
  },
  {
    id: "health-monitoring",
    title: "Health & Vital Monitoring",
    shortDesc:
      "Ongoing oversight of health status, vital signs, and care plan adjustments.",
    fullDesc:
      "Regular monitoring of blood pressure, weight, glucose levels, and wellness indicators. We maintain close communication with visiting nurses, physicians, and families to proactively manage health.",
    iconName: "Activity",
    highlights: [
      "Routine vital checks",
      "Visiting nurse coordination",
      "Care plan updates",
      "Emergency response system",
    ],
  },
  {
    id: "activities",
    title: "Enrichment & Social Activities",
    shortDesc:
      "Engaging daily activities designed to nurture emotional, cognitive, and physical well-being.",
    fullDesc:
      "From music therapy and gardening to board games, gentle exercises, and holiday celebrations, our activities promote social connection, mental sharpness, and joy in everyday living.",
    iconName: "Smile",
    highlights: [
      "Cognitive games & puzzles",
      "Gentle physical mobility",
      "Music & arts",
      "Family holiday events",
    ],
  },
];
