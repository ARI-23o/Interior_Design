import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenLeadModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenLeadModal }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80';
  const afterImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80';

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-canvas-soft border-y border-border-luxury relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold mb-3">
              <Sparkles size={14} />
              <span>Real Life Transformations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              From Bare Shell to Tailored Luxury.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-3 leading-relaxed">
              Drag the slider to reveal how we transform raw brick-and-mortar structures into warm, functional, and photorealistic living environments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSliderPosition(15)}
              className="text-xs uppercase tracking-wider px-3 py-1.5 border border-border-luxury bg-canvas text-charcoal hover:border-charcoal transition-colors"
            >
              Show Before
            </button>
            <button 
              onClick={() => setSliderPosition(50)}
              className="text-xs uppercase tracking-wider px-3 py-1.5 border border-border-luxury bg-canvas text-charcoal hover:border-charcoal transition-colors"
            >
              50 / 50 Split
            </button>
            <button 
              onClick={() => setSliderPosition(85)}
              className="text-xs uppercase tracking-wider px-3 py-1.5 border border-border-luxury bg-canvas text-charcoal hover:border-charcoal transition-colors"
            >
              Show After
            </button>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] select-none overflow-hidden cursor-ew-resize border border-border-luxury shadow-luxury group"
        >
          {/* AFTER Image (Full background) */}
          <img 
            src={afterImage} 
            alt="Designed Finished Home" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 bg-charcoal/80 backdrop-blur-md text-canvas text-xs uppercase tracking-widest px-4 py-2 pointer-events-none z-10 border border-charcoal-light">
            After · Sowakaah Design
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div 
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={beforeImage} 
              alt="Raw Construction Site" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
            />
            <div className="absolute top-6 left-6 bg-charcoal/80 backdrop-blur-md text-canvas text-xs uppercase tracking-widest px-4 py-2 pointer-events-none z-10 border border-charcoal-light">
              Before · Raw Site
            </div>
          </div>

          {/* Slider Divider Line & Handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-canvas cursor-ew-resize z-20 flex items-center justify-center shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 -ml-4 rounded-full bg-canvas text-charcoal border-2 border-bronze flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <MoveHorizontal size={18} className="text-bronze-dark" />
            </div>
          </div>

          {/* Bottom quick spec pill */}
          <div className="absolute bottom-6 left-6 right-6 bg-charcoal/85 backdrop-blur-md text-canvas p-4 md:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-charcoal-light z-10">
            <div>
              <span className="text-[10px] tracking-widest text-bronze uppercase font-semibold">Case Study Preview</span>
              <p className="font-serif text-lg text-canvas">The Alabaster Residence · 2,450 sq.ft. Turnkey Handover</p>
            </div>
            <button
              onClick={onOpenLeadModal}
              className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-5 py-2.5 transition-colors"
            >
              <span>Get Similar Transformation</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
