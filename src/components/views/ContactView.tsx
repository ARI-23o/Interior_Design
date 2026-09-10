import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

export const ContactView: React.FC = () => {
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [city, setCity] = useState('Nagpur');
  const [budgetRange, setBudgetRange] = useState('₹15 – 25 Lakhs');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hi Sowakaah Studio, I'm reaching out from the contact page. I'd like to discuss interior design for my ${propertyType} in ${city} (Budget: ${budgetRange}). Name: ${name || 'Prospective Client'}.`;
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    {
      q: 'How does the billing and payment structure work?',
      a: 'We work on transparent milestone-based disbursements linked strictly to tangible on-site progress (e.g., Design Signoff, Carcass Installation, Finishing, Handover).'
    },
    {
      q: 'Do you take up projects outside Chhindwara & Nagpur?',
      a: 'Yes, we take up select luxury turnkey residences and villas across Madhya Pradesh, Maharashtra, and broader Central India.'
    },
    {
      q: 'Can we visit your completed project sites?',
      a: 'Absolutely. During our design consultation, we can arrange guided walkthroughs of ongoing or recently handed-over residences with prior client permission.'
    },
    {
      q: 'What is the standard warranty on modular woodwork?',
      a: 'We provide up to 10 years warranty on BWP 710 marine ply carcass construction and lifetime replacement warranties on Blum & Hettich German hardware.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Connect with Us</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
            Let's Talk About Your Space.
          </h1>
          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            Whether you are planning a new luxury build, renovating a generational villa, or need a modular kitchen, our principal design team is ready to guide you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Studio details & direct contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-canvas-soft border border-border-luxury p-8 space-y-6">
              <h3 className="font-serif text-2xl text-charcoal">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a 
                  href={`tel:${studioInfo.contact.phoneRaw}`}
                  className="flex items-start gap-4 text-charcoal hover:text-bronze transition-colors group"
                >
                  <div className="w-10 h-10 rounded-none bg-canvas border border-border-luxury flex items-center justify-center shrink-0 group-hover:border-bronze">
                    <Phone size={16} className="text-bronze" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-muted block">Phone / Direct Call</span>
                    <span className="font-medium text-base">{studioInfo.contact.phone}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${studioInfo.contact.email}`}
                  className="flex items-start gap-4 text-charcoal hover:text-bronze transition-colors group"
                >
                  <div className="w-10 h-10 rounded-none bg-canvas border border-border-luxury flex items-center justify-center shrink-0 group-hover:border-bronze">
                    <Mail size={16} className="text-bronze" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-muted block">Email Inquiries</span>
                    <span className="font-medium break-all">{studioInfo.contact.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-charcoal">
                  <div className="w-10 h-10 rounded-none bg-canvas border border-border-luxury flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-bronze" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-muted block">Studio Hubs</span>
                    <span className="font-medium">Chhindwara & Nagpur, Central India</span>
                    <p className="text-xs text-charcoal-muted mt-1">{studioInfo.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-luxury">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>Start WhatsApp Conversation</span>
                </button>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-charcoal">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-border-luxury bg-canvas-soft overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex justify-between items-center text-xs font-semibold text-charcoal uppercase tracking-wider"
                    >
                      <span>{faq.q}</span>
                      {activeFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {activeFaq === idx && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed border-t border-border-luxury/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Consultation Form */}
          <div className="lg:col-span-7 bg-canvas-soft border border-border-luxury p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-3xl text-charcoal">
                  Consultation Request Dispatched!
                </h3>
                <p className="text-sm text-charcoal-muted max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Our senior designer will examine your requirements for your <strong>{propertyType}</strong> in <strong>{city}</strong> and get in touch within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-emerald-700 text-white text-xs uppercase tracking-wider px-6 py-3"
                  >
                    Ping Us on WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-1">
                    Request a Design Discovery Call
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    Fill in your details below to schedule an architectural consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Deshpande"
                      className="w-full bg-canvas border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-canvas border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Typology
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-canvas border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none"
                    >
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Apartment</option>
                      <option value="4 BHK / Villa">4 BHK / Villa</option>
                      <option value="Commercial">Commercial / Office</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Location
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-canvas border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none"
                    >
                      <option value="Nagpur">Nagpur</option>
                      <option value="Chhindwara">Chhindwara</option>
                      <option value="Seoni">Seoni</option>
                      <option value="Bhopal / Jabalpur">Bhopal / Jabalpur</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Budget
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full bg-canvas border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none"
                    >
                      <option value="₹8 – 14 Lakhs">₹8 – 14 Lakhs</option>
                      <option value="₹15 – 25 Lakhs">₹15 – 25 Lakhs</option>
                      <option value="₹25 – 40 Lakhs">₹25 – 40 Lakhs</option>
                      <option value="₹40 Lakhs+">₹40 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    Project Notes or Scope Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your possession date, carpet area, aesthetic preferences, etc."
                    className="w-full bg-canvas border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md"
                >
                  Send Consultation Request →
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
