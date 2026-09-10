import React from 'react';
import { Sparkles, Check, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/contentData';

interface ServicesViewProps {
  onOpenLeadModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenLeadModal }) => {
  return (
    <div className="py-16 sm:py-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Service Capabilities</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
            Design, Turnkey Execution & Bespoke Styling.
          </h1>
          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            From single-room luxury modular kitchens to multi-thousand sq.ft. residential estates, explore how we handle every design stage with single-point accountability.
          </p>
        </div>

        {/* Deep Dive Services List */}
        <div className="space-y-8 sm:space-y-12">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-canvas-soft border border-border-luxury p-5 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center luxury-card-hover"
            >
              <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-border-luxury">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-charcoal/80 text-canvas text-[11px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-md">
                  0{idx + 1} · {service.subtitle}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-bronze font-semibold uppercase tracking-widest mb-1">
                    <Clock size={13} />
                    <span>Estimated Completion: {service.timeline}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-4xl text-charcoal">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-border-luxury/60">
                  <span className="text-[10px] uppercase tracking-widest text-charcoal-subtle font-semibold block mb-2">
                    Key Deliverables Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal font-light">
                        <Check size={14} className="text-bronze shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs text-charcoal-muted italic">
                    Ideal For: {service.idealFor}
                  </span>
                  <button
                    onClick={onOpenLeadModal}
                    className="w-full sm:w-auto bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-widest px-6 py-3.5 font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
