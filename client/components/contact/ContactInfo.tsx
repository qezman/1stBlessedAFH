import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "11:00 AM – 4:00 PM" },
  { day: "Family visits", time: "Open door, all hours" },
];

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded border border-gray-100 hover:border-[#A8C3E0] transition-colors">
      {children}
    </div>
  );
}

function IconBox({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      className="w-11 h-11 rounded flex items-center justify-center flex-shrink-0"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 bg-[#E6F7EF] border border-[#A3CFBB] rounded px-4 py-2.5 text-[13px] font-medium text-[#1A7F4E]">
        <span className="w-2 h-2 rounded-full bg-[#1A7F4E] animate-pulse" />
        Currently accepting new residents
      </div>

      <div className="h-1" />

      {/* Phone */}
      <InfoCard>
        <IconBox bg="#EEF5FC">
          <Phone className="w-5 h-5 text-[#1A3358]" strokeWidth={1.5} />
        </IconBox>
        <div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">
            Phone
          </div>
          <a
            href="tel:2063030549"
            className="text-[15px] font-normal text-[#0B1628] hover:text-[#1A3358] transition-colors"
          >
            206-303-0549
          </a>
          <div className="text-[13px] font-light text-gray-500 mt-0.5">
            Available 7 days a week
          </div>
        </div>
      </InfoCard>

      {/* Email */}
      <InfoCard>
        <IconBox bg="#F7EDD4">
          <Mail className="w-5 h-5 text-[#C9992E]" strokeWidth={1.5} />
        </IconBox>
        <div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">
            Email
          </div>
          <a
            href="mailto:1stblessedafh@gmail.com"
            className="text-[15px] font-normal text-[#0B1628] hover:text-[#1A3358] transition-colors break-all"
          >
            1stblessedafh@gmail.com
          </a>
          <div className="text-[13px] font-light text-gray-500 mt-0.5">
            We respond within 1 business day
          </div>
        </div>
      </InfoCard>

      {/* Address */}
      <InfoCard>
        <IconBox bg="#E6F7EF">
          <MapPin className="w-5 h-5 text-[#1A7F4E]" strokeWidth={1.5} />
        </IconBox>
        <div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">
            Address
          </div>
          <div className="text-[15px] font-normal text-[#0B1628]">
            6007 Rockefeller Avenue
          </div>
          <div className="text-[15px] font-normal text-[#0B1628]">
            Everett, WA 98203
          </div>
          <a
            href="https://maps.google.com/?q=6007+Rockefeller+Avenue+Everett+WA+98203"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A3358] hover:text-[#C9992E] transition-colors mt-2 group"
          >
            Get directions
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </InfoCard>

      {/* Hours */}
      <div className="p-6 bg-gray-50 rounded border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <IconBox bg="#F1F3F5">
            <Clock className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          </IconBox>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400">
            Tours & visiting hours
          </div>
        </div>
        <div className="flex flex-col">
          {HOURS.map((h, i) => (
            <div
              key={h.day}
              className={`flex justify-between text-[13px] py-2 ${i < HOURS.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <span className="font-light text-gray-500">{h.day}</span>
              <span className="font-normal text-[#0B1628]">{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Socials */}
      <div>
        <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-3">
          Follow us
        </div>
        <div className="flex gap-2">
          {[
            {
              label: "Facebook",
              icon: (
                <Facebook className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
              ),
              href: "#",
            },
            {
              label: "Instagram",
              icon: (
                <Instagram
                  className="w-4 h-4 text-gray-500"
                  strokeWidth={1.5}
                />
              ),
              href: "#",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:border-gray-300 hover:bg-gray-100 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
