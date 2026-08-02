import { HeartHandshake, Pill, Utensils, Activity, Smile, LucideIcon, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../../data/services';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const ICON_MAP: Record<string, LucideIcon> = {
  HeartHandshake,
  Pill,
  Utensils,
  Activity,
  Smile,
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="OUR SERVICES"
          title="Comprehensive Care Tailored to Every Resident"
          subtitle="From daily assistance to complex medication oversight, our certified team handles every detail with expertise and kindness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s) => {
            const Icon = ICON_MAP[s.iconName] ?? HeartHandshake;
            return (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-50 group-hover:bg-gold-500/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.shortDesc}</p>
                  <ul className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center space-x-2 text-xs font-medium text-gray-700">
                        <Check className="w-4 h-4 text-gold-500 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button to="/contact" variant="outline" size="sm" className="w-full">
                  Enquire About This Service <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-navy-950 to-navy-800 rounded-2xl p-8 text-white flex flex-col justify-between border border-navy-600 shadow-md">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-2">
                Need Customized Support?
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">Have specific health or mobility requirements?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every resident receives a personalized DSHS care assessment prior to move-in. We tailor staffing and care routines around your family's exact needs.
              </p>
            </div>
            <div className="pt-6">
              <Button to="/contact" variant="gold" size="md" className="w-full">Speak With Our Care Manager</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
