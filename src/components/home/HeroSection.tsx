import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { studioInfo } from '../../data/contentData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenLeadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onOpenLeadModal }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const heroShowcaseImages = [
    {
      src: '/images/projects/luxury-residence/residence-03.jpg',
      title: 'Pyramid Gold Residence',
      location: 'Nagpur, Maharashtra',
      tag: 'LIVING & DINING SALON'
    },
    {
      src: '/images/projects/luxury-residence/residence-10.jpg',
      title: 'Pyramid Gold Master Suite',
      location: 'Nagpur, Maharashtra',
      tag: 'PEACOCK TEAL SUITE'
    },
    {
      src: '/images/projects/turnkey-spaces/space-01.jpg',
      title: 'Pershionkar Residence',
      location: 'Nagpur, Maharashtra',
      tag: 'TURNKEY LIVING & MANDIR'
    },
    {
      src: '/images/projects/duplex-villa/villa-01.jpg',
      title: "Director's Office (Khush Vajani)",
      location: 'Nagpur, Maharashtra',
      tag: 'EXECUTIVE SUITE & MANDIR'
    }
  ];

  const activeShowcase = heroShowcaseImages[selectedPhotoIndex];

  return (
    <section className="relative bg-canvas overflow-hidden border-b border-border-luxury py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Studio Narrative & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Studio Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 bg-canvas-soft border border-border-luxury text-charcoal text-[10px] sm:text-xs uppercase tracking-wider font-semibold shadow-sm">
              <span className="flex items-center gap-1.5 text-bronze">
                <MapPin size={13} className="shrink-0" />
                <span>Nagpur · Chhindwara</span>
              </span>
              <span className="text-charcoal-muted">·</span>
              <span className="flex items-center gap-1 text-bronze">
                <Sparkles size={12} />
                <span>Established 2022</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-bronze font-semibold block">
                {studioInfo.tagline}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-charcoal leading-[1.15] tracking-tight">
                Thoughtfully Planned. <br />
                <span className="italic font-light text-charcoal-light">Carefully Detailed.</span> <br />
                Made For You.
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed max-w-xl">
              An interior design studio creating spaces that are thoughtful, functional and timeless across residential, commercial and hospitality environments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onExploreProjects}
                className="bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-luxury min-h-[46px] whitespace-nowrap"
              >
                <span>EXPLORE OUR PROJECTS</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onOpenLeadModal}
                className="bg-canvas hover:bg-canvas-soft text-charcoal border border-border-luxury hover:border-charcoal text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 min-h-[46px] whitespace-nowrap"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight size={14} className="text-bronze" />
              </button>
            </div>

            {/* Reassurance Standard Points */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-border-luxury/70">
              <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                <CheckCircle2 size={15} className="text-bronze shrink-0" />
                <span className="text-[11px] sm:text-xs">Fixed BOQ & Timelines</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                <Award size={15} className="text-bronze shrink-0" />
                <span className="text-[11px] sm:text-xs">Personalized Approach</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-muted col-span-2 sm:col-span-1">
                <Sparkles size={15} className="text-bronze shrink-0" />
                <span className="text-[11px] sm:text-xs">100% Turnkey Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Crystal Clear Showcase Photography Frame */}
          <div className="lg:col-span-6">
            <div className="relative bg-canvas-soft border border-border-luxury p-3 sm:p-4 shadow-luxury group">
              
              {/* Main Crisp High-Definition Photograph */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-charcoal">
                <img
                  src={activeShowcase.src}
                  alt={activeShowcase.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle bottom info bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent p-4 sm:p-5 flex items-end justify-between">
                  <div className="text-canvas">
                    <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold block mb-0.5">
                      {activeShowcase.tag}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-canvas font-medium">
                      {activeShowcase.title}
                    </h3>
                    <p className="text-[11px] text-canvas/70 font-light">{activeShowcase.location}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-canvas/80 bg-charcoal/60 px-2.5 py-1 border border-canvas/20 backdrop-blur-sm hidden sm:inline-block">
                    Real Handover
                  </span>
                </div>
              </div>

              {/* Quick Thumbnail Navigation */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {heroShowcaseImages.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                      selectedPhotoIndex === idx
                        ? 'border-bronze ring-2 ring-bronze/30 opacity-100'
                        : 'border-border-luxury opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


