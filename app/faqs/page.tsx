import { FAQsHero } from "@/components/faq/FAQsHero";
import { FAQSection } from "@/components/faq/FAQSection";
import { StillHaveQuestions } from "@/components/faq/StillHaveQuestions";
import { FAQsCTA } from "@/components/faq/FAQsCTA";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about admissions, staffing ratios, medication management, costs, and daily living at 1st Blessed Adult Family Home.",
  path: "/faqs",
});

export default function FAQsPage() {
  return (
    <main>
      <FAQsHero />
      <FAQSection />
      <StillHaveQuestions />
      <FAQsCTA />
    </main>
  );
}
