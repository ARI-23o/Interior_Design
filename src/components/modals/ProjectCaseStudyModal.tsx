import React, { useState } from 'react';
import { X, MapPin, Clock, Maximize2, ArrowRight, MessageSquare, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../types';
import { studioInfo } from '../../data/contentData';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLeadModal: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onOpenLeadModal
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const handleWhatsAppCaseStudy = () => {
    const message = `Hi Sowakaah Studio, I just reviewed your case study for "${project.title}" (${project.location}, ${project.areaSqFt} sq.ft.) and I'd like to discuss a similar design for my space.`;
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-canvas w-full max-w-5xl my-auto border border-border-luxury shadow-luxury-lg overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Sticky Close Button Header */}
        <div className="sticky top-0 z-20 bg-canvas/95 backdrop-blur-md border-b border-border-luxury px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest bg-bronze/10 text-bronze-dark px-2.5 py-1 font-semibold">
              Case Study
            </span>
            <span className="text-xs text-charcoal-muted hidden sm:inline">
              {project.category} · {project.location}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-charcoal hover:text-bronze transition-colors rounded-full hover:bg-canvas-soft"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[85vh] overflow-y-auto">
          
          {/* Hero Header of Case Study */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-muted">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-bronze" />
                {project.location}
              </span>
              <span>·</span>
              <span>{project.areaSqFt} sq.ft. Carpet Area</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-bronze" />
                {project.completionTime} Handover
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
              {project.title}
            </h2>

            <p className="text-xs uppercase tracking-[0.2em] text-bronze font-semibold">
              {project.subtitle}
            </p>
          </div>

          {/* Main Gallery Lightbox Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal border border-border-luxury">
              <img
                src={project.galleryImages[activeImageIndex] || project.coverImage}
                alt={`${project.title} Gallery`}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Navigation Arrows */}
              {project.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? project.galleryImages.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas/80 text-charcoal hover:bg-canvas flex items-center justify-center shadow-md transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === project.galleryImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas/80 text-charcoal hover:bg-canvas flex items-center justify-center shadow-md transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 right-4 bg-charcoal/80 text-canvas text-[11px] px-3 py-1 tracking-widest uppercase">
                {activeImageIndex + 1} / {project.galleryImages.length}
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative w-20 h-14 shrink-0 overflow-hidden border-2 transition-all ${
                    activeImageIndex === i ? 'border-bronze opacity-100 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Section: The Brief & The Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border-luxury">
            
            {/* The Brief */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                The Client Brief
              </h3>
              <p className="text-sm text-charcoal leading-relaxed font-light bg-canvas-soft p-5 border border-border-luxury">
                "{project.clientBrief}"
              </p>
            </div>

            {/* Design Approach */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                Design & Architectural Approach
              </h3>
              <div className="space-y-2">
                {project.designApproach.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal font-light">
                    <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Materiality & Color Palette */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-border-luxury">
            
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze mb-3">
                Curated Materials
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, i) => (
                  <span key={i} className="text-xs bg-canvas-soft border border-border-luxury px-3 py-1 text-charcoal">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze mb-3">
                Color Story
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.palette.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 bg-canvas-soft border border-border-luxury px-2.5 py-1">
                    <span className="w-3.5 h-3.5 rounded-full border border-charcoal/20" style={{ backgroundColor: p.hex }} />
                    <span className="text-xs text-charcoal font-light">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Conversion Box (Sales tool turning readers into leads) */}
          <div className="bg-charcoal text-canvas p-8 sm:p-10 border border-charcoal-light flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold block mb-1">
                Inspired by this aesthetic?
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-canvas">
                Let's discuss something similar for your space.
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenLeadModal();
                }}
                className="bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors"
              >
                Start Your Project →
              </button>
              <button
                onClick={handleWhatsAppCaseStudy}
                className="border border-canvas/30 hover:border-canvas text-canvas text-xs uppercase tracking-widest px-5 py-3.5 flex items-center gap-2 transition-colors"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <span>WhatsApp Brief</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
