import { LeadInquiry } from '../types';

export interface StoredLead extends LeadInquiry {
  id: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Meeting Scheduled' | 'Converted' | 'Closed';
  source: 'Homepage Qualifier' | 'Navbar Let\'s Talk Modal' | 'Contact Page' | 'Case Study CTA' | 'Admin Manual Entry';
}

const STORAGE_KEY = 'sowakaah_studio_leads_v1';
const GOOGLE_SHEET_KEY = 'sowakaah_google_sheet_webhook_url';

// Default Apps Script template for documentation
export const GOOGLE_APPS_SCRIPT_CODE = `// ================================================================
// SOWAKAAH INTERIOR DESIGN STUDIO — GOOGLE SHEET LEAD SYNC SCRIPT
// ================================================================

function doGet(e) {
  if (e && e.parameter && (e.parameter.name || e.parameter.phone || e.parameter.id)) {
    return handleLeadData(e.parameter);
  }
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Sowakaah Studio Lead Webhook is ACTIVE & READY'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var data = {};
  if (e && e.postData && e.postData.contents) {
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      data = e.parameter || {};
    }
  } else if (e && e.parameter) {
    data = e.parameter;
  }
  return handleLeadData(data);
}

function handleLeadData(data) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Auto-create Header Row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Date (Day-Wise)',
        'Day',
        'Time (IST)',
        'Full Name',
        'Phone Number',
        'Location / City',
        'Typology / Space',
        'Budget Range',
        'Project Details / Notes',
        'Source',
        'Lead ID'
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 11);
      headerRange.setFontWeight('bold')
                 .setBackground('#2B2623')
                 .setFontColor('#FFFFFF')
                 .setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
    }

    var now = new Date();
    var dateStr = Utilities.formatDate(now, 'Asia/Kolkata', 'dd-MM-yyyy');
    var dayStr = Utilities.formatDate(now, 'Asia/Kolkata', 'EEEE');
    var timeStr = Utilities.formatDate(now, 'Asia/Kolkata', 'hh:mm:ss a');

    var phoneFormatted = data.phone ? ("'" + data.phone.toString()) : '';

    sheet.appendRow([
      data.date || dateStr,
      data.day || dayStr,
      data.time || timeStr,
      data.name || 'Anonymous Client',
      phoneFormatted,
      data.location || 'Not Specified',
      data.designType || data.typology || 'Apartment',
      data.budget || 'Not Specified',
      data.message || '',
      data.source || 'Website Form',
      data.id || ('lead-' + now.getTime())
    ]);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 11).setVerticalAlignment('middle');

    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'success', 
      message: 'Lead recorded day-wise in Google Sheet',
      row: lastRow 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'error', 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}`;

const INITIAL_SAMPLE_LEADS: StoredLead[] = [
  {
    id: 'lead-001',
    name: 'Anand Deshpande',
    phone: '+91 98230 45671',
    location: 'Nagpur',
    designType: 'Apartment (3 BHK)',
    budget: '₹15–25L',
    message: 'Possession in 45 days at Civil Lines. Looking for full turnkey interior design with warm minimal aesthetic.',
    source: 'Homepage Qualifier',
    status: 'New',
    submittedAt: new Date(Date.now() - 1000 * 60 * 25).toISOString() // 25 mins ago (Today)
  },
  {
    id: 'lead-002',
    name: 'Meenal & Vikram Agrawal',
    phone: '+91 74890 11223',
    location: 'Chhindwara',
    designType: 'Villa / Duplex (4 BHK)',
    budget: '₹40L+',
    message: 'New bungalow construction at VIP Road. Need double height ceiling panelling and Italian marble flooring.',
    source: 'Navbar Let\'s Talk Modal',
    status: 'Meeting Scheduled',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString() // 3 hours ago (Today)
  },
  {
    id: 'lead-003',
    name: 'Dr. Shalini Rai',
    phone: '+91 94251 88990',
    location: 'Nagpur',
    designType: 'Kitchen & Living',
    budget: '₹10–20L',
    message: 'Modular kitchen renovation with German Blum hardware and quartz countertop.',
    source: 'Contact Page',
    status: 'Contacted',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString() // Yesterday
  }
];

export const isLeadToday = (dateStr: string): boolean => {
  const d = new Date(dateStr);
  const now = new Date();
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  );
};

export const isLeadYesterday = (dateStr: string): boolean => {
  const d = new Date(dateStr);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    d.getDate() === yesterday.getDate() &&
    d.getMonth() === yesterday.getMonth() &&
    d.getFullYear() === yesterday.getFullYear()
  );
};

