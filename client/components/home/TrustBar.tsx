import React from 'react';
import { ShieldCheck, Clock, Users, HeartPulse, Utensils } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    { icon: ShieldCheck, title: 'WA DSHS Licensed', desc: 'Regulated & Inspected' },
    { icon: Clock, title: '24/7 Awake Staff', desc: 'Continuous Care' },
    { icon: Users, title: 'Max 6 Residents', desc: 'Personal Attention' },
    { icon: HeartPulse, title: 'Memory Care', desc: 'Dementia Trained' },
    { icon: Utensils, title: 'Fresh Meals', desc: 'Dietary Customized' },
  ];

  return (
    <section className="bg-gold-50 border-y border-gold-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-2 p-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-1">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-navy-950 text-sm">{p.title}</h4>
                <p className="text-xs text-gray-600">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
