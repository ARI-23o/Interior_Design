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
export const GOOGLE_APPS_SCRIPT_CODE = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Location', 'Typology / Space', 'Budget', 'Message / Notes', 'Source', 'Lead ID']);
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#EADBCC');
    }
    
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name || '',
      data.phone || '',
      data.location || '',
      data.designType || '',
      data.budget || '',
      data.message || '',
      data.source || 'Website',
      data.id || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
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
    submittedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString() // 45 mins ago
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
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() // 5 hours ago
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
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
  }
];

export const leadStorage = {
  getGoogleSheetWebhookUrl: (): string => {
    return localStorage.getItem(GOOGLE_SHEET_KEY) || '';
  },

  setGoogleSheetWebhookUrl: (url: string): void => {
    localStorage.setItem(GOOGLE_SHEET_KEY, url.trim());
  },

  sendToGoogleSheet: async (lead: StoredLead): Promise<boolean> => {
    const webhookUrl = leadStorage.getGoogleSheetWebhookUrl();
    if (!webhookUrl) return false;

    try {
      const payload = {
        id: lead.id,
        timestamp: new Date(lead.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        name: lead.name,
        phone: lead.phone,
        location: lead.location,
        designType: lead.designType,
        budget: lead.budget,
        message: lead.message || '',
        source: lead.source,
        status: lead.status
      };

      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return true;
    } catch (err) {
      console.warn('Could not sync lead to Google Sheet webhook:', err);
      return false;
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

  exportToCSV: (): void => {
    const leads = leadStorage.getLeads();
    const headers = ['ID', 'Date', 'Name', 'Phone', 'Location', 'Typology', 'Budget', 'Status', 'Source', 'Notes'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.submittedAt).toLocaleString(),
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      l.location,
      `"${l.designType}"`,
      l.budget,
      l.status,
      l.source,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

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

