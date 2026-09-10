import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, MoveHorizontal, CheckCircle2, HardHat, Eye, Home } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenLeadModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenLeadModal }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'slider' | 'phases'>('phases');
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80';
  const afterImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80';

  const executionStages = [
    {
      phase: 'Stage 01',
      title: '3D Architectural Concept',
      badge: 'Design & Render',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      description: 'Photorealistic lighting studies, microcement wall texturing, and custom curved fluted millwork visualization.'
    },
    {
      phase: 'Stage 02',
      title: 'On-Site Execution',
      badge: 'Under Construction',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      description: 'Precision civil framing, electrical conduit layout, BWP 710 carcass joinery, and ceiling profile casting.'
    },
    {
      phase: 'Stage 03',
      title: 'Finished Living Residence',
      badge: '100% Handover',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      description: 'Pristine finished space with travertine stone, warm cove lighting, curated loose furniture, and zero snags.'
    }
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold mb-3">
              <Sparkles size={14} />
              <span>Proof of Execution Capacity</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              From 3D Concept → Site Execution → Finished Home.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-3 leading-relaxed">
              We don't just deliver beautiful renders — we turn raw structural frames into impeccably crafted, ready-to-live-in spaces.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-2 bg-canvas p-1 border border-border-luxury">
            <button
              onClick={() => setActiveTab('phases')}
              className={`text-xs uppercase tracking-wider px-4 py-2 transition-all ${
                activeTab === 'phases' ? 'bg-charcoal text-canvas font-semibold' : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              3-Phase Journey
            </button>
            <button
              onClick={() => setActiveTab('slider')}
              className={`text-xs uppercase tracking-wider px-4 py-2 transition-all ${
                activeTab === 'slider' ? 'bg-charcoal text-canvas font-semibold' : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              Before / After Slider
            </button>
          </div>
        </div>

        {/* Option 1: 3-Phase Journey Cards */}
        {activeTab === 'phases' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {executionStages.map((stage, i) => (
              <div
                key={i}
                className="bg-canvas border border-border-luxury overflow-hidden flex flex-col justify-between shadow-sm group hover:border-bronze transition-all"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-charcoal">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-md text-canvas text-[10px] uppercase tracking-widest px-3 py-1 font-medium border border-charcoal-light">
                    {stage.phase} · {stage.badge}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-2 font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-luxury/60 flex items-center gap-2 text-[11px] text-bronze-dark font-medium">
                    <CheckCircle2 size={13} className="text-bronze" />
                    <span>Quality-Checked Milestone</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Option 2: Interactive Drag Slider */}
        {activeTab === 'slider' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex justify-end gap-2 text-xs">
              <button onClick={() => setSliderPosition(20)} className="px-3 py-1 bg-canvas border border-border-luxury hover:border-charcoal">Show Before</button>
              <button onClick={() => setSliderPosition(50)} className="px-3 py-1 bg-canvas border border-border-luxury hover:border-charcoal">50/50</button>
              <button onClick={() => setSliderPosition(80)} className="px-3 py-1 bg-canvas border border-border-luxury hover:border-charcoal">Show After</button>
            </div>

            <div 
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] select-none overflow-hidden cursor-ew-resize border border-border-luxury shadow-luxury group"
            >
              <img 
                src={afterImage} 
                alt="Designed Finished Home" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-charcoal/80 backdrop-blur-md text-canvas text-xs uppercase tracking-widest px-4 py-2 pointer-events-none z-10 border border-charcoal-light">
                Finished Handover · Sowakaah
              </div>

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
                  Raw Site · Before
                </div>
              </div>

              <div 
                className="absolute inset-y-0 w-1 bg-canvas cursor-ew-resize z-20 flex items-center justify-center shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 -ml-4 rounded-full bg-canvas text-charcoal border-2 border-bronze flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <MoveHorizontal size={18} className="text-bronze-dark" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="p-6 bg-charcoal text-canvas flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-charcoal-light">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold">Transform Your Site</span>
            <p className="font-serif text-lg text-canvas">Have a raw flat or bungalow under construction?</p>
          </div>
          <button
            onClick={onOpenLeadModal}
            className="bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-6 py-3 flex items-center gap-2 transition-colors"
          >
            <span>START YOUR TRANSFORMATION →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
