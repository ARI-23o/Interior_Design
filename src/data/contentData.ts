import { Service, ProcessStep, Testimonial, Article } from '../types';
import designerPhoto from '../assets/designer.jpg';

export const studioInfo = {
  name: 'SOWAKAAH™',
  tagline: 'Interior Design Studio',
  headline: 'Timeless Interiors, Designed Around You.',
  subheadline: 'Bespoke residential interiors crafted around your lifestyle, taste and way of living across Chhindwara, Nagpur, and Central India.',
  founder: {
    name: 'Founder & Principal Designer',
    studioBrand: 'Sowakaah Designs',
    role: 'Principal Interior Architect & Creative Director',
    experienceYears: '8+',
    quote: "I'm the founder of Sowakaah Designs. I believe great interiors should not only look beautiful, but also feel effortless to live in.",
    bio: "I founded Sowakaah Designs with a simple philosophy: a great home shouldn't just be an aesthetic showpiece for guests — it must feel intuitive, calm, and deeply personal to the family living in it. Over the last 8+ years, our studio has delivered over 50 completed residences by balancing architectural rigor with disciplined on-site craftsmanship.",
    photo: designerPhoto,
    credentials: [
      { label: 'Experience', val: '8+ Years' },
      { label: 'Completed Residencies', val: '50+ Spaces' },
      { label: 'Google Rating', val: '4.9 ★ (48 Reviews)' },
      { label: 'Execution', val: '100% Turnkey' }
    ]
  },
  contact: {
    phone: '+91 74898 08876',
    phoneRaw: '917489808876',
    email: 'sowakaahdesigns@gmail.com',
    locations: ['Chhindwara, MP', 'Nagpur, MH'],
    address: 'Studio Sowakaah, Khajri Chowk, Chhindwara & Ramdaspeth, Nagpur',
    instagram: '@sowakaah_designs',
    instagramUrl: 'https://www.instagram.com/sowakaah_designs/',
    workingHours: 'Mon – Sat: 10:00 AM – 7:30 PM'
  },
  stats: [
    { value: '50+', label: 'Projects Completed' },
    { value: '8+', label: 'Years of Experience' },
    { value: '2', label: 'Prime Studio Hubs (Chhindwara & Nagpur)' },
    { value: '4.9★', label: 'Client Google Rating' }
  ],
  materialPartners: [
    { name: 'Blum Austria', category: 'Precision Hardware' },
    { name: 'Hettich Germany', category: 'Cabinetry Systems' },
    { name: 'Saint-Gobain', category: 'Acoustic & Fluted Glass' },
    { name: 'Asian Paints Royale', category: 'Low-VOC Coatings' },
    { name: 'Hafele', category: 'Architectural Fittings' },
    { name: 'Greenlam', category: 'Engineered Veneers' },
    { name: 'Botticino Marble', category: 'Imported Natural Stone' },
    { name: 'Kajaria Eternity', category: 'Large Format Slabs' }
  ]
};

export const whyChooseUsData = [
  {
    number: '01',
    title: 'Personalized Lifestyle Design',
    description: 'Every layout, storage nook, and finish is custom-engineered around how your family cooks, works, hosts, and unwinds. We never use repetitive templates.'
  },
  {
    number: '02',
    title: 'Complete Turnkey Execution',
    description: 'From 3D photorealistic visualization to on-site civil work, carpentry, MEP, and furniture styling, we manage everything under one accountable roof.'
  },
  {
    number: '03',
    title: 'Transparent Process & Fixed BOQ',
    description: 'Itemized Bill of Quantities with zero hidden surcharges. Real-time weekly WhatsApp site reports and locked-in handover milestone commitments.'
  },
  {
    number: '04',
    title: 'Attention to Detail & Material Craft',
    description: 'Direct sourcing of marine-grade plywood (BWP 710), genuine Italian stone, German Blum hardware, and low-VOC bespoke coatings.'
  }
];

