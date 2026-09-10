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
  const filters = ['All', 'Residential', 'Turnkey', 'Villas', 'Commercial'];

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="py-16 sm:py-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Case Studies & Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
            Curated Architectural & Living Spaces.
          </h1>
          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            Every project is an individual response to our clients' habits, spatial orientations, and aesthetic sensibilities. Explore the design stories below.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-border-luxury">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs uppercase tracking-wider px-5 py-2.5 transition-all ${
                activeFilter === f
                  ? 'bg-charcoal text-canvas font-semibold'
                  : 'bg-canvas-soft text-charcoal-muted hover:text-charcoal'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-canvas border border-border-luxury overflow-hidden luxury-card-hover cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-soft">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-charcoal/80 text-canvas text-[11px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-md">
                  {project.category} · {project.areaSqFt} sq.ft.
                </div>
                <div className="absolute bottom-4 right-4 bg-canvas/90 text-charcoal text-xs uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={14} className="text-bronze" />
                  <span>Inspect Case Study</span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs text-charcoal-muted mb-2 font-light">
                    <MapPin size={13} className="text-bronze" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.completionTime} Handover</span>
                  </div>

                  <h3 className="font-serif text-3xl text-charcoal group-hover:text-bronze-dark transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-bronze uppercase tracking-wider mt-1 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-charcoal-muted mt-3 font-light leading-relaxed">
                    {project.clientBrief}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border-luxury flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((m, i) => (
                      <span key={i} className="text-[10px] bg-canvas-soft px-2 py-0.5 text-charcoal-subtle">
                        {m}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-charcoal group-hover:text-bronze flex items-center gap-1 uppercase tracking-wider">
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Lead Banner */}
        <div className="mt-20 p-10 bg-canvas-soft border border-border-luxury text-center space-y-4">
          <h3 className="font-serif text-3xl text-charcoal">
            Have a blueprint or floor plan ready?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-lg mx-auto font-light">
            Upload your layout or schedule a discovery consultation with our senior designers.
          </p>
          <button
            onClick={onOpenLeadModal}
            className="bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-widest font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all"
          >
            <span>Request Layout Review</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
