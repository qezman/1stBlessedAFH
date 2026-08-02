import { FAQsHero } from "../components/faq/FAQsHero";
import { FAQSection } from "../components/faq/FAQSection";
import { StillHaveQuestions } from "../components/faq/StillHaveQuestions";
import { FAQsCTA } from "../components/faq/FAQsCTA";

export function FAQs() {
  return (
    <main>
      <FAQsHero />
      <FAQSection />
      <StillHaveQuestions />
      <FAQsCTA />
    </main>
  );
}
