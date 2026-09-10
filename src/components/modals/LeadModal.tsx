import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [city, setCity] = useState('Nagpur');
  const [budgetRange, setBudgetRange] = useState('₹15 – 25 Lakhs');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const message = `Hi Sowakaah Studio! I am interested in designing my ${propertyType} in ${city}. My estimated budget is ${budgetRange}. Name: ${name || 'Prospective Client'}.`;
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-canvas w-full max-w-xl my-auto border border-border-luxury shadow-luxury-lg overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-canvas-soft border-b border-border-luxury px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-bronze" />
            <span className="text-xs uppercase tracking-widest font-semibold text-charcoal">
              Start Your Project Consultation
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-charcoal hover:text-bronze rounded-full hover:bg-canvas transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Consultation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Thank you, <strong>{name}</strong>. Our senior architect will review your project requirements for your {propertyType} in {city} and reach out on WhatsApp/call shortly.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-wider py-3 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} />
                  <span>Connect Immediately on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full border border-border-luxury text-charcoal-muted text-xs uppercase tracking-wider py-2.5 hover:text-charcoal"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                  Property Typology
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['2 BHK', '3 BHK', '4 BHK / Villa', 'Commercial', 'Kitchen Only', 'Renovation'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setPropertyType(t)}
                      className={`text-xs py-2 px-1 border text-center transition-all ${
                        propertyType === t
                          ? 'bg-charcoal text-canvas border-charcoal font-semibold'
                          : 'bg-canvas-soft text-charcoal border-border-luxury hover:border-charcoal'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    City / Location
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2.5 px-2 text-charcoal focus:outline-none"
                  >
                    <option value="Nagpur">Nagpur</option>
                    <option value="Chhindwara">Chhindwara</option>
                    <option value="Seoni">Seoni</option>
                    <option value="Bhopal / Jabalpur">Bhopal / Jabalpur</option>
                    <option value="Other Central India">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    Budget Allocation
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2.5 px-2 text-charcoal focus:outline-none"
                  >
                    <option value="₹8 – 14 Lakhs">₹8 – 14 Lakhs</option>
                    <option value="₹15 – 25 Lakhs">₹15 – 25 Lakhs</option>
                    <option value="₹25 – 40 Lakhs">₹25 – 40 Lakhs</option>
                    <option value="₹40 Lakhs+">₹40 Lakhs+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2 px-2.5 text-charcoal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Phone"
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2 px-2.5 text-charcoal focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1">
                  Brief notes or handover timeline
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Possession in 60 days, prefer warm minimalist look"
                  className="w-full bg-canvas-soft border border-border-luxury text-xs py-2 px-2.5 text-charcoal focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.2em] font-semibold py-3.5 transition-all duration-300 mt-2"
              >
                {loading ? 'Submitting...' : 'Request Consultation →'}
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-charcoal-subtle">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-bronze" />
                  100% Privacy
                </span>
                <span>·</span>
                <span>Direct Architect Call</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
