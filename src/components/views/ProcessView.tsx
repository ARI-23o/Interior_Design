import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { processStepsData } from '../../data/contentData';

interface ProcessViewProps {
  onOpenLeadModal: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onOpenLeadModal }) => {
  return (
    <div className="py-16 sm:py-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Execution Protocol</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
            The Sowakaah 5-Stage Process.
          </h1>
          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            We eliminate the traditional stress of home renovations with a structured, transparent milestone framework. Here is what happens from your initial inquiry to your final key handover.
          </p>
        </div>

        {/* 5 Stages Detail */}
        <div className="space-y-8">
          {processStepsData.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-canvas-soft border border-border-luxury p-8 sm:p-10 transition-all hover:border-bronze"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl sm:text-5xl text-bronze font-light">
                      {step.stepNumber}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
                        {step.title}
                      </h2>
                      <p className="text-xs uppercase tracking-wider text-bronze font-semibold mt-0.5">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="w-full lg:w-96 bg-canvas p-6 border border-border-luxury shrink-0">
                  <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-3">
                    Stage {idx + 1} Deliverables:
                  </span>
                  <div className="space-y-2">
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal font-light">
                        <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-12 bg-charcoal text-canvas text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-canvas">
            Ready to experience a seamless interior design journey?
          </h3>
          <p className="text-sm text-canvas/70 max-w-lg mx-auto font-light">
            Schedule a discovery session with our senior architects in Chhindwara or Nagpur.
          </p>
          <button
            onClick={onOpenLeadModal}
            className="bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2 transition-all shadow-md"
          >
            <span>Start Your Consultation</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
