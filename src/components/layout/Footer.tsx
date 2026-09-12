import React from 'react';
import { Phone, Mail, MapPin, Instagram, ArrowUpRight, MessageSquare, Lock } from 'lucide-react';
import { studioInfo, servicesData } from '../../data/contentData';
import logoImg from '../../assets/logo.png';
import swanEmblem from '../../assets/swan-emblem.png';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectService?: (serviceId: string) => void;
  onOpenLeadModal: () => void;
  onOpenAdminModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLeadModal, onOpenAdminModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#3A1E0F] text-[#FBF8F4] pt-14 sm:pt-20 pb-10 sm:pb-12 border-t border-[#4D2813]">
      {/* Subtle Swan Monogram Background Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden z-0"
        aria-hidden="true"
      >
        <img 
          src={swanEmblem} 
          alt="" 
          className="w-[500px] sm:w-[750px] md:w-[950px] max-w-none object-contain opacity-[0.06] transform translate-y-6 filter brightness-125" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top conversion banner inside footer */}
        <div className="bg-[#28140A]/95 border border-[#522B15] p-6 sm:p-10 md:p-12 mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 shadow-xl backdrop-blur-sm">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D4AA7D] font-semibold block mb-1.5 sm:mb-2">
              Ready to Transform Your Living Space?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FBF8F4] leading-tight">
              Let's create timeless interiors designed around you.
            </h3>
          </div>
          <div className="flex flex-col xs:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onOpenLeadModal}
              className="w-full xs:w-auto bg-[#B88654] hover:bg-[#C99865] text-[#28140A] font-bold text-xs uppercase tracking-widest px-6 sm:px-7 py-3.5 sm:py-4 transition-all duration-300 shadow-md text-center min-h-[44px]"
            >
              Start Your Project →
            </button>
            <a
              href={`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent('Hi Sowakaah Studio, I want to discuss an interior design project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto border border-[#D4AA7D]/50 hover:border-[#D4AA7D] text-[#FBF8F4] font-medium text-xs uppercase tracking-widest px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-colors min-h-[44px]"
            >
              <MessageSquare size={14} className="text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4-column footer structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#4D2813]">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col">
              <a 
                href="https://sowakaahdesigns.com"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', 'https://sowakaahdesigns.com');
                  e.dataTransfer.setData('text/uri-list', 'https://sowakaahdesigns.com');
                }}
                className="self-start cursor-pointer select-none"
                aria-label="SOWAKAAH™ Interior Design Studio Home"
              >
                <img 
                  src={logoImg} 
                  alt="SOWAKAAH™ Interior Design Studio" 
                  draggable={false}
                  className="h-16 sm:h-20 md:h-24 max-h-[96px] w-auto object-contain -ml-1 filter drop-shadow-md pointer-events-none select-none"
                />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-[#EADBCC]/80 font-light leading-relaxed pt-1">
              Bespoke residential architecture, luxury turnkey interiors, and custom furniture. Crafted with intention, architectural precision, and timeless material elegance.
            </p>
            <div className="pt-1">
              <a
                href={studioInfo.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#D4AA7D] hover:text-[#EADBCC] uppercase tracking-wider transition-colors"
              >
                <Instagram size={14} />
                <span>{studioInfo.contact.instagram}</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AA7D] mb-3 sm:mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EADBCC]/85 font-light">
              <li>
                <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D4AA7D] transition-colors py-0.5">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D4AA7D] transition-colors py-0.5">
                  About the Studio & Founder
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D4AA7D] transition-colors py-0.5">
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D4AA7D] transition-colors py-0.5">
                  Services & Deliverables
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('process'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D4AA7D] transition-colors py-0.5">
                  5-Step Execution Process
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('journal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#D4AA7D] transition-colors py-0.5">
                  Journal & Cost Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AA7D] mb-3 sm:mb-5">
              Our Expertise
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EADBCC]/85 font-light">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#D4AA7D] text-left transition-colors py-0.5"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AA7D] mb-3 sm:mb-5">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#EADBCC]/90">
              <a 
                href={`tel:${studioInfo.contact.phoneRaw}`}
                className="flex items-start gap-3 hover:text-[#D4AA7D] transition-colors py-0.5"
              >
                <Phone size={15} className="text-[#D4AA7D] mt-0.5 shrink-0" />
                <span>{studioInfo.contact.phone}</span>
              </a>

              <a 
                href={`mailto:${studioInfo.contact.email}`}
                className="flex items-start gap-3 hover:text-[#D4AA7D] transition-colors py-0.5"
              >
                <Mail size={15} className="text-[#D4AA7D] mt-0.5 shrink-0" />
                <span className="break-all">{studioInfo.contact.email}</span>
              </a>

              <div className="flex items-start gap-3 py-0.5">
                <MapPin size={15} className="text-[#D4AA7D] mt-0.5 shrink-0" />
                <span>
                  <strong>Studio Hubs:</strong><br />
                  Chhindwara, MP · Nagpur, MH
                </span>
              </div>
            </div>

            <div className="pt-1 text-[11px] text-[#EADBCC]/60">
              {studioInfo.contact.workingHours}
            </div>
          </div>
        </div>

        {/* Local SEO keywords strip */}
        <div className="py-5 border-b border-[#4D2813] text-[10px] sm:text-[11px] text-[#EADBCC]/60 leading-relaxed">
          <span className="text-[#D4AA7D] font-medium">Serving Central India: </span>
          Interior Designer in Chhindwara · Luxury Interior Designer Nagpur · Turnkey Interiors Civil Lines Nagpur · 3 BHK Interior Design Ramdaspeth · Modular Kitchen Chhindwara · Duplex Villa Architects Wardha Road · Bespoke Furniture Design Madhya Pradesh & Maharashtra.
        </div>

        {/* Bottom Copyright & Discreet Admin Access */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-[#EADBCC]/60">
          <div className="flex items-center gap-2">
            <p>© {currentYear} SOWAKAAH™ Interior Design Studio. All rights reserved.</p>
            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="text-[#EADBCC]/40 hover:text-[#D4AA7D] transition-colors p-1"
                title="Studio Access"
                aria-label="Studio Admin"
              >
                <Lock size={12} />
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>BOQ Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
