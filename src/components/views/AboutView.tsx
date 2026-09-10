import React from 'react';
import { Sparkles, Award, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface AboutViewProps {
  onOpenLeadModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenLeadModal }) => {
  return (
    <div className="py-16 sm:py-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>The Studio Narrative</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
            Crafting Homes that Balance Architectural Discipline & Soul.
          </h1>
          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            Founded with a conviction that luxury is not about excessive ornamentation, but about spatial clarity, tactile materials, and meticulous execution.
          </p>
        </div>

        {/* Founder Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-canvas-soft border border-border-luxury p-5 sm:p-14">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-border-luxury shadow-luxury">
              <img
                src={studioInfo.founder.photo}
                alt={studioInfo.founder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/80 backdrop-blur-md p-4 text-canvas">
                <h3 className="font-serif text-xl text-canvas">{studioInfo.founder.name}</h3>
                <p className="text-xs text-bronze uppercase tracking-widest">{studioInfo.founder.role}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal leading-tight">
              "We design homes around the way you actually live, not just for photographs."
            </h2>

            <p className="text-sm sm:text-base text-charcoal leading-relaxed font-light">
              {studioInfo.founder.bio}
            </p>

            <p className="text-sm text-charcoal-muted leading-relaxed font-light">
              Operating across our studio hubs in <strong>Chhindwara</strong> and <strong>Nagpur</strong>, we work with a tightly knit team of spatial architects, structural draftsmen, modular specialists, and master carpenters who share our obsession with hairline finishes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-luxury">
              <div>
                <div className="font-serif text-3xl text-bronze font-semibold">50+</div>
                <div className="text-xs text-charcoal-muted uppercase tracking-wider mt-1">Completed Residencies</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-bronze font-semibold">8+</div>
                <div className="text-xs text-charcoal-muted uppercase tracking-wider mt-1">Years in Practice</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-center">
            Our Non-Negotiable Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-canvas-soft border border-border-luxury p-6 sm:p-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-bronze font-semibold">Standard 01</span>
              <h3 className="font-serif text-2xl text-charcoal">Structural Integrity First</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                We use only certified boiling waterproof (BWP 710) plywood, anti-termite treated timber, and premium grade stones that withstand Central India's climate cycles.
              </p>
            </div>

            <div className="bg-canvas-soft border border-border-luxury p-6 sm:p-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-bronze font-semibold">Standard 02</span>
              <h3 className="font-serif text-2xl text-charcoal">Transparent Accounting</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                Every square foot of material and hardware brand is spelled out in advance in our itemized Bill of Quantities (BOQ). No vague estimates.
              </p>
            </div>

            <div className="bg-canvas-soft border border-border-luxury p-6 sm:p-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-bronze font-semibold">Standard 03</span>
              <h3 className="font-serif text-2xl text-charcoal">Daily Site Stewardship</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                Our site engineers conduct daily checks on level lines, electrical junction clearances, and surface preps, sharing photo logs every weekend.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Locations */}
        <div className="bg-charcoal text-canvas p-6 sm:p-14 border border-charcoal-light flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-bronze font-semibold">Our Studio Hubs</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-canvas">Serving Nagpur & Chhindwara</h3>
            <p className="text-xs text-canvas/70 font-light">
              Visit our design sample lounges to touch actual finishes, stone veneers, and modular hardware.
            </p>
          </div>
          <button
            onClick={onOpenLeadModal}
            className="w-full sm:w-auto bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-7 py-4 text-center transition-all shrink-0"
          >
            Schedule Studio Visit →
          </button>
        </div>

      </div>
    </div>
  );
};
