import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'p1',
    slug: 'orange-bite-bistro',
    title: 'Orange Bite Cafe & Bistro',
    subtitle: 'Vibrant Commercial Cafe & Urban Dining Interior',
    location: 'Chhindwara · Central India',
    category: 'Commercial',
    areaSqFt: 1450,
    year: 2025,
    completionTime: '45 Days',
    clientBrief: 'The client commissioned Sowakaah Designs to create a vibrant, youthful, and contemporary cafe interior for Orange Bite. The brief called for eye-catching visual anchors, photogenic neon branding corners, distinct social and intimate seating zones, and an industrial-contemporary ceiling installation to create an unforgettable dining ambiance.',
    clientRequirements: [
      'Sculptural geometric triangular timber coffered ceiling suspended across the main dining hall',
      'High-contrast black-and-white geometric tile flooring delineating circulation routes',
      'Custom illuminated neon wall branding ("Orange Bite", "Good Vibes Only", "Be Happy")',
      'Ergonomic commercial dining zones combining warm yellow bistro chairs, charcoal banquettes, and counter seating',
      'Heavy-duty granite barista & cash billing counter with hanging industrial drop pendants'
    ],
    designConcept: 'Industrial Contemporary with Playful Citrus & Mustard Accents — blending handcrafted pine joinery, bold monochrome floor tessellations, warm 2700K ambient lighting, and high-impact branded signage.',
    layoutPlanning: 'Intelligently split into three functional zones: a welcoming billing and takeaway counter at the entrance, comfortable perimeter booth seating for relaxed dining, and an open central seating cluster under the sculptural triangular timber canopy.',
    designApproach: [
      'Custom on-site carpentry fabrication of modular 3D triangular pine wood ceiling trusses',
      'Geometric floor tiling creating dynamic movement and visually expanding the dining floor',
      'Warm indirect LED backlighting behind acrylic and back-painted glass brand signage',
      'Matte black industrial cage pendants paired with warm Edison filament bulbs',
      'Durable, stain-resistant commercial laminates and high-density foam upholstery'
    ],
    materials: ['Pine Wood Trusses', 'Geometric Ceramic Tiles', 'Commercial Marine Ply', 'Powder-Coated Steel', 'Custom Neon Flex'],
    palette: [
      { name: 'Citrus Orange', hex: '#E86328' },
      { name: 'Bistro Mustard', hex: '#E5A93C' },
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
        title: '3D Spatial Planning & Neon Branding',
        description: 'Detailed photorealistic 3D visualization establishing lighting coves, geometric floor patterns, and brand typography.',
        image: '/images/projects/modern-penthouse/penthouse-02.jpg'
      },
      {
        phase: 'Stage 02: On-Site Carpentry',
        title: 'Triangular Timber Ceiling Framing',
        description: 'Precision on-site structural carpentry fabricating the geometric triangular pine wood ceiling canopy and electrical routing.',
        image: '/images/projects/modern-penthouse/penthouse-06.jpg'
      },
      {
        phase: 'Stage 03: Handover & Launch',
        title: 'Completed Commercial Cafe Handover',
        description: 'Pristine turnkey delivery with illuminated neon branding, polished counters, and styled seating ready for opening day.',
        image: '/images/projects/modern-penthouse/penthouse-04.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p2',
    slug: 'vajanis-executive-suite',
    title: "Executive Suite & Sacred Mandir at Vajani's",
    subtitle: 'Bespoke Corporate Director Cabin & Integrated Prayer Altar',
    location: 'Chhindwara · MP',
    category: 'Commercial',
    areaSqFt: 950,
    year: 2025,
    completionTime: '35 Days',
    clientBrief: "Commissioned for Khuush Vajani (Director, Vajani's), this executive leadership cabin balances corporate gravitas with spiritual serenity. The client desired a monolithic executive desk, fluted wall treatments, executive visitor seating, and a consecrated, beautifully detailed Mandir pooja enclave within the private office.",
    clientRequirements: [
      'Monolithic beige travertine-finish executive desk with chamfered edges and concealed cable raceways',
      'Full-height fluted taupe acoustic wall panelling with embedded vertical warm LED profile lighting',
      'Dedicated consecrated Mandir sanctuary featuring CNC laser-cut lotus jali and brass bell chandelier',
      'Ergonomic cream leatherette high-back director chair with matching guest visitor chairs',
      'Comprehensive material moodboard balancing natural stone, fluted textures, and sacred brass elements'
    ],
    designConcept: 'Understated Corporate Luxury with Spiritual Harmony — utilizing warm greige stone textures, acoustic fluted panels, soft warm 2700K illumination, and artisanal brass detailing.',
    layoutPlanning: 'A dual-zoned functional layout: the primary executive workstation and client meeting desk on one side, paired with an acoustically buffered Mandir altar on the adjoining wall featuring dedicated pooja drawers and display ledges.',
    designApproach: [
      'Bespoke director desk crafted in durable stone-finish laminate with seamless mitred joints',
      'Precision fluted composite wall panelling providing acoustic absorption and architectural depth',
      'Mandir backdrop with backlit lotus flower motifs and solid brass hanging bells',
      'Concealed low-height storage credenza housing executive files, printer, and power hubs',
      'Refined warm architectural lighting creating clean shadow lines throughout the suite'
    ],
    materials: ['Beige Travertine Laminate', 'Acoustic Fluted Panels', 'Laser-Cut Acrylic & Brass', 'BWP 710 Marine Ply', 'Supple Leatherette'],
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
    slug: 'amber-charcoal-residence',
    title: 'The Amber & Charcoal Luxury Residence',
    subtitle: 'Bespoke Turnkey 3 BHK Contemporary Apartment',
    location: 'Nagpur · Ramdaspeth',
    category: 'Residential',
    areaSqFt: 2200,
    year: 2025,
    completionTime: '75 Days',
    clientBrief: 'The homeowners envisioned a contemporary, sophisticated residence balancing dramatic charcoal cabinetry with warm marble wall cladding, fluted stone textures, and ambient 2700K lighting. The priority was an open-concept living and dining area anchored by a statement TV wall, a luxury curio display bar, and an understated modern master suite.',
    clientRequirements: [
      'Calacatta marble TV feature wall integrated with vertical matte black acoustic fluted divider partition',
      'Charcoal custom cabinetry with warm backlit illuminated glass display niches for glassware and art',
      'Round Calacatta marble center table paired with plush amber velvet accent lounge chairs',
      'Master bedroom featuring geometric wallpaper accent wall, channel-tufted headboard, and sliding concrete-textured wardrobe',
      'Full-height floor-to-ceiling mirror panels to maximize light reflection and spatial perception'
    ],
    designConcept: 'Warm Monochrome with Natural Stone & Amber Velvet — contrasting deep charcoal millwork against polished marble slabs, warm profile cove lighting, and tailored amber velvet textiles.',
    layoutPlanning: 'An expansive open-concept living and dining hall anchored by a central marble feature wall and vertical slatted partition that discreetly divides the public entertaining zone from private bedroom hallways.',
    designApproach: [
      'Bookmatched marble entertainment backdrop paired with matte black vertical acoustic slats',
      'Custom floating media console with soft-close Blum tandem drawers and hidden wire troughs',
      'Integrated dining bar console with warm LED backlighting and fluted glass display shutters',
      'Master bedroom sliding wardrobe in textured concrete-finish laminate with built-in dressing mirror',
      'Multi-tiered architectural lighting combining recessed anti-glare spots, cove strips, and bedside drop pendants'
    ],
    materials: ['Calacatta Marble', 'Charcoal Matte PU', 'Fluted Black Slats', 'Textured Grey Laminate', 'Amber Velvet'],
    palette: [
      { name: 'Charcoal Noir', hex: '#242426' },
      { name: 'Calacatta White', hex: '#F0ECE6' },
      { name: 'Amber Velvet', hex: '#C2843A' },
      { name: 'Warm Greige', hex: '#9E9489' }
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
      '/images/projects/luxury-residence/residence-09.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-02.jpg',
    afterImage: '/images/projects/luxury-residence/residence-01.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: '3D Living & Lighting Renders',
        description: 'Proportion and lighting simulation for the marble TV wall, fluted partition, and amber velvet styling.',
        image: '/images/projects/luxury-residence/residence-03.jpg'
      },
      {
        phase: 'Stage 02: On-Site Framing',
        title: 'Plywood Joinery & Partition Erection',
        description: 'Precision carpentry framing for vertical fluted partitions, TV backing, and modular wardrobe carcasses.',
        image: '/images/projects/turnkey-spaces/site-02.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Turnkey Handover & Deep Cleaning',
        description: 'Flawless handover with polished marble, styled furniture, illuminated niches, and defect-free snag clearance.',
        image: '/images/projects/luxury-residence/residence-01.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p4',
    slug: 'royal-blue-residence',
    title: 'Royal Blue Salon & Classic Peacock Teal Residence',
    subtitle: 'Luxury Turnkey Villa with Classical Wall Panelling & Traditional Jhula',
    location: 'Chhindwara · VIP Road',
    category: 'Villas',
    areaSqFt: 3800,
    year: 2025,
    completionTime: '110 Days',
    clientBrief: 'A grand multi-generational bungalow combining classical European wall panelling with authentic Indian hospitality elements. The family requested a statement living salon featuring a royal blue velvet sectional, a suspended solid wood swing (Jhula), CNC wooden jaali screens, and a tranquil master suite in deep peacock teal wall mouldings.',
    clientRequirements: [
      'Royal blue velvet L-shaped sectional sofa with brass accent legs and round marble center table',
      'Traditional handcrafted solid wood suspended Jhula (swing) integrated into the formal salon layout',
      'Decorative CNC laser-cut wooden jaali room partition with hanging rustic rope incandescent pendants',
      'Living room Calacatta marble wall panel with floating matte charcoal entertainment console',
      'Peacock teal master bedroom with classical European wall mouldings, brass lantern sconces, and built-in study desk'
    ],
    designConcept: 'Classical Elegance with Jewel Tone Opulence — merging rich royal sapphire blue and peacock teal hues with traditional wooden craftsmanship, Calacatta stone, and antique brass details.',
    layoutPlanning: 'Zoned ground floor hosting with distinct conversational enclaves: the primary blue velvet salon, an intimate Jhula reading lounge, and a dining corridor framed by an artistic wooden jaali screen.',
    designApproach: [
      'Bespoke fabrication of custom suspended wooden swing with high-tensile brass chains',
      'Classical grid moulding on master bedroom feature wall finished in deep peacock teal PU paint',
      'Laser-cut wooden partition providing visual privacy between entrance and salon while preserving natural airflow',
      'Integrated study desk and vanity joinery in master suite with overhead storage and fluted accents',
      'Ornate crystal and brass chandelier serving as the central living room centerpiece'
    ],
    materials: ['Royal Blue Velvet', 'Solid Teak Wood', 'Calacatta Marble', 'Peacock Teal PU Moulding', 'Antique Brass Accents'],
    palette: [
      { name: 'Royal Sapphire', hex: '#1C3F73' },
      { name: 'Peacock Teal', hex: '#1C5B64' },
      { name: 'Warm Teak', hex: '#8B5A2B' },
      { name: 'Antique Gold', hex: '#CBA135' }
    ],
    coverImage: '/images/projects/luxury-residence/residence-10.jpg',
    galleryImages: [
      '/images/projects/luxury-residence/residence-10.jpg',
      '/images/projects/luxury-residence/residence-11.jpg',
      '/images/projects/luxury-residence/residence-12.jpg',
      '/images/projects/luxury-residence/residence-13.jpg',
      '/images/projects/luxury-residence/residence-14.jpg',
      '/images/projects/luxury-residence/residence-15.jpg',
      '/images/projects/luxury-residence/residence-16.jpg',
      '/images/projects/luxury-residence/residence-17.jpg'
    ],
    beforeImage: '/images/projects/turnkey-spaces/site-03.jpg',
    afterImage: '/images/projects/luxury-residence/residence-10.jpg',
    executionStages: [
      {
        phase: 'Stage 01: 3D Visualization',
        title: 'Classical Panelling & Material 3D Renders',
        description: '3D visualization mapping out classical wall mouldings, blue velvet seating, and ceiling chandelier placement.',
        image: '/images/projects/luxury-residence/residence-14.jpg'
      },
      {
        phase: 'Stage 02: On-Site Framing',
        title: 'Moulding Carpentry & Ceiling Scaffolding',
        description: 'On-site execution of European wall panelling, ceiling coffer framing, and suspended jhula ceiling anchor points.',
        image: '/images/projects/turnkey-spaces/site-03.jpg'
      },
      {
        phase: 'Stage 03: Final Handover',
        title: 'Turnkey Handover & Villa Styling',
        description: 'Complete handover delivered on schedule with upholstered blue velvet seating, hung swing, and brass lighting.',
        image: '/images/projects/luxury-residence/residence-10.jpg'
      }
    ],
    featured: true
  },
  {
    id: 'p5',
    slug: 'champagne-rose-residence',
    title: 'Rose Gold & Champagne Luxe Residence',
    subtitle: 'Complete Turnkey Residential Transformation & Custom Mandir Suite',
    location: 'Chhindwara & Nagpur',
    category: 'Turnkey',
    areaSqFt: 3200,
    year: 2025,
    completionTime: '90 Days',
    clientBrief: 'A complete end-to-end turnkey transformation spanning living salon, dedicated pooja mandir, gourmet modular kitchen, master suite with terracotta accents, and designer sliding wardrobes featuring bespoke geometric high-gloss acrylic panels.',
    clientRequirements: [
      'Comprehensive turnkey delivery from civil carpentry and electricals to custom modular joinery and final styling',
      'Rose-taupe living room TV panel with vertical gold metal inlays and dining bevelled mirror accent wall',
      'Custom carved white Mandir temple unit integrated seamlessly with marble TV backdrop',
      'Master bedroom featuring terracotta/rust acoustic headboard, study workstation, and dual Roman blinds',
      'Multi-panel sliding wardrobe doors with high-gloss geometric triangular acrylic facets',
      'Modern modular kitchen with fluted glass cabinetry, quartz countertops, and Blum lift-up systems'
    ],
    designConcept: 'Warm Champagne Elegance — combining soft rose-gold metal trims, bevelled mirror reflective surfaces, warm taupe PU finishes, and vibrant terracotta upholstery.',
    layoutPlanning: 'Full turnkey layout reconfiguration connecting the welcoming foyer, pooja temple, living salon, modular kitchen, and private bedroom suites with seamless circulation and concealed handleless storage.',
    designApproach: [
      'Full-height bevelled mirror accent wall in dining to visually double the room volume and reflect natural sunlight',
      'Custom TV panelling with vertical champagne gold T-profile strips and 3D floral hexagonal wall art',
      'Bespoke Mandir alcove with CNC laser-carved temple jaali and soft warm LED backlighting',
      'Multi-panel sliding wardrobes with high-gloss geometric triangular acrylic laminate faces',
      'Ergonomic study desk and vanity units integrated seamlessly into master bedroom joinery'
    ],
    materials: ['Rose Gold Stainless Steel', 'Bevelled Mirrors', 'High-Gloss Acrylic', 'BWP 710 Marine Plywood', 'Terracotta Linen Velvet'],
    palette: [
      { name: 'Champagne Rose', hex: '#D4AF9A' },
      { name: 'Warm Greige', hex: '#CDC3B7' },
      { name: 'Terracotta Rust', hex: '#A8573C' },
      { name: 'Mirror Gold', hex: '#C59D5F' }
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
      '/images/projects/luxury-residence/residence-18.jpg',
      '/images/projects/luxury-residence/residence-19.jpg',
      '/images/projects/luxury-residence/residence-20.jpg',
      '/images/projects/luxury-residence/residence-21.jpg'
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
        title: 'BWP 710 Carcass Framing & Electricals',
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
