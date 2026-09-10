import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'p1',
    slug: 'modern-minimal-residence',
    title: 'The Alabaster Haven',
    subtitle: 'Warm Minimalist 3 BHK Luxury Apartment',
    location: 'Nagpur · Civil Lines',
    category: 'Residential',
    areaSqFt: 2450,
    year: 2025,
    completionTime: '90 Days',
    clientBrief: 'The clients, a doctor couple, sought a sanctuary that felt serene, uncluttered, and flooded with natural light. They wanted an open-concept flow with zero visual noise, integrated concealed storage, and organic tactile textures.',
    designApproach: [
      'Warm monolithic limestone microcement on feature walls',
      'Curved fluted white oak millwork concealing utility zones',
      'Indirect 2700K architectural cove lighting for evening relaxation',
      'Custom low-slung bouclé and leather seating arrangements',
      'Floor-to-ceiling linen drapery diffusing harsh afternoon sunlight'
    ],
    materials: ['Fluted White Oak', 'Travertine Roman Stone', 'Brushed Warm Brass', 'Monolithic Microcement', 'Belgian Linen'],
    palette: [
      { name: 'Warm Alabaster', hex: '#FAF7F2' },
      { name: 'Oatmeal Taupe', hex: '#E2D9CE' },
      { name: 'Smoked Oak', hex: '#8C7456' },
      { name: 'Deep Espresso', hex: '#2D2824' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'p2',
    slug: 'warm-contemporary-villa',
    title: 'Villa Tranquille',
    subtitle: 'Turnkey Luxury 4 BHK Duplex Villa',
    location: 'Chhindwara · VIP Road',
    category: 'Villas',
    areaSqFt: 4200,
    year: 2025,
    completionTime: '120 Days',
    clientBrief: 'A multi-generational family home that balances grand hospitality with intimate family zones. The client required bespoke walnut panelling, a central double-height chandelier living room, and a state-of-the-art island kitchen.',
    designApproach: [
      'Double-height acoustic fluted walnut backdrop in the formal salon',
      'Seamless Italian Botticino marble flooring with brass inlay details',
      'Gourmet open-concept island kitchen with Dekton Laurent porcelain countertops',
      'Private master suite featuring a glass-enclosed walk-in closet with integrated LED profiles',
      'Curated outdoor terrace lounge with tropical landscaping and water features'
    ],
    materials: ['Italian Botticino Marble', 'American Walnut Veneer', 'Dekton Porcelain', 'Champagne Gold Profiles', 'Tuscan Leather'],
    palette: [
      { name: 'Warm Cream', hex: '#FDFBF7' },
      { name: 'Rich Walnut', hex: '#5A3E2B' },
      { name: 'Burnished Gold', hex: '#C5A059' },
      { name: 'Muted Bronze', hex: '#7A6B5D' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'p3',
    slug: 'scandinavian-earth-apartment',
    title: 'The Earth & Oak Flat',
    subtitle: 'Thoughtful Turnkey 3 BHK Renovation',
    location: 'Nagpur · Ramdaspeth',
    category: 'Turnkey',
    areaSqFt: 1850,
    year: 2024,
    completionTime: '75 Days',
    clientBrief: 'Transforming a 15-year-old compartmentalized flat into an open, Scandinavian-inspired haven with extensive book storage, an airy dining nook, and a warm earthy color story.',
    designApproach: [
      'Demolished non-structural partition walls to merge living, dining, and breakfast bar',
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
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'p4',
    slug: 'lumina-boutique-studio',
    title: 'The Lumina Corporate Suite',
    subtitle: 'Bespoke Executive Office & Client Lounge',
    location: 'Nagpur · Wardha Road IT Park',
    category: 'Commercial',
    areaSqFt: 3100,
    year: 2025,
    completionTime: '60 Days',
    clientBrief: 'A forward-thinking law firm requested a sophisticated, client-facing environment that communicates prestige, discretion, and contemporary elegance.',
    designApproach: [
      'Smoked fluted glass acoustic meeting pods with blackened steel framing',
      'Executive conference room featuring a bespoke 14-seater monolithic marble table',
      'Bespoke espresso bar and hospitality lounge for VIP client hosting',
      'Biophilic green walls paired with precision linear architectural lighting'
    ],
    materials: ['Acoustic Ribbed Wood', 'Calacatta Nero Marble', 'Black Anodized Steel', 'Acoustic Felt', 'Saddle Leather'],
    palette: [
      { name: 'Warm Concrete', hex: '#EDE8E1' },
      { name: 'Nero Black', hex: '#1E1D1C' },
      { name: 'Warm Cognac', hex: '#A86D40' },
      { name: 'Muted Brass', hex: '#B89B6C' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];
