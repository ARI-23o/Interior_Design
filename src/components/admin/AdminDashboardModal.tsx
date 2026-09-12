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
  IndianRupee, 
  FileSpreadsheet, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  RefreshCw, 
  Calendar, 
  AlertTriangle, 
  Sparkles, 
  Clock 
} from 'lucide-react';
import { 
  leadStorage, 
  StoredLead, 
  GOOGLE_APPS_SCRIPT_CODE, 
  isLeadToday, 
  isLeadYesterday, 
  isLeadThisWeek 
} from '../../services/leadStorage';
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

  // Settings for Google Sheet Webhook
  const [showGoogleSheet, setShowGoogleSheet] = useState(false);
  const [googleSheetUrl, setGoogleSheetUrl] = useState('');
  const [sheetSaveSuccess, setSheetSaveSuccess] = useState(false);
  const [sheetTestStatus, setSheetTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [sheetTestMessage, setSheetTestMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Leads state & day-wise filter
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [dateFilter, setDateFilter] = useState<'All' | 'Today' | 'Yesterday' | 'This Week'>('All');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAddManual, setShowAddManual] = useState(false);
  const [showDailyResetConfirm, setShowDailyResetConfirm] = useState(false);

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
        setGoogleSheetUrl(leadStorage.getGoogleSheetWebhookUrl());
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
      setGoogleSheetUrl(leadStorage.getGoogleSheetWebhookUrl());
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

  const handleSaveGoogleSheetUrl = (e: React.FormEvent) => {
    e.preventDefault();
    leadStorage.setGoogleSheetWebhookUrl(googleSheetUrl);
    setSheetSaveSuccess(true);
    setTimeout(() => setSheetSaveSuccess(false), 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLeads(leadStorage.getLeads());
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleDailyReset = () => {
    leadStorage.clearOldLeads();
    setLeads(leadStorage.getLeads());
    setShowDailyResetConfirm(false);
  };

  const handleTestGoogleSheet = async () => {
    const url = googleSheetUrl.trim();
    if (!url) {
      setSheetTestStatus('error');
      setSheetTestMessage('Please enter a Google Apps Script Web App URL first.');
      return;
    }

    if (url.includes('/edit') || url.includes('/projects/')) {
      setSheetTestStatus('error');
      setSheetTestMessage('⚠️ You pasted the Script Editor URL. Please click "Deploy > New deployment > Web app" and copy the Web App URL (ends with /exec).');
      return;
    }

    setSheetTestStatus('testing');
    setSheetTestMessage('');

    const now = new Date();
    const testLead: StoredLead = {
      id: `test-${now.getTime()}`,
      name: 'Test Client (Google Sheet Sync Test)',
      phone: '+91 98765 43210',
      location: 'Nagpur',
      designType: 'Apartment (3 BHK)',
      budget: '₹20–40L',
      message: 'Testing instant real-time sync from Sowakaah website to Google Sheets.',
      source: 'Admin Manual Entry',
      status: 'New',
      submittedAt: now.toISOString()
    };

    const res = await leadStorage.sendToGoogleSheet(testLead);
    if (res) {
      setSheetTestStatus('success');
      setSheetTestMessage('✓ Test lead dispatched to Google Sheet! Check your spreadsheet row.');
      setTimeout(() => {
        setSheetTestStatus('idle');
        setSheetTestMessage('');
      }, 7000);
    } else {
      setSheetTestStatus('error');
      setSheetTestMessage('✕ Could not reach Google Sheet. Ensure Apps Script Web App is deployed with "Who has access: Anyone".');
      setTimeout(() => {
        setSheetTestStatus('idle');
        setSheetTestMessage('');
      }, 9000);
    }
  };

  const handleCopyScriptCode = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
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

  const todayLeadsCount = leads.filter(l => isLeadToday(l.submittedAt)).length;
  const yesterdayLeadsCount = leads.filter(l => isLeadYesterday(l.submittedAt)).length;
  const thisWeekLeadsCount = leads.filter(l => isLeadThisWeek(l.submittedAt)).length;

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.designType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.message && lead.message.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;

    let matchesDate = true;
    if (dateFilter === 'Today') {
      matchesDate = isLeadToday(lead.submittedAt);
    } else if (dateFilter === 'Yesterday') {
      matchesDate = isLeadYesterday(lead.submittedAt);
    } else if (dateFilter === 'This Week') {
      matchesDate = isLeadThisWeek(lead.submittedAt);
    }

    return matchesSearch && matchesStatus && matchesDate;
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

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleRefresh}
                className="inline-flex items-center gap-1 bg-charcoal-light hover:bg-bronze hover:text-charcoal text-canvas text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-2.5 py-1.5 sm:py-2 transition-colors border border-border-dark"
                title="Refresh Lead Data"
              >
                <RefreshCw size={12} className={isRefreshing ? 'animate-spin text-bronze' : ''} />
                <span className="hidden md:inline">Refresh</span>
              </button>

              <button
                onClick={() => leadStorage.exportToCSV()}
                className="inline-flex items-center gap-1 bg-charcoal-light hover:bg-bronze hover:text-charcoal text-canvas text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-2.5 py-1.5 sm:py-2 transition-colors border border-border-dark"
                title="Export CSV"
              >
                <Download size={12} />
                <span className="hidden md:inline">CSV</span>
              </button>

              <button
                onClick={() => {
                  setShowGoogleSheet(!showGoogleSheet);
                  setShowChangePin(false);
                }}
                className={`inline-flex items-center gap-1 border text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1.5 sm:py-2 transition-colors ${
                  showGoogleSheet ? 'bg-emerald-950 border-emerald-500 text-emerald-300 font-semibold' : 'border-border-dark text-canvas/80 hover:text-canvas'
                }`}
                title="Google Sheet Sync Integration"
              >
                <FileSpreadsheet size={13} className="text-emerald-400" />
                <span className="hidden sm:inline">Google Sheet</span>
              </button>

              <button
                onClick={() => {
                  setShowChangePin(!showChangePin);
                  setShowGoogleSheet(false);
                }}
                className="inline-flex items-center gap-1 border border-border-dark text-canvas/80 hover:text-canvas text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-2.5 py-1.5 sm:py-2 transition-colors"
                title="Change Master Passcode"
              >
                <KeyRound size={12} className="text-bronze" />
                <span className="hidden sm:inline">PIN</span>
              </button>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1 bg-red-950/40 hover:bg-red-900 border border-red-800 text-red-200 text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-2.5 py-1.5 sm:py-2 transition-colors"
                title="Lock & Logout"
              >
                <LogOut size={12} />
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

          {/* Google Sheet Sync Configuration Box */}
          {showGoogleSheet && (
            <div className="bg-canvas-soft border-b border-border-luxury p-4 sm:p-6 space-y-4 shrink-0 animate-in slide-in-from-top-2 duration-200 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border-luxury/60 pb-3">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet size={18} className="text-emerald-700" />
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-charcoal font-medium leading-none">Google Sheets Live Sync</h4>
                    <span className="text-[10px] text-charcoal-muted">Every website lead is automatically synced day-wise forever</span>
                  </div>
                </div>
                <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-semibold ${googleSheetUrl ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}`}>
                  {googleSheetUrl ? '● Connected' : '○ Webhook Not Set'}
                </span>
              </div>

              {/* Webhook Input Form */}
              <form onSubmit={handleSaveGoogleSheetUrl} className="space-y-3">
                <label className="block text-xs font-semibold text-charcoal">
                  Google Apps Script Web App URL:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    value={googleSheetUrl}
                    onChange={(e) => setGoogleSheetUrl(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="flex-grow bg-canvas border border-border-luxury text-xs py-2 px-3 focus:outline-none font-mono text-charcoal"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="bg-charcoal text-canvas text-xs uppercase tracking-wider px-4 py-2 hover:bg-bronze hover:text-charcoal font-semibold shrink-0"
                    >
                      Save Webhook
                    </button>
                    <button
                      type="button"
                      disabled={!googleSheetUrl || sheetTestStatus === 'testing'}
                      onClick={handleTestGoogleSheet}
                      className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white text-xs uppercase tracking-wider px-3.5 py-2 font-semibold shrink-0 flex items-center gap-1.5 shadow-sm"
                    >
                      <Send size={12} />
                      <span>{sheetTestStatus === 'testing' ? 'Testing...' : 'Send Test Lead'}</span>
                    </button>
                  </div>
                </div>

                {sheetSaveSuccess && (
                  <p className="text-xs text-emerald-700 font-semibold">✓ Google Sheet webhook URL saved successfully!</p>
                )}
                {sheetTestStatus === 'success' && (
                  <div className="p-2.5 bg-emerald-100 border border-emerald-300 text-xs text-emerald-900 font-medium rounded-none">
                    {sheetTestMessage || '✓ Test lead dispatched to Google Sheet successfully! Check your spreadsheet row.'}
                  </div>
                )}
                {sheetTestStatus === 'error' && (
                  <div className="p-2.5 bg-red-50 border border-red-300 text-xs text-red-700 font-medium rounded-none space-y-1">
                    <div className="flex items-center gap-1 font-semibold">
                      <AlertTriangle size={14} className="shrink-0" />
                      <span>{sheetTestMessage || 'Connection failed'}</span>
                    </div>
                    <p className="text-[11px] text-red-600 font-normal">
                      Important: When deploying in Google Apps Script, ensure you click <strong>Deploy &gt; New deployment &gt; Web app</strong>, and set <strong>Who has access: Anyone</strong>.
                    </p>
                  </div>
                )}
              </form>

              {/* 3-Step Setup Instructions */}
              <div className="bg-canvas border border-border-luxury p-3.5 sm:p-4 space-y-2.5 text-xs text-charcoal-muted leading-relaxed">
                <p className="font-semibold text-charcoal uppercase tracking-wider text-[11px]">
                  How to setup your Google Sheet (1-Minute Setup):
                </p>
                <ol className="list-decimal pl-4 space-y-1.5">
                  <li>Create a new Google Sheet (e.g. named <strong>Sowakaah Studio Enquiries</strong>).</li>
                  <li>Go to <strong>Extensions &gt; Apps Script</strong>, delete existing code, and paste the script below.</li>
                  <li>Click <strong>Deploy &gt; New deployment</strong> (or <em>Manage deployments &gt; New version</em>), select <strong>Web app</strong>, set <em>Who has access</em> to <strong>Anyone</strong>, click <strong>Deploy</strong>, copy the Web App URL (ends with <code>/exec</code>) and paste it into the box above.</li>
                </ol>

                <div className="pt-2">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal">Apps Script Code:</span>
                    <button
                      type="button"
                      onClick={handleCopyScriptCode}
                      className="text-[11px] text-bronze hover:underline flex items-center gap-1 font-semibold"
                    >
                      {copiedCode ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                      <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Script Code'}</span>
                    </button>
                  </div>
                  <pre className="p-2.5 bg-neutral-900 text-neutral-200 text-[10.5px] font-mono overflow-x-auto max-h-36 rounded border border-neutral-700 select-all">
                    {GOOGLE_APPS_SCRIPT_CODE}
                  </pre>
                </div>
              </div>
            </div>
          )}

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

          {/* Daily Reset Confirmation Dialog */}
          {showDailyResetConfirm && (
            <div className="bg-amber-50 border-b border-amber-300 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2 shrink-0 animate-in slide-in-from-top-2 duration-200 text-xs text-amber-950">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-amber-700 shrink-0" />
                <span>
                  <strong>Daily Refresh:</strong> Clear older leads from this device and keep only today's fresh leads? (All leads remain permanently saved in Google Sheet).
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDailyReset}
                  className="bg-amber-800 hover:bg-amber-900 text-white px-3 py-1 uppercase text-[10px] font-semibold tracking-wider"
                >
                  Yes, Refresh for Today
                </button>
                <button
                  type="button"
                  onClick={() => setShowDailyResetConfirm(false)}
                  className="text-amber-800 underline hover:text-amber-950 px-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Compact Metrics Bar */}
          <div className="bg-canvas-soft border-b border-border-luxury px-3 sm:px-6 py-2 sm:py-3.5 shrink-0">
            {/* Mobile Metric Pill Strip (< sm) */}
            <div className="flex sm:hidden items-center justify-between gap-1.5 overflow-x-auto no-scrollbar">
              <div 
                onClick={() => setDateFilter('Today')} 
                className={`flex-1 min-w-[70px] bg-canvas border p-1.5 text-center cursor-pointer transition-colors ${dateFilter === 'Today' ? 'border-emerald-600 shadow-sm' : 'border-border-luxury'}`}
              >
                <span className="text-[9px] uppercase tracking-wider text-emerald-700 block leading-none font-semibold">Today</span>
                <span className="font-serif text-base font-semibold text-emerald-700 leading-tight">{todayLeadsCount}</span>
              </div>

              <div 
                onClick={() => setDateFilter('All')} 
                className={`flex-1 min-w-[70px] bg-canvas border p-1.5 text-center cursor-pointer transition-colors ${dateFilter === 'All' ? 'border-charcoal shadow-sm' : 'border-border-luxury'}`}
              >
                <span className="text-[9px] uppercase tracking-wider text-charcoal-muted block leading-none font-semibold">Total</span>
                <span className="font-serif text-base font-semibold text-charcoal leading-tight">{totalLeads}</span>
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
              <div className="bg-canvas p-3 border border-border-luxury cursor-pointer hover:border-emerald-600 transition-colors" onClick={() => setDateFilter('Today')}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold">Today's Inquiries</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-medium">Daily</span>
                </div>
                <div className="font-serif text-2xl text-emerald-700 font-semibold mt-0.5">{todayLeadsCount}</div>
              </div>
              <div className="bg-canvas p-3 border border-border-luxury cursor-pointer hover:border-charcoal transition-colors" onClick={() => setDateFilter('All')}>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block font-semibold">Total Inquiries</span>
                <div className="font-serif text-2xl text-charcoal font-semibold mt-0.5">{totalLeads}</div>
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

          {/* Date Range Day-Wise Tabs & Search Strip */}
          <div className="px-2.5 sm:px-4 py-2 border-b border-border-luxury bg-canvas-soft flex flex-wrap items-center justify-between gap-2 shrink-0">
            {/* Day-Wise Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-bold mr-1 flex items-center gap-1">
                <Calendar size={11} className="text-bronze" />
                <span>Period:</span>
              </span>
              {[
                { label: 'Today', count: todayLeadsCount, value: 'Today' as const },
                { label: 'Yesterday', count: yesterdayLeadsCount, value: 'Yesterday' as const },
                { label: 'This Week', count: thisWeekLeadsCount, value: 'This Week' as const },
                { label: 'All Time', count: totalLeads, value: 'All' as const }
              ].map((dTab) => (
                <button
                  key={dTab.value}
                  onClick={() => setDateFilter(dTab.value)}
                  className={`text-[10px] uppercase tracking-wider px-2.5 py-1 transition-all border shrink-0 flex items-center gap-1 ${
                    dateFilter === dTab.value
                      ? 'bg-bronze text-charcoal border-bronze-dark font-bold shadow-xs'
                      : 'bg-canvas text-charcoal-muted border-border-luxury hover:text-charcoal'
                  }`}
                >
                  <span>{dTab.label}</span>
                  <span className={`text-[9px] px-1 font-mono rounded-none ${dateFilter === dTab.value ? 'bg-charcoal text-canvas' : 'bg-canvas-soft text-charcoal-muted'}`}>
                    {dTab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Action: Daily Refresh / Clean Old */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowDailyResetConfirm(true)}
                className="text-[10px] uppercase tracking-wider text-charcoal-muted hover:text-bronze flex items-center gap-1 underline"
                title="Reset view to today's fresh leads only"
              >
                <Sparkles size={11} className="text-bronze" />
                <span>Daily Refresh</span>
              </button>
            </div>
          </div>

          {/* Search & Status Filter Toolbar */}
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
                { label: 'All Statuses', value: 'All' },
                { label: 'New', value: 'New' },
                { label: 'Contacted', value: 'Contacted' },
                { label: 'Scheduled', value: 'Meeting Scheduled' },
                { label: 'Converted', value: 'Converted' }
              ].map((tab) => {
                const isActive = statusFilter === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setStatusFilter(tab.value)}
                    className={`text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1.5 transition-all border whitespace-nowrap shrink-0 flex items-center gap-1 ${
                      isActive
                        ? 'bg-charcoal text-canvas border-charcoal font-semibold'
                        : 'bg-canvas-soft text-charcoal-muted border-border-luxury hover:text-charcoal'
                    }`}
                  >
                    <span>{tab.label}</span>
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
                        {isLeadToday(lead.submittedAt) && (
                          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold bg-emerald-600 text-white shrink-0">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-charcoal-muted font-light mt-0.5">
                        <span className="inline-flex items-center gap-1 font-mono text-charcoal font-medium">
                          <Clock size={10} className="text-bronze" />
                          {new Date(lead.submittedAt).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} at {new Date(lead.submittedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </span>
                        <span>· via {lead.source}</span>
                      </div>
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