export const isLeadThisWeek = (dateStr: string): boolean => {
  const d = new Date(dateStr);
  const now = new Date();
  const diffDays = (now.getTime() - d.getTime()) / (1000 * 3600 * 24);
  return diffDays >= 0 && diffDays <= 7;
};

export const leadStorage = {
  getGoogleSheetWebhookUrl: (): string => {
    return localStorage.getItem(GOOGLE_SHEET_KEY) || '';
  },

  setGoogleSheetWebhookUrl: (url: string): void => {
    localStorage.setItem(GOOGLE_SHEET_KEY, url.trim());
  },

  sendToGoogleSheet: async (lead: StoredLead): Promise<boolean> => {
    let webhookUrl = leadStorage.getGoogleSheetWebhookUrl();
    if (!webhookUrl) return false;

    webhookUrl = webhookUrl.trim();
    if (!webhookUrl.startsWith('http')) return false;

    const now = new Date(lead.submittedAt || Date.now());
    const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Kolkata' });
    const dayStr = now.toLocaleDateString('en-IN', { weekday: 'long', timeZone: 'Asia/Kolkata' });
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' });

    const payload = {
      id: lead.id,
      date: dateStr,
      day: dayStr,
      time: timeStr,
      timestamp: `${dateStr} ${timeStr}`,
      name: lead.name,
      phone: lead.phone,
      location: lead.location,
      designType: lead.designType,
      budget: lead.budget,
      message: lead.message || '',
      source: lead.source,
      status: lead.status
    };

    try {
      // 1. Primary POST attempt with text/plain (CORS safelisted - no preflight OPTIONS block)
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });
      return true;
    } catch (err) {
      console.warn('Could not sync lead via POST, trying GET fallback...', err);
      try {
        const queryParams = new URLSearchParams({
          id: lead.id,
          date: dateStr,
          day: dayStr,
          time: timeStr,
          name: lead.name,
          phone: lead.phone,
          location: lead.location,
          designType: lead.designType,
          budget: lead.budget,
          message: lead.message || '',
          source: lead.source
        }).toString();
        const getUrl = `${webhookUrl}${webhookUrl.includes('?') ? '&' : '?'}${queryParams}`;
        await fetch(getUrl, { mode: 'no-cors' });
        return true;
      } catch (getErr) {
        console.error('All Google Sheet webhook attempts failed:', getErr);
        return false;
      }
    }
  },

  getLeads: (): StoredLead[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_LEADS));
        return INITIAL_SAMPLE_LEADS;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to read leads from storage', e);
      return INITIAL_SAMPLE_LEADS;
    }
  },

  saveLead: (lead: Omit<StoredLead, 'id' | 'submittedAt' | 'status'>): StoredLead => {
    const existing = leadStorage.getLeads();
    const newLead: StoredLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'New'
    };

    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Automatically send to Google Sheet in background
    leadStorage.sendToGoogleSheet(newLead);

    // Dispatch event so live UI updates immediately
    window.dispatchEvent(new Event('sowakaah_lead_added'));
    return newLead;
  },

  updateLeadStatus: (id: string, status: StoredLead['status']): void => {
    const existing = leadStorage.getLeads();
    const updated = existing.map((l) => (l.id === id ? { ...l, status } : l));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('sowakaah_lead_added'));
  },

  deleteLead: (id: string): void => {
    const existing = leadStorage.getLeads();
    const updated = existing.filter((l) => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('sowakaah_lead_added'));
  },

  clearOldLeads: (): void => {
    // Keep only today's leads in the local admin panel view
    const existing = leadStorage.getLeads();
    const todayOnly = existing.filter((l) => isLeadToday(l.submittedAt));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todayOnly));
    window.dispatchEvent(new Event('sowakaah_lead_added'));
  },

  clearAllLocalLeads: (): void => {
    // Start completely clean in local browser
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    window.dispatchEvent(new Event('sowakaah_lead_added'));
  },

  exportToCSV: (): void => {
    const leads = leadStorage.getLeads();
    const headers = ['ID', 'Date', 'Day', 'Time', 'Name', 'Phone', 'Location', 'Typology', 'Budget', 'Status', 'Source', 'Notes'];
    const rows = leads.map(l => {
      const d = new Date(l.submittedAt);
      const dateStr = d.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Kolkata' });
      const dayStr = d.toLocaleDateString('en-IN', { weekday: 'long', timeZone: 'Asia/Kolkata' });
      const timeStr = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' });
      return [
        l.id,
        dateStr,
        dayStr,
        timeStr,
        `"${l.name.replace(/"/g, '""')}"`,
        `"${l.phone}"`,
        `"${l.location}"`,
        `"${l.designType}"`,
        `"${l.budget}"`,
        l.status,
        l.source,
        `"${(l.message || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Sowakaah_Client_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

