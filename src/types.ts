export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Turnkey' | 'Villas';
  areaSqFt: number;
  year: number;
  completionTime: string;
  clientBrief: string;
  designApproach: string[];
  materials: string[];
  palette: { name: string; hex: string }[];
  coverImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  timeline: string;
  idealFor: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  review: string;
  rating: number;
  avatarUrl: string;
  projectTitle: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    takeaway: string;
  };
}

export interface LeadInquiry {
  projectType: string;
  location: string;
  budgetRange: string;
  possession: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}
