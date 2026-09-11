import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { studioInfo } from '../../data/contentData';
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onOpenLeadModal: () => void;
  onOpenAdminModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate, onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      {/* Top micro-banner for desktop */}
      <div className="bg-[#28140A] text-[#EADBCC]/85 text-xs py-1.5 px-4 hidden md:block border-b border-[#4D2813]">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88654] animate-pulse"></span>
            Bespoke Residential & Turnkey Interiors across Chhindwara & Nagpur
          </span>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${studioInfo.contact.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#D4AA7D] transition-colors text-[#EADBCC]"
            >
              <Phone size={12} className="text-[#D4AA7D]" />
              <span>{studioInfo.contact.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent("Hi Sowakaah Designs, I'm interested in discussing an interior design project. I'd like to know more about your services.")}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-emerald-300 text-[#EADBCC] transition-colors"
            >
              <MessageSquare size={12} className="text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation with Exact Brand #3A1E0F Dark Brown Theme */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#3A1E0F]/98 backdrop-blur-md shadow-xl border-b border-[#4D2813] py-2 sm:py-2.5' 
            : 'bg-[#3A1E0F] border-b border-[#4D2813] py-2.5 sm:py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Official Image */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left group py-0.5"
            aria-label="Sowakaah™ Interior Design Studio Home"
          >
            <img 
              src={logoImg} 
              alt="SOWAKAAH™ Interior Design Studio" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-sm"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs font-medium tracking-[0.18em] transition-all relative py-1 ${
                  activeView === link.id
                    ? 'text-[#D4AA7D] font-bold'
                    : 'text-[#EADBCC]/90 hover:text-[#D4AA7D]'
                }`}
              >
                {link.name}
                {activeView === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AA7D]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Button on Desktop / Tablet */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLeadModal}
              className="inline-flex items-center gap-2 bg-[#B88654] hover:bg-[#C99865] text-[#28140A] text-xs uppercase tracking-widest font-bold px-4 sm:px-5 py-2.5 rounded-none transition-all duration-300 shadow-md"
            >
              <span>LET'S TALK</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Actions: Fast WhatsApp + Estimate + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent("Hi Sowakaah Designs, I'd like to inquire about an interior design project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 hover:bg-emerald-950/40 rounded-full transition-colors"
              aria-label="WhatsApp Studio"
            >
              <MessageSquare size={19} />
            </a>

            <button
              onClick={onOpenLeadModal}
              className="bg-[#B88654] hover:bg-[#C99865] text-[#28140A] text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 sm:px-3 py-1.5 transition-colors shadow-sm"
            >
              Consult
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EADBCC] hover:text-[#D4AA7D] focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded hover:bg-[#4D2813] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer Menu with Dark Brown Theme */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[52px] sm:top-[64px] z-50 bg-[#3A1E0F] flex flex-col justify-between p-5 sm:p-8 lg:hidden overflow-y-auto border-t border-[#4D2813] animate-in fade-in duration-200 text-[#FBF8F4]">
          <div className="space-y-2 pt-2">
            <div className="text-[10px] tracking-[0.25em] text-[#D4AA7D] uppercase font-semibold pb-1 border-b border-[#4D2813]">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between w-full text-left font-serif text-2xl py-3 border-b border-[#4D2813]/60 transition-colors ${
                  activeView === link.id ? 'text-[#D4AA7D] font-semibold' : 'text-[#EADBCC] hover:text-[#D4AA7D]'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight size={16} className={activeView === link.id ? 'text-[#D4AA7D]' : 'text-[#EADBCC]/40'} />
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 pb-4 border-t border-[#4D2813]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#B88654] hover:bg-[#C99865] text-[#28140A] py-4 text-xs uppercase tracking-widest font-bold transition-colors shadow-md"
            >
              <span>Start Your Project →</span>
            </button>
            
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${studioInfo.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-[#28140A] border border-[#4D2813] text-[#EADBCC] py-3 text-xs uppercase tracking-wider font-semibold hover:border-[#D4AA7D] transition-colors"
              >
                <Phone size={14} className="text-[#D4AA7D]" />
                <span>Call Studio</span>
              </a>

              <a
                href={`https://wa.me/${studioInfo.contact.phoneRaw}?text=${encodeURIComponent('Hi Sowakaah Studio, I would like to inquire about an interior design project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-[#EADBCC]/70 pt-2 font-light">
              <p>Chhindwara & Nagpur · Central India</p>
              <p className="mt-0.5 font-medium text-[#D4AA7D]">{studioInfo.contact.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
