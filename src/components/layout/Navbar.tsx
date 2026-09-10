import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare, Inbox } from 'lucide-react';
import { studioInfo } from '../../data/contentData';
import { leadStorage } from '../../services/leadStorage';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onOpenLeadModal: () => void;
  onOpenAdminModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate, onOpenLeadModal, onOpenAdminModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Track lead count
    const updateCount = () => {
      setLeadCount(leadStorage.getLeads().length);
    };
    updateCount();
    window.addEventListener('sowakaah_lead_added', updateCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('sowakaah_lead_added', updateCount);
    };
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'services' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'PROCESS', id: 'process' },
    { name: 'JOURNAL', id: 'journal' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-banner for trust, direct contact & admin leads portal */}
      <div className="bg-charcoal text-canvas/80 text-xs py-1.5 px-4 hidden md:block border-b border-charcoal-light/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse"></span>
            Bespoke Residential & Turnkey Interiors across Chhindwara & Nagpur
          </span>
          <div className="flex items-center gap-6">
            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="flex items-center gap-1.5 text-bronze-light hover:text-canvas transition-colors bg-charcoal-light px-2.5 py-0.5 border border-border-dark font-mono text-[11px]"
                title="Open Studio Client Enquiries Dashboard"
              >
                <Inbox size={12} className="text-bronze" />
                <span>Enquiries ({leadCount})</span>
              </button>
            )}
            <a 
              href={`tel:${studioInfo.contact.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-bronze-light transition-colors"
            >
              <Phone size={12} className="text-bronze" />
              <span>{studioInfo.contact.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent("Hi Sowakaah Designs, I'm interested in discussing an interior design project. I'd like to know more about your services.")}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-emerald-400 text-canvas transition-colors"
            >
              <MessageSquare size={12} className="text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-canvas/95 backdrop-blur-md shadow-sm border-b border-border-luxury py-3.5' 
            : 'bg-canvas/80 backdrop-blur-sm border-b border-border-luxury/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.15em] font-medium text-charcoal group-hover:text-bronze transition-colors">
                SOWAKAAH
              </span>
              <span className="text-[10px] text-bronze font-serif font-bold uppercase tracking-widest align-super">
                ™
              </span>
            </div>
            <span className="text-[10px] tracking-[0.25em] text-charcoal-muted uppercase font-light -mt-1 pl-0.5">
              Interior Design Studio
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs font-medium tracking-[0.18em] transition-all relative py-1 ${
                  activeView === link.id
                    ? 'text-charcoal font-semibold'
                    : 'text-charcoal-muted hover:text-bronze'
                }`}
              >
                {link.name}
                {activeView === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-bronze" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLeadModal}
              className="inline-flex items-center gap-2 bg-charcoal text-canvas hover:bg-bronze hover:text-charcoal text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-none border border-charcoal transition-all duration-300 shadow-sm"
            >
              <span>LET'S TALK</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              onClick={onOpenLeadModal}
              className="bg-bronze text-charcoal text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5"
            >
              Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-canvas/98 backdrop-blur-lg flex flex-col justify-between p-6 sm:hidden border-t border-border-luxury animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4 pt-4">
            <div className="text-[10px] tracking-widest text-bronze uppercase font-semibold">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left font-serif text-2xl py-2.5 border-b border-border-luxury/40 ${
                  activeView === link.id ? 'text-bronze font-semibold' : 'text-charcoal'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-border-luxury">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-charcoal text-canvas py-3.5 text-xs uppercase tracking-widest font-semibold"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </button>
            
            <a
              href={`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent('Hi Sowakaah Studio, I would like to inquire about an interior design project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white py-3 text-xs uppercase tracking-widest font-semibold"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="text-center text-xs text-charcoal-muted pt-2">
              <p>Chhindwara & Nagpur, Central India</p>
              <p className="mt-1 font-medium">{studioInfo.contact.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
