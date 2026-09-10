import React from 'react';
import { Sparkles, Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/contentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-canvas-soft border-b border-border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Verified Social Proof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
            Trusted by Homeowners Who Value Thoughtful Design.
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-muted pt-1">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold text-charcoal">4.9 / 5.0 Rating</span>
            <span>·</span>
            <span>Based on 48+ verified client reviews across Central India</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-canvas border border-border-luxury p-8 flex flex-col justify-between transition-all hover:border-bronze hover:shadow-luxury group"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Review body */}
                <Quote className="text-bronze/20 mb-3" size={28} />
                <p className="text-charcoal text-sm leading-relaxed font-light italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Client metadata */}
              <div className="pt-6 border-t border-border-luxury/60 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-border-luxury shrink-0"
                />
                <div>
                  <h4 className="font-serif text-base text-charcoal font-medium">
                    {item.clientName}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-charcoal-muted font-light">
                    <MapPin size={11} className="text-bronze shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-[10px] text-bronze font-medium uppercase tracking-wider block mt-0.5">
                    {item.projectTitle}
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
