import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
