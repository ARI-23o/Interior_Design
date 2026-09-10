import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { processStepsData } from '../../data/contentData';

interface ProcessSectionProps {
  onOpenLeadModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenLeadModal }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoopingFlip, setIsLoopingFlip] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const totalSteps = processStepsData.length;
  const AUTO_SCROLL_DELAY = 3800; // 3.8 seconds per card

  // Continuous auto-scroll interval with end-to-start flip detection
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      if (activeIndex === totalSteps - 1) {
        // Trigger end-to-start stylish flip animation!
        setIsLoopingFlip(true);
        setTimeout(() => {
          setActiveIndex(0);
          setProgressKey((k) => k + 1);
          setTimeout(() => {
            setIsLoopingFlip(false);
          }, 900);
        }, 300);
      } else {
        setActiveIndex((prev) => prev + 1);
        setProgressKey((k) => k + 1);
      }
    }, AUTO_SCROLL_DELAY);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, totalSteps]);

  // Smooth scroll sync
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>('.process-card');
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 16;
    const targetScroll = activeIndex * (cardWidth + gap);

    container.scrollTo({
      left: targetScroll,
      behavior: isLoopingFlip ? 'auto' : 'smooth'
    });
  }, [activeIndex, isLoopingFlip]);

  const handleNext = () => {
    if (activeIndex === totalSteps - 1) {
      setIsLoopingFlip(true);
      setTimeout(() => {
        setActiveIndex(0);
        setTimeout(() => setIsLoopingFlip(false), 900);
      }, 200);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
    setProgressKey((k) => k + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
    setProgressKey((k) => k + 1);
  };

  const handleJumpToStep = (index: number) => {
    if (index === 0 && activeIndex === totalSteps - 1) {
      setIsLoopingFlip(true);
      setTimeout(() => setIsLoopingFlip(false), 900);
    }
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-14 sm:py-24 bg-canvas-soft border-t border-border-luxury overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation & Loop Indicator */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
              <Sparkles size={14} className={isLoopingFlip ? "animate-spin text-bronze-dark" : "text-bronze"} />
              <span>Structured Transparency</span>
              {isLoopingFlip && (
                <span className="text-[9px] sm:text-[10px] bg-bronze text-charcoal px-2 py-0.5 font-bold uppercase tracking-wider animate-bounce ml-2">
                  Restarting from Stage 01
                </span>
              )}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              How We Bring Your Vision to Life.
            </h2>
            <p className="text-charcoal-muted text-xs sm:text-base font-light">
              A continuous step-by-step roadmap from your first consultation to your fully finished home.
            </p>
          </div>

          {/* Carousel Controls with Auto-scroll Indicator */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 border border-border-luxury bg-canvas text-charcoal hover:border-charcoal transition-colors text-xs flex items-center gap-1.5 px-3 shadow-sm"
              title={isPaused ? "Resume continuous auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={12} className="text-emerald-700" /> : <Pause size={12} className="text-bronze" />}
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                {isPaused ? 'Resume' : 'Auto'}
              </span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 border border-border-luxury bg-canvas text-charcoal hover:bg-charcoal hover:text-canvas hover:border-charcoal flex items-center justify-center transition-colors shadow-sm"
                aria-label="Previous step"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 border border-border-luxury bg-canvas text-charcoal hover:bg-charcoal hover:text-canvas hover:border-charcoal flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next step"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Live Auto-Scroll Progress Timer Bar */}
        <div className="w-full bg-border-luxury/50 h-1 mb-6 sm:mb-8 overflow-hidden">
          <div
            key={progressKey}
            className={`h-full bg-bronze transition-all ${
              isPaused ? 'opacity-30' : 'animate-progress'
            }`}
            style={{
              animation: isPaused ? 'none' : `progressTimer ${AUTO_SCROLL_DELAY}ms linear forwards`
            }}
          />
        </div>

        {/* Horizontally Auto-Scrollable Cards Track with 3D Flip Support */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className={`flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 pt-1 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing transition-transform duration-700 -mx-4 px-4 sm:mx-0 sm:px-0 ${
            isLoopingFlip ? 'scale-[0.98]' : 'scale-100'
          }`}
          style={{ perspective: '1200px' }}
        >
          {processStepsData.map((step, idx) => {
            const isActive = activeIndex === idx;
            const isFirstAndLooping = idx === 0 && isLoopingFlip;

            return (
              <div
                key={step.stepNumber}
                onClick={() => handleJumpToStep(idx)}
                className={`process-card w-[84vw] xs:w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-center sm:snap-start bg-canvas border p-5 sm:p-8 flex flex-col justify-between transition-all duration-700 group shadow-sm relative overflow-hidden ${
                  isActive
                    ? 'border-bronze shadow-luxury ring-1 ring-bronze/60 scale-[1.01]'
                    : 'border-border-luxury opacity-80 hover:opacity-100 hover:border-charcoal'
                } ${
                  isFirstAndLooping ? 'animate-flip-reveal ring-2 ring-bronze bg-canvas-soft' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, opacity 0.5s ease'
                }}
              >
                {/* Gold Shimmer Beam on Active / Loop */}
                {(isActive || isFirstAndLooping) && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bronze-light via-bronze-gold to-bronze animate-pulse" />
                )}

                {/* Card Header */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`font-serif text-3xl sm:text-5xl font-light transition-all duration-500 ${
                      isActive ? 'text-bronze scale-105 sm:scale-110' : 'text-bronze/70'
                    }`}>
                      {step.stepNumber}
                    </span>
                    <span className={`text-[9.5px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold border transition-colors ${
                      isActive ? 'bg-charcoal text-canvas border-charcoal' : 'bg-canvas-soft text-charcoal-muted border-border-luxury'
                    }`}>
                      Stage {idx + 1} of {totalSteps}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal group-hover:text-bronze-dark transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-bronze font-semibold mt-0.5 sm:mt-1">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="bg-canvas-soft p-3.5 sm:p-4 border border-border-luxury/70 space-y-2">
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-bronze font-semibold block">
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
                <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-border-luxury/70 flex flex-col justify-between">
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-charcoal-subtle font-semibold block mb-1">
                    What Happens Next:
                  </span>
                  <p className="text-[11px] text-charcoal font-light italic leading-relaxed">
                    "{step.whatHappensNext}"
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Progress Navigation Dots & Active Stage Indicator */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border-luxury/60">
          <div className="flex items-center gap-2">
            {processStepsData.map((_, i) => (
              <button
                key={i}
                onClick={() => handleJumpToStep(i)}
                className={`h-2 sm:h-2.5 transition-all rounded-full ${
                  activeIndex === i 
                    ? 'w-8 sm:w-10 bg-bronze shadow-sm ring-2 ring-bronze/30' 
                    : 'w-2 sm:w-2.5 bg-border-luxury hover:bg-charcoal'
                }`}
                aria-label={`Jump to Stage ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-charcoal-muted uppercase tracking-wider font-light">
            <span>Active Stage:</span>
            <strong className="text-charcoal font-semibold bg-canvas px-2.5 py-1 border border-border-luxury">
              {processStepsData[activeIndex].stepNumber} · {processStepsData[activeIndex].title}
            </strong>
          </div>
        </div>

        {/* Bottom Process CTA Banner */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 bg-charcoal text-canvas flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-6 border border-charcoal-light shadow-md">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold">Ready to Begin?</span>
            <h4 className="font-serif text-xl sm:text-2xl text-canvas">Start with Stage 01 · Blueprint Consultation</h4>
            <p className="text-xs text-canvas/70 font-light">We’ll review your architectural floor plans and answer questions with zero obligations.</p>
          </div>
          <button
            onClick={onOpenLeadModal}
            className="w-full sm:w-auto bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-6 sm:px-7 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-colors shrink-0 shadow-sm min-h-[44px]"
          >
            <span>START YOUR CONSULTATION →</span>
          </button>
        </div>

      </div>

      {/* Global CSS Keyframes for Progress Timer & 3D Flip Reveal */}
      <style>{`
        @keyframes progressTimer {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes flipReveal {
          0% {
            transform: rotateY(-90deg) scale(0.9);
            opacity: 0.3;
          }
          50% {
            transform: rotateY(15deg) scale(1.05);
            box-shadow: 0 25px 50px -12px rgba(184, 134, 84, 0.4);
          }
          100% {
            transform: rotateY(0deg) scale(1.01);
            opacity: 1;
          }
        }
        .animate-flip-reveal {
          animation: flipReveal 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};
