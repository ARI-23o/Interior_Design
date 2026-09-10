import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Download, 
  Phone, 
  MessageSquare, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Users, 
  Sparkles, 
  Filter, 
  PlusCircle, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { leadStorage, StoredLead } from '../../services/leadStorage';
import { studioInfo } from '../../data/contentData';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({ isOpen, onClose }) => {
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

  const loadLeads = () => {
    setLeads(leadStorage.getLeads());
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
    const handleLeadAdded = () => loadLeads();
    window.addEventListener('sowakaah_lead_added', handleLeadAdded);
    return () => window.removeEventListener('sowakaah_lead_added', handleLeadAdded);
  }, [isOpen]);

  if (!isOpen) return null;

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
  const highValueLeads = leads.filter(l => l.budget === '₹20–40L' || l.budget === '₹40L+' || l.budget === '₹25 – 40 Lakhs' || l.budget === '₹40 Lakhs+').length;

  const handleWhatsAppReply = (lead: StoredLead) => {
    const replyText = `Hi ${lead.name}, this is Ar. Ananya from Sowakaah Interior Design Studio. We received your project inquiry for your ${lead.designType} in ${lead.location}. I'd love to schedule a quick 15-minute discovery call to review your layout and share preliminary ideas.`;
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
      source: 'Navbar Let\'s Talk Modal'
    });

    setManualName('');
    setManualPhone('');
    setManualNotes('');
    setShowAddManual(false);
    loadLeads();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-canvas w-full max-w-6xl my-auto border border-border-luxury shadow-luxury-lg overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-charcoal text-canvas px-6 py-4 flex items-center justify-between border-b border-charcoal-light shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-bronze text-charcoal flex items-center justify-center font-bold text-xs">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg text-canvas">SOWAKAAH™ Studio Portal</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 font-mono uppercase tracking-wider">
                  Live Enquiries Engine
                </span>
              </div>
              <p className="text-[11px] text-canvas/60">
                All client enquiries from Homepage, Case Studies & WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => leadStorage.exportToCSV()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-charcoal-light hover:bg-bronze hover:text-charcoal text-canvas text-xs uppercase tracking-wider px-3.5 py-2 transition-colors border border-border-dark"
            >
              <Download size={13} />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-canvas/70 hover:text-canvas rounded-full hover:bg-charcoal-light transition-colors"
              aria-label="Close portal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-canvas-soft border-b border-border-luxury shrink-0">
          <div className="bg-canvas p-4 border border-border-luxury">
            <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block font-semibold">Total Received</span>
            <div className="font-serif text-3xl text-charcoal font-semibold mt-1">{totalLeads}</div>
          </div>
          <div className="bg-canvas p-4 border border-border-luxury">
            <span className="text-[10px] uppercase tracking-wider text-emerald-700 block font-semibold">New Unread</span>
            <div className="font-serif text-3xl text-emerald-700 font-semibold mt-1">{newLeads}</div>
          </div>
          <div className="bg-canvas p-4 border border-border-luxury">
            <span className="text-[10px] uppercase tracking-wider text-bronze-dark block font-semibold">High-Value (₹20L+)</span>
            <div className="font-serif text-3xl text-bronze-dark font-semibold mt-1">{highValueLeads}</div>
          </div>
          <div className="bg-canvas p-4 border border-border-luxury flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block font-semibold">Direct WhatsApp</span>
              <div className="text-xs text-charcoal mt-1 font-medium">{studioInfo.contact.phone}</div>
            </div>
            <a
              href={`https://wa.me/${studioInfo.contact.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors"
            >
              <MessageSquare size={16} />
            </a>
          </div>
        </div>

        {/* Filters & Actions Bar */}
        <div className="p-6 pb-3 border-b border-border-luxury flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 shrink-0 bg-canvas">
          {/* Search input */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-muted" size={15} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client name, phone, city, typology..."
              className="w-full pl-9 pr-4 py-2 bg-canvas-soft border border-border-luxury text-xs text-charcoal focus:outline-none focus:border-charcoal"
            />
          </div>

          {/* Status filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'New', 'Contacted', 'Meeting Scheduled', 'Converted'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`text-[11px] uppercase tracking-wider px-3 py-1.5 transition-all border ${
                  statusFilter === st
                    ? 'bg-charcoal text-canvas border-charcoal font-semibold'
                    : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:text-charcoal'
                }`}
              >
                {st}
              </button>
            ))}
            
            <button
              onClick={() => setShowAddManual(!showAddManual)}
              className="text-[11px] uppercase tracking-wider px-3 py-1.5 bg-bronze hover:bg-bronze-light text-charcoal font-semibold flex items-center gap-1 border border-bronze-dark ml-2"
            >
              <PlusCircle size={13} />
              <span>{showAddManual ? 'Cancel' : 'Add Lead'}</span>
            </button>
          </div>
        </div>

        {/* Manual Add Lead Drawer */}
        {showAddManual && (
          <form onSubmit={handleAddManualLead} className="p-6 bg-canvas-soft border-b border-border-luxury space-y-4 shrink-0 animate-in slide-in-from-top-2 duration-200">
            <h4 className="font-serif text-lg text-charcoal">Record In-Studio / Phone Call Lead</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input
                type="text"
                required
                placeholder="Client Name"
                value={manualName}
                onChange={(e) => setManualName(e.target.value)}
                className="bg-canvas border border-border-luxury text-xs py-2 px-3 focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={manualPhone}
                onChange={(e) => setManualPhone(e.target.value)}
                className="bg-canvas border border-border-luxury text-xs py-2 px-3 focus:outline-none"
              />
              <select
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                className="bg-canvas border border-border-luxury text-xs py-2 px-3 focus:outline-none"
              >
                <option value="Nagpur">Nagpur</option>
                <option value="Chhindwara">Chhindwara</option>
                <option value="Delhi / NCR">Delhi / NCR</option>
                <option value="Other">Other</option>
              </select>
              <select
                value={manualBudget}
                onChange={(e) => setManualBudget(e.target.value)}
                className="bg-canvas border border-border-luxury text-xs py-2 px-3 focus:outline-none"
              >
                <option value="₹5–10L">₹5–10L</option>
                <option value="₹10–20L">₹10–20L</option>
                <option value="₹20–40L">₹20–40L</option>
                <option value="₹40L+">₹40L+</option>
              </select>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Notes / Scope details..."
                value={manualNotes}
                onChange={(e) => setManualNotes(e.target.value)}
                className="flex-grow bg-canvas border border-border-luxury text-xs py-2 px-3 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-charcoal text-canvas text-xs uppercase tracking-wider px-6 py-2 font-semibold hover:bg-bronze hover:text-charcoal transition-colors shrink-0"
              >
                Save Inquiry
              </button>
            </div>
          </form>
        )}

        {/* Leads Table Content */}
        <div className="flex-grow overflow-y-auto p-6">
          {filteredLeads.length === 0 ? (
            <div className="py-16 text-center text-charcoal-muted space-y-3">
              <Users size={36} className="mx-auto text-bronze/50" />
              <h4 className="font-serif text-xl text-charcoal">No Enquiries Matching Filter</h4>
              <p className="text-xs font-light max-w-sm mx-auto">
                Test submitting an inquiry on the homepage form or reset the filter to view all submissions.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-canvas border border-border-luxury p-5 transition-all hover:border-charcoal hover:shadow-sm"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    
                    {/* Left: Client Info */}
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-serif text-xl text-charcoal font-semibold">{lead.name}</h4>
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 font-semibold ${
                          lead.status === 'New' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : lead.status === 'Meeting Scheduled'
                            ? 'bg-purple-100 text-purple-800'
                            : lead.status === 'Converted'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-canvas-soft text-charcoal-muted'
                        }`}>
                          {lead.status}
                        </span>
                        <span className="text-[10px] text-charcoal-subtle bg-canvas-soft px-2 py-0.5">
                          {lead.source}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-muted">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-bronze" />
                          <strong>{lead.location}</strong>
                        </span>
                        <span>·</span>
                        <span>Typology: <strong>{lead.designType}</strong></span>
                        <span>·</span>
                        <span>Budget: <strong className="text-bronze-dark">{lead.budget}</strong></span>
                        <span>·</span>
                        <span className="text-[11px] text-charcoal-subtle">{new Date(lead.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                      </div>

                      {lead.message && (
                        <p className="text-xs text-charcoal leading-relaxed bg-canvas-soft p-2.5 border-l-2 border-bronze italic mt-2 font-light">
                          "{lead.message}"
                        </p>
                      )}
                    </div>

                    {/* Right: Direct Actions */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      
                      {/* Status changer dropdown */}
                      <select
                        value={lead.status}
                        onChange={(e) => leadStorage.updateLeadStatus(lead.id, e.target.value as StoredLead['status'])}
                        className="bg-canvas-soft border border-border-luxury text-xs py-2 px-2 text-charcoal focus:outline-none"
                      >
                        <option value="New">Status: New</option>
                        <option value="Contacted">Status: Contacted</option>
                        <option value="Meeting Scheduled">Status: Meeting Scheduled</option>
                        <option value="Converted">Status: Converted</option>
                        <option value="Closed">Status: Closed</option>
                      </select>

                      {/* 1-Click WhatsApp reply */}
                      <button
                        onClick={() => handleWhatsAppReply(lead)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider px-3.5 py-2 flex items-center gap-1.5 font-semibold transition-colors shadow-sm"
                        title="Open WhatsApp with pre-filled acknowledgment"
                      >
                        <MessageSquare size={13} />
                        <span>WhatsApp Reply</span>
                      </button>

                      {/* Phone call link */}
                      <a
                        href={`tel:${lead.phone}`}
                        className="border border-border-luxury hover:border-charcoal text-charcoal text-xs uppercase tracking-wider px-3 py-2 flex items-center gap-1.5 transition-colors"
                        title="Call Client Directly"
                      >
                        <Phone size={13} className="text-bronze" />
                        <span>Call</span>
                      </a>

                      {/* Delete */}
                      <button
                        onClick={() => leadStorage.deleteLead(lead.id)}
                        className="p-2 text-charcoal-subtle hover:text-red-600 transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-canvas-soft px-6 py-3 border-t border-border-luxury flex justify-between items-center text-xs text-charcoal-muted shrink-0">
          <span>🔒 Studio Owner Confidential Portal</span>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-charcoal hover:text-bronze font-semibold"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
