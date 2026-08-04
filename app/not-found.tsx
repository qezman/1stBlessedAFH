import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="pt-32 pb-24 bg-brand-bg text-center">
      <div className="max-w-md mx-auto px-4 space-y-6">
        <span className="text-6xl font-extrabold text-gold-500 block">404</span>
        <h1 className="text-3xl font-bold text-navy-950">Page Not Found</h1>
        <p className="text-gray-600 text-sm">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button to="/" variant="gold" size="md">
          <Home className="w-4 h-4 mr-2" /> Return to Home
        </Button>
      </div>
    </main>
  );
}
