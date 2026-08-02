import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Printer, ShieldCheck } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Caregivers", path: "/about" },
  { label: "Home Gallery", path: "/gallery" },
  { label: "Family Care Blog", path: "/blog" },
  { label: "FAQs & Guidance", path: "/faqs" },
  { label: "Contact & Directions", path: "/contact" },
];

const SERVICES = [
  "Personalized 24/7 Care",
  "Medication Management",
  "Home-Cooked Meals",
  "Dementia & Memory Care",
  "Health Vital Monitoring",
  "Respite & Long-Term Care",
];

const CONTACT_ITEMS = [
  { icon: MapPin, text: "6007 Rockefeller Ave\nEverett, WA 98203" },
  { icon: Phone, text: "206-303-0549", href: "tel:2063030549" },
  {
    icon: Mail,
    text: "1stblessedafh@gmail.com",
    href: "mailto:1stblessedafh@gmail.com",
  },
  { icon: Printer, text: "Fax: 425-493-3277" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="block font-bold text-lg text-white leading-tight">
                  1st Blessed
                </span>
                <span className="block text-xs font-medium text-gold-400 tracking-wider uppercase">
                  Adult Family Home
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              A warm, licensed adult family home in Everett, WA providing
              personalized 24-hour care for up to six residents.
            </p>
            <div className="flex items-center space-x-2 text-xs bg-navy-800 text-gold-400 px-3 py-2 rounded-lg border border-navy-600/40 w-fit">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>WA State Licensed AFH</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {CONTACT_ITEMS.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start space-x-3">
                  <Icon className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-gold-400 transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ whiteSpace: "pre-line" }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} 1st Blessed Adult Family Home. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacypolicy"
              className="hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="hover:text-gold-400 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
