import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { instagramPosts, studioInfo } from '../../data/contentData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-canvas-soft border-t border-border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-bronze font-semibold block mb-1">
              Live from the Studio
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Follow Our On-Site Journey.
            </h2>
          </div>
          <a
            href={studioInfo.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal hover:text-bronze font-semibold border border-border-luxury bg-canvas px-4 py-2.5 hover:border-charcoal transition-colors self-start sm:self-auto"
          >
            <Instagram size={14} className="text-bronze" />
            <span>{studioInfo.contact.instagram}</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* 4-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={studioInfo.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-canvas border border-border-luxury block"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 sm:p-4 text-center">
                <div className="text-canvas transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Instagram size={20} className="mx-auto text-bronze mb-1 sm:mb-2" />
                  <p className="text-[11px] sm:text-xs font-light">{post.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