export const servicesData: Service[] = [
  {
    id: 'turnkey',
    title: 'Turnkey Interior Solutions',
    subtitle: 'End-to-End Stress-Free Execution',
    description: 'Our signature full-service solution: we take bare brick walls and deliver a fully furnished, styled, ready-to-live-in sanctuary with zero contractor headaches.',
    features: ['Civil alterations & space planning', 'Custom carpentry & modular systems', 'Electrical, plumbing & HVAC coordination', 'Complete material procurement & quality supervision'],
    timeline: '60 – 120 Days',
    idealFor: 'Busy homeowners wanting premium single-point accountability',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'residential',
    title: 'Bespoke Residential Design',
    subtitle: 'Apartments, Penthouses & Villas',
    description: 'Tailored interior architecture that balances elegance, comfort, and timeless beauty for 2 BHK, 3 BHK, 4 BHK apartments and luxury bungalows.',
    features: ['3D photorealistic walkthroughs', 'False ceiling & architectural lighting design', 'Custom master bedroom suites & walk-in wardrobes', 'Curated loose furniture & soft furnishings'],
    timeline: '45 – 90 Days',
    idealFor: 'Homeowners building their long-term dream residence',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'kitchens',
    title: 'Luxury Modular Kitchens',
    subtitle: 'Ergonomic & High-Durability',
    description: 'Precision-engineered German and Austrian hardware kitchens with quartz/Dekton countertops, anti-scratch finishes, and intelligent pantry pull-outs.',
    features: ['BWP 710 Boiling Waterproof Birch/Ply base', 'Blum soft-close tandem boxes & lift-ups', 'Custom appliance integration (oven, hob, chimney)', 'Ergonomic triangle workflow optimization'],
    timeline: '30 – 45 Days',
    idealFor: 'Culinary enthusiasts prioritizing ergonomics and easy maintenance',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'commercial',
    title: 'Commercial & Executive Spaces',
    subtitle: 'Offices, Boutiques & Hospitality',
    description: 'High-impact branded workspaces, executive cabins, boutique retail studios, and clinics engineered for productivity and memorable client impressions.',
    features: ['Acoustic zoning & sound dampening', 'Executive conference & VIP lounges', 'Ergonomic lighting & airflow planning', 'Brand identity integrated into spatial architecture'],
    timeline: '40 – 75 Days',
    idealFor: 'Corporates, professionals, and boutique business owners',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'furniture',
    title: 'Custom Furniture & Styling',
    subtitle: 'Artisanal Furnishings & Decor',
    description: 'Individually commissioned sofas, dining tables, accent chairs, custom lighting pendants, wall art curation, and imported rugs.',
    features: ['Custom upholstery in bouclé, velvet & leather', 'Solid teak, oak, and marble dining sets', 'Bespoke statement chandeliers & sconces', 'Fine art styling and plantscape integration'],
    timeline: '20 – 40 Days',
    idealFor: 'Clients looking to elevate their existing spaces with designer pieces',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation & Lifestyle Discovery',
    tagline: 'Understanding your lifestyle, daily routines, and realistic budget.',
    description: 'We meet in person or via discovery call to analyze your architectural floor plan, discuss your family habits (entertaining, cooking, storage pain-points), and lock in an investment bracket.',
    deliverables: ['Detailed lifestyle & functional brief', 'Realistic budget tier roadmap', 'Scope of work alignment'],
    whatHappensNext: 'We assign a dedicated senior design lead and schedule precise on-site laser measurements.'
  },
  {
    stepNumber: '02',
    title: 'Concept & Spatial Layouts',
    tagline: 'Translating your vision into 2D space planning and moodboards.',
    description: 'We develop ergonomic 2D floor plans with spatial circulation pathways, paired with physical and digital material moodboards defining tones, textures, and lighting ambiance.',
    deliverables: ['2D Furniture layout options', 'Material moodboards (Stone, Wood, Fabrics)', 'Color palette curation'],
    whatHappensNext: 'Once you select your favorite layout, our 3D visualization studio begins photorealistic rendering.'
  },
  {
    stepNumber: '03',
    title: '3D Photorealism & Design Development',
    tagline: 'Walk through your future home before construction starts.',
    description: 'We create photorealistic 3D renders of every room and compile technical engineering drawings for electrical MEP, plumbing, false ceiling, and bespoke millwork.',
    deliverables: ['Photorealistic 3D walkthrough views', 'Complete working drawings & electrical layouts', 'Locked itemized Bill of Quantities (BOQ)'],
    whatHappensNext: 'With approved drawings and signed BOQ, procurement starts and site work commences.'
  },
  {
    stepNumber: '04',
    title: 'Turnkey Execution & Site Supervision',
    tagline: 'Rigorous on-site craftsmanship with weekly photo updates.',
    description: 'Our dedicated site engineers oversee carpentry, civil alterations, ceiling framing, and electrical installations with strict quality-assurance checklists.',
    deliverables: ['Weekly WhatsApp photo & video site logs', 'Milestone quality sign-offs', 'Factory-pressed modular cabinetry assembly'],
    whatHappensNext: 'After major carpentry and painting are completed, we initiate the final deep-cleaning and styling.'
  },
  {
    stepNumber: '05',
    title: 'Styling, Snag Clearance & Key Handover',
    tagline: 'Step into your finished dream home, fully styled and pristine.',
    description: 'We conduct full snag-list clearance, install bespoke loose furniture, rugs, art, and lighting fixtures, finishing with deep industrial cleaning and official key handover.',
    deliverables: ['Deep cleaned, ready-to-live home', '10-Year ply and hardware warranty certificates', 'Care & maintenance handbook'],
    whatHappensNext: 'Enjoy your bespoke home backed by our 1-year complimentary after-handover maintenance checkups.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Dr. Nikhil & Radhika Verma',
    location: 'Nagpur · Ramdaspeth Residence',
    projectType: '3 BHK Turnkey Luxury Residence',
    review: 'They understood our requirements from the beginning and handled the entire project beautifully. Being doctors with hectic schedules, their turnkey service gave us total peace of mind. The finished apartment looks exactly like the 3D renders!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'The Alabaster Haven (2,450 sq.ft.)'
  },
  {
    id: 't2',
    clientName: 'Rajesh & Meenal Agrawal',
    location: 'Chhindwara · VIP Road Villa',
    projectType: '4 BHK Duplex Bungalow',
    review: 'From the initial space planning to the double-height walnut panelling and modular kitchen, the execution was flawless. They kept us updated on WhatsApp every Friday with site photos, and delivered strictly on the promised date.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'Villa Tranquille (4,200 sq.ft.)'
  },
  {
    id: 't3',
    clientName: 'Prateek & Sunaina Sharma',
    location: 'Nagpur · Civil Lines Penthouse',
    projectType: 'Penthouse Apartment',
    review: 'Sowakaah transformed our raw flat into a warm, modern sanctuary. Their attention to lighting, concealed storage, and clean marble joints is exceptional. Transparent billing and zero hidden surprises throughout the 90 days.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'The Earth & Oak Flat (1,850 sq.ft.)'
  }
];

