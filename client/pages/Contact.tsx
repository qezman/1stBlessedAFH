import { MapPin, Phone, Mail, Printer, Clock, LucideIcon, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

const CONTACT_DETAILS: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: MapPin, label: 'Home Address', value: '6007 Rockefeller Ave, Everett, WA 98203' },
  { icon: Phone, label: 'Phone Number', value: '206-303-0549', href: 'tel:2063030549' },
  { icon: Mail, label: 'Email Address', value: '1stblessedafh@gmail.com', href: 'mailto:1stblessedafh@gmail.com' },
  { icon: Printer, label: 'Fax Line', value: '425-493-3277' },
  { icon: Clock, label: 'Tours & Visits', value: '7 days a week (by appointment)' },
];

const INPUT_CLS = 'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-800 text-sm';
const LABEL_CLS = 'block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-2';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <main className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-3">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Schedule a Tour or Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            No phone trees, no automated call centers. Connect directly with our caregivers in Everett, WA.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-950 mb-2">Send Us a Direct Message</h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form below to enquire about availability, schedule a private tour, or ask care questions.
              </p>

              {submitted ? (
                <div className="bg-gold-50 border border-gold-500/30 p-8 rounded-xl text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-gold-600 mx-auto" />
                  <h3 className="text-xl font-bold text-navy-950">Thank You for Reaching Out!</h3>
                  <p className="text-gray-700 text-sm">
                    We have received your message. A member of the 1st Blessed Care Team will respond promptly.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={LABEL_CLS}>Your Full Name *</label>
                    <input type="text" required value={form.name} onChange={set('name')} placeholder="e.g. Sarah Jenkins" className={INPUT_CLS} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL_CLS}>Email Address *</label>
                      <input type="email" required value={form.email} onChange={set('email')} placeholder="sarah@example.com" className={INPUT_CLS} />
                    </div>
                    <div>
                      <label className={LABEL_CLS}>Phone Number</label>
                      <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(206) 000-0000" className={INPUT_CLS} />
                    </div>
                  </div>
                  <div>
                    <label className={LABEL_CLS}>How Can We Help You? *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us about your loved one's needs or preferred tour dates..."
                      className={INPUT_CLS}
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold text-navy-950 border-b border-gray-100 pb-4">Direct Contact Information</h3>
                <ul className="space-y-5 text-sm">
                  {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-bold text-navy-950">{label}</span>
                        {href ? (
                          <a href={href} className="text-gold-600 font-semibold hover:underline">{value}</a>
                        ) : (
                          <span className="text-gray-600">{value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64">
                <iframe
                  title="1st Blessed Adult Family Home Location"
                  src="https://maps.google.com/maps?q=6007%20Rockefeller%20Ave,%20Everett,%20WA%2098203&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
