import { ShieldCheck, Phone, ArrowRight, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

const STATS = [
  { value: '6 Max', label: 'Residents for 1:1 Focus', accent: true },
  { value: '24/7', label: 'Awake Care & Oversight', accent: false },
  { value: '100%', label: 'Home Cooked Meals', accent: true },
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-600/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-600/50 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>Licensed 6-Bed Adult Family Home · Everett, WA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Compassionate, 24/7 Care in a <span className="text-gold-500">Warm Family</span> Home
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              1st Blessed Adult Family Home offers dedicated, round-the-clock personalized senior care, medication administration, and home-cooked meals in a cozy Everett neighborhood setting.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button to="/contact" variant="gold" size="lg" className="w-full sm:w-auto">
                Schedule a Private Tour <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="tel:2063030549"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg border border-navy-600 text-white font-semibold hover:bg-navy-600/50 transition-colors"
              >
                <Phone className="w-5 h-5 text-gold-500" />
                <span>Call (206) 303-0549</span>
              </a>
            </div>

            <div className="pt-8 border-t border-navy-600/40 grid grid-cols-3 gap-4 text-center lg:text-left">
              {STATS.map(({ value, label, accent }) => (
                <div key={label}>
                  <span className={`block text-2xl sm:text-3xl font-bold ${accent ? 'text-gold-500' : 'text-white'}`}>{value}</span>
                  <span className="text-xs text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-600/40">
              <img
                src="https://framerusercontent.com/assets/NAzYO2o1MS3dK9Xa3ksU5oCAREU.jpg"
                alt="1st Blessed Adult Family Home exterior and caring atmosphere"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-gold-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">A True Home, Not a Facility</h4>
                    <p className="text-xs text-gray-300">Located at 6007 Rockefeller Ave, Everett, WA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
