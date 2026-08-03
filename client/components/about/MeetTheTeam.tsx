import { Plus } from "lucide-react";

const TEAM = [
  {
    name: "Abbey Hamilton, RN",
    role: "Registered Nurse & Care Director",
    bio: "Over 12 years of clinical experience in senior health and post-acute rehabilitation care.",
    photo: "/Abbey Hamilton is a registered nurse who completed….jpg",
  },
  {
    name: "Dr. Chinasa Linda Atuegwu",
    role: "Medical Care Advisor",
    bio: "Dedicated healthcare professional providing oversight and guidance on resident health plans.",
    photo: "/Dr_ Mrs Atuegwu Chinasa Linda (Ezeoma)….jpg",
  },
  {
    name: "Carol Silva",
    role: "Senior Care Specialist",
    bio: "Specializes in dementia care, daily vital monitoring, and personalized wellness routines.",
    photo: "/Médica @loocarol senhoras e senhores__#fotografos….jpg",
  },
  {
    name: "Linda Ezeoma",
    role: "Resident Care Coordinator",
    bio: "Passionate about creating a loving, respectful, and joyful home environment for all residents.",
    photo: "/Retratos de marca personal para la bella doctora….jpg",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 relative border border-gray-100 shadow-sm">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9992E]" />
              </div>
              <h3 className="text-base font-medium text-[#0B1628] tracking-[-0.01em] mb-0.5">
                {member.name}
              </h3>
              <span className="text-[11px] font-semibold text-[#25508A] tracking-[0.08em] uppercase mb-2">
                {member.role}
              </span>
              <p className="text-xs font-light text-gray-500 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
