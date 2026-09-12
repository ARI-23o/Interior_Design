import React from 'react';
import { ArrowRight, Sparkles, Award, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenLeadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onOpenLeadModal }) => {
  const handleWhatsAppHero = () => {
    const text = "Hi Sowakaah Designs, I'm interested in an interior design project. I'd like to discuss my requirements.";
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-canvas overflow-hidden border-b border-border-luxury">
      
      {/* Editorial Hero Photography with Soft Warm Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Bespoke Luxury Living Room Design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/92 to-canvas/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-8">
          
          {/* Location & Studio Badge */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 bg-canvas/95 backdrop-blur-md border border-border-luxury text-charcoal text-xs uppercase tracking-[0.22em] font-semibold shadow-sm">
            <span className="flex items-center gap-1.5 text-bronze">
              <MapPin size={13} />
              INTERIOR DESIGN STUDIO · CENTRAL INDIA · ESTABLISHED 2022
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-charcoal leading-[1.08] tracking-tight">
            Timeless Interiors, <br />
            <span className="italic font-light text-charcoal-light">Designed Around You.</span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted font-light leading-relaxed max-w-2xl">
            Bespoke residential interiors crafted around your lifestyle, taste and the way you live.
          </p>

          {/* Conversion CTAs with WhatsApp Us button */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-luxury min-h-[48px] whitespace-nowrap shrink-0"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowRight size={15} className="shrink-0" />
            </button>

            <button
              onClick={onOpenLeadModal}
              className="bg-canvas/90 hover:bg-canvas text-charcoal border border-border-luxury hover:border-charcoal text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm min-h-[48px] whitespace-nowrap shrink-0"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight size={14} className="text-bronze shrink-0" />
            </button>

            <button
              onClick={handleWhatsAppHero}
              className="border border-emerald-700/60 hover:bg-emerald-700 hover:text-white text-emerald-800 bg-emerald-50/80 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 min-h-[48px] whitespace-nowrap shrink-0"
            >
              <MessageSquare size={15} className="text-emerald-700 shrink-0" />
              <span>WHATSAPP US</span>
              <ArrowRight size={14} className="shrink-0" />
            </button>
          </div>

          {/* Trust reassurance bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border-luxury/70">
            <div className="flex items-center gap-2 text-xs text-charcoal-muted">
              <CheckCircle2 size={16} className="text-bronze shrink-0" />
              <span>Fixed BOQ & Timelines</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-muted">
              <Award size={16} className="text-bronze shrink-0" />
              <span>50+ Completed Homes</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-muted col-span-2 sm:col-span-1">
              <Sparkles size={16} className="text-bronze shrink-0" />
              <span>100% Turnkey Execution</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


