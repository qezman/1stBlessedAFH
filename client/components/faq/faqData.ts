export const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "care", label: "Care & Services" },
  { id: "admission", label: "Admissions" },
  { id: "home", label: "The Home" },
  { id: "family", label: "For Families" },
  { id: "cost", label: "Costs & Licensing" },
];

export const FAQS = [
  // ── CARE & SERVICES ─────────────────────────────────────
  {
    id: 1,
    category: "care",
    question: "What level of care do you provide?",
    answer: `We provide non-medical personal care, which includes assistance with bathing, grooming, dressing, toileting, and mobility. We also manage medications, monitor health, coordinate with physicians, and provide meals and daily activities. For residents who need skilled nursing or complex medical procedures, we work closely with home health agencies and visiting nurses.`,
  },
  {
    id: 2,
    category: "care",
    question: "Do you offer dementia or memory care?",
    answer: `Yes. Our small home setting — with a maximum of six residents — is particularly well-suited for seniors with dementia or early-to-mid-stage memory loss. Familiar faces, consistent routines, and a calm environment all contribute to better outcomes for memory care residents. Please contact us to discuss your loved one's specific needs.`,
  },
  {
    id: 3,
    category: "care",
    question: "Is there a caregiver on-site at all times?",
    answer: `Yes — 24 hours a day, 7 days a week, including holidays. There is always a trained caregiver present in the home. This is one of the most important differences between an adult family home and other senior living options.`,
  },
  {
    id: 4,
    category: "care",
    question: "What does a typical day look like for residents?",
    answer: `Each day is built around the resident's individual preferences and care plan. Generally, mornings include personal care and breakfast, midday includes activities or rest, afternoons may include family visits or light exercise, and evenings include dinner and wind-down routines. We follow a consistent schedule because routine is especially important for seniors, but we're flexible around individual needs.`,
  },
  {
    id: 5,
    category: "care",
    question:
      "Do you provide specialized diets or accommodate dietary restrictions?",
    answer: `Absolutely. All meals are prepared in-home and can be adapted for diabetic diets, low-sodium needs, soft or pureed textures, cultural food preferences, and allergies. We discuss dietary needs during the admission process and revisit them regularly.`,
  },

  // ── ADMISSIONS ──────────────────────────────────────────
  {
    id: 6,
    category: "admission",
    question: "How do I know if 1st Blessed is right for my loved one?",
    answer: `The best way to know is to visit. We encourage families to schedule a tour, walk through the home, meet the caregivers, and ask every question they have. We'll also review your loved one's care needs honestly — if their needs exceed what we can safely provide, we'll tell you and help you find a better fit.`,
  },
  {
    id: 7,
    category: "admission",
    question: "What is the admissions process?",
    answer: `The process typically involves: (1) an initial phone or in-person consultation, (2) a tour of the home, (3) a care needs assessment, (4) a review of the care agreement and house rules, and (5) move-in coordination. We try to make this as smooth and low-stress as possible for families.`,
  },
  {
    id: 8,
    category: "admission",
    question: "How many residents do you accept?",
    answer: `We are licensed for a maximum of <strong>six residents</strong>. This is not a business decision — it's a care decision. Fewer residents means more attention, better relationships, and higher quality care. We will never exceed this number.`,
  },
  {
    id: 9,
    category: "admission",
    question: "Do you currently have availability?",
    answer: `Availability changes. Please call us at <a href="tel:+12063030549">206-303-0549</a> or email <a href="mailto:1stblessedafh@gmail.com">1stblessedafh@gmail.com</a> to ask about current openings. We recommend reaching out early, as spots can fill quickly.`,
  },
  {
    id: 10,
    category: "admission",
    question: "Can residents bring their own furniture or belongings?",
    answer: `Yes, and we encourage it. Personal items, photos, small furniture pieces, and meaningful belongings help residents feel at home faster. We'll coordinate with your family ahead of move-in to make sure the room is set up in a way that feels familiar and comfortable.`,
  },

  // ── THE HOME ─────────────────────────────────────────────
  {
    id: 11,
    category: "home",
    question: "Where is the home located?",
    answer: `We are located at <strong>6007 Rockefeller Avenue, Everett, WA 98203</strong> — a quiet, residential neighborhood in Everett. The area is peaceful and accessible, with easy freeway access for family visits from Marysville, Arlington, Lake Stevens, and surrounding communities.`,
  },
  {
    id: 12,
    category: "home",
    question: "What does the home include?",
    answer: `The home includes private bedrooms, shared living and dining areas, a fully equipped kitchen, and accessible bathrooms. We have outdoor space for fresh air and light activity. All common areas are designed for comfort and accessibility — no clinical aesthetic.`,
  },
  {
    id: 13,
    category: "home",
    question: "Is the home accessible for residents with mobility challenges?",
    answer: `Yes. The home is set up to accommodate residents using walkers, wheelchairs, or other mobility aids. Bathrooms have safety bars and accessibility features, and we keep walkways clear and well-lit at all times. Specific accessibility questions are best answered during a tour.`,
  },

  // ── FOR FAMILIES ─────────────────────────────────────────
  {
    id: 14,
    category: "family",
    question: "Can family members visit anytime?",
    answer: `Yes — family visits are always welcome. We don't restrict visiting hours because we believe family connection is part of care. We simply ask that visits are considerate of other residents and any active care routines. You are welcome to call ahead, but it's not required.`,
  },
  {
    id: 15,
    category: "family",
    question:
      "How will we be kept informed about our loved one's health and wellbeing?",
    answer: `We maintain open communication with families. You'll receive regular updates from caregivers, and you can call or message us anytime with questions. For health changes — even minor ones — we notify the family promptly. You are always part of the care team, not kept at a distance.`,
  },
  {
    id: 16,
    category: "family",
    question: "What happens if my loved one's care needs change?",
    answer: `We reassess care plans regularly and after any health change. If needs increase within the scope of what we provide, we update the care plan. If a resident's needs grow beyond what an adult family home can safely provide — for example, requiring skilled nursing — we'll work with the family to arrange the appropriate next step and give proper notice.`,
  },
  {
    id: 17,
    category: "family",
    question: "What should we bring for move-in day?",
    answer: `We recommend bringing: personal clothing (labeled), toiletries, any medical equipment (walker, CPAP, etc.), a list of current medications and physicians, insurance cards, and personal items that make the space feel familiar — photos, a favourite blanket, small decorations. We'll provide a more detailed checklist during the admission process.`,
  },

  // ── COSTS & LICENSING ────────────────────────────────────
  {
    id: 18,
    category: "cost",
    question: "How much does care at 1st Blessed cost?",
    answer: `Care costs vary depending on the level of care required and the specific needs of the resident. We discuss fees transparently during the admissions process. Please contact us directly for current pricing — we're happy to walk you through what's included and what factors affect the monthly cost.`,
  },
  {
    id: 19,
    category: "cost",
    question: "Do you accept Medicaid or Medicare?",
    answer: `Please contact us directly to discuss payment options including Medicaid, long-term care insurance, and private pay. Eligibility and coverage vary, and we're happy to help families understand their options during the consultation process.`,
  },
  {
    id: 20,
    category: "cost",
    question: "Is 1st Blessed licensed by the state?",
    answer: `Yes. We are a fully licensed Adult Family Home under the State of Washington Department of Social and Health Services (DSHS). Our license is current and in good standing. Families can verify our license status through the <a href="https://fortress.wa.gov/dshs/adsaapps" target="_blank" rel="noopener noreferrer">DSHS public directory</a>.`,
  },
  {
    id: 21,
    category: "cost",
    question: "Are your caregivers certified and background-checked?",
    answer: `Yes. All caregivers are background-checked, first aid and CPR certified, and trained in accordance with Washington State AFH requirements. We take the safety and trustworthiness of our team seriously — it's the foundation of everything we do.`,
  },
];
