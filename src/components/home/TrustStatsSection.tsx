import React from 'react';
import { studioInfo } from '../../data/contentData';

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="bg-canvas-soft border-b border-border-luxury py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {studioInfo.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-canvas border border-border-luxury text-center sm:text-left transition-all hover:border-bronze group"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium group-hover:text-bronze-dark transition-colors">
                {stat.value}
              </div>
              <div className="h-0.5 w-8 bg-bronze/40 my-3 mx-auto sm:mx-0 group-hover:w-12 transition-all duration-300" />
              <p className="text-xs sm:text-sm text-charcoal-muted uppercase tracking-wider font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
