import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { processStepsData } from '../../data/contentData';

interface ProcessSectionProps {
  onOpenLeadModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenLeadModal }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSteps = processStepsData.length;

  // Horizontal auto-scroll interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSteps);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalSteps]);

  // Sync scroll position when activeIndex changes
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 380;
    const gap = 24; // gap-6 in px
    const targetScroll = activeIndex * (cardWidth + gap);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  // Handle user manual scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 380;
    const gap = 24;
    const scrollPos = container.scrollLeft;
    const newIndex = Math.round(scrollPos / (cardWidth + gap));
    if (newIndex >= 0 && newIndex < totalSteps && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  };

  const handleJumpToStep = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-canvas-soft border-t border-border-luxury overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
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

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 border border-border-luxury bg-canvas text-charcoal hover:border-charcoal transition-colors text-xs flex items-center gap-1.5 px-3"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={13} className="text-bronze" /> : <Pause size={13} className="text-bronze" />}
              <span className="text-[11px] uppercase tracking-wider">{isPaused ? 'Resume' : 'Auto'}</span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-border-luxury bg-canvas text-charcoal hover:bg-charcoal hover:text-canvas hover:border-charcoal flex items-center justify-center transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-border-luxury bg-canvas text-charcoal hover:bg-charcoal hover:text-canvas hover:border-charcoal flex items-center justify-center transition-colors"
                aria-label="Next step"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontally Scrollable Cards Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {processStepsData.map((step, idx) => (
            <div
              key={step.stepNumber}
              onClick={() => handleJumpToStep(idx)}
              className={`w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-start bg-canvas border p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 group shadow-sm ${
                activeIndex === idx
                  ? 'border-bronze shadow-luxury ring-1 ring-bronze/50 scale-[1.01]'
                  : 'border-border-luxury opacity-80 hover:opacity-100 hover:border-charcoal'
              }`}
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-4xl sm:text-5xl text-bronze font-light group-hover:scale-105 transition-transform">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest bg-canvas-soft text-charcoal-muted px-2.5 py-1 font-semibold border border-border-luxury">
                    Stage {idx + 1} of {totalSteps}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-bronze-dark transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-bronze font-semibold mt-1">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="bg-canvas-soft p-4 border border-border-luxury/70 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold block">
                    What You Receive:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal font-light">
                        <CheckCircle2 size={13} className="text-bronze shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What Happens Next Footer in Card */}
              <div className="pt-4 mt-6 border-t border-border-luxury/70">
                <span className="text-[10px] uppercase tracking-widest text-charcoal-subtle font-semibold block mb-1">
                  What Happens Next:
                </span>
                <p className="text-[11px] text-charcoal font-light italic leading-relaxed">
                  "{step.whatHappensNext}"
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Progress Navigation Dots & Active Stage Indicator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-border-luxury/60">
          <div className="flex items-center gap-2">
            {processStepsData.map((_, i) => (
              <button
                key={i}
                onClick={() => handleJumpToStep(i)}
                className={`h-2 transition-all rounded-full ${
                  activeIndex === i ? 'w-8 bg-bronze' : 'w-2 bg-border-luxury hover:bg-charcoal'
                }`}
                aria-label={`Jump to Stage ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-xs text-charcoal-muted uppercase tracking-wider font-light">
            Active: <strong className="text-charcoal font-semibold">{processStepsData[activeIndex].title}</strong> (Stage {activeIndex + 1} of 5)
          </span>
        </div>

        {/* Bottom Process CTA Banner */}
        <div className="mt-14 p-8 bg-charcoal text-canvas flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border border-charcoal-light shadow-md">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold">Start with Stage 01</span>
            <h4 className="font-serif text-2xl text-canvas">Ready to begin with your free discovery consultation?</h4>
            <p className="text-xs text-canvas/70 font-light">We’ll review your architectural floor plans and answer any questions.</p>
          </div>
          <button
            onClick={onOpenLeadModal}
            className="bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-7 py-4 flex items-center justify-center gap-2 transition-colors shrink-0 shadow-sm"
          >
            <span>START YOUR CONSULTATION →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
