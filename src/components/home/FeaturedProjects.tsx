import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles, MapPin } from 'lucide-react';
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
    <section id="projects-section" className="py-14 sm:py-20 bg-canvas border-b border-border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold mb-2">
              <Sparkles size={14} />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              FEATURED PROJECTS
            </h2>
            <p className="text-charcoal-muted text-xs sm:text-base mt-2 max-w-xl font-light">
              Tap any project to inspect the full case study, spatial layout drawings, client brief, and high-resolution photo gallery.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-charcoal hover:text-bronze border-b border-charcoal hover:border-bronze pb-1 transition-colors self-start md:self-auto"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Filter Pills with horizontal scroll on mobile */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10 pb-3 sm:pb-4 border-b border-border-luxury/60 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap transition-all shrink-0 ${
                activeFilter === filter
                  ? 'bg-charcoal text-canvas font-semibold shadow-sm'
                  : 'bg-canvas-soft text-charcoal-muted hover:text-charcoal hover:bg-canvas-subtle border border-border-luxury/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Large Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-canvas border border-border-luxury overflow-hidden luxury-card-hover flex flex-col justify-between shadow-sm active:border-bronze"
            >
              {/* Large Luxury Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-canvas-soft">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Location & Area Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-charcoal/85 backdrop-blur-md text-canvas text-[10px] sm:text-[11px] uppercase tracking-widest px-2.5 sm:px-3 py-1 sm:py-1.5 border border-charcoal-light">
                  {project.location} · {project.areaSqFt} sq.ft.
                </div>

                {/* Case Study Touch Hint (Visible always on mobile, hover on desktop) */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-canvas/95 backdrop-blur-md text-charcoal text-[11px] sm:text-xs uppercase tracking-wider px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-border-luxury">
                  <Eye size={13} className="text-bronze" />
                  <span>Case Study</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-charcoal-muted mb-2 font-light">
                    <MapPin size={12} className="text-bronze shrink-0" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.category}</span>
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

                {/* Bottom Material Tags & CTA */}
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-border-luxury flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.materials.slice(0, 3).map((mat, i) => (
                      <span key={i} className="text-[9.5px] sm:text-[10px] bg-canvas-soft px-2 py-0.5 text-charcoal-subtle border border-border-luxury/60">
                        {mat}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-charcoal group-hover:text-bronze inline-flex items-center gap-1 uppercase tracking-wider transition-colors shrink-0 ml-2">
                    <span>Story</span>
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
