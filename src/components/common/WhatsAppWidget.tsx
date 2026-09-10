import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface WhatsAppWidgetProps {
  activeView: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ activeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getContextMessage = () => {
    switch (activeView) {
      case 'projects':
        return "Hi Sowakaah Designs, I was browsing your interior portfolio and would like to know more about your projects.";
      case 'services':
        return "Hi Sowakaah Designs, I am interested in exploring your turnkey and residential interior services.";
      case 'process':
        return "Hi Sowakaah Designs, I would like to understand your design and execution process for my home.";
      case 'journal':
        return "Hi Sowakaah Designs, I read your interior cost guide and would like to get a quote for my space.";
      default:
        return "Hi Sowakaah Designs, I'm interested in discussing an interior design project. I'd like to know more about your services.";
    }
  };

  const handleOpenWhatsApp = () => {
    const url = `https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(getContextMessage())}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Desktop Preview Card */}
      {isOpen && (
        <div className="mb-3 bg-canvas border border-border-luxury shadow-luxury-lg w-80 p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-border-luxury">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-serif text-sm font-semibold">
                S
              </div>
              <div>
                <h4 className="font-serif text-sm text-charcoal font-medium">Sowakaah Designs</h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Usually replies in &lt; 15 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-charcoal-muted hover:text-charcoal p-1"
            >
              <X size={16} />
            </button>
          </div>

          <div className="py-3 text-xs text-charcoal-muted font-light leading-relaxed">
            Have a project in mind or need quick guidance on floor layouts & budgets? Chat directly with our principal design team on WhatsApp.
          </div>

          <button
            onClick={handleOpenWhatsApp}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider py-3 px-4 font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <MessageSquare size={14} />
            <span>Chat on WhatsApp</span>
            <ArrowRight size={12} />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-canvas/95 backdrop-blur-md border border-border-luxury px-4 py-2.5 text-xs text-charcoal font-medium shadow-luxury hover:border-bronze transition-all"
          >
            <span>Have a project in mind?</span>
            <span className="text-bronze font-semibold">Let's talk →</span>
          </button>
        )}

        <button
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            } else {
              handleOpenWhatsApp();
            }
          }}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-luxury transition-transform hover:scale-105"
          aria-label="Chat with Sowakaah Designs on WhatsApp"
        >
          <MessageSquare size={24} />
        </button>
      </div>

    </div>
  );
};
