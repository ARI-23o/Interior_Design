import React, { useState } from 'react';
import { ArrowRight, Eye, MapPin, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types';

interface ProjectsViewProps {
  onSelectProject: (project: Project) => void;
  onOpenLeadModal: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectProject, onOpenLeadModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Residential', 'Turnkey', 'Commercial'];

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="py-10 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Case Studies & Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal leading-tight">
            Curated Architectural & Living Spaces.
          </h1>
          <p className="text-charcoal-muted text-xs sm:text-base font-light leading-relaxed">
            Every project is an individual response to our clients' habits, spatial orientations, and aesthetic sensibilities. Explore the design stories below.
          </p>
        </div>

        {/* Filters with mobile horizontal scroll */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12 pb-3 sm:pb-4 border-b border-border-luxury overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap transition-all shrink-0 ${
                activeFilter === f
                  ? 'bg-charcoal text-canvas font-semibold shadow-sm'
                  : 'bg-canvas-soft text-charcoal-muted hover:text-charcoal border border-border-luxury/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-canvas border border-border-luxury overflow-hidden luxury-card-hover cursor-pointer group flex flex-col justify-between active:border-bronze"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-soft">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-charcoal/80 text-canvas text-[10px] sm:text-[11px] uppercase tracking-widest px-2.5 sm:px-3 py-1 sm:py-1.5 backdrop-blur-md">
                  {project.category} · {project.areaSqFt} sq.ft.
                </div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-canvas/90 text-charcoal text-[11px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity border border-border-luxury">
                  <Eye size={13} className="text-bronze" />
                  <span>Inspect Story</span>
                </div>
              </div>

              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-charcoal-muted mb-2 font-light">
                    <MapPin size={12} className="text-bronze shrink-0" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.completionTime} Handover</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-bronze-dark transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-bronze uppercase tracking-wider mt-1 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal-muted mt-2.5 sm:mt-3 font-light leading-relaxed line-clamp-2">
                    {project.clientBrief}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-luxury flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.materials.slice(0, 3).map((m, i) => (
                      <span key={i} className="text-[9.5px] sm:text-[10px] bg-canvas-soft px-2 py-0.5 text-charcoal-subtle border border-border-luxury/60">
                        {m}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-charcoal group-hover:text-bronze flex items-center gap-1 uppercase tracking-wider shrink-0 ml-2">
                    <span>Case Study</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Lead Banner */}
        <div className="mt-12 sm:mt-20 p-6 sm:p-10 bg-canvas-soft border border-border-luxury text-center space-y-3 sm:space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
            Have a blueprint or floor plan ready?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto font-light">
            Upload your layout or schedule a discovery consultation with our senior designers.
          </p>
          <button
            onClick={onOpenLeadModal}
            className="w-full sm:w-auto bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-widest font-semibold px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-2 transition-all min-h-[44px]"
          >
            <span>Request Layout Review</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
