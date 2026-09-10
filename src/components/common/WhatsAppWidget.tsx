import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Preview Card */}
      {isOpen && (
        <div className="mb-2 sm:mb-3 bg-canvas border border-border-luxury shadow-luxury-lg w-[calc(100vw-32px)] max-w-xs sm:w-80 p-4 sm:p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-border-luxury">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-serif text-xs sm:text-sm font-semibold">
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
              className="text-charcoal-muted hover:text-charcoal p-1.5 min-w-[32px] min-h-[32px] flex items-center justify-center"
              aria-label="Close WhatsApp card"
            >
              <X size={16} />
            </button>
          </div>

          <div className="py-2.5 sm:py-3 text-[11px] sm:text-xs text-charcoal-muted font-light leading-relaxed">
            Have a project in mind or need quick guidance on floor layouts & budgets? Chat directly with our principal design team on WhatsApp.
          </div>

          <button
            onClick={handleOpenWhatsApp}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider py-2.5 sm:py-3 px-4 font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm min-h-[42px]"
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
            className="hidden md:flex items-center gap-2 bg-canvas/95 backdrop-blur-md border border-border-luxury px-3.5 py-2 text-xs text-charcoal font-medium shadow-luxury hover:border-bronze transition-all"
          >
            <span>Have a project?</span>
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
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-luxury transition-transform active:scale-95"
          aria-label="Chat with Sowakaah Designs on WhatsApp"
        >
          <MessageSquare size={22} className="sm:w-6 sm:h-6" />
        </button>
      </div>

    </div>
  );
};
