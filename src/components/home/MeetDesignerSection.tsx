import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Quote, Star, Check } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface MeetDesignerSectionProps {
  onLearnMore: () => void;
  onOpenLeadModal: () => void;
}

export const MeetDesignerSection: React.FC<MeetDesignerSectionProps> = ({ onLearnMore, onOpenLeadModal }) => {
  return (
    <section className="py-24 bg-canvas-soft border-y border-border-luxury relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Designer Portrait with luxury offset frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative luxury frame offset */}
              <div className="absolute -inset-3 border border-bronze/40 translate-x-3 translate-y-3 pointer-events-none" />
              
              <div className="relative aspect-[4/5] overflow-hidden bg-canvas border border-border-luxury shadow-luxury">
                <img
                  src={studioInfo.founder.photo}
                  alt={studioInfo.founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-canvas">
                  <p className="font-serif text-2xl text-canvas">{studioInfo.founder.name}</p>
                  <p className="text-xs text-bronze uppercase tracking-widest font-light mt-0.5">
                    {studioInfo.founder.role} · {studioInfo.founder.studioBrand}
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-charcoal text-canvas p-4 sm:p-5 border border-charcoal-light shadow-luxury hidden sm:block">
                <div className="font-serif text-3xl text-bronze font-semibold">{studioInfo.founder.experienceYears}</div>
                <div className="text-[10px] uppercase tracking-widest text-canvas/70 font-light mt-1">
                  Years Crafting Spaces
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Exact Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
              <Sparkles size={14} />
              <span>Meet the Designer</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              "{studioInfo.founder.quote}"
            </h2>

            <div className="relative pl-6 border-l-2 border-bronze/60 space-y-4">
              <Quote className="text-bronze/30 absolute -top-3 -left-3" size={32} />
              <p className="text-charcoal text-base sm:text-lg font-light leading-relaxed">
                {studioInfo.founder.bio}
              </p>
              <p className="text-charcoal-muted text-sm leading-relaxed font-light">
                At Sowakaah Designs, people are hiring a dedicated person, not just a faceless brand. From our first cup of coffee to the final key handover, I personally oversee every spatial plan, material selection, and site finish.
              </p>
            </div>

            {/* 4 Trust Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border-luxury/60">
              {studioInfo.founder.credentials.map((cred, i) => (
                <div key={i} className="bg-canvas p-3 border border-border-luxury">
                  <div className="text-xs font-semibold text-charcoal">{cred.val}</div>
                  <div className="text-[10px] text-charcoal-muted uppercase tracking-wider mt-0.5">{cred.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenLeadModal}
                className="bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 flex items-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>BOOK A 1-ON-1 CONSULTATION</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onLearnMore}
                className="text-xs uppercase tracking-[0.18em] font-semibold text-charcoal hover:text-bronze border-b border-charcoal hover:border-bronze pb-1 transition-colors"
              >
                OUR STUDIO PHILOSOPHY →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
