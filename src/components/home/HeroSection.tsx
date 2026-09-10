import React from 'react';
import { ArrowRight, Sparkles, Award, MapPin, CheckCircle2, Star, MessageSquare } from 'lucide-react';
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
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center bg-canvas overflow-hidden border-b border-border-luxury">
      
      {/* Editorial Hero Photography with Soft Warm Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Bespoke Luxury Living Room Design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/95 sm:via-canvas/90 to-canvas/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/40 sm:to-canvas/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Location & Studio Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-4 py-1.5 bg-canvas/95 backdrop-blur-md border border-border-luxury text-charcoal text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.22em] font-semibold shadow-sm">
            <span className="flex items-center gap-1.5 text-bronze">
              <MapPin size={12} className="shrink-0" />
              <span>Interior Design Studio · Central India</span>
            </span>
            <span className="text-charcoal-muted">·</span>
            <span className="flex items-center gap-1 text-amber-600">
              <Star size={11} fill="currentColor" />
              <span>4.9★ Rated</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-charcoal leading-[1.12] sm:leading-[1.08] tracking-tight">
            Timeless Interiors, <br className="hidden sm:inline" />
            <span className="italic font-light text-charcoal-light">Designed Around You.</span>
          </h1>

          {/* Supporting text */}
          <p className="text-sm sm:text-lg md:text-xl text-charcoal-muted font-light leading-relaxed max-w-2xl">
            Bespoke residential interiors crafted around your lifestyle, taste and the way you live.
          </p>

          {/* Conversion CTAs with WhatsApp Us button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <button
              onClick={onExploreProjects}
              className="bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-luxury min-h-[46px]"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onOpenLeadModal}
              className="bg-canvas/95 hover:bg-canvas text-charcoal border border-border-luxury hover:border-charcoal text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm min-h-[46px]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight size={14} className="text-bronze" />
            </button>

            <button
              onClick={handleWhatsAppHero}
              className="border border-emerald-700/60 hover:bg-emerald-700 hover:text-white text-emerald-800 bg-emerald-50/70 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 min-h-[46px]"
            >
              <MessageSquare size={15} className="text-emerald-700 group-hover:text-white" />
              <span>WhatsApp Us →</span>
            </button>
          </div>

          {/* Trust reassurance bar */}
          <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-border-luxury/70">
            <div className="flex items-center gap-2 text-xs text-charcoal-muted">
              <CheckCircle2 size={15} className="text-bronze shrink-0" />
              <span className="text-[11px] sm:text-xs">Fixed BOQ & Timelines</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-muted">
              <Award size={15} className="text-bronze shrink-0" />
              <span className="text-[11px] sm:text-xs">50+ Completed Homes</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal-muted col-span-2 sm:col-span-1">
              <Sparkles size={15} className="text-bronze shrink-0" />
              <span className="text-[11px] sm:text-xs">100% Turnkey Execution</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
