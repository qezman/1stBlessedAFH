"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[#2B1E78] flex items-center justify-center text-white flex-shrink-0 transition-colors group-hover:bg-[#221766]">
              <Home className="w-4 h-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-normal text-[15px] text-[#0B1628]">
                1st Blessed
              </span>
              <span className="text-[13px] font-light text-[#3366A8]">
                Adult Family Home
              </span>
            </div>
          </Link>

          {/* Navigation Links centered */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
            {NAV_LINKS.map(({ name, path }) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  prefetch
                  className={`text-[14px] transition-colors hover:text-[#2B1E78] ${
                    active
                      ? "text-[#2B1E78] font-medium"
                      : "text-[#495057] font-normal"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#2B1E78] hover:bg-[#221766] text-white text-[14px] font-normal pl-6 pr-5 py-3 rounded-lg transition-colors"
            >
              <span>Schedule a Tour</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#2B1E78] text-white text-xs font-normal px-4 py-2.5 rounded-lg"
            >
              Tour
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-[#0B1628] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg p-4 sm:p-6">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map(({ name, path }) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  prefetch
                  className={`text-sm py-2.5 px-4 rounded-lg transition-colors ${
                    active
                      ? "bg-[#EEF5FC] text-[#2B1E78] font-normal"
                      : "text-[#0B1628] font-light hover:bg-gray-50"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2B1E78] text-white text-sm font-normal py-3 rounded-lg"
              >
                <span>Schedule a Tour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
