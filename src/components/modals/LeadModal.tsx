import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, RotateCcw } from 'lucide-react';
import { studioInfo } from '../../data/contentData';
import { leadStorage } from '../../services/leadStorage';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [location, setLocation] = useState('Nagpur');
  const [designType, setDesignType] = useState('Apartment');
  const [budget, setBudget] = useState('₹10–20L');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Reset submission state whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setPhoneError(false);
      setMessage('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleResetForm = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setPhoneError(false);
    setMessage('');
  };

  const handleClose = () => {
    handleResetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
    setLoading(true);

    leadStorage.saveLead({
      name: name.trim(),
      phone: `+91 ${cleanPhone}`,
      location,
      designType,
      budget,
      message,
      source: 'Navbar Let\'s Talk Modal'
    });

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 400);
  };

  const getCompiledWhatsAppMessage = () => {
    const lines = [
      `✨ *Interior Design Inquiry — Sowakaah Designs*`,
      `👤 *Name:* ${name || 'Prospective Client'}`,
      `📱 *Phone:* ${phone}`,
      `📍 *Location:* ${location || 'Nagpur'}`,
      `🏠 *Typology:* ${designType}`,
      `💰 *Budget Range:* ${budget}`,
      message ? `📝 *Project Notes:* ${message}` : '',
      `\nHi Sowakaah Team, I have just submitted my inquiry on your website. Looking forward to your response!`
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(getCompiledWhatsAppMessage())}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-canvas w-full max-w-xl my-auto border border-border-luxury shadow-luxury-lg overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-canvas-soft border-b border-border-luxury px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-bronze" />
            <span className="text-xs uppercase tracking-widest font-semibold text-charcoal">
              Start Your Project Consultation
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-charcoal hover:text-bronze rounded-full hover:bg-canvas transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X size={19} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-3 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Consultation Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-md mx-auto mt-1">
                  Thank you, <strong className="text-charcoal">{name}</strong>. Your inquiry has been logged into our system.
                </p>
              </div>

              {/* WhatsApp Action Callout Card */}
              <div className="bg-emerald-50/80 border border-emerald-200 p-4 sm:p-5 text-left rounded-none space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-950">
                      Want an instant reply on WhatsApp?
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed mt-0.5">
                      Send your pre-filled inquiry to our principal designer now to skip the queue and get rapid consultation.
                    </p>
                  </div>
                </div>

                {/* Prefilled Info Preview */}
                <div className="bg-white/90 border border-emerald-200/80 p-3 text-[11px] sm:text-xs text-charcoal font-mono leading-relaxed space-y-1">
                  <div className="text-[10px] uppercase font-sans font-bold text-emerald-800 tracking-wider mb-1">
                    Pre-filled Message Summary:
                  </div>
                  <div><span className="text-charcoal-muted">Name:</span> {name}</div>
                  <div><span className="text-charcoal-muted">Phone:</span> {phone}</div>
                  <div><span className="text-charcoal-muted">Location:</span> {location}</div>
                  <div><span className="text-charcoal-muted">Typology:</span> {designType} ({budget})</div>
                  {message && <div className="truncate"><span className="text-charcoal-muted">Notes:</span> {message}</div>}
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs uppercase tracking-wider py-3.5 px-6 flex items-center justify-center gap-2 font-semibold shadow-md transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Send Details via WhatsApp Now →</span>
                </button>
              </div>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="border border-border-luxury text-charcoal hover:bg-canvas-soft text-xs uppercase tracking-wider py-2.5 px-4 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw size={13} className="text-bronze" />
                  <span>Submit Another Enquiry</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs text-charcoal-muted hover:text-charcoal underline py-2.5 px-3"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2.5 px-3 text-charcoal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    10-Digit Mobile Number *
                  </label>
                  <div className="relative flex items-center">
                    <span className="bg-canvas border-y border-l border-border-luxury px-2.5 py-2.5 text-xs text-charcoal-muted font-mono select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(val);
                        if (phoneError && val.length === 10) setPhoneError(false);
                      }}
                      placeholder="9876543210"
                      className={`w-full bg-canvas-soft border text-xs py-2.5 px-3 text-charcoal focus:outline-none ${
                        phoneError ? 'border-red-500 bg-red-50/20' : 'border-border-luxury focus:border-charcoal'
                      }`}
                    />
                  </div>
                  {phoneError && (
                    <span className="text-[10px] text-red-600 font-medium mt-0.5 block">
                      Please enter a valid 10-digit mobile number.
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    Project Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2.5 px-2 text-charcoal focus:outline-none"
                  >
                    <option value="Nagpur">Nagpur</option>
                    <option value="Chhindwara">Chhindwara</option>
                    <option value="Delhi / NCR">Delhi / NCR</option>
                    <option value="Seoni">Seoni</option>
                    <option value="Bhopal / Jabalpur">Bhopal / Jabalpur</option>
                    <option value="Other">Other Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                    What are you designing?
                  </label>
                  <select
                    value={designType}
                    onChange={(e) => setDesignType(e.target.value)}
                    className="w-full bg-canvas-soft border border-border-luxury text-xs py-2.5 px-2 text-charcoal focus:outline-none"
                  >
                    <option value="Apartment">Apartment (1–4 BHK)</option>
                    <option value="Villa">Villa / Duplex</option>
                    <option value="Office">Office / Commercial</option>
                    <option value="Kitchen">Modular Kitchen</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                  Approximate Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {['₹5–10L', '₹10–20L', '₹20–40L', '₹40L+'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setBudget(t)}
                      className={`text-xs py-2 text-center border transition-all ${
                        budget === t
                          ? 'bg-charcoal text-canvas border-charcoal font-semibold'
                          : 'bg-canvas-soft text-charcoal border-border-luxury hover:border-charcoal'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                  Tell us about your project
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Carpet area, possession date, or specific style preferences..."
                  className="w-full bg-canvas-soft border border-border-luxury text-xs py-2 px-2.5 text-charcoal focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold py-3.5 transition-all duration-300 mt-2 shadow-sm min-h-[46px]"
              >
                {loading ? 'Submitting...' : 'REQUEST A CONSULTATION →'}
              </button>

              <div className="pt-1.5 flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-charcoal-subtle">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-bronze" />
                  100% Privacy
                </span>
                <span>·</span>
                <span>Direct Architect Review</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
