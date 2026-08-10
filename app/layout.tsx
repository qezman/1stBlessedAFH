import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserWayWidget } from "@/components/layout/UserWayWidget";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default:
      "Compassionate Adult Family Home in Everett, Washington | 1st Blessed AFH",
    template: "%s | 1st Blessed Adult Family Home",
  },
  description:
    "1st Blessed Adult Family Home offers 24/7 personalized care, medication management, and a warm family environment for seniors in Everett, WA. Schedule a tour today!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://1stblessedafh.com",
    siteName: "1st Blessed Adult Family Home",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${inter.className}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "1st Blessed Adult Family Home",
              url: SITE_URL.toString(),
              telephone: "+1-206-303-0549",
              email: "1stblessedafh@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6007 Rockefeller Avenue",
                addressLocality: "Everett",
                addressRegion: "WA",
                postalCode: "98203",
                addressCountry: "US",
              },
            }),
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div id="main-content" className="flex-grow">{children}</div>
          <Footer />
        </div>
        <UserWayWidget />
      </body>
    </html>
  );
}
