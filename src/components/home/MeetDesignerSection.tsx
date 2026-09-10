import React from 'react';
import { ArrowRight, Sparkles, Quote } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface MeetDesignerSectionProps {
  onLearnMore: () => void;
  onOpenLeadModal: () => void;
}

export const MeetDesignerSection: React.FC<MeetDesignerSectionProps> = ({ onLearnMore, onOpenLeadModal }) => {
  return (
    <section className="py-14 sm:py-24 bg-canvas border-b border-border-luxury relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Designer Portrait with luxury offset frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative luxury frame offset */}
              <div className="absolute -inset-2.5 sm:-inset-3 border border-bronze/40 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 pointer-events-none" />
              
              <div className="relative aspect-[4/5] overflow-hidden bg-canvas border border-border-luxury shadow-luxury">
                <img
                  src={studioInfo.founder.photo}
                  alt={studioInfo.founder.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-canvas">
                  <p className="font-serif text-xl sm:text-2xl text-canvas">Ar. Ananya</p>
                  <p className="text-[11px] sm:text-xs text-bronze uppercase tracking-widest font-light mt-0.5">
                    Lead Interior Architect · Sowakaah
                  </p>
                </div>
              </div>

              {/* Experience badge — visible on both mobile and desktop */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-charcoal text-canvas p-3 sm:p-5 border border-charcoal-light shadow-luxury z-10">
                <div className="font-serif text-2xl sm:text-3xl text-bronze font-semibold">{studioInfo.founder.experienceYears}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-canvas/70 font-light mt-0.5 sm:mt-1">
                  Years Practice
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Exact Story */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
              <Sparkles size={14} />
              <span>Meet the Designer</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Designing spaces that feel like home.
            </h2>

            <div className="relative pl-5 sm:pl-6 border-l-2 border-bronze/60 space-y-3 sm:space-y-4">
              <Quote className="text-bronze/25 absolute -top-3 -left-3" size={28} />
              <p className="text-charcoal text-sm sm:text-lg font-light leading-relaxed">
                "At Sowakaah Designs, we believe beautiful interiors should be personal, functional and timeless."
              </p>
              <p className="text-charcoal-muted text-xs sm:text-sm leading-relaxed font-light">
                {studioInfo.founder.bio}
              </p>
            </div>

            {/* Credibility Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-border-luxury/60">
              {studioInfo.founder.credentials.map((cred, i) => (
                <div key={i} className="bg-canvas-soft p-2.5 sm:p-3 border border-border-luxury">
                  <div className="text-xs font-semibold text-charcoal">{cred.val}</div>
                  <div className="text-[9px] sm:text-[10px] text-charcoal-muted uppercase tracking-wider mt-0.5">{cred.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenLeadModal}
                className="bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold px-6 sm:px-7 py-3.5 flex items-center justify-center gap-2 transition-all duration-300 shadow-md min-h-[44px]"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onLearnMore}
                className="text-xs uppercase tracking-[0.18em] font-semibold text-charcoal hover:text-bronze border-b border-charcoal hover:border-bronze pb-1 transition-colors text-center py-2 xs:py-0"
              >
                OUR STORY →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
