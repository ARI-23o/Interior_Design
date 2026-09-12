import { Service, ProcessStep, Article } from '../types';
import designerPhoto from '../assets/designer.jpg';

export const studioInfo = {
  name: 'Sowakaah Designs',
  tagline: 'Where Thoughtful Design Meets Timeless Elegance',
  headline: 'Thoughtfully Planned. Carefully Detailed. Made For You.',
  subheadline: 'An interior design studio creating spaces that are thoughtful, functional and timeless across residential, commercial and hospitality spaces in Nagpur & Chhindwara.',
  establishedYear: 2022,
  founder: {
    name: 'Khushi Gupta',
    fullName: 'Khushi Gupta',
    studioBrand: 'Sowakaah Designs',
    role: 'Principal Interior Designer',
    experienceYears: 'Established 2022',
    quote: "We believe beautiful spaces should also work beautifully. Our designs balance aesthetics, functionality, comfort and individuality, creating interiors that feel natural to the people who live and work within them.",
    bio: "Sowakaah Designs is a studio led by Principal Interior Designer Khushi Gupta, creating thoughtful, functional, and timeless spaces. With a focus on refined detailing, practical planning, and personalized design, the studio works across residential, commercial, and hospitality interiors. Each project is approached with an understanding of the client’s needs and lifestyle, bringing together aesthetics, comfort, materials, and functionality to create spaces that feel distinctive, balanced, and truly personal.",
    vision: "To create meaningful spaces that remain beautiful, functional and relevant with time.",
    mission: "To make good design approachable through thoughtful planning, honest communication, careful detailing and well-coordinated execution.",
    philosophy: "We believe beautiful spaces should also work beautifully. Our designs balance aesthetics, functionality, comfort and individuality, creating interiors that feel natural to the people who live and work within them.",
    photo: designerPhoto,
    credentials: [
      { label: 'Studio Established', val: '2022' },
      { label: 'Completed Residencies', val: 'Turnkey Spaces' },
      { label: 'Material Assurance', val: 'BWP 710 Marine' },
      { label: 'Execution', val: '100% Turnkey' }
    ]
  },
  contact: {
    phone: '+91 74898 08876',
    phoneRaw: '917489808876',
    email: 'sowakaahdesigns@gmail.com',
    website: 'sowakaahdesigns.com',
    locations: ['Nagpur, Maharashtra', 'Chhindwara, Madhya Pradesh'],
    address: 'Studio Sowakaah: Nagpur & Chhindwara',
    instagram: '@sowakaahdesigns',
    instagramUrl: 'https://www.instagram.com/sowakaahdesigns?stkn=MWlkODVsNzRoazVyNQ==',
    workingHours: 'Mon – Sat: 10:00 AM – 7:30 PM'
  },
  stats: [
    { value: '2022', label: 'Established Studio' },
    { value: '2', label: 'Prime Hubs (Nagpur & Chhindwara)' },
    { value: '100%', label: 'Turnkey Solutions & Fixed BOQ' },
    { value: '4+', label: 'Flagship Portfolio Showcases' }
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
    title: 'Thoughtful Design',
    description: 'Every decision begins with understanding the space and the people using it.'
  },
  {
    number: '02',
    title: 'Personal Approach',
    description: 'No two clients are the same, and neither should their spaces be.'
  },
  {
    number: '03',
    title: 'Attention to Detail',
    description: 'From layouts to finishes, smaller details are considered as carefully as the larger design.'
  },
  {
    number: '04',
    title: 'Function + Aesthetics',
    description: 'We create spaces that are visually refined while remaining comfortable and practical.'
  },
  {
    number: '05',
    title: 'Clear Communication',
    description: 'A collaborative process keeps clients informed throughout the design journey.'
  },
  {
    number: '06',
    title: 'Design to Execution',
    description: 'Design thinking continues beyond drawings through detailing and site coordination.'
  }
];