export const articlesData: Article[] = [
  {
    id: 'a1',
    slug: 'interior-design-cost-guide-3bhk-2026',
    title: 'Interior Design Cost for a 3 BHK in Central India — 2026 Complete Guide',
    category: 'Cost & Planning',
    readTime: '6 min read',
    date: 'Feb 2026',
    excerpt: 'Detailed budget breakdown for essential, premium, and luxury interior design in Chhindwara and Nagpur, with material selections and hidden cost traps.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Planning the interior design for a 3 BHK apartment (1,400 to 2,200 sq.ft.) in Central India requires balancing durability, climate considerations, and bespoke aesthetics.',
      sections: [
        {
          heading: '1. Budget Tiers & What You Get',
          body: 'A standard budget for a 3 BHK can be categorized into three tiers:',
          bulletPoints: [
            'Essential Quality (₹8–14 Lakhs): Commercial ply, laminate finishes, standard false ceiling, essential modular kitchen.',
            'Premium Comfort (₹15–25 Lakhs): BWP 710 Marine ply, acrylic/veneer finishes, quartz countertops, profile lighting, custom wardrobes.',
            'Luxury Bespoke (₹26–45 Lakhs+): Italian marble, fluted oak panelling, Blum automated hardware, motorized curtains, bespoke art and decor.'
          ]
        },
        {
          heading: '2. Where Most Homeowners Overspend or Cut the Wrong Corners',
          body: 'Cutting costs on base plywood or hardware frequently leads to swelling and door sagging within 24 months. Always invest in BWP 710 for wet zones and branded soft-close hinges.'
        }
      ],
      takeaway: 'Working with a turnkey studio with a fixed BOQ protects you from the 30–40% cost escalations typical with informal carpentry teams.'
    }
  },
  {
    id: 'a2',
    slug: 'modular-kitchen-vs-carpenter-made-kitchen',
    title: 'Modular Kitchen vs. Carpenter-Made: Which One Should You Choose?',
    category: 'Material Guide',
    readTime: '5 min read',
    date: 'Jan 2026',
    excerpt: 'A comprehensive comparison on durability, edge-banding precision, installation speed, and lifetime maintenance for modern Indian cooking.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Indian cooking involves high heat, spices, and heavy daily usage. Here is how precision factory-made modular kitchens stack up against on-site carpentry.',
      sections: [
        {
          heading: 'Precision & Edge Banding',
          body: 'Factory-pressed edge banding uses PUR glue at high temperatures, creating a 100% moisture-sealed barrier that hand-applied manual glue can never achieve on site.'
        },
        {
          heading: 'Installation Speed & Cleanliness',
          body: 'Modular kitchens arrive pre-cut and flat-packed, assembling on site in just 3–5 days with zero wood dust in your new home, compared to 4–6 weeks of noisy carpentry.'
        }
      ],
      takeaway: 'For modern Indian homes, a factory-manufactured modular kitchen with marine ply base and German hardware provides unbeatable longevity.'
    }
  }
];

export const instagramPosts = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    title: 'Cove lighting details at Civil Lines site'
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
    title: 'Fluted walnut backdrop installation'
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    title: 'Material moodboard selection day'
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
    title: 'Travertine stone dining table handover'
  }
];
