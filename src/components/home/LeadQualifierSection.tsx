import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquare, Star, RotateCcw } from 'lucide-react';
import { studioInfo } from '../../data/contentData';
import { leadStorage } from '../../services/leadStorage';

export const LeadQualifierSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [designType, setDesignType] = useState('Apartment');
  const [budget, setBudget] = useState('₹10–20L');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const designTypes = ['Apartment', 'Villa', 'Office', 'Other'];
  const budgetTiers = ['₹5–10L', '₹10–20L', '₹20–40L', '₹40L+'];

  const getCompiledWhatsAppMessage = () => {
    return `Hi Sowakaah Designs, I'm interested in an interior design project for my ${designType} in ${location || 'Central India'}. Approximate budget: ${budget}. Name: ${name || 'Prospective Client'}. ${message ? `Project details: ${message}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);

    leadStorage.saveLead({
      name,
      phone,
      location: location || 'Nagpur / Chhindwara',
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
            
            {/* Left Column: Why Inquire & WhatsApp Shortcut */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
                <Sparkles size={14} />
                <span>Start Your Project</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight">
                Tell Us About Your Project.
              </h2>
              <p className="text-canvas/75 text-sm sm:text-base leading-relaxed font-light">
                Whether you’re planning a new build, a turnkey renovation, or custom interiors, tell us about your requirements. We’ll review your brief and prepare an initial consultation with zero obligations.
              </p>

              <div className="space-y-4 pt-4 border-t border-charcoal-light">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-canvas">Transparent Fixed BOQ</h4>
                    <p className="text-xs text-canvas/60">Detailed pricing with zero hidden surcharges or post-handover surprises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={20} className="text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-canvas">4.9★ Client Google Rating</h4>
                    <p className="text-xs text-canvas/60">50+ families living happily in our designed residences.</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4">
                <div className="bg-charcoal-light/70 p-5 border border-border-dark space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-bronze font-semibold block">Prefer Fast WhatsApp Discussion?</span>
                  <p className="text-xs text-canvas/70 font-light">Message our principal architects directly with your floor plan.</p>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider px-5 py-3 flex items-center gap-2 transition-colors font-semibold"
                  >
                    <MessageSquare size={15} />
                    <span>WhatsApp Us Directly →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Form Fields */}
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
                    We have received your project details for your <strong>{designType}</strong> {location ? `in ${location}` : ''} (Budget: {budget}). Our senior design lead will review your brief and contact you within 24 hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp Us Directly →</span>
                    </button>
                    <button
                      onClick={() => {
                        setName('');
                        setPhone('');
                        setLocation('');
                        setMessage('');
                        setIsSubmitted(false);
                      }}
                      className="border border-border-luxury text-charcoal hover:bg-canvas-soft text-xs uppercase tracking-wider px-5 py-3.5 flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw size={13} className="text-bronze" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3.5 text-charcoal focus:outline-none focus:border-charcoal"
                    />
                  </div>

                  {/* WhatsApp / Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3.5 text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                        Project Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Nagpur, Chhindwara, Delhi NCR"
                        className="w-full bg-canvas-soft border border-border-luxury text-sm py-3 px-3.5 text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-2 font-semibold">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {designTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setDesignType(type)}
                          className={`text-xs py-3 px-2 text-center border transition-all ${
                            designType === type
                              ? 'bg-charcoal text-canvas border-charcoal font-semibold shadow-sm'
                              : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:border-charcoal'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Approximate Budget */}
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
                          className={`text-xs font-medium py-3 px-2 text-center border transition-all ${
                            budget === tier
                              ? 'bg-bronze text-charcoal font-semibold border-bronze-dark shadow-sm'
                              : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:border-charcoal'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tell us about your project */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Carpet area, possession date, preferred style (modern, minimal, warm luxury), etc."
                      className="w-full bg-canvas-soft border border-border-luxury text-sm py-2.5 px-3 text-charcoal focus:outline-none focus:border-charcoal"
                    />
                  </div>

                  {/* Submit CTA */}
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
