import React from 'react';
import { Star, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="bg-canvas-soft border-b border-border-luxury py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Trust Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {studioInfo.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-canvas border border-border-luxury text-center sm:text-left transition-all hover:border-bronze group shadow-sm"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium group-hover:text-bronze-dark transition-colors flex items-center justify-center sm:justify-start gap-1">
                <span>{stat.value}</span>
                {stat.value.includes('4.9') && (
                  <Star size={24} className="text-amber-500 fill-amber-500 inline" />
                )}
              </div>
              <div className="h-0.5 w-8 bg-bronze/40 my-3 mx-auto sm:mx-0 group-hover:w-12 transition-all duration-300" />
              <p className="text-xs sm:text-sm text-charcoal-muted uppercase tracking-wider font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Material & Hardware Partners Strip */}
        <div className="pt-8 border-t border-border-luxury/70">
          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-bronze font-semibold">
              Engineered with Certified Premium Material Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {studioInfo.materialPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-canvas/80 border border-border-luxury/80 p-3 text-center transition-all hover:border-bronze hover:bg-canvas"
              >
                <p className="text-xs font-semibold text-charcoal tracking-wide">{partner.name}</p>
                <p className="text-[9px] text-charcoal-subtle uppercase tracking-wider mt-0.5">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
