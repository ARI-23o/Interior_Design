import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'p1',
    slug: 'modern-minimal-residence',
    title: 'The Grand Amber Residence',
    subtitle: 'Bespoke Turnkey 3 BHK Luxury Living',
    location: 'Nagpur · Ramdaspeth',
    category: 'Residential',
    areaSqFt: 2650,
    year: 2025,
    completionTime: '90 Days',
    clientBrief: 'The clients sought a sanctuary that felt serene, uncluttered, and flooded with natural light. They wanted an open-concept flow with zero visual noise, integrated concealed storage, and organic tactile textures across living, dining, kitchen, and private bedroom suites.',
    clientRequirements: [
      'Zero visual clutter with 100% handleless concealed storage systems',
      'Warm indirect ambient 2700K architectural lighting across living, dining & master suite',
      'High-end modular kitchen with Blum hardware and quartz worktops',
      'Fluted glass walk-in wardrobe and luxury boutique en-suite bathrooms'
    ],
    designConcept: 'Contemporary Warm Luxury — combining bespoke fluted millwork, soft travertine finishes, concealed profile illumination, and tailored custom furnishings to create an elevated living experience.',
    layoutPlanning: 'Reconfigured spatial zones to establish an expansive open-concept living and dining flow, anchored by an integrated TV media wall, breakfast bar, and dedicated private bedroom retreats.',
    designApproach: [
      'Monolithic custom TV entertainment backdrop with warm backlit LED profiles',
      'Curved fluted white oak and walnut millwork concealing utility storage',
      'Gourmet modular kitchen equipped with Blum soft-close tandem systems and quartz counters',
      'Master bedroom suite featuring full-height acoustic headboard panelling',
      'Walk-in wardrobe with tinted fluted glass, sensor lighting, and boutique vanity',
      'Spa-inspired bathrooms with concealed niche illumination and premium fixtures'
    ],
    materials: ['Fluted White Oak', 'Roman Travertine', 'Brushed Warm Brass', 'PU Matte Finishes', 'Belgian Bouclé & Linen'],
    palette: [
      { name: 'Warm Alabaster', hex: '#FAF7F2' },
      { name: 'Oatmeal Taupe', hex: '#E2D9CE' },
      { name: 'Smoked Oak', hex: '#8C7456' },
      { name: 'Deep Espresso', hex: '#2D2824' }
    ],
    coverImage: '/images/projects/luxury-residence/residence-01.jpg',
    galleryImages: [
      '/images/projects/luxury-residence/residence-01.jpg',
      '/images/projects/luxury-residence/residence-02.jpg',
      '/images/projects/luxury-residence/residence-03.jpg',
      '/images/projects/luxury-residence/residence-04.jpg',
      '/images/projects/luxury-residence/residence-05.jpg',
      '/images/projects/luxury-residence/residence-06.jpg',
      '/images/projects/luxury-residence/residence-07.jpg',
      '/images/projects/luxury-residence/residence-08.jpg',
      '/images/projects/luxury-residence/residence-09.jpg',
      '/images/projects/luxury-residence/residence-10.jpg',
      '/images/projects/luxury-residence/residence-11.jpg',
      '/images/projects/luxury-residence/residence-12.jpg',
      '/images/projects/luxury-residence/residence-13.jpg',
      '/images/projects/luxury-residence/residence-14.jpg',
      '/images/projects/luxury-residence/residence-15.jpg',
      '/images/projects/luxury-residence/residence-16.jpg',
      '/images/projects/luxury-residence/residence-17.jpg',
      '/images/projects/luxury-residence/residence-18.jpg',
      '/images/projects/luxury-residence/residence-19.jpg',
      '/images/projects/luxury-residence/residence-20.jpg',
      '/images/projects/luxury-residence/residence-21.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-01.jpg',
    afterImage: '/images/projects/luxury-residence/residence-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: 'Photorealistic Concept Render',
        description: 'Approved 3D visualization mapping out layout flow, lighting coves, and bespoke material pairings.',
        image: '/images/projects/modern-penthouse/penthouse-01.jpg'
      },
      {
        phase: 'Stage 02: On-Site Execution',
        title: 'Carcass Carpentry & Framing',
        description: 'BWP 710 marine ply carcass construction, electrical conduit routing, and precision grid framing.',
        image: '/images/projects/turnkey-spaces/site-02.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Turnkey Handover & Styling',
        description: 'Complete finished space with polished surfaces, styled soft furnishings, and architectural lighting.',
        image: '/images/projects/luxury-residence/residence-02.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p2',
    slug: 'warm-contemporary-villa',
    title: 'Villa Seraphina',
    subtitle: 'Turnkey Luxury 4 BHK Duplex Villa',
    location: 'Chhindwara · VIP Road',
    category: 'Villas',
    areaSqFt: 4200,
    year: 2025,
    completionTime: '120 Days',
    clientBrief: 'A multi-generational family home balancing grand celebratory hospitality with intimate, relaxing private quarters. Requires statement walnut panelling, double-height ceiling proportions, and handcrafted joinery throughout.',
    clientRequirements: [
      'Double-height ceiling treatment absorbing sound and establishing dramatic architectural presence',
      'Gourmet open-concept island kitchen with heavy-duty Austrian fittings',
      'Walk-in wardrobe with glass fluted doors and integrated LED sensor illumination',
      'Serene mandir & prayer sanctuary integrated with subtle brass jali details'
    ],
    designConcept: 'Timeless Contemporary Grandeur — blending rich American walnut veneer with Italian marble flooring and subtle champagne gold accents.',
    layoutPlanning: 'Zoned ground floor for grand hosting with a formal salon and 10-seater dining suite, while reserving the upper level for private family retreats and private lounge.',
    designApproach: [
      'Double-height acoustic fluted walnut backdrop in the formal living salon',
      'Seamless Italian marble flooring with customized brass inlay borders',
      'Gourmet open-concept island kitchen with heat-resistant porcelain worktops',
      'Private master bedroom suite with integrated dressing zone and bespoke headboard',
      'Curated outdoor terrace lounge with tropical landscaping elements'
    ],
    materials: ['Italian Botticino Marble', 'American Walnut Veneer', 'Dekton Porcelain', 'Champagne Gold Profiles', 'Tuscan Leather'],
    palette: [
      { name: 'Warm Cream', hex: '#FDFBF7' },
      { name: 'Rich Walnut', hex: '#5A3E2B' },
      { name: 'Burnished Gold', hex: '#C5A059' },
      { name: 'Muted Bronze', hex: '#7A6B5D' }
    ],
    coverImage: '/images/projects/duplex-villa/villa-01.jpg',
    galleryImages: [
      '/images/projects/duplex-villa/villa-01.jpg',
      '/images/projects/duplex-villa/villa-02.jpg',
      '/images/projects/duplex-villa/villa-03.jpg',
      '/images/projects/duplex-villa/villa-04.jpg',
      '/images/projects/duplex-villa/villa-05.jpg',
      '/images/projects/duplex-villa/villa-06.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-03.jpg',
    afterImage: '/images/projects/duplex-villa/villa-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: 'Architectural 3D Concept',
        description: 'Proportion studies for the double-height walnut panel and grand chandelier placement.',
        image: '/images/projects/duplex-villa/villa-02.jpg'
      },
      {
        phase: 'Stage 02: On-Site Framing',
        title: 'Civil & Scaffolding Phase',
        description: 'Erecting high scaffolding for structural walnut panelling and ceiling reinforcement.',
        image: '/images/projects/turnkey-spaces/site-01.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Finished Duplex Villa',
        description: 'Immaculate bespoke handover delivered on the exact 120th day milestone.',
        image: '/images/projects/duplex-villa/villa-01.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p3',
    slug: 'urban-penthouse-suite',
    title: 'The Oakridge Penthouse',
    subtitle: 'Warm Minimalist 3 BHK Penthouse Suite',
    location: 'Nagpur · Civil Lines',
    category: 'Residential',
    areaSqFt: 3100,
    year: 2024,
    completionTime: '85 Days',
    clientBrief: 'Transforming an expansive top-floor apartment into a clean, Nordic-inspired modern penthouse featuring expansive natural lighting, integrated study zones, and continuous warm earthy textures.',
    clientRequirements: [
      'Open-plan living flow with seamless connection to dining and breakfast counter',
      'Floor-to-ceiling custom millwork library and study desk',
      'Eco-friendly low-VOC finishes and sustainable oak timber textures'
    ],
    designConcept: 'Nordic Warmth Meets Indian Sensibility — utilizing natural ash timber, subtle terrazzo textures, and calming neutral accents.',
    layoutPlanning: 'Merged kitchen and living through a quartz breakfast bar, expanding functional entertaining space and natural ventilation.',
    designApproach: [
      'Seamless living and dining integration with continuous warm oak flooring',
      'Built-in oak floor-to-ceiling library wall with integrated study nook',
      'Custom terrazzo dining surface with handcrafted ash wood dining chairs',
      'Smart home automation for scene lighting, motorized blinds, and climate control'
    ],
    materials: ['Natural Ash Wood', 'Custom Terrazzo', 'Sage Ceramic Tiles', 'Linen Textiles', 'Matte Black Hardware'],
    palette: [
      { name: 'Soft Linen', hex: '#F5F2EC' },
      { name: 'Earthy Sage', hex: '#9AA08B' },
      { name: 'Natural Ash', hex: '#D6C7B2' },
      { name: 'Charcoal Accent', hex: '#332F2B' }
    ],
    coverImage: '/images/projects/modern-penthouse/penthouse-01.jpg',
    galleryImages: [
      '/images/projects/modern-penthouse/penthouse-01.jpg',
      '/images/projects/modern-penthouse/penthouse-02.jpg',
      '/images/projects/modern-penthouse/penthouse-03.jpg',
      '/images/projects/modern-penthouse/penthouse-04.jpg',
      '/images/projects/modern-penthouse/penthouse-05.jpg',
      '/images/projects/modern-penthouse/penthouse-06.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-02.jpg',
    afterImage: '/images/projects/modern-penthouse/penthouse-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: Concept Planning',
        title: 'Spatial Planning & 3D Renders',
        description: 'Optimizing window light exposure and open-plan kitchen breakfast counter.',
        image: '/images/projects/modern-penthouse/penthouse-02.jpg'
      },
      {
        phase: 'Stage 02: On-Site Carpentry',
        title: 'Joinery & Panelling Framing',
        description: 'Precision on-site carpentry with factory-cut edge-banded carcass modules.',
        image: '/images/projects/turnkey-spaces/site-03.jpg'
      },
      {
        phase: 'Stage 03: Completed Space',
        title: 'Finished Living Handover',
        description: 'Full interior handover delivered with zero defects.',
        image: '/images/projects/modern-penthouse/penthouse-01.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p4',
    slug: 'turnkey-bespoke-spaces',
    title: 'Signature Central India Residencies',
    subtitle: 'Turnkey Residential Handover & Living Suites',
    location: 'Chhindwara & Nagpur',
    category: 'Turnkey',
    areaSqFt: 5400,
    year: 2025,
    completionTime: 'Turnkey Execution',
    clientBrief: 'A curated showcase of completed turnkey transformations across Central India, featuring bespoke living rooms, luxury modular kitchens, master bedroom suites, pooja rooms, and designer storage millwork.',
    clientRequirements: [
      'Comprehensive end-to-end turnkey delivery from bare shell to final handover',
      'High-grade BWP 710 marine plywood carcasses and anti-termite assurance',
      'Curated lighting designs combining ambient, task, and architectural accent fixtures',
      'Customized prayer alcoves and welcoming foyer consoles'
    ],
    designConcept: 'Elevated Everyday Living — creating cohesive, elegant homes tailored around everyday family routines, entertaining, and longevity.',
    layoutPlanning: 'Tailored room-by-room architectural planning maximizing natural light, ergonomic circulation, and intelligent hidden storage.',
    designApproach: [
      'Custom TV console backdrops with integrated acoustic fluted panels',
      'Ergonomic modular kitchens featuring Blum tandem boxes and spice pull-outs',
      'Full-height bedroom wardrobes with fluted glass accents and profile LED illumination',
      'Dedicated pooja mandirs with laser-cut brass motifs and indirect warm lighting'
    ],
    materials: ['BWP 710 Marine Ply', 'High-Gloss Acrylic', 'Matte PU Paint', 'Fluted Glass', 'Brushed Gold Hardware'],
    palette: [
      { name: 'Ivory Sand', hex: '#F7F4EE' },
      { name: 'Warm Greige', hex: '#DDD4C7' },
      { name: 'Warm Teak', hex: '#7D5836' },
      { name: 'Charcoal Noir', hex: '#262320' }
    ],
    coverImage: '/images/projects/turnkey-spaces/space-01.jpg',
    galleryImages: [
      '/images/projects/turnkey-spaces/space-01.jpg',
      '/images/projects/turnkey-spaces/space-02.jpg',
      '/images/projects/turnkey-spaces/space-04.jpg',
      '/images/projects/turnkey-spaces/space-07.jpg',
      '/images/projects/turnkey-spaces/space-15.jpg',
      '/images/projects/turnkey-spaces/space-17.jpg',
      '/images/projects/turnkey-spaces/space-20.jpg',
      '/images/projects/turnkey-spaces/space-36.jpg',
      '/images/projects/turnkey-spaces/space-38.jpg',
      '/images/projects/turnkey-spaces/site-01.jpg',
      '/images/projects/turnkey-spaces/site-02.jpg',
      '/images/projects/turnkey-spaces/site-03.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-01.jpg',
    afterImage: '/images/projects/turnkey-spaces/space-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: Initial Layout',
        title: 'Architectural Blueprint & BOQ',
        description: 'Itemized material schedule, 2D electrical layouts, and false ceiling elevation drawings.',
        image: '/images/projects/turnkey-spaces/site-02.jpg'
      },
      {
        phase: 'Stage 02: On-Site Carpentry',
        title: 'Plywood Joinery & Wall Treatments',
        description: 'Rigorous structural carpentry, laminate pressings, and acoustic panel installations.',
        image: '/images/projects/turnkey-spaces/site-03.jpg'
      },
      {
        phase: 'Stage 03: Completed Space',
        title: 'Turnkey Client Handover',
        description: 'Pristine deep cleaned handover ready for immediate move-in.',
        image: '/images/projects/turnkey-spaces/space-02.jpg'
      }
    ],
    featured: true
  }
];
