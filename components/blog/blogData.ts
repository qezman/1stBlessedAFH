export interface Post {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverBg: string;
}

export interface BodyBlock {
  type: "p" | "h2" | "callout";
  text: string;
}

export interface FullPost extends Post {
  body: BodyBlock[];
}

export const FEATURED_POST: Post = {
  id: 1,
  slug: "what-is-an-adult-family-home",
  category: "Care & Education",
  title:
    "What Is an Adult Family Home — And How Is It Different From a Nursing Home?",
  excerpt:
    "Many families encounter the term 'adult family home' for the first time when a loved one needs care. Here's a plain-English explanation of what it means, what to expect, and why it might be the right choice.",
  date: "March 12, 2025",
  readTime: "6 min read",
  coverBg: "#C8D8E8",
};

export const POSTS: Post[] = [
  {
    id: 2,
    slug: "questions-to-ask-when-touring",
    category: "Family Guides",
    title: "12 Questions Every Family Should Ask When Touring a Care Home",
    excerpt:
      "Touring a potential care home can feel overwhelming. This checklist helps you know what to look for — and what red flags to watch out for.",
    date: "February 28, 2025",
    readTime: "5 min read",
    coverBg: "#D6C8A8",
  },
  {
    id: 3,
    slug: "how-to-talk-to-aging-parent",
    category: "Family Guides",
    title: "How to Talk to an Aging Parent About Moving Into a Care Home",
    excerpt:
      "One of the hardest conversations a family has. Here are compassionate, practical ways to approach it — and what to avoid saying.",
    date: "February 10, 2025",
    readTime: "7 min read",
    coverBg: "#B8CEB8",
  },
  {
    id: 4,
    slug: "dementia-care-at-home",
    category: "Care & Education",
    title: "Why Small Homes Are Often Better for Dementia Care",
    excerpt:
      "Research and experience both point in the same direction: familiar environments, consistent faces, and calm routines make a measurable difference in dementia outcomes.",
    date: "January 22, 2025",
    readTime: "8 min read",
    coverBg: "#C8B8D8",
  },
  {
    id: 5,
    slug: "medication-management-seniors",
    category: "Care & Education",
    title: "Medication Management for Seniors: What Good Care Looks Like",
    excerpt:
      "Medication errors are one of the most common and preventable risks in senior care. Here's how a structured adult family home approach reduces that risk.",
    date: "January 8, 2025",
    readTime: "5 min read",
    coverBg: "#C8D4D0",
  },
  {
    id: 6,
    slug: "moving-day-checklist",
    category: "Family Guides",
    title: "Move-In Day Checklist: What to Bring to an Adult Family Home",
    excerpt:
      "Preparing for a parent's move-in doesn't need to be stressful. Here's a practical, room-by-room list of what to bring and what to leave at home.",
    date: "December 18, 2024",
    readTime: "4 min read",
    coverBg: "#D8C8B8",
  },
];

export const ARTICLE: FullPost = {
  ...FEATURED_POST,
  body: [
    {
      type: "p",
      text: "When a parent or loved one begins to need more support than can be managed at home alone, families often find themselves navigating a landscape of unfamiliar terms: nursing homes, assisted living, memory care, adult family homes. The options can feel overwhelming — especially when the decision feels urgent.",
    },
    {
      type: "h2",
      text: "So, what exactly is an adult family home?",
    },
    {
      type: "p",
      text: "An adult family home (AFH) is a licensed, private residence where a small number of adults — typically no more than six — receive personal care and support from live-in or on-site caregivers. Unlike a nursing home or assisted living facility, an AFH is a real home in a real neighborhood. Residents live in bedrooms, eat at a dining table, and share common spaces — just like a family.",
    },
    {
      type: "p",
      text: "The State of Washington licenses and regulates adult family homes through the Department of Social and Health Services (DSHS). Caregivers must meet training and certification requirements, and the home is subject to regular inspections.",
    },
    {
      type: "h2",
      text: "How is it different from a nursing home?",
    },
    {
      type: "p",
      text: "The biggest differences are scale, atmosphere, and the type of care provided. Nursing homes are large facilities — sometimes housing hundreds of residents — with clinical environments, shift-based staffing, and a focus on medical or skilled nursing care. Adult family homes are small, residential, and personal.",
    },
    {
      type: "callout",
      text: "In a six-person adult family home, caregivers know every resident by name, preference, and routine. That's not a figure of speech — it's simply what the math allows.",
    },
    {
      type: "p",
      text: "Nursing homes are best suited for seniors who need complex medical care — wound care, IV therapy, ventilator support. Adult family homes are best suited for seniors who need personal care, companionship, medication management, and daily assistance — but don't require a clinical environment.",
    },
    {
      type: "h2",
      text: "What does daily life actually look like?",
    },
    {
      type: "p",
      text: "In a well-run adult family home, days are built around the residents — not the other way around. Mornings include personal care, breakfast, and medication routines. Afternoons might include light activities, visits from family, or rest. Evenings include dinner and wind-down routines. Meals are cooked in the kitchen. Caregivers are present, not behind a nursing station.",
    },
    {
      type: "p",
      text: "Families are welcome — often encouraged — to visit freely. Many families find that the smaller, home-like environment makes it easier to stay involved in their loved one's care than larger facilities.",
    },
    {
      type: "h2",
      text: "Is an adult family home right for your loved one?",
    },
    {
      type: "p",
      text: "An AFH is typically the right fit when your loved one needs consistent personal care and companionship, values a home environment over a clinical one, would benefit from consistent caregiver relationships, and doesn't require skilled nursing or complex medical procedures.",
    },
    {
      type: "p",
      text: "If you're trying to decide what's right for your family, the best first step is a conversation — not a commitment. Most adult family homes, including 1st Blessed, welcome families to call, ask questions, and tour the home before making any decisions.",
    },
  ],
};

export const FULL_POSTS: FullPost[] = [
  ARTICLE,
  ...POSTS.map((post): FullPost => ({
    ...post,
    body: [
      { type: "p", text: post.excerpt },
      {
        type: "p",
        text: "Our care team is preparing a fuller guide on this topic. In the meantime, families are always welcome to call with questions or schedule a visit.",
      },
    ],
  })),
];

export const RELATED_POSTS: Post[] = POSTS.slice(0, 3);