export const servicesData: Service[] = [
  {
    id: 'turnkey',
    title: 'Turnkey Interior Solutions',
    subtitle: 'Coordinated Design & Execution',
    description: 'Complete interior design solutions from concept development and space planning to material selection and detailing. Coordinated design and execution for a smoother journey from concept to completion.',
    features: ['Civil alterations & space planning', 'Custom carpentry & modular systems', 'Electrical, plumbing & HVAC coordination', 'Complete material procurement & quality supervision'],
    timeline: '60 – 120 Days',
    idealFor: 'Homeowners & businesses wanting single-point turnkey accountability',
    image: '/images/projects/turnkey-spaces/space-01.jpg'
  },
  {
    id: 'residential',
    title: 'Residential Interiors',
    subtitle: 'Lifestyle, Comfort & Individuality',
    description: 'Thoughtfully designed homes shaped around lifestyle, comfort and individuality for apartments, duplexes, and luxury residences.',
    features: ['3D photorealistic walkthroughs', 'False ceiling & architectural lighting design', 'Custom master bedroom suites & walk-in wardrobes', 'Curated loose furniture & soft furnishings'],
    timeline: '45 – 90 Days',
    idealFor: 'Homeowners building their long-term dream residence',
    image: '/images/projects/luxury-residence/residence-01.jpg'
  },
  {
    id: 'commercial',
    title: 'Commercial & Office Interiors',
    subtitle: 'Productivity, Comfort & Professional Identity',
    description: 'Functional and visually engaging spaces designed around business requirements, user experience, and efficient workplaces that balance productivity with corporate character.',
    features: ['Director suites & executive workstations', 'Acoustic fluted panelling & ambient coves', 'Concealed storage & functional credenzas', 'Integrated sacred prayer altars'],
    timeline: '30 – 60 Days',
    idealFor: 'Corporates, director offices, and commercial workspaces',
    image: '/images/projects/duplex-villa/villa-01.jpg'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Canteen Interiors',
    subtitle: 'Welcoming Cafes, Canteens & Dining Spaces',
    description: 'Welcoming interiors for cafés, restaurants, institutional canteens, and hospitality environments with bold geometric detailing and high-traffic spatial planning.',
    features: ['Sculptural timber ceiling canopy installations', 'High-traffic geometric tile floor layouts', 'Custom neon graphics & typography branding', 'Durable food-service billing counters'],
    timeline: '30 – 60 Days',
    idealFor: 'Cafés, college canteens, restaurants, and eateries',
    image: '/images/projects/modern-penthouse/penthouse-01.jpg'
  },
  {
    id: 'furniture',
    title: 'Custom Furniture & Detailing',
    subtitle: 'Artisanal Joinery & Unique Millwork',
    description: 'Furniture and interior elements developed specifically for the requirements and character of each project, from white carved Mandir temples to geometric sliding wardrobes.',
    features: ['Custom white carved pooja mandirs', 'Multi-panel acrylic sliding wardrobes', 'Integrated vanity dressing units & study desks', 'Hydraulic storage beds & window lounges'],
    timeline: '20 – 45 Days',
    idealFor: 'Spaces requiring tailored, non-standard storage and artisanal joinery',
    image: '/images/projects/turnkey-spaces/space-38.jpg'
  },
  {
    id: 'visualization',
    title: 'Design & 3D Visualization',
    subtitle: 'Clear Planning Before Execution',
    description: 'Space planning, furniture layouts, detailed working drawings, and 3D visualization to clearly communicate the design before on-site execution.',
    features: ['2D Furniture layouts & space circulation', 'Photorealistic 3D room renders', 'Detailed false ceiling & electrical MEP drawings', 'Material & lighting coordination'],
    timeline: '15 – 30 Days',
    idealFor: 'Clients seeking complete clarity and visual confidence prior to site work',
    image: '/images/projects/luxury-residence/residence-03.jpg'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Understand',
    tagline: 'Client discussion, requirements, lifestyle, site and budget.',
    description: 'Every project begins with understanding the people who will use the space. We assess the site, explore lifestyle habits, and align on budget and requirements.',
    deliverables: ['Lifestyle & functional brief', 'Initial scope alignment', 'Laser site measurements'],
    whatHappensNext: 'Our design team prepares conceptual space planning and moodboard direction.'
  },
  {
    stepNumber: '02',
    title: 'Explore',
    tagline: 'Ideas, references, mood boards and initial design direction.',
    description: 'We explore creative ideas, reference imagery, material swatches, and color palettes to establish a cohesive visual language tailored to your taste.',
    deliverables: ['Material & texture moodboards', 'Color scheme curation', 'Design style alignment'],
    whatHappensNext: 'We move into detailed 2D space planning and functional furniture layouts.'
  },
  {
    stepNumber: '03',
    title: 'Plan',
    tagline: 'Space planning, furniture layouts and functional development.',
    description: 'Translating concepts into practical, ergonomic 2D floor plans that optimize circulation, storage utility, and spatial proportions.',
    deliverables: ['2D Furniture layout plans', 'Spatial flow analysis', 'Zoning & clearance roadmap'],
    whatHappensNext: 'Our 3D studio begins photorealistic visual rendering.'
  },
  {
    stepNumber: '04',
    title: 'Visualize',
    tagline: '3D views, materials, colours, lighting and design refinement.',
    description: 'Experience your spaces in photorealistic 3D views before a single brick is laid, refining materials, lighting coves, textures, and custom millwork.',
    deliverables: ['Photorealistic 3D views of all spaces', 'Lighting & shadow simulations', 'Client feedback & refinement'],
    whatHappensNext: 'We prepare technical working drawings and locked BOQ.'
  },
  {
    stepNumber: '05',
    title: 'Detail',
    tagline: 'Working drawings, furniture details, material specifications and execution planning.',
    description: 'Comprehensive technical working drawings for carpentry, false ceilings, electrical layouts, plumbing, and locked itemized material schedules.',
    deliverables: ['Complete working drawings set', 'Electrical & plumbing schematics', 'Locked Bill of Quantities (BOQ)'],
    whatHappensNext: 'Site mobilization begins under direct architect supervision.'
  },
  {
    stepNumber: '06',
    title: 'Execute',
    tagline: 'Site coordination, vendor management and quality supervision.',
    description: 'Disciplined on-site coordination, BWP 710 joinery construction, vendor oversight, and strict quality supervision at every stage.',
    deliverables: ['On-site quality supervision', 'Weekly photo & milestone logs', 'Precision joinery execution'],
    whatHappensNext: 'We proceed to final detailing, deep cleaning, and client handover.'
  },
  {
    stepNumber: '07',
    title: 'Deliver',
    tagline: 'Final detailing, inspection and project handover.',
    description: 'Thorough inspection, snag-list clearance, final styling, deep cleaning, and turnkey handover ready for immediate move-in.',
    deliverables: ['Pristine deep-cleaned space', 'Defect-free handover signoff', 'Care & maintenance guidance'],
    whatHappensNext: 'Step into a space that is thoughtful, functional, and truly yours.'
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
    excerpt: 'Detailed budget breakdown for essential, premium, and luxury interior design in Nagpur and Chhindwara, with material selections and hidden cost traps.',
    coverImage: '/images/projects/luxury-residence/residence-02.jpg',
    content: {
      intro: 'Planning the interior design for a 3 BHK apartment in Central India requires balancing durability, climate considerations, and bespoke aesthetics.',
      sections: [
        {
          heading: '1. Budget Tiers & What You Get',
          body: 'A standard budget for a 3 BHK can be categorized into three tiers:',
          bulletPoints: [
            'Essential Quality: Commercial ply, laminate finishes, standard false ceiling, essential modular kitchen.',
            'Premium Comfort: BWP 710 Marine ply, acrylic/veneer finishes, quartz countertops, profile lighting, custom wardrobes.',
            'Luxury Bespoke: Italian marble, fluted oak panelling, Blum automated hardware, motorized curtains, bespoke art and decor.'
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
    coverImage: '/images/projects/luxury-residence/residence-10.jpg',
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
    image: '/images/projects/luxury-residence/residence-01.jpg',
    title: 'Pyramid Gold Residence Living Room · Nagpur'
  },
  {
    id: 'ig2',
    image: '/images/projects/duplex-villa/villa-01.jpg',
    title: "Director's Office & Mandir (Khush Vajani) · Nagpur"
  },
  {
    id: 'ig3',
    image: '/images/projects/modern-penthouse/penthouse-01.jpg',
    title: 'Raisoni College Canteen Dining & Geometric Ceiling'
  },
  {
    id: 'ig4',
    image: '/images/projects/turnkey-spaces/space-01.jpg',
    title: 'Pershionkar Residence Turnkey Living & Pooja Unit'
  }
];
