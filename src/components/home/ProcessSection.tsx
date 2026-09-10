import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { processStepsData } from '../../data/contentData';

interface ProcessSectionProps {
  onOpenLeadModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="py-24 bg-canvas-soft border-t border-border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Structured Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
            How We Bring Your Vision to Life.
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base font-light">
            A step-by-step roadmap from your first consultation to the moment you step into your fully finished, ready-to-live home.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="space-y-6">
          {processStepsData.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-canvas border border-border-luxury p-6 sm:p-8 transition-all hover:border-bronze hover:shadow-luxury group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Step indicator */}
                <div className="lg:col-span-3 flex items-start gap-4">
                  <span className="font-serif text-3xl sm:text-4xl text-bronze font-light">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-bronze-dark transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal-subtle uppercase tracking-wider mt-1 font-light">
                      Stage {idx + 1} of 5
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 space-y-2">
                  <p className="text-sm font-medium text-charcoal">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables pill box */}
                <div className="lg:col-span-4 bg-canvas-soft p-4 border border-border-luxury/70">
                  <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold block mb-2">
                    What You Receive:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-charcoal font-light">
                        <CheckCircle2 size={13} className="text-bronze shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Process CTA */}
        <div className="mt-14 p-8 bg-charcoal text-canvas text-center sm:flex justify-between items-center border border-charcoal-light">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="font-serif text-xl text-canvas">Ready to start with Step 01?</h4>
            <p className="text-xs text-canvas/70 font-light mt-1">Book a free 30-minute discovery call to review your floor plans.</p>
          </div>
          <button
            onClick={onOpenLeadModal}
            className="bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-6 py-3.5 flex items-center justify-center gap-2 transition-colors shrink-0"
          >
            <span>Book Discovery Session</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};
