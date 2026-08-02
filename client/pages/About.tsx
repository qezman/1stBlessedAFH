import { ShieldCheck, Heart, Users, Award, CheckCircle2, LucideIcon } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

const CORE_VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Heart,
    title: 'Dignity & Compassion',
    desc: 'Every resident is treated as an honored individual with unique life stories, preferences, and respect.',
  },
  {
    icon: Users,
    title: 'Intimate Family Environment',
    desc: 'With a maximum of 6 residents, our home eliminates the clinical anonymity of large institutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Safety',
    desc: 'Licensed by Washington State DSHS with 24/7 awake care, CPR-certified staff, and continuous monitoring.',
  },
  {
    icon: Award,
    title: 'Caregiver Excellence',
    desc: 'Our team undergoes rigorous background checks, continuous dementia training, and ongoing education.',
  },
];

const MISSION_POINTS = [
  'Licensed and inspected by WA State DSHS',
  '24-Hour awake caregiver supervision & emergency preparedness',
  'Individualized care plans tailored to health & mobility needs',
];

export function About() {
  return (
    <main className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-3">ABOUT OUR HOME & TEAM</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Meet Our Caregivers & Values</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dedicated to providing dignified, high-quality 24-hour senior care at 1st Blessed Adult Family Home in Everett, WA.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                badge="OUR PURPOSE"
                title="Creating a Haven of Comfort and Peace for Seniors"
                subtitle="Founded on the principle that senior care should feel like family, not an institution."
                align="left"
              />
              <p className="text-gray-600 leading-relaxed text-base">
                At 1st Blessed Adult Family Home, we recognize that placing a loved one into care is one of the most emotional decisions a family can make. That is why we built our home around open communication, safety, and authentic warmth.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Located in a quiet residential neighborhood in Everett, Washington, our single-story home provides accessible living spaces, private rooms, nutritious home-cooked meals, and continuous care for up to six residents.
              </p>
              <div className="pt-2 space-y-3">
                {MISSION_POINTS.map((point) => (
                  <div key={point} className="flex items-center space-x-3 text-navy-950 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://framerusercontent.com/assets/xkjm8YFt86QMxl6KrvoqMGtrSI0.jpg"
                  alt="Our dedicated team and home environment"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-bg border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="WHAT DRIVES US"
            title="Our Core Guiding Principles"
            subtitle="The values that guide every caregiver, every interaction, and every meal served in our home."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-950 mb-4">Would You Like to Tour Our Home?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We welcome families to schedule a private walk-through, meet our caregivers, and ask any questions in person.
          </p>
          <Button to="/contact" variant="gold" size="lg">Schedule a Tour Today</Button>
        </div>
      </section>
    </main>
  );
}
