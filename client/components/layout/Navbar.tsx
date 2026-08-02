import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-200/60 py-3 transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-[#253675] flex items-center justify-center text-white flex-shrink-0 transition-colors group-hover:bg-[#1A3358]">
              <Home className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-medium text-sm text-[#0B1628]">
                1st Blessed
              </span>
              <span className="text-[11px] font-light text-gray-500">
                Adult Family Home
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ name, path }) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`text-xs transition-colors hover:text-[#1A3358] ${
                    active
                      ? "text-[#25508A] font-medium"
                      : "text-[#0B1628]/80 font-normal"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 bg-[#253675] hover:bg-[#1A3358] text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
            >
              <span>Schedule a Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded text-[#0B1628] hover:bg-gray-100/60 focus:outline-none"
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
        <div className="md:hidden fixed inset-x-0 top-[53px] bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg p-6">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map(({ name, path }) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm py-2 px-3 rounded transition-colors ${
                    active
                      ? "bg-[#EEF5FC] text-[#25508A] font-medium"
                      : "text-[#0B1628] hover:bg-gray-50"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-gray-100">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#253675] text-white text-xs font-medium py-3 rounded"
              >
                <span>Schedule a Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
