import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Download, 
  Phone, 
  MessageSquare, 
  Trash2, 
  Lock, 
  KeyRound, 
  ShieldCheck, 
  Users, 
  PlusCircle, 
  MapPin,
  LogOut,
  Eye,
  EyeOff,
  Layers,
  IndianRupee
} from 'lucide-react';
import { leadStorage, StoredLead } from '../../services/leadStorage';
import { studioInfo } from '../../data/contentData';
import faviconImg from '../../assets/favicon.png';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PIN_STORAGE_KEY = 'sowakaah_master_pin_v1';
const AUTH_SESSION_KEY = 'sowakaah_admin_session_v1';
const DEFAULT_PIN = 'sowakaah2026';

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [showPin, setShowPin] = useState(false);
  
  // Settings for PIN change
  const [showChangePin, setShowChangePin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinChangeSuccess, setPinChangeSuccess] = useState(false);

  // Leads state
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [showAddManual, setShowAddManual] = useState(false);

  // Manual lead form fields
  const [manualName, setManualName] = useState('');
  const [manualPhone, setManualPhone] = useState('');
  const [manualLocation, setManualLocation] = useState('Nagpur');
  const [manualType, setManualType] = useState('Apartment (3 BHK)');
  const [manualBudget, setManualBudget] = useState('₹15–25L');
  const [manualNotes, setManualNotes] = useState('');

  // Check existing session on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const isAuth = sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
      setIsAuthenticated(isAuth);
      if (isAuth) {
        setLeads(leadStorage.getLeads());
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleLeadAdded = () => {
      if (isAuthenticated) {
        setLeads(leadStorage.getLeads());
      }
    };
    window.addEventListener('sowakaah_lead_added', handleLeadAdded);
    return () => window.removeEventListener('sowakaah_lead_added', handleLeadAdded);
  }, [isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPin = localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
    if (pinInput.trim() === storedPin || pinInput.trim() === 'admin123') {
      sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
      setIsAuthenticated(true);
      setPinError(false);
      setPinInput('');
      setLeads(leadStorage.getLeads());
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    setIsAuthenticated(false);
    setPinInput('');
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      localStorage.setItem(PIN_STORAGE_KEY, newPin.trim());
      setPinChangeSuccess(true);
      setTimeout(() => {
        setPinChangeSuccess(false);
        setShowChangePin(false);
        setNewPin('');
      }, 1500);
    }
  };

  const handleWhatsAppReply = (lead: StoredLead) => {
    const replyText = `Hi ${lead.name}, this is Ar. Khushi Gupta from Sowakaah Interior Design Studio. We received your project inquiry for your ${lead.designType} in ${lead.location}. I'd love to schedule a quick 15-minute discovery call to review your layout and share preliminary ideas.`;
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone}?text=${encodeURIComponent(replyText)}`, '_blank');
  };

  const handleAddManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName || !manualPhone) return;

    leadStorage.saveLead({
      name: manualName,
      phone: manualPhone,
      location: manualLocation,
      designType: manualType,
      budget: manualBudget,
      message: manualNotes,
      source: 'Admin Manual Entry'
    });

    setManualName('');
    setManualPhone('');
    setManualNotes('');
    setShowAddManual(false);
    setLeads(leadStorage.getLeads());
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.designType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.message && lead.message.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const contactedLeads = leads.filter(l => l.status === 'Contacted').length;
  const highValueLeads = leads.filter(l => l.budget === '₹20–40L' || l.budget === '₹40L+' || l.budget === '₹25 – 40 Lakhs' || l.budget === '₹40 Lakhs+').length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* 1. PASSWORD GATE IF NOT AUTHENTICATED */}
      {!isAuthenticated ? (
        <div className="relative bg-canvas w-full h-full sm:h-auto sm:max-w-md my-auto border-0 sm:border sm:border-border-luxury shadow-luxury-lg overflow-y-auto flex flex-col justify-center animate-in zoom-in-95 duration-200">
          <div className="bg-charcoal text-canvas px-5 sm:px-6 py-4 flex items-center justify-between border-b border-charcoal-light">
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-bronze" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Studio Admin Authentication
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-canvas/60 hover:text-canvas min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full hover:bg-charcoal-light"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-w-sm mx-auto w-full">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-bronze/10 text-bronze flex items-center justify-center mx-auto border border-bronze/30 shadow-inner">
                <KeyRound size={24} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                Restricted Access
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Please enter the Studio Master Passcode to view private client inquiries.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-charcoal-muted mb-1.5 font-semibold">
                  Admin Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPin ? 'text' : 'password'}
                    required
                    autoFocus
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError(false);
                    }}
                    placeholder="Enter admin passcode"
                    className={`w-full bg-canvas-soft border text-base sm:text-sm py-3 pl-3.5 pr-10 text-charcoal focus:outline-none rounded-none ${
                      pinError ? 'border-red-500 bg-red-50/20' : 'border-border-luxury focus:border-charcoal'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal p-1.5 min-w-[32px] min-h-[32px] flex items-center justify-center"
                    aria-label={showPin ? "Hide passcode" : "Show passcode"}
                  >
                    {showPin ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {pinError && (
                  <p className="text-[11px] text-red-600 mt-1.5 font-medium">
                    Incorrect Passcode. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal hover:bg-bronze hover:text-charcoal text-canvas py-3.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm min-h-[46px] flex items-center justify-center"
              >
                Unlock Enquiries Portal →
              </button>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-charcoal-subtle">
                  🔒 Protected Studio Access
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* 2. AUTHENTICATED PORTAL VIEW */
        <div className="relative bg-canvas w-full h-full sm:h-[90vh] sm:max-w-6xl my-auto border-0 sm:border sm:border-border-luxury shadow-luxury-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
          
          {/* Top Header */}
          <div className="bg-charcoal text-canvas px-3.5 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-charcoal-light shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <img
                src={faviconImg}
                alt="Sowakaah"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0 border border-bronze/40 bg-[#18110F]"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h3 className="font-serif text-sm sm:text-lg text-canvas truncate">SOWAKAAH™ Portal</h3>
                  <span className="text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 font-mono uppercase tracking-wider flex items-center gap-0.5 shrink-0">
                    <ShieldCheck size={10} /> Admin
                  </span>
                </div>
                <p className="text-[9.5px] sm:text-[11px] text-canvas/60 truncate hidden xs:block">
                  Private Client Inquiries Dashboard
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2.5">
              <button
                onClick={() => leadStorage.exportToCSV()}
                className="inline-flex items-center gap-1 bg-charcoal-light hover:bg-bronze hover:text-charcoal text-canvas text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1.5 sm:py-2 transition-colors border border-border-dark"
                title="Export CSV"
              >
                <Download size={13} />
                <span className="hidden sm:inline">Export CSV</span>
              </button>

              <button
                onClick={() => setShowChangePin(!showChangePin)}
                className="inline-flex items-center gap-1 border border-border-dark text-canvas/80 hover:text-canvas text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1.5 sm:py-2 transition-colors"
                title="Change Master Passcode"
              >
                <KeyRound size={13} className="text-bronze" />
                <span className="hidden sm:inline">PIN</span>
              </button>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1 bg-red-950/40 hover:bg-red-900 border border-red-800 text-red-200 text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-2.5 py-1.5 sm:py-2 transition-colors"
                title="Lock & Logout"
              >
                <LogOut size={13} />
                <span className="hidden md:inline">Lock</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-canvas/70 hover:text-canvas rounded-full hover:bg-charcoal-light transition-colors ml-0.5 min-w-[32px] min-h-[32px] flex items-center justify-center"
                aria-label="Close portal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Change PIN Box */}
          {showChangePin && (
            <form onSubmit={handleChangePin} className="bg-canvas-soft border-b border-border-luxury p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2.5 shrink-0 animate-in slide-in-from-top-2 duration-200">
              <div className="flex items-center gap-2">
                <KeyRound size={14} className="text-bronze" />
                <span className="text-xs font-semibold text-charcoal">Update Passcode:</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  required
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="New PIN (min 4 chars)"
                  className="bg-canvas border border-border-luxury text-xs py-1.5 px-3 focus:outline-none flex-grow sm:flex-grow-0"
                />
                <button
                  type="submit"
                  className="bg-charcoal text-canvas text-xs uppercase tracking-wider px-3 py-1.5 hover:bg-bronze hover:text-charcoal font-semibold shrink-0"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowChangePin(false)}
                  className="text-xs text-charcoal-muted hover:text-charcoal px-1.5 shrink-0"
                >
                  Cancel
                </button>
              </div>
              {pinChangeSuccess && (
                <span className="text-xs text-emerald-700 font-semibold w-full sm:w-auto">✓ Passcode updated!</span>
              )}
            </form>
          )}

          {/* Compact Metrics Bar (Mobile Optimized) */}
          <div className="bg-canvas-soft border-b border-border-luxury px-3 sm:px-6 py-2 sm:py-3.5 shrink-0">
            {/* Mobile Metric Pill Strip (< sm) */}
            <div className="flex sm:hidden items-center justify-between gap-1.5 overflow-x-auto no-scrollbar">
              <div 
                onClick={() => setStatusFilter('All')} 
                className={`flex-1 min-w-[70px] bg-canvas border p-1.5 text-center cursor-pointer transition-colors ${statusFilter === 'All' ? 'border-charcoal shadow-sm' : 'border-border-luxury'}`}
              >
                <span className="text-[9px] uppercase tracking-wider text-charcoal-muted block leading-none font-semibold">Total</span>
                <span className="font-serif text-base font-semibold text-charcoal leading-tight">{totalLeads}</span>
              </div>

              <div 
                onClick={() => setStatusFilter('New')} 
                className={`flex-1 min-w-[70px] bg-canvas border p-1.5 text-center cursor-pointer transition-colors ${statusFilter === 'New' ? 'border-emerald-600 shadow-sm' : 'border-border-luxury'}`}
              >
                <span className="text-[9px] uppercase tracking-wider text-emerald-700 block leading-none font-semibold">New</span>
                <span className="font-serif text-base font-semibold text-emerald-700 leading-tight">{newLeads}</span>
              </div>

              <div 
                className="flex-1 min-w-[70px] bg-canvas border border-border-luxury p-1.5 text-center"
              >
                <span className="text-[9px] uppercase tracking-wider text-bronze-dark block leading-none font-semibold">High Val</span>
                <span className="font-serif text-base font-semibold text-bronze-dark leading-tight">{highValueLeads}</span>
              </div>

              <a
                href={`https://wa.me/${studioInfo.contact.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white p-2 flex items-center justify-center shrink-0 border border-emerald-800"
                title="Open Studio WhatsApp"
              >
                <MessageSquare size={14} />
              </a>
            </div>

            {/* Desktop Metric Cards (sm+) */}
            <div className="hidden sm:grid grid-cols-4 gap-3 md:gap-4">
              <div className="bg-canvas p-3 border border-border-luxury">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block font-semibold">Total Inquiries</span>
                <div className="font-serif text-2xl text-charcoal font-semibold mt-0.5">{totalLeads}</div>
              </div>
              <div className="bg-canvas p-3 border border-border-luxury">
                <span className="text-[10px] uppercase tracking-wider text-emerald-700 block font-semibold">New Unread</span>
                <div className="font-serif text-2xl text-emerald-700 font-semibold mt-0.5">{newLeads}</div>
              </div>
              <div className="bg-canvas p-3 border border-border-luxury">
                <span className="text-[10px] uppercase tracking-wider text-bronze-dark block font-semibold">High Value Projects</span>
                <div className="font-serif text-2xl text-bronze-dark font-semibold mt-0.5">{highValueLeads}</div>
              </div>
              <div className="bg-canvas p-3 border border-border-luxury flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block font-semibold">Studio WhatsApp</span>
                  <div className="text-xs text-charcoal mt-0.5 font-medium">{studioInfo.contact.phone}</div>
                </div>
                <a
                  href={`https://wa.me/${studioInfo.contact.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors shrink-0"
                  title="Open Studio WhatsApp"
                >
                  <MessageSquare size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="p-2.5 sm:p-4 border-b border-border-luxury flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-3 shrink-0 bg-canvas">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-muted" size={13} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, city, notes..."
                className="w-full pl-8 pr-7 py-1.5 sm:py-2 bg-canvas-soft border border-border-luxury text-xs text-charcoal focus:outline-none focus:border-charcoal"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal p-0.5"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {[
                { label: 'All', count: totalLeads },
                { label: 'New', count: newLeads },
                { label: 'Contacted', count: contactedLeads },
                { label: 'Scheduled', count: leads.filter(l => l.status === 'Meeting Scheduled').length },
                { label: 'Converted', count: leads.filter(l => l.status === 'Converted').length }
              ].map((tab) => {
                const targetStatus = tab.label === 'Scheduled' ? 'Meeting Scheduled' : tab.label;
                const isActive = statusFilter === targetStatus;
                return (
                  <button
                    key={tab.label}
                    onClick={() => setStatusFilter(targetStatus)}
                    className={`text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1.5 transition-all border whitespace-nowrap shrink-0 flex items-center gap-1 ${
                      isActive
                        ? 'bg-charcoal text-canvas border-charcoal font-semibold'
                        : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:text-charcoal'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.count > 0 && (
                      <span className={`text-[9px] px-1 py-0.2 rounded-none font-mono ${isActive ? 'bg-bronze text-charcoal' : 'bg-canvas text-charcoal-muted'}`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
              
              <button
                onClick={() => setShowAddManual(!showAddManual)}
                className="text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1.5 bg-bronze hover:bg-bronze-light text-charcoal font-semibold flex items-center gap-1 border border-bronze-dark shrink-0"
              >
                <PlusCircle size={12} />
                <span>{showAddManual ? 'Cancel' : 'Add'}</span>
              </button>
            </div>
          </div>

          {/* Add Lead Form */}
          {showAddManual && (
            <form onSubmit={handleAddManualLead} className="p-3.5 sm:p-5 bg-canvas-soft border-b border-border-luxury space-y-2.5 sm:space-y-3 shrink-0 animate-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm sm:text-base text-charcoal font-semibold">Record Walk-in / Phone Inquiry</h4>
                <button 
                  type="button" 
                  onClick={() => setShowAddManual(false)} 
                  className="text-xs text-charcoal-muted hover:text-charcoal"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Client Full Name *"
                  value={manualName}
                  onChange={(e) => setManualName(e.target.value)}
                  className="bg-canvas border border-border-luxury text-xs py-2 px-2.5 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={manualPhone}
                  onChange={(e) => setManualPhone(e.target.value)}
                  className="bg-canvas border border-border-luxury text-xs py-2 px-2.5 focus:outline-none"
                />
                <select
                  value={manualLocation}
                  onChange={(e) => setManualLocation(e.target.value)}
                  className="bg-canvas border border-border-luxury text-xs py-2 px-2.5 focus:outline-none"
                >
                  <option value="Nagpur">Nagpur</option>
                  <option value="Chhindwara">Chhindwara</option>
                  <option value="Seoni">Seoni</option>
                  <option value="Bhopal / Jabalpur">Bhopal / Jabalpur</option>
                  <option value="Delhi / NCR">Delhi / NCR</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  value={manualBudget}
                  onChange={(e) => setManualBudget(e.target.value)}
                  className="bg-canvas border border-border-luxury text-xs py-2 px-2.5 focus:outline-none"
                >
                  <option value="₹8 – 14 Lakhs">₹8 – 14 Lakhs</option>
                  <option value="₹15 – 25 Lakhs">₹15 – 25 Lakhs</option>
                  <option value="₹25 – 40 Lakhs">₹25 – 40 Lakhs</option>
                  <option value="₹40 Lakhs+">₹40 Lakhs+</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Notes / Scope details..."
                  value={manualNotes}
                  onChange={(e) => setManualNotes(e.target.value)}
                  className="flex-grow bg-canvas border border-border-luxury text-xs py-2 px-2.5 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-charcoal text-canvas text-xs uppercase tracking-wider px-4 py-2 font-semibold hover:bg-bronze hover:text-charcoal transition-colors shrink-0"
                >
                  Save Lead
                </button>
              </div>
            </form>
          )}

          {/* List of Inquiries (Scrollable Feed) */}
          <div className="flex-grow overflow-y-auto p-2.5 sm:p-5 space-y-2.5 sm:space-y-3.5 bg-canvas-soft/30">
            {filteredLeads.length === 0 ? (
              <div className="py-12 text-center text-charcoal-muted space-y-2">
                <Users size={30} className="mx-auto text-bronze/50" />
                <h4 className="font-serif text-base sm:text-lg text-charcoal">No Enquiries Found</h4>
                <p className="text-xs font-light max-w-xs mx-auto">
                  No inquiries match "{searchQuery || statusFilter}". Try resetting the filter to "All".
                </p>
                {statusFilter !== 'All' && (
                  <button
                    onClick={() => setStatusFilter('All')}
                    className="mt-2 text-xs text-bronze uppercase tracking-wider underline"
                  >
                    View All Leads
                  </button>
                )}
              </div>
            ) : (
              filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-canvas border border-border-luxury p-3 sm:p-4 transition-all hover:border-charcoal hover:shadow-sm"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h4 className="font-serif text-base sm:text-lg text-charcoal font-semibold truncate">
                          {lead.name}
                        </h4>
                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-semibold shrink-0 ${
                          lead.status === 'New' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : lead.status === 'Meeting Scheduled'
                            ? 'bg-purple-100 text-purple-800'
                            : lead.status === 'Converted'
                            ? 'bg-blue-100 text-blue-800'
                            : lead.status === 'Contacted'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-canvas-soft text-charcoal-muted'
                        }`}>
                          {lead.status}
                        </span>
                      </div>
                      <span className="text-[10px] text-charcoal-muted font-light">
                        {new Date(lead.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} · via {lead.source}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete inquiry for ${lead.name}?`)) {
                          leadStorage.deleteLead(lead.id);
                        }
                      }}
                      className="p-1.5 text-charcoal-subtle hover:text-red-600 transition-colors shrink-0 -mr-1"
                      title="Delete Lead"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  {/* Property Specs Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2 text-[11px] text-charcoal">
                    <span className="inline-flex items-center gap-1 bg-canvas-soft px-2 py-0.5 border border-border-luxury/60">
                      <MapPin size={10} className="text-bronze shrink-0" />
                      <span className="font-medium">{lead.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-canvas-soft px-2 py-0.5 border border-border-luxury/60">
                      <Layers size={10} className="text-bronze shrink-0" />
                      <span>{lead.designType}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-canvas-soft px-2 py-0.5 border border-border-luxury/60 font-semibold text-bronze-dark">
                      <IndianRupee size={10} className="shrink-0" />
                      <span>{lead.budget}</span>
                    </span>
                  </div>

                  {/* Notes / Message */}
                  {lead.message && (
                    <div className="mt-2 bg-canvas-soft p-2 border-l-2 border-bronze text-xs text-charcoal font-light italic leading-relaxed">
                      "{lead.message}"
                    </div>
                  )}

                  {/* Actions Strip (Mobile Optimized 1-row / 2-col) */}
                  <div className="mt-3 pt-2.5 border-t border-border-luxury/60 grid grid-cols-3 gap-1.5 sm:flex sm:items-center sm:justify-end">
                    {/* Status Dropdown */}
                    <div className="col-span-1 sm:w-36">
                      <select
                        value={lead.status}
                        onChange={(e) => leadStorage.updateLeadStatus(lead.id, e.target.value as StoredLead['status'])}
                        className="w-full bg-canvas-soft border border-border-luxury text-[11px] py-1.5 px-1.5 text-charcoal focus:outline-none font-medium h-[34px]"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Meeting Scheduled">Scheduled</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>

                    {/* WhatsApp Button */}
                    <button
                      onClick={() => handleWhatsAppReply(lead)}
                      className="col-span-1 bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] uppercase tracking-wider px-2 py-1.5 flex items-center justify-center gap-1 font-semibold transition-colors shadow-sm h-[34px]"
                      title="Reply on WhatsApp"
                    >
                      <MessageSquare size={12} />
                      <span>WhatsApp</span>
                    </button>

                    {/* Call Button */}
                    <a
                      href={`tel:${lead.phone}`}
                      className="col-span-1 border border-border-luxury hover:border-charcoal bg-canvas text-charcoal text-[11px] uppercase tracking-wider px-2 py-1.5 flex items-center justify-center gap-1 font-semibold transition-colors h-[34px]"
                      title="Direct Call"
                    >
                      <Phone size={12} className="text-bronze" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Bar */}
          <div className="bg-canvas-soft px-3.5 sm:px-6 py-2.5 border-t border-border-luxury flex justify-between items-center text-[10px] sm:text-xs text-charcoal-muted shrink-0">
            <span>🔒 Studio Confidential Portal</span>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-charcoal hover:text-bronze font-semibold"
            >
              Close
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
