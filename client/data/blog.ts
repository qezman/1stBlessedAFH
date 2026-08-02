export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: "FAMILY GUIDES" | "CARE & EDUCATION";
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-talk-to-an-aging-parent-about-moving-into-a-care-home",
    title: "How to Talk to an Aging Parent About Moving Into a Care Home",
    author: "Daniel Rae",
    authorRole: "1st Blessed Care Team",
    date: "Apr 18, 2026",
    readTime: "5 min read",
    category: "FAMILY GUIDES",
    excerpt:
      "One of the hardest conversations a family has. Here are compassionate, practical ways to approach it — and what to avoid saying.",
    content: [
      "When a parent or loved one begins to need more support than can be managed at home alone, families often find themselves navigating a landscape of unfamiliar terms: nursing homes, assisted living, memory care, adult family homes. The options can feel overwhelming — especially when the decision feels urgent.",
      "An adult family home (AFH) is a licensed, private residence where a small number of adults — typically no more than six — receive personal care and support from live-in or on-site caregivers. Unlike a nursing home or assisted living facility, an AFH is a real home in a real neighborhood. Residents live in bedrooms, eat at a dining table, and share common spaces — just like a family.",
      "The State of Washington licenses and regulates adult family homes through the Department of Social and Health Services (DSHS). Caregivers must meet training and certification requirements, and the home is subject to regular inspections.",
      "The biggest differences are scale, atmosphere, and the type of care provided. Nursing homes are large facilities — sometimes housing hundreds of residents — with clinical environments, shift-based staffing, and a focus on medical care. Adult family homes are small, residential, and deeply personal.",
      "In a six-person adult family home, caregivers know every resident by name, preference, and routine. That's not a figure of speech — it's simply what the math allows.",
      "Nursing homes are best suited for seniors who need complex medical care — wound care, IV therapy, ventilator support. Adult family homes are best suited for seniors who need personal care, companionship, medication management, and daily assistance — but don't require a clinical environment.",
      "In a well-run adult family home, days are built around the residents — not the other way around. Mornings include personal care, breakfast, and medication routines. Afternoons might include light activities, visits from family, or rest. Evenings include dinner and wind-down routines.",
      "Families are welcome — often encouraged — to visit freely. Many families find that the smaller, home-like environment makes it easier to stay involved in their loved one's care than larger facilities.",
      "An AFH is typically the right fit when your loved one needs consistent personal care and companionship, values a home environment over a clinical one, would benefit from consistent caregiver relationships, and doesn't require skilled nursing.",
      "If you're trying to decide what's right for your family, the best first step is a conversation — not a commitment. Most adult family homes, including 1st Blessed, welcome families to call, ask questions, and tour the home before making any decisions.",
    ],
  },
  {
    slug: "why-small-homes-are-often-better-for-dementia-care",
    title: "Why Small Homes Are Often Better for Dementia Care",
    author: "Lateef JK.",
    authorRole: "1st Blessed Care Team",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    category: "CARE & EDUCATION",
    excerpt:
      "Research and experience both point in the same direction: familiar environments, consistent faces, and calm routines make a measurable difference in dementia outcomes.",
    content: [
      "For seniors living with Alzheimer's disease or other forms of dementia, environment plays a critical role in daily well-being. Large, noisy facilities with changing staff shifts can cause confusion, anxiety, and sensory overload.",
      "In contrast, a small adult family home offers an environment tailored to the cognitive needs of dementia care. With a maximum of six residents, noise levels remain low, layout navigation is effortless, and daily routines remain calm.",
      "Consistency is paramount in memory care. In our home, residents see the same caregivers every single day. This familiarity builds deep trust, allowing caregivers to notice subtle changes in health or mood long before they escalate.",
      "Dementia care in a residential home focuses on preserving dignity. Residents participate in familiar household activities like folding towels, watering plants, or listening to classic music in the living room.",
      "Family involvement is effortless in a home setting. Relatives can drop in, join for afternoon tea, or sit together in the quiet backyard garden without navigating security gates or clinical waiting rooms.",
    ],
  },
  {
    slug: "12-questions-every-family-should-ask-when-touring-a-care-home",
    title: "12 Questions Every Family Should Ask When Touring a Care Home",
    author: "Olawale Adeshade",
    authorRole: "1st Blessed Care Team",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    category: "FAMILY GUIDES",
    excerpt:
      "Touring a potential care home can feel overwhelming. This checklist helps you know what to look for — and what red flags to watch out for.",
    content: [
      "When touring an adult family home or care facility, it is easy to get caught up in aesthetics. However, the quality of daily care depends on staffing, protocols, and overall atmosphere.",
      "Here are key questions to ask during your tour:",
      "1. What is the ratio of caregivers to residents during daytime and nighttime hours?",
      "2. What qualifications and state certifications do your caregivers hold?",
      "3. How are medication administration and prescription refills managed?",
      "4. How are customized dietary needs and preferences accommodated?",
      "5. What is your protocol for medical emergencies?",
      "6. How do you handle nighttime assistance and fall prevention?",
      "7. Are visiting hours flexible for family members?",
      "8. What daily activities and social enrichment options are offered?",
      "9. How do you communicate regular health updates to families?",
      "10. Is the home licensed and inspected by the State Department of Social and Health Services?",
      "11. What is included in the monthly fee, and are there any extra charges?",
      "12. What is the process for transitioning when care needs increase?",
    ],
  },
  {
    slug: "medication-management-for-seniors-what-good-care-looks-like",
    title: "Medication Management for Seniors: What Good Care Looks Like",
    author: "Cynthia E.",
    authorRole: "1st Blessed Care Team",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    category: "CARE & EDUCATION",
    excerpt:
      "Medication errors are one of the most common and preventable risks in senior care. Here's how a structured adult family home approach reduces that risk.",
    content: [
      "Managing multiple prescriptions can become challenging and risky for aging adults living independently. Missed doses, incorrect timing, or accidental double-dosing are frequent causes of avoidable hospitalizations.",
      "In a professional adult family home setting, medication administration is handled with strict medical compliance. Every dose is logged in a centralized Medication Administration Record (MAR).",
      "We partner closely with local pharmacies to ensure medications arrive pre-packaged and bubble-packed by time of day, virtually eliminating dosage errors.",
      "Caregivers observe the resident taking their medication directly, ensuring proper ingestion and monitoring for any side effects or changes in tolerance.",
      "Regular reviews are conducted in coordination with the resident's primary physician, nurse practitioner, and family to streamline prescriptions and maintain safety.",
    ],
  },
  {
    slug: "the-importance-of-social-engagement-for-seniors",
    title: "The Importance of Social Engagement for Seniors",
    author: "Janet Justin",
    authorRole: "1st Blessed Care Team",
    date: "Mar 13, 2026",
    readTime: "5 min read",
    category: "CARE & EDUCATION",
    excerpt:
      "Social connection is essential for emotional and mental health. Staying engaged helps seniors maintain a sense of purpose, cognition, and joy.",
    content: [
      "Social isolation is a quiet crisis among aging adults. Studies show that persistent loneliness can impact physical health as severely as chronic illness, increasing risks of depression and cognitive decline.",
      "At 1st Blessed Adult Family Home, social engagement is woven into every part of the day. Because our home hosts just six residents, nobody gets left out or sits isolated in a far-off wing.",
      "Shared meals at the dining room table foster daily conversation and camaraderie. Caregivers lead group activities tailored to resident interests, including storytelling, trivia, crafts, and light exercise.",
      "Encouraging visits from grandchildren, family members, and friends keeps residents connected to their lifelong community networks.",
      "A warm, interactive living space ensures every resident feels valued, heard, and deeply connected to their household family.",
    ],
  },
  {
    slug: "move-in-day-checklist-what-to-bring-to-an-adult-family-home",
    title: "Move-In Day Checklist: What to Bring to an Adult Family Home",
    author: "Folake Adewale",
    authorRole: "1st Blessed Care Team",
    date: "Apr 18, 2026",
    readTime: "8 min read",
    category: "FAMILY GUIDES",
    excerpt:
      "Preparing for a parent's move-in doesn't need to be stressful. Here's a practical, room-by-room list of what to bring and what to leave at home.",
    content: [
      "Transitioning into an Adult Family Home is an exciting milestone, but packing can feel daunting. The key is creating a warm, personal environment while avoiding unnecessary clutter.",
      "Bedroom Necessities: A comfortable bed or headboard, cozy bedding, extra blankets, personal pillows, and nightstand.",
      "Clothing: 7-10 days of comfortable, easy-to-wear clothing (elastic waists, non-skid socks, comfortable shoes, warm sweaters, and pajamas).",
      "Personal Touches: Framed family photographs, favorite artwork, a cherished armchair, radio, or television.",
      "Hygiene & Care Items: Favorite toiletries, electric shaver, soft towels, and any specialized mobility aids (walker, wheelchair).",
      "What to Leave Behind: Large bulky furniture, expensive jewelry, large amounts of cash, or tripping hazards like loose throw rugs.",
    ],
  },
  {
    slug: "what-makes-1st-blessed-afh-unique",
    title: "What Makes 1st Blessed AFH Unique?",
    author: "1st Blessed Team",
    authorRole: "1st Blessed Care Team",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    category: "CARE & EDUCATION",
    excerpt:
      "At 1st Blessed Adult Family Home in Everett, every day combines professional senior care with the genuine warmth of home.",
    content: [
      "When families choose 1st Blessed Adult Family Home, they are choosing a care environment built on compassion, respect, and clinical excellence.",
      "Our home in Everett, WA is designed specifically to feel like a true residence, not a health facility. From sunlight-filled private bedrooms to a cozy living room and lush backyard garden, residents feel at ease.",
      "With a maximum resident capacity of 6, our caregiver-to-resident ratio allows for instantaneous response times and deeply personalized care plans.",
      "We provide 24/7 awake care, medication administration, diabetes management, dementia care, and coordination with visiting health professionals.",
      "Above all, we treat every resident with the dignity, warmth, and love they deserve — treating them as honored members of our own family.",
    ],
  },
];
