import Link from "next/link";
import { Home, MapPin, Phone, Mail, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1628] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.2fr] gap-10 lg:gap-8 lg:gap-12 mb-16">
          {/* Column 1: Brand & Badge */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#25508A] flex items-center justify-center text-white flex-shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-medium text-base text-white leading-tight">
                  1st Blessed
                </span>
                <span className="block text-xs font-normal text-gray-300">
                  Adult Family Home
                </span>
              </div>
            </Link>
            <p className="text-sm font-light text-gray-300 leading-relaxed max-w-[280px]">
              A warm, licensed adult family home in Everett, WA providing
              personalized 24-hour care for up to six residents.
            </p>
            <div className="inline-flex items-center gap-2.5 bg-[#1A3358] text-white text-xs font-medium px-4 py-2.5 rounded border border-white/10">
              <Award className="w-4 h-4 text-[#C9992E]" />
              <span>WA State Licensed AFH</span>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-base font-normal text-white mb-4">Pages</h3>
            <ul className="space-y-2.5 text-sm font-light text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacypolicy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base font-normal text-white mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm font-light text-gray-300">
              <li>Personal Care</li>
              <li>Medication Management</li>
              <li>Meal Service</li>
              <li>Health Monitoring</li>
              <li>Activities</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-base font-normal text-white mb-4">Contact</h3>
            <ul className="space-y-3.5 text-sm font-light text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>6007 Rockefeller Ave</div>
                  <div>Everett, WA 98203</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a
                  href="tel:2063030549"
                  className="hover:text-white transition-colors"
                >
                  Phone: 206-303-0549
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:1stblessedafh@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  1stblessedafh@gmail.com
                </a>
              </li>
              <li className="text-sm font-light text-gray-300 pl-7">
                Fax Number: 425-493-3277
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} 1st Blessed Adult Family Home. All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacypolicy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
