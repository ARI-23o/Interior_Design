import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'p1',
    slug: 'pyramid-gold-residence',
    title: 'Pyramid Gold Residence',
    subtitle: 'Apartment 705–706, Pyramid Gold',
    location: 'Nagpur, Maharashtra',
    category: 'Residential',
    areaSqFt: 2800,
    year: 2025,
    completionTime: '90 Days',
    clientBrief: 'A contemporary residential interior designed around comfort, functionality and a warm, refined aesthetic. The home brings together neutral tones, textured surfaces, marble finishes, subtle mouldings and carefully placed accent colours. Each space has its own character while maintaining a cohesive visual language throughout the residence.',
    clientRequirements: [
      'Expansive combined apartment residence (Apt 705–706) integrating living, dining, private suites, and modular kitchen',
      'Neutral tones, textured surfaces, marble finishes, subtle mouldings and carefully placed accent colours',
      'Living room entertainment wall with bookmatched marble panel, vertical fluted details, and royal blue velvet seating',
      'Master bedroom suite featuring classical European wall mouldings in deep peacock teal, brass sconces, and dedicated study desk',
      'Secondary bedroom with geometric wallpaper accent wall, channel-tufted bed, and textured grey sliding wardrobe',
      'Integrated dining credenza, customized storage, and layered architectural cove lighting'
    ],
    designConcept: 'Contemporary Warm Luxury with Cohesive Character — balancing modern detailing with warmer tactile elements to create a practical yet welcoming family home.',
    layoutPlanning: 'Combined two apartments into a spacious unified home with seamless flow between the formal salon, dining hall, and private family retreats.',
    designApproach: [
      'Living and dining spaces featuring Calacatta marble wall panel, royal blue velvet sectional, and brass chandelier',
      'Classical grid mouldings in master bedroom finished in rich peacock teal with antique brass lantern sconces',
      'Extensive customised storage, cabinetry, and sliding wardrobes with integrated dressing mirrors',
      'Decorative wall treatments, layered ceiling profiles, and warm 2700K ambient illumination',
      'Carefully coordinated soft furnishings, curtains, and ergonomic study zones'
    ],
    materials: ['Calacatta Marble', 'Peacock Teal Moulding', 'Royal Blue Velvet', 'Textured Grey Laminate', 'Antique Brass'],
    palette: [
      { name: 'Calacatta White', hex: '#F0ECE6' },
      { name: 'Peacock Teal', hex: '#1C5B64' },
      { name: 'Royal Sapphire', hex: '#1C3F73' },
      { name: 'Warm Charcoal', hex: '#2B2B2D' }
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
    beforeImage: '/images/projects/turnkey-spaces/site-02.jpg',
    afterImage: '/images/projects/luxury-residence/residence-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: '3D Spatial Planning & Renders',
        description: '3D visualizations mapping out combined apartment flow, classical wall mouldings, and bespoke material pairings.',
        image: '/images/projects/luxury-residence/residence-03.jpg'
      },
      {
        phase: 'Stage 02: On-Site Framing',
        title: 'Civil & Carpentry Joinery',
        description: 'Precision on-site carcass fabrication, electrical conduit routing, and false ceiling framing.',
        image: '/images/projects/turnkey-spaces/site-02.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Turnkey Handover & Deep Cleaning',
        description: 'Pristine finished residence with polished marble, styled furnishings, and architectural lighting.',
        image: '/images/projects/luxury-residence/residence-01.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p2',
    slug: 'directors-office-vajanis',
    title: "Director's Office",
    subtitle: "Private Director's Office | Khush Vajani",
    location: 'Chitar Oli Metro Station Road, Nagpur, Maharashtra',
    category: 'Commercial',
    areaSqFt: 950,
    year: 2024,
    completionTime: '35 Days',
    clientBrief: "A compact executive office designed with a calm, sophisticated and functional approach for Khush Vajani. A warm neutral palette, clean-lined cabinetry, stone-finish worktop and subtle wood accents create a professional yet welcoming environment. The layout integrates the director's workstation, visitor seating, concealed storage and display cabinetry within a limited footprint. Layered lighting adds warmth, while the customised mandir introduces a personal element without disturbing the contemporary character of the workspace.",
    clientRequirements: [
      "Director's workstation with stone-finish worktop, chamfered edge profiling, and concealed cable routing",
      "Visitor seating and ergonomic cream leatherette executive director chair",
      "Concealed storage credenza and display cabinetry optimized for a compact footprint",
      "Full-height fluted taupe acoustic wall panelling with vertical profile illumination",
      "Customised consecrated Mandir with laser-cut lotus jali and brass bell chandelier",
      "Layered warm lighting adding depth and warmth to the contemporary executive suite"
    ],
    designConcept: "Calm Contemporary Corporate — utilizing warm neutral tones, stone textures, acoustic fluted panels, layered warm lighting, and sacred brass Mandir details.",
    layoutPlanning: "An efficient spatial configuration integrating the director's executive desk, meeting area, credenza storage, and an acoustically buffered Mandir altar with lotus motif backlit jali.",
    designApproach: [
      "Bespoke director desk crafted in durable stone-finish laminate with seamless mitred joints",
      "Precision fluted composite wall panelling providing acoustic absorption and architectural depth",
      "Mandir backdrop with backlit lotus flower motifs and solid brass hanging bells",
      "Concealed low-height storage credenza housing executive files, printer, and power hubs",
      "Refined warm architectural lighting creating clean shadow lines throughout the suite"
    ],
    materials: ['Stone-Finish Laminate', 'Acoustic Fluted Panels', 'Laser-Cut Acrylic & Brass', 'BWP Marine Ply', 'Supple Leatherette'],
    palette: [
      { name: 'Travertine Greige', hex: '#D8CEBF' },
      { name: 'Fluted Taupe', hex: '#8F7D6D' },
      { name: 'Sacred Brass', hex: '#C5A059' },
      { name: 'Deep Espresso', hex: '#2C2520' }
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
    beforeImage: '/images/projects/turnkey-spaces/site-01.jpg',
    afterImage: '/images/projects/duplex-villa/villa-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: Material Moodboard',
        title: 'Swatches & Texture Curation',
        description: 'Curating real material swatches matching travertine laminate, fluted panelling, brass fixtures, and leatherette upholstery.',
        image: '/images/projects/duplex-villa/villa-06.jpg'
      },
      {
        phase: 'Stage 02: Carpentry & CNC Joinery',
        title: 'Plywood Framing & Mandir Jali Assembly',
        description: 'Rigorous structural carpentry building the executive desk, storage credenza, and laser-cut mandir enclosure.',
        image: '/images/projects/turnkey-spaces/site-01.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Executive Cabin & Mandir Handover',
        description: 'Pristine handover with integrated lighting, polished executive desk, nameplate mounting, and pooja brass accessories.',
        image: '/images/projects/duplex-villa/villa-01.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p3',
    slug: 'raisoni-college-canteen',
    title: 'Raisoni College Canteen',
    subtitle: 'College Canteen Interior | Client: Shraddha Raisoni & Sabi Sir',
    location: 'Raisoni College, Wadi, Nagpur, Maharashtra',
    category: 'Commercial',
    areaSqFt: 1600,
    year: 2025,
    completionTime: '45 Days',
    clientBrief: 'A vibrant college canteen designed as an energetic and youthful social space for Shraddha Raisoni & Sabi Sir. The concept combines bold geometric flooring, teal-blue structural elements, warm timber detailing, yellow accents and graphic lighting to create a distinctive identity suited to a student environment. The planning accommodates high-capacity dining, food-service counters, circulation and informal interaction, creating a practical space for heavy everyday student use.',
    clientRequirements: [
      'Custom geometric ceiling installation developed using interconnected timber frames with integrated illuminated panels',
      'Black-and-white patterned flooring complementing the ceiling geometry',
      'Yellow and black furniture introducing a playful contrast and heavy-duty durability',
      'High-capacity dining, food-service counters, circulation and informal interaction zones',
      'Neon graphics, typography ("Good food, Good mood"), and feature lighting reinforcing the casual cafe character'
    ],
    designConcept: 'Energetic & Youthful Social Space — combining handcrafted geometric timber trusses, stark black-and-white geometric floor patterns, teal-blue accents, warm yellow bistro seating, and glowing neon graphics.',
    layoutPlanning: 'Spacious circulation pathways accommodating high student footfall between the main service counter, takeaway queue, and central communal dining beneath the sculptural ceiling.',
    designApproach: [
      'On-site precision carpentry fabrication of interconnected geometric timber ceiling frames',
      'High-contrast geometric ceramic floor tile installation with durable commercial wear layer',
      'Custom neon sign typography and industrial cage pendants with warm Edison bulbs',
      'Commercial-grade granite service billing counter with integrated food-display zones',
      'Robust, easy-to-clean bistro seating designed for heavy daily institutional usage'
    ],
    materials: ['Pine Wood Trusses', 'Geometric Ceramic Tiles', 'Commercial Marine Ply', 'Powder-Coated Steel', 'Custom Neon Flex'],
    palette: [
      { name: 'Mustard Yellow', hex: '#E5A93C' },
      { name: 'Teal Blue', hex: '#1C5B64' },
      { name: 'Warm Pine', hex: '#C29B64' },
      { name: 'Charcoal Noir', hex: '#232323' }
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
    beforeImage: '/images/projects/modern-penthouse/penthouse-06.jpg',
    afterImage: '/images/projects/modern-penthouse/penthouse-05.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: '3D Concept Renders & Neon Graphics',
        description: 'Detailed 3D visualizations establishing ceiling truss geometry, floor tiling, and neon graphics.',
        image: '/images/projects/modern-penthouse/penthouse-02.jpg'
      },
      {
        phase: 'Stage 02: On-Site Carpentry',
        title: 'Interconnected Timber Ceiling Framing',
        description: 'Precision on-site structural carpentry fabricating the geometric triangular pine wood ceiling canopy and electrical routing.',
        image: '/images/projects/modern-penthouse/penthouse-06.jpg'
      },
      {
        phase: 'Stage 03: Handover & Launch',
        title: 'Completed Canteen Handover',
        description: 'Pristine turnkey delivery with illuminated neon branding, polished counters, and styled seating ready for opening day.',
        image: '/images/projects/modern-penthouse/penthouse-04.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p4',
    slug: 'pershionkar-residence',
    title: 'Pershionkar Residence',
    subtitle: 'Residential Apartment Interior | Client: Sandeep Pershionkar',
    location: 'Apartment 703, Pyramid Gold, Besa–Manish Nagar, Nagpur, Maharashtra',
    category: 'Turnkey',
    areaSqFt: 2400,
    year: 2026,
    completionTime: '90 Days',
    clientBrief: 'A contemporary residential interior designed for Sandeep Pershionkar around efficient space utilisation, customised storage and refined detailing. The overall palette combines warm neutrals, high-gloss finishes, marble textures, dark accents and selective metallic detailing to create a sophisticated yet comfortable home. The bedrooms feature extensive custom-designed wardrobes and integrated dressing units, incorporating internal organisers, concealed storage, illuminated display sections and space-saving solutions. Warm cove lighting and layered ceiling treatments soften the glossy surfaces and create a comfortable ambience. A distinctive element is the custom pooja unit, designed in a predominantly white palette with traditional arched detailing, carved columns, religious motifs and brass bells.',
    clientRequirements: [
      'Custom pooja unit in predominantly white palette with traditional arched detailing, carved columns, religious motifs and brass bells',
      'Bedrooms with extensive custom-designed wardrobes, integrated dressing units, internal organisers, and space-saving solutions',
      'Window seating and corner study desk zone with overhead illuminated display nooks',
      'Upholstered headboards, bookmatched marble TV wall, integrated display cabinetry, and concealed functional storage',
      'Material transitions and vertical detailing helping visually enlarge compact spaces while maintaining continuity',
      'Warm cove lighting and layered ceiling treatments softening glossy surfaces'
    ],
    designConcept: 'Warm Contemporary Luxury with Traditional Grace — combining warm neutrals, high-gloss finishes, marble textures, dark accents, champagne metallic detailing, and an artisanal white carved pooja mandir.',
    layoutPlanning: 'Efficient spatial utilisation connecting the entrance foyer, pooja temple, living salon, modular kitchen, and private bedroom suites with seamless circulation and concealed handleless storage.',
    designApproach: [
      'Bespoke white carved Mandir with Om/Swastik motifs, multi-tier bell niches, and concealed pooja storage drawers',
      'Master bedroom with rust/terracotta channel-tufted acoustic headboard, window couch, and corner workstation',
      'Multi-panel sliding wardrobes with high-gloss geometric triangular acrylic inserts and pull-out vanity drawers',
      'Living room marble entertainment wall with vertical champagne profile inlays and 3D floral wall art',
      'Dining credenza with tinted glass display shutters and quartz counter for crockery storage'
    ],
    materials: ['High-Gloss Acrylic', 'Carved White Corian/Ply', 'BWP 710 Marine Plywood', 'Champagne Gold Profiles', 'Terracotta Velvet'],
    palette: [
      { name: 'Pure White', hex: '#FAF9F6' },
      { name: 'Champagne Greige', hex: '#D4AF9A' },
      { name: 'Terracotta Rust', hex: '#A8573C' },
      { name: 'Warm Charcoal', hex: '#262320' }
    ],
    coverImage: '/images/projects/turnkey-spaces/space-01.jpg',
    galleryImages: [
      '/images/projects/turnkey-spaces/space-01.jpg',
      '/images/projects/turnkey-spaces/space-02.jpg',
      '/images/projects/turnkey-spaces/space-03.jpg',
      '/images/projects/turnkey-spaces/space-04.jpg',
      '/images/projects/turnkey-spaces/space-05.jpg',
      '/images/projects/turnkey-spaces/space-06.jpg',
      '/images/projects/turnkey-spaces/space-07.jpg',
      '/images/projects/turnkey-spaces/space-08.jpg',
      '/images/projects/turnkey-spaces/space-09.jpg',
      '/images/projects/turnkey-spaces/space-10.jpg',
      '/images/projects/turnkey-spaces/space-11.jpg',
      '/images/projects/turnkey-spaces/space-12.jpg',
      '/images/projects/turnkey-spaces/space-13.jpg',
      '/images/projects/turnkey-spaces/space-14.jpg',
      '/images/projects/turnkey-spaces/space-15.jpg',
      '/images/projects/turnkey-spaces/space-16.jpg',
      '/images/projects/turnkey-spaces/space-17.jpg',
      '/images/projects/turnkey-spaces/space-18.jpg',
      '/images/projects/turnkey-spaces/space-19.jpg',
      '/images/projects/turnkey-spaces/space-20.jpg',
      '/images/projects/turnkey-spaces/space-21.jpg',
      '/images/projects/turnkey-spaces/space-22.jpg',
      '/images/projects/turnkey-spaces/space-23.jpg',
      '/images/projects/turnkey-spaces/space-24.jpg',
      '/images/projects/turnkey-spaces/space-25.jpg',
      '/images/projects/turnkey-spaces/space-26.jpg',
      '/images/projects/turnkey-spaces/space-27.jpg',
      '/images/projects/turnkey-spaces/space-28.jpg',
      '/images/projects/turnkey-spaces/space-29.jpg',
      '/images/projects/turnkey-spaces/space-30.jpg',
      '/images/projects/turnkey-spaces/space-31.jpg',
      '/images/projects/turnkey-spaces/space-32.jpg',
      '/images/projects/turnkey-spaces/space-33.jpg',
      '/images/projects/turnkey-spaces/space-34.jpg',
      '/images/projects/turnkey-spaces/space-35.jpg',
      '/images/projects/turnkey-spaces/space-36.jpg',
      '/images/projects/turnkey-spaces/space-37.jpg',
      '/images/projects/turnkey-spaces/space-38.jpg',
      '/images/projects/turnkey-spaces/space-39.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-01.jpg',
    afterImage: '/images/projects/turnkey-spaces/space-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: 'Turnkey 3D Renders & Material Selection',
        description: 'Comprehensive 3D visualizations of living salon, pooja mandir, kitchen, and geometric wardrobes.',
        image: '/images/projects/turnkey-spaces/space-02.jpg'
      },
      {
        phase: 'Stage 02: On-Site Carpentry',
        title: 'BWP 710 Carcass Framing & Mandir Fabrication',
        description: 'Fabrication of heavy-duty marine ply carcasses, acrylic pressing, and precision false ceiling framing.',
        image: '/images/projects/turnkey-spaces/site-01.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Turnkey Residential Deep Clean & Handover',
        description: 'Complete ready-to-move-in handover with styled soft furnishings, pooja mandir setup, and defect-free snag clearance.',
        image: '/images/projects/turnkey-spaces/space-01.jpg'
      }
    ],
    featured: true
  }
];
