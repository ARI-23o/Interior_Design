import React from 'react';
import { Sparkles } from 'lucide-react';
import { whyChooseUsData } from '../../data/contentData';

interface WhyChooseUsProps {
  onOpenLeadModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  return (
    <section className="py-14 sm:py-24 bg-canvas border-t border-border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold mb-2 sm:mb-3">
              <Sparkles size={14} />
              <span>The Sowakaah Distinction</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Why Discerning Clients Choose Us.
            </h2>
          </div>
          <p className="text-charcoal-muted text-xs sm:text-base max-w-md font-light">
            We bridge the gap between world-class architectural design and disciplined, on-time construction execution.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {whyChooseUsData.map((item) => (
            <div
              key={item.number}
              className="bg-canvas-soft border border-border-luxury p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-bronze hover:shadow-luxury group"
            >
              <div>
                <div className="font-serif text-3xl sm:text-4xl text-bronze/60 font-light mb-4 sm:mb-6 group-hover:text-bronze transition-colors">
                  {item.number}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-charcoal mb-2 sm:mb-3 group-hover:text-bronze-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-luxury/60">
                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-charcoal-subtle">
                  Guaranteed Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
