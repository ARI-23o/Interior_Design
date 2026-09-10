import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

export const LeadQualifierSection: React.FC = () => {
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [city, setCity] = useState('Nagpur');
  const [budgetRange, setBudgetRange] = useState('₹15 – 25 Lakhs');
  const [scope, setScope] = useState('Full Turnkey Interiors');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const propertyTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK / Villa', 'Commercial / Office'];
  const cities = ['Nagpur', 'Chhindwara', 'Seoni', 'Bhopal / Jabalpur', 'Other Location'];
  const budgetOptions = ['₹8 – 14 Lakhs', '₹15 – 25 Lakhs', '₹25 – 40 Lakhs', '₹40 Lakhs+'];
  const scopes = ['Full Turnkey Interiors', 'Modular Kitchen & Wardrobes', 'Living & Dining Styling', 'Architecture & Planning'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    // Simulate instantaneous lead recording & notification
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppInstant = () => {
    const message = `Hi Sowakaah Studio! I am interested in interior design for my ${propertyType} located in ${city}. My estimated budget range is ${budgetRange} for ${scope}. Name: ${name || 'Prospective Client'}.`;
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="lead-qualifier" className="py-24 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-charcoal text-canvas p-8 sm:p-12 md:p-16 border border-charcoal-light shadow-luxury-lg relative">
          
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left Column: Value proposition & reassurance */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
                <Sparkles size={14} />
                <span>Start Your Project</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight">
                Plan Your Space with Transparent Clarity.
              </h2>
              <p className="text-canvas/75 text-sm sm:text-base leading-relaxed">
                Tell us about your home, your aesthetic vision, and your timeline. We’ll prepare a tailored consultation and preliminary estimate with zero obligations.
              </p>

              <div className="space-y-4 pt-4 border-t border-charcoal-light">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-canvas">Fixed Itemized BOQ</h4>
                    <p className="text-xs text-canvas/60">No hidden costs or post-handover surprises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-canvas">Committed Handover Timeline</h4>
                    <p className="text-xs text-canvas/60">Strict penalty-backed milestone schedules.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-charcoal-light/60 p-4 border border-border-dark flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-bronze block">Prefer Immediate Chat?</span>
                    <span className="text-sm text-canvas font-medium">Direct with Principal Architect</span>
                  </div>
                  <button
                    onClick={handleWhatsAppInstant}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider px-4 py-2.5 flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Now</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-step interactive qualification form */}
            <div className="lg:col-span-7 bg-canvas text-charcoal p-6 sm:p-10 border border-border-luxury shadow-lg">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Thank You, {name}!
                  </h3>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                    We have received your project details for your <strong>{propertyType}</strong> in <strong>{city}</strong>. Our principal designer will review your brief and contact you within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={handleWhatsAppInstant}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>Continue on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="border border-border-luxury text-charcoal-muted hover:text-charcoal text-xs uppercase tracking-wider px-6 py-3"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Property Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-charcoal-muted mb-2.5">
                      1. What type of space are you designing?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {propertyTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setPropertyType(type)}
                          className={`text-xs font-medium py-3 px-3 text-center border transition-all ${
                            propertyType === type
                              ? 'bg-charcoal text-canvas border-charcoal shadow-sm'
                              : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:border-charcoal'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Location & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-charcoal-muted mb-2">
                        2. Project Location
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                      >
                        {cities.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-charcoal-muted mb-2">
                        3. Required Scope
                      </label>
                      <select
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                      >
                        {scopes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Approximate Budget Range */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-charcoal-muted mb-2.5">
                      4. Approximate Budget Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setBudgetRange(budget)}
                          className={`text-xs font-medium py-2.5 px-2 text-center border transition-all ${
                            budgetRange === budget
                              ? 'bg-bronze text-charcoal font-semibold border-bronze-dark'
                              : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:border-charcoal'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Contact details */}
                  <div className="space-y-3 pt-2 border-t border-border-luxury">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-canvas-soft border border-border-luxury text-sm py-2.5 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-canvas-soft border border-border-luxury text-sm py-2.5 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1">
                        Any specific requirements or timeline? (Optional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g., Possession in 2 months, prefer modern Scandinavian aesthetic"
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-2.5 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas py-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                  >
                    <span>{loading ? 'Processing Estimate...' : 'Request Design Consultation →'}</span>
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
