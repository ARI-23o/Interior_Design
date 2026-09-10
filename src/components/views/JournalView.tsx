import React, { useState } from 'react';
import { Sparkles, Clock, ArrowRight, BookOpen, X, CheckCircle2 } from 'lucide-react';
import { articlesData } from '../../data/contentData';
import { Article } from '../../types';

interface JournalViewProps {
  onOpenLeadModal: () => void;
}

export const JournalView: React.FC<JournalViewProps> = ({ onOpenLeadModal }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  React.useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  return (
    <div className="py-16 sm:py-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bronze font-semibold">
            <Sparkles size={14} />
            <span>Design Insights & Guides</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
            The Sowakaah Journal.
          </h1>
          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            Practical knowledge, budget breakdowns, and material guides written by practicing architects to help you make informed decisions for your home.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {articlesData.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-canvas-soft border border-border-luxury overflow-hidden luxury-card-hover cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[16/9] overflow-hidden bg-canvas">
                <img
                  src={art.coverImage}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-charcoal-muted mb-2 font-light">
                    <span className="text-bronze font-semibold uppercase tracking-wider">{art.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {art.readTime}
                    </span>
                    <span>·</span>
                    <span>{art.date}</span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-3xl text-charcoal group-hover:text-bronze-dark transition-colors">
                    {art.title}
                  </h2>

                  <p className="text-sm text-charcoal-muted font-light leading-relaxed mt-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-luxury flex items-center justify-between">
                  <span className="text-xs font-semibold text-charcoal group-hover:text-bronze uppercase tracking-wider inline-flex items-center gap-1.5">
                    <span>Read Full Guide</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Selected Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex justify-center p-2 sm:p-6">
            <div className="bg-canvas w-full max-w-4xl my-auto border border-border-luxury shadow-luxury-lg overflow-hidden animate-in zoom-in-95 duration-200">
              
              <div className="sticky top-0 bg-canvas/95 backdrop-blur-md border-b border-border-luxury px-4 sm:px-6 py-4 flex justify-between items-center z-10">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-bronze font-semibold">
                  {selectedArticle.category} · {selectedArticle.readTime}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 text-charcoal hover:text-bronze -mr-1"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 sm:p-12 space-y-6 sm:space-y-8 max-h-[85vh] overflow-y-auto">
                <div className="space-y-2 sm:space-y-3">
                  <h1 className="font-serif text-2xl sm:text-4xl text-charcoal">
                    {selectedArticle.title}
                  </h1>
                  <p className="text-xs text-charcoal-muted">Published by Sowakaah Studio · {selectedArticle.date}</p>
                </div>

                <img
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  className="w-full aspect-[21/9] object-cover border border-border-luxury"
                />

                <div className="space-y-6 text-charcoal font-light leading-relaxed text-sm sm:text-base">
                  <p className="text-base sm:text-lg font-medium text-charcoal-light">
                    {selectedArticle.content.intro}
                  </p>

                  {selectedArticle.content.sections.map((sec, i) => (
                    <div key={i} className="space-y-3 pt-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                        {sec.heading}
                      </h3>
                      <p className="text-charcoal-muted">
                        {sec.body}
                      </p>
                      {sec.bulletPoints && (
                        <div className="space-y-2 pl-2">
                          {sec.bulletPoints.map((bp, j) => (
                            <div key={j} className="flex items-start gap-2 text-sm text-charcoal">
                              <CheckCircle2 size={15} className="text-bronze shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="bg-canvas-soft p-5 sm:p-6 border-l-4 border-bronze text-sm text-charcoal space-y-1 mt-6">
                    <strong className="block text-xs uppercase tracking-widest text-bronze">The Designer's Takeaway</strong>
                    <p>{selectedArticle.content.takeaway}</p>
                  </div>
                </div>

                <div className="bg-charcoal text-canvas p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl">Need a tailored estimate for your home?</h4>
                    <p className="text-xs text-canvas/70">Let our architects review your floor plans.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      onOpenLeadModal();
                    }}
                    className="w-full sm:w-auto bg-bronze text-charcoal font-semibold text-xs uppercase tracking-widest px-6 py-3.5 text-center shrink-0"
                  >
                    Request Estimate →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
