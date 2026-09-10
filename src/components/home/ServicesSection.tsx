import React from 'react';
import { ArrowRight, Sparkles, Check, Clock } from 'lucide-react';
import { servicesData } from '../../data/contentData';
import { Service } from '../../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenLeadModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="services-section" className="py-14 sm:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Comprehensive Interior Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
            Tailored Services for Every Requirement.
          </h2>
          <p className="text-charcoal-muted text-xs sm:text-base font-light">
            Whether you need turnkey interior architecture or a precision modular kitchen, we provide dedicated end-to-end expertise.
          </p>
        </div>

        {/* 3-column / 2-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`bg-canvas-soft border border-border-luxury p-6 sm:p-8 flex flex-col justify-between luxury-card-hover group ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-canvas-soft to-canvas' : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-3 mb-3 sm:mb-4">
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-bronze font-semibold">
                    0{index + 1} · {service.subtitle}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-charcoal-muted bg-canvas px-2 sm:px-2.5 py-0.5 sm:py-1 border border-border-luxury shrink-0">
                    <Clock size={12} className="text-bronze" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-bronze-dark transition-colors mb-2 sm:mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light mb-5 sm:mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-border-luxury/60">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                      <Check size={14} className="text-bronze mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-border-luxury/60 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] text-charcoal-subtle italic">
                  Ideal for: {service.idealFor}
                </span>

                <button
                  onClick={onOpenLeadModal}
                  className="text-xs font-semibold text-charcoal hover:text-bronze flex items-center gap-1.5 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Inquire</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
