import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquare, PhoneCall, Star } from 'lucide-react';
import { studioInfo } from '../../data/contentData';
import { leadStorage } from '../../services/leadStorage';

export const LeadQualifierSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Nagpur');
  const [designType, setDesignType] = useState('Apartment');
  const [budget, setBudget] = useState('₹10–20L');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const designTypes = [
    { label: 'Apartment', desc: '1, 2, 3, 4 BHK Flat' },
    { label: 'Villa', desc: 'Duplex / Bungalow' },
    { label: 'Office', desc: 'Commercial / Studio' },
    { label: 'Kitchen', desc: 'Modular Kitchen Only' },
    { label: 'Other', desc: 'Renovation / Styling' },
  ];

  const locations = ['Nagpur', 'Chhindwara', 'Delhi / NCR', 'Seoni', 'Bhopal / Jabalpur', 'Other Location'];
  const budgetTiers = ['₹5–10L', '₹10–20L', '₹20–40L', '₹40L+'];

  const getCompiledWhatsAppMessage = () => {
    return `Hi Sowakaah Designs, I'm interested in discussing an interior design project for my ${designType} located in ${location}. Approximate budget: ${budget}. Name: ${name || 'Prospective Client'}. ${message ? `Notes: ${message}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);

    // Save lead to persistent storage immediately
    leadStorage.saveLead({
      name,
      phone,
      location,
      designType,
      budget,
      message,
      source: 'Homepage Qualifier'
    });

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleDirectWhatsApp = () => {
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(getCompiledWhatsAppMessage())}`, '_blank');
  };

  return (
    <section id="lead-qualifier" className="py-24 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-charcoal text-canvas p-8 sm:p-12 md:p-16 border border-charcoal-light shadow-luxury-lg relative">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
                <Sparkles size={14} />
                <span>Start Your Project</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight">
                Let's Build Something Timeless Together.
              </h2>
              <p className="text-canvas/75 text-sm sm:text-base leading-relaxed font-light">
                Tell us about your space, your location, and your investment expectations. We’ll review your brief and prepare an initial consultation with zero obligations.
              </p>

              <div className="space-y-4 pt-4 border-t border-charcoal-light">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-canvas">Transparent Fixed BOQ</h4>
                    <p className="text-xs text-canvas/60">No post-handover surprises or hidden markups.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={20} className="text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-canvas">4.9★ Rated Design Practice</h4>
                    <p className="text-xs text-canvas/60">50+ families living happily in our designed spaces.</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4">
                <div className="bg-charcoal-light/70 p-5 border border-border-dark space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-bronze font-semibold block">Prefer Fast WhatsApp Chat?</span>
                  <p className="text-xs text-canvas/70 font-light">Skip the form and message our principal architects directly.</p>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider px-4 py-2.5 flex items-center gap-2 transition-colors font-semibold"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp us directly →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Serious Enquiry Form */}
            <div className="lg:col-span-7 bg-canvas text-charcoal p-6 sm:p-10 border border-border-luxury shadow-lg">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Thank You, {name}!
                  </h3>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                    We have received your project details for your <strong>{designType}</strong> in <strong>{location}</strong> (Budget: {budget}). Our team will review your brief within 24 hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp us directly →</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="border border-border-luxury text-charcoal-muted hover:text-charcoal text-xs uppercase tracking-wider px-5 py-3.5"
                    >
                      Edit Submission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>
                  </div>

                  {/* Field 2: Project Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                      Project Location
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Field 3: What are you designing? */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-2 font-semibold">
                      What are you designing?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {designTypes.map((type) => (
                        <button
                          type="button"
                          key={type.label}
                          onClick={() => setDesignType(type.label)}
                          className={`text-xs py-2.5 px-2 text-center border transition-all ${
                            designType === type.label
                              ? 'bg-charcoal text-canvas border-charcoal font-semibold shadow-sm'
                              : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:border-charcoal'
                          }`}
                        >
                          <span className="block font-medium">{type.label}</span>
                          <span className="text-[10px] opacity-70 block">{type.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 4: Approximate Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-2 font-semibold">
                      Approximate Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setBudget(tier)}
                          className={`text-xs font-medium py-2.5 px-2 text-center border transition-all ${
                            budget === tier
                              ? 'bg-bronze text-charcoal font-semibold border-bronze-dark'
                              : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:border-charcoal'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 5: Tell us about your project */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Carpet area, possession timeline, preferred design style (minimal, warm luxury, etc.)"
                      className="w-full bg-canvas-soft border border-border-luxury text-sm py-2.5 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas py-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                  >
                    <span>{loading ? 'Submitting Details...' : 'REQUEST A CONSULTATION →'}</span>
                  </button>

                  <p className="text-[11px] text-center text-charcoal-subtle">
                    🔒 We respect your privacy. No spam. Direct consultation with our senior designers.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
