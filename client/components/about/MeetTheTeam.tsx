import { Plus } from "lucide-react";

const TEAM = [
  {
    name: "[Caregiver Name]",
    role: "Founder & Lead Caregiver",
    bio: "Replace with a 2–3 sentence bio. Include training, certifications, years of experience, and a personal touch about why they care for seniors.",
    photo:
      "https://framerusercontent.com/assets/NAzYO2o1MS3dK9Xa3ksU5oCAREU.jpg",
  },
  {
    name: "[Caregiver Name]",
    role: "Caregiver",
    bio: "Replace with a genuine bio. Families read these carefully — a real photo and real words matter more than stock anything.",
    photo:
      "https://framerusercontent.com/assets/xkjm8YFt86QMxl6KrvoqMGtrSI0.jpg",
  },
];

export function MeetTheTeam() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="mb-14 max-w-[520px]">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
            — The Team
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#0B1628] tracking-[-0.02em] leading-tight">
            The people who make this home what it is.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full aspect-[3/4] rounded-none overflow-hidden mb-5 relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9992E]" />
              </div>
              <h3 className="text-lg font-medium text-[#0B1628] tracking-[-0.01em] mb-1">
                {member.name}
              </h3>
              <span className="text-xs font-semibold text-[#25508A] tracking-[0.1em] uppercase mb-3">
                {member.role}
              </span>
              <p className="text-sm font-light text-gray-500 leading-[1.75]">
                {member.bio}
              </p>
            </div>
          ))}

          <div className="flex flex-col">
            <div className="w-full aspect-[3/4] bg-gray-50 border border-dashed border-gray-300 rounded-none mb-5 flex items-center justify-center">
              <Plus className="w-8 h-8 text-gray-300" />
            </div>
            <span className="text-xs font-semibold text-[#25508A] tracking-[0.1em] uppercase mb-3">
              Our team is growing
            </span>
            <p className="text-sm font-light text-gray-500 leading-[1.75]">
              We carefully select every caregiver for skill, empathy, and
              character. As we grow, we'll introduce you to each person here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
