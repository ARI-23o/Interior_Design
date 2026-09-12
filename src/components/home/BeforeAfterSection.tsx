import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Columns, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenLeadModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenLeadModal }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = '/images/before-bedroom.jpg';
  const afterImage = '/images/after-bedroom.jpg';

  const transformationDetails = [
    { title: 'Bespoke Joinery', desc: 'From raw BWP marine ply carcass to high-gloss lacquered finishes with integrated warm LED profiles.' },
    { title: 'Architectural Lighting', desc: 'Layered cove illumination, focused headboard spotlights, and backlit geometric wall pattern.' },
    { title: 'Integrated Study & Vanity', desc: 'Custom curved study station seamlessly connected to illuminated wardrobe and dresser mirror.' }
  ];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-14 sm:py-24 bg-canvas-soft border-y border-border-luxury relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold mb-2">
              <Sparkles size={14} />
              <span>Real Site Transformation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Before & After: Real Transformation.
            </h2>
            <p className="text-charcoal-muted text-xs sm:text-base mt-2 leading-relaxed font-light">
              Witness how raw plywood carcasses, framing, and on-site carpentry evolve into an impeccably detailed, turnkey bedroom suite.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-canvas p-1 border border-border-luxury self-start md:self-auto shadow-sm">
            <button
              onClick={() => setViewMode('slider')}
              className={`text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 transition-all flex items-center gap-1.5 ${
                viewMode === 'slider' ? 'bg-charcoal text-canvas font-semibold shadow-sm' : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              <SlidersHorizontal size={13} />
              <span>Interactive Slider</span>
            </button>
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 transition-all flex items-center gap-1.5 ${
                viewMode === 'side-by-side' ? 'bg-charcoal text-canvas font-semibold shadow-sm' : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              <Columns size={13} />
              <span>Side by Side</span>
            </button>
          </div>
        </div>

        {/* 1. INTERACTIVE DRAG SLIDER VIEW */}
        {viewMode === 'slider' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Quick preset positions */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-charcoal-muted hidden sm:inline">
                Drag the center slider or click preset buttons:
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
                <button 
                  onClick={() => setSliderPosition(0)} 
                  className={`px-3 py-1 text-xs border transition-colors ${sliderPosition === 0 ? 'bg-charcoal text-canvas border-charcoal' : 'bg-canvas border-border-luxury hover:border-charcoal text-charcoal'}`}
                >
                  100% Before
                </button>
                <button 
                  onClick={() => setSliderPosition(50)} 
                  className={`px-3 py-1 text-xs border transition-colors ${sliderPosition === 50 ? 'bg-charcoal text-canvas border-charcoal' : 'bg-canvas border-border-luxury hover:border-charcoal text-charcoal'}`}
                >
                  50 / 50 Split
                </button>
                <button 
                  onClick={() => setSliderPosition(100)} 
                  className={`px-3 py-1 text-xs border transition-colors ${sliderPosition === 100 ? 'bg-charcoal text-canvas border-charcoal' : 'bg-canvas border-border-luxury hover:border-charcoal text-charcoal'}`}
                >
                  100% After
                </button>
              </div>
            </div>

            {/* Main Interactive Canvas */}
            <div 
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[320px] xs:h-[400px] sm:h-[520px] md:h-[600px] select-none overflow-hidden cursor-ew-resize border border-border-luxury shadow-luxury group touch-pan-y bg-charcoal"
            >
              {/* After Image (Background Layer) */}
              <img 
                src={afterImage} 
                alt="Finished Turnkey Bedroom Handover" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-charcoal/90 backdrop-blur-md text-canvas text-[10.5px] sm:text-xs uppercase tracking-widest px-3 sm:px-4 py-1.5 pointer-events-none z-10 border border-charcoal-light shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>AFTER: Finished Handover</span>
              </div>

              {/* Before Image (Cropped Overlay Layer) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={beforeImage} 
                  alt="Raw Site Carpentry and Plywood Framing" 
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
                />
                <div className="absolute top-3 sm:top-5 left-3 sm:left-6 bg-charcoal/90 backdrop-blur-md text-canvas text-[10.5px] sm:text-xs uppercase tracking-widest px-3 sm:px-4 py-1.5 pointer-events-none z-10 border border-charcoal-light shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>BEFORE: Raw Site Carpentry</span>
                </div>
              </div>

              {/* Interactive Divider Line & Handle */}
              <div 
                className="absolute inset-y-0 w-[2px] bg-canvas cursor-ew-resize z-20 flex items-center justify-center shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 -ml-4.5 sm:-ml-5.5 rounded-full bg-canvas text-charcoal border-2 border-bronze flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <MoveHorizontal size={18} className="text-bronze" />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-center text-charcoal-muted">
              ↔ Drag the circular handle left and right to reveal the full transformation
            </p>
          </div>
        )}

        {/* 2. SIDE BY SIDE VIEW */}
        {viewMode === 'side-by-side' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {/* Before Card */}
            <div className="bg-canvas border border-border-luxury overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
                <img 
                  src={beforeImage} 
                  alt="Raw Site Carpentry" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-charcoal/90 backdrop-blur-md text-canvas text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1 border border-charcoal-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>BEFORE: On-Site Carpentry</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 space-y-2">
                <h3 className="font-serif text-lg text-charcoal">Structural Framing & Joinery</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Raw plywood framework, study table shaping, false ceiling coffer grid, and preliminary electrical wiring conduit routing.
                </p>
              </div>
            </div>

            {/* After Card */}
            <div className="bg-canvas border border-border-luxury overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
                <img 
                  src={afterImage} 
                  alt="Finished Turnkey Bedroom Handover" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-charcoal/90 backdrop-blur-md text-canvas text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1 border border-charcoal-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>AFTER: Finished Turnkey Suite</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 space-y-2">
                <h3 className="font-serif text-lg text-charcoal">Completed Luxury Handover</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Lacquered gloss cabinetry, plush velvet fluted headboard, illuminated cove niches, dressing mirror, and bespoke styled finishes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3 Key Transformation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {transformationDetails.map((item, idx) => (
            <div key={idx} className="bg-canvas p-4 sm:p-5 border border-border-luxury space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                <CheckCircle2 size={14} className="text-bronze shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-5 sm:p-7 bg-charcoal text-canvas flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-charcoal-light shadow-luxury">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold">Turnkey Precision</span>
            <p className="font-serif text-lg sm:text-xl text-canvas">Have a raw flat, duplex, or commercial shell ready for interiors?</p>
            <p className="text-xs text-canvas/70 font-light">We take care of 3D concept designs, fixed-cost BOQ, site execution, and final handover.</p>
          </div>
          <button
            onClick={onOpenLeadModal}
            className="w-full sm:w-auto bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-7 py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-md whitespace-nowrap shrink-0 min-h-[46px]"
          >
            <span>START YOUR TRANSFORMATION</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

