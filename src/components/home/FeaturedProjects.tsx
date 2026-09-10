import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles, MapPin, Maximize2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onViewAllProjects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Residential', 'Turnkey', 'Villas', 'Commercial'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects-section" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold mb-3">
              <Sparkles size={14} />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Spaces Crafted with Intention.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2 max-w-xl font-light">
              Explore our curated portfolio of residential residences, duplex villas, and executive spaces. Click any project to inspect full case studies, materials, and briefs.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-bronze border-b border-charcoal hover:border-bronze pb-1 transition-colors"
          >
            <span>View All Case Studies ({projectsData.length})</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-luxury/60">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-wider px-4 py-2 transition-all ${
                activeFilter === filter
                  ? 'bg-charcoal text-canvas font-semibold'
                  : 'bg-canvas-soft text-charcoal-muted hover:text-charcoal hover:bg-canvas-subtle'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-canvas border border-border-luxury overflow-hidden luxury-card-hover flex flex-col justify-between"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-soft">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-canvas text-[11px] uppercase tracking-widest px-3 py-1.5 border border-charcoal-light">
                  {project.category} · {project.areaSqFt} sq.ft.
                </div>

                <div className="absolute bottom-4 right-4 bg-canvas/90 backdrop-blur-md text-charcoal text-xs uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Eye size={14} className="text-bronze" />
                  <span>Inspect Case Study</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs text-charcoal-muted mb-2 font-light">
                    <MapPin size={13} className="text-bronze" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.completionTime} Handover</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-bronze-dark transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted uppercase tracking-wider mt-1 font-light">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-charcoal-muted mt-3 line-clamp-2 font-light leading-relaxed">
                    {project.clientBrief}
                  </p>
                </div>

                {/* Bottom Material Tags & CTA link */}
                <div className="pt-5 mt-5 border-t border-border-luxury flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.slice(0, 2).map((mat, i) => (
                      <span key={i} className="text-[10px] bg-canvas-soft px-2 py-0.5 text-charcoal-subtle">
                        {mat}
                      </span>
                    ))}
                    {project.materials.length > 2 && (
                      <span className="text-[10px] bg-canvas-soft px-1.5 py-0.5 text-charcoal-subtle">
                        +{project.materials.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-bronze-dark group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 uppercase tracking-wider">
                    <span>Case Study</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
