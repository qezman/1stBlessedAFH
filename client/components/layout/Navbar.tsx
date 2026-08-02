import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-gold-500 shadow-sm group-hover:bg-navy-950 transition-colors">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="block font-bold text-lg text-navy-950 leading-tight">
                1st Blessed
              </span>
              <span className="block text-xs font-medium text-gold-600 tracking-wider uppercase">
                Adult Family Home
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  pathname === path
                    ? "text-gold-600 font-semibold"
                    : "text-navy-950/80"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:2063030549"
              className="flex items-center space-x-2 text-xs font-semibold text-navy-800 hover:text-gold-600 px-3 py-2 rounded-lg hover:bg-gold-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>(206) 303-0549</span>
            </a>
            <Button to="/contact" variant="gold" size="sm">
              Schedule a Tour
            </Button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <Button
              to="/contact"
              variant="gold"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Tour
            </Button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-navy-950 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-xl p-6 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`text-base font-medium py-2 px-3 rounded-lg ${
                  pathname === path
                    ? "bg-gold-50 text-gold-600 font-semibold"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                {name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a
                href="tel:2063030549"
                className="flex items-center justify-center space-x-2 py-2 text-sm font-semibold text-navy-800 bg-gray-50 rounded-lg"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>Call (206) 303-0549</span>
              </a>
              <Button to="/contact" variant="gold" size="md" className="w-full">
                Schedule a Tour
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
