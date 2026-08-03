import { ArrowRight, MapPin } from "lucide-react";

export function MapSection() {
  return (
    <div className="bg-gray-50 border-t border-gray-200">
      {/* Address bar */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-[#EEF5FC] rounded flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-[#1A3358]" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-base font-normal text-[#0B1628]">
              6007 Rockefeller Avenue, Everett, WA 98203
            </div>
            <div className="text-[13px] font-light text-gray-500 mt-0.5">
              Quiet residential neighborhood · Easy freeway access
            </div>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=6007+Rockefeller+Avenue+Everett+WA+98203"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1A3358] hover:bg-[#122240] text-white text-[13px] font-medium px-5 py-3 rounded transition-colors flex-shrink-0 group"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          Get directions
        </a>
      </div>

      {/* Map embed */}
      <iframe
        title="1st Blessed Adult Family Home location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.3!2d-122.2!3d47.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6007+Rockefeller+Ave%2C+Everett%2C+WA+98203!5e0!3m2!1sen!2sus!4v1"
        className="w-full h-[400px] border-none block"
        style={{ filter: "grayscale(20%) contrast(1.05)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
