import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, ArrowRight, MessageSquare, CheckCircle2, ChevronLeft, ChevronRight, Layers, Compass } from 'lucide-react';
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

  useEffect(() => {
    if (project) {
      setActiveImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const handleWhatsAppCaseStudy = () => {
    const message = `Hi Sowakaah Designs, I loved your "${project.title}" case study (${project.location}, ${project.areaSqFt} sq.ft.) and would like to discuss a similar design for my space.`;
    window.open(`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-canvas w-full max-w-5xl my-auto border border-border-luxury shadow-luxury-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Sticky Close Button Header */}
        <div className="sticky top-0 z-20 bg-canvas/98 backdrop-blur-md border-b border-border-luxury px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest bg-bronze/10 text-bronze-dark px-2 sm:px-2.5 py-0.5 sm:py-1 font-semibold">
              Case Study
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-muted line-clamp-1">
              {project.category} · {project.location} · {project.areaSqFt} sq.ft.
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal hover:text-bronze transition-colors rounded-full hover:bg-canvas-soft min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-8 md:p-10 space-y-6 sm:space-y-10 overflow-y-auto">
          
          {/* Hero Header of Case Study */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-charcoal-muted">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-bronze" />
                {project.location}
              </span>
              <span>·</span>
              <span>{project.areaSqFt} sq.ft.</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-bronze" />
                {project.completionTime}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              {project.title}
            </h2>

            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-bronze font-semibold">
              {project.subtitle}
            </p>
          </div>

          {/* Main Gallery Carousel */}
          <div className="space-y-3 sm:space-y-4">
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
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-canvas/85 text-charcoal hover:bg-canvas flex items-center justify-center shadow-md transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === project.galleryImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-canvas/85 text-charcoal hover:bg-canvas flex items-center justify-center shadow-md transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-charcoal/80 text-canvas text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:px-3 sm:py-1 tracking-widest uppercase">
                {activeImageIndex + 1} / {project.galleryImages.length}
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {project.galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative w-16 h-11 sm:w-20 sm:h-14 shrink-0 overflow-hidden border-2 transition-all ${
                    activeImageIndex === i ? 'border-bronze opacity-100 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Section: The Brief & Client Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 pt-4 sm:pt-6 border-t border-border-luxury">
            
            {/* The Brief */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                Project Brief
              </h3>
              <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-light bg-canvas-soft p-4 sm:p-5 border border-border-luxury">
                "{project.clientBrief}"
              </p>
            </div>

            {/* Client Requirements */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                Client Requirements
              </h3>
              <div className="space-y-2 bg-canvas-soft p-4 sm:p-5 border border-border-luxury">
                {project.clientRequirements?.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal font-light">
                    <CheckCircle2 size={13} className="text-bronze shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Design Concept & Spatial Layout Planning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 pt-4 sm:pt-6 border-t border-border-luxury">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                <Compass size={14} />
                <span>Design Concept</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-light">
                {project.designConcept}
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                <Layers size={14} />
                <span>Spatial Strategy</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                {project.layoutPlanning}
              </p>
            </div>
          </div>

          {/* 3-Phase Execution Proof */}
          {project.executionStages && (
            <div className="pt-4 sm:pt-6 border-t border-border-luxury space-y-3 sm:space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze">
                Execution Stages: 3D Concept → Site → Finished Space
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {project.executionStages.map((stg, i) => (
                  <div key={i} className="border border-border-luxury bg-canvas-soft overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={stg.image} alt={stg.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3.5 sm:p-4 space-y-1">
                      <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider text-bronze font-semibold block">{stg.phase}</span>
                      <h4 className="font-serif text-sm sm:text-base text-charcoal">{stg.title}</h4>
                      <p className="text-[11px] sm:text-xs text-charcoal-muted font-light leading-relaxed">{stg.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materiality & Color Story */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 pt-4 sm:pt-6 border-t border-border-luxury">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze mb-2 sm:mb-3">
                Curated Materials
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.materials.map((mat, i) => (
                  <span key={i} className="text-xs bg-canvas-soft border border-border-luxury px-2.5 sm:px-3 py-1 text-charcoal">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-bronze mb-2 sm:mb-3">
                Color Palette
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.palette.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 bg-canvas-soft border border-border-luxury px-2 sm:px-2.5 py-1">
                    <span className="w-3.5 h-3.5 rounded-full border border-charcoal/20" style={{ backgroundColor: p.hex }} />
                    <span className="text-xs text-charcoal font-light">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Conversion Box */}
          <div className="bg-charcoal text-canvas p-6 sm:p-10 border border-charcoal-light flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold block mb-1">
                Customized for Your Living Requirements
              </span>
              <h4 className="font-serif text-xl sm:text-3xl text-canvas">
                Love this style? Let's create something similar for you.
              </h4>
            </div>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenLeadModal();
                }}
                className="bg-bronze hover:bg-bronze-light text-charcoal font-semibold text-xs uppercase tracking-widest px-6 sm:px-7 py-3.5 transition-colors shadow-md text-center min-h-[44px]"
              >
                START YOUR PROJECT →
              </button>
              <button
                onClick={handleWhatsAppCaseStudy}
                className="border border-canvas/30 hover:border-canvas text-canvas text-xs uppercase tracking-widest px-4 sm:px-5 py-3.5 flex items-center justify-center gap-2 transition-colors min-h-[44px]"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <span>WhatsApp Case Study</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
