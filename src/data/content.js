export const heroStats = [
  { label: 'Years crafting calm spaces', value: '15+' },
  { label: 'Boutique residences', value: '120' },
  { label: 'Global design awards', value: '08' },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const getImageEntriesFromGlob = (globResult) =>
  Object.entries(globResult)
    .map(([path, url]) => ({ path, url }))
    .sort((a, b) => a.path.localeCompare(b.path));

const getSubfolder = (path) => {
  const segments = path.split('/');
  return segments.length > 2 ? segments[2] : '';
};

const getAdditionalImages = (entries, index, count = 3) => {
  if (!entries.length) return [];
  const images = [];
  for (let offset = 1; offset <= count; offset += 1) {
    images.push(entries[(index + offset) % entries.length].url);
  }
  return images;
};

const projectOverrides = {
  Ramada: {
    label: 'Floating Cloud, Kasauli',
    description:
      "Perched in the hills of Kasauli, this 80 key 5-star property is conceived as a contextual, thoughtful retreat that gently revives the town's colonial roots with eclectic accessories adding personality without visual noise. Light and airy, it relies on soft, muted tones and natural textures to create a calm, experiential environment that feels both familiar and distinctly of its place. A quiet narrative of the Kasauli wildflower motif runs through the guest rooms with etchings on wood veneer revealing themselves gently as guests move through the space. An inviting lounging corner oriented toward the view becomes the perfect nook to snuggle in with a book, anchored by a warm rug and complemented by an ottoman for added comfort. Functionality is seamlessly integrated: well-appointed storage with a sliding full-height mirror and luggage rack, a hygienic quartz countertop with durable laminates, and a flexible round table paired with a swivel chair and tiltable lights. Artwork inspired by Himachali weaving patterns completes the layered, place-sensitive experience.",
    details: {
      location: 'Kasauli, Haryana',
      scope: 'Interiors',
      type: 'Hospitality',
      subtype: 'Hotel',
      area: '125,000 sq ft',
      status: 'Ongoing',
    },
  },
  'Shivam Exports': {
    label: 'The Woven Loft',
    description:
      'Designed as an immersive lifestyle destination, this textile centre reimagines the traditional showroom experience. Crafted to meet international trade standards, the space invites B2B visitors to explore, touch, and connect with the collection in a warm, inspiring environment. Flowing forms, sculptural lighting, and soft seating create a tactile, gallery-like atmosphere that blends hospitality with retail sensibility. Intuitive pathways guide visitors through dynamic display zones, encouraging discovery at their own pace. Earthy materials and warm tones lend a human touch, transforming the space into a memorable design experience that engages the senses and celebrates the beauty of textiles.',
    details: {
      location: 'Panipat, Haryana',
      scope: 'Interiors',
      type: 'Commercial',
      subtype: 'Office and display',
      area: '14,500 sq ft',
      status: 'Ongoing',
    },
  },
  'Office @ 43': {
    label: 'Office @ 43',
    description:
      "Situated in Panipat, the textile hub of India, this 15,000 sq. ft. head office for a leading textile manufacturer and exporter spans three floors, housing the board of directors and all teams essential to the company's operations. The design embodies understated luxury with a hint of fun through a minimal aesthetic and richly textured materials. A subdued palette, layered with tactile finishes and warm wood tones, creates a refined yet inviting environment, striking a thoughtful balance between the client's vibrant personality and the studio's calm, contemporary design language.",
    details: {
      location: 'Panipat, Haryana',
      scope: 'Architecture + Interiors + Landscape',
      type: 'Commercial',
      subtype: 'Office and display',
      area: '15,000 sq ft',
      status: 'Complete',
    },
  },
  'Saraswati Sadan': {
    label: 'Saraswati Sadan',
    description:
      'Conceived as twin residences for two brothers, this project beautifully interprets the idea of individuality within togetherness. Though designed as separate units, the homes share a cohesive visual language that binds them as one to the outside world. Rooted in the brief - minimal, vibrant, and simple - the spaces balance clean, minimal forms with layered textures and moments of quiet vibrancy. The design embodies understated luxury, where tactile materials and warm woods offset a muted palette. Playful details speak to the owners\' personalities, while the overall calm aesthetic creates a sophisticated, contemporary haven for the families.',
    details: {
      location: 'Jind, Haryana',
      scope: 'Interiors + Landscape',
      type: 'Residential',
      subtype: 'Bungalow',
      area: '10,000 sq ft',
      status: 'Complete',
    },
  },
  'PP Showroom': {
    label: 'PP Showroom',
    details: {
      location: 'Panipat, Haryana',
      scope: 'Architecture + Interiors + Landscape',
      type: 'Residential',
      subtype: 'Display',
      status: 'Complete',
    },
  },
  'Metro 82': {
    label: 'Metro 82',
    details: {
      location: 'Mohali, Punjab',
      scope: 'Architecture + Interiors + Landscape',
      type: 'Commercial',
      subtype: 'Office and display',
      area: '27,000 sq ft',
      status: 'Ongoing',
    },
  },
};

const shuffleEntries = (entries) => {
  const shuffled = [...entries];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const homesEntries = getImageEntriesFromGlob(
  import.meta.glob('/Homes/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' }),
);
const hospitalityEntries = getImageEntriesFromGlob(
  import.meta.glob('/Hospitality/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' }),
);
const workplacesOfficeEntries = getImageEntriesFromGlob(
  import.meta.glob('/Workplaces & Retail/Office @ 43/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' }),
);
const workplacesShivamEntries = getImageEntriesFromGlob(
  import.meta.glob('/Workplaces & Retail/Shivam Exports/**/*.{jpg,jpeg,png,webp}', {
    eager: true,
    as: 'url',
  }),
);
const workplacesEntries = [...workplacesOfficeEntries, ...workplacesShivamEntries].sort((a, b) =>
  a.path.localeCompare(b.path),
);

const categoryConfigs = [
  {
    key: 'Homes',
    entries: homesEntries,
    type: 'Residential',
    scope: 'Architecture & interiors',
    area: '2,000-4,000 sq ft',
    description: 'Warm residences shaped by soft light, layered textures, and calm daily rituals.',
    summary:
      'Residential environments that balance openness with privacy, using tactile materials and gentle lighting to create a lived-in calm.',
  },
  {
    key: 'Hospitality',
    entries: hospitalityEntries,
    type: 'Hospitality',
    scope: 'Guest experience design',
    area: '5,000-12,000 sq ft',
    description: 'Guest-first spaces that combine comfort, warmth, and a curated sense of arrival.',
    summary:
      'Hospitality spaces designed to feel welcoming and refined, with layered lighting and thoughtful circulation that guide the guest journey.',
  },
  {
    key: 'Workplaces & Retail',
    entries: workplacesEntries,
    type: 'Workplace / Retail',
    scope: 'Workplace interiors',
    area: '4,000-15,000 sq ft',
    description: 'Workplaces and retail environments tuned for clarity, flow, and brand expression.',
    summary:
      'Flexible work and retail environments that prioritize wayfinding, material consistency, and human-scale moments within larger footprints.',
  },
];

const buildTiles = (config) => {
  const allEntries = config.entries;
  return allEntries.map((entry, index) => {
    const subfolder = getSubfolder(entry.path) || config.key;
    const override = projectOverrides[subfolder];
    const label = override?.label ?? subfolder;
    return {
      id: slugify(entry.path),
      label,
      url: entry.url,
      description: override?.description ?? config.description,
      additionalImages: getAdditionalImages(allEntries, index, 3),
      details: {
        location: 'India',
        type: config.type,
        year: '2023',
        area: config.area,
        scope: config.scope,
        summary: config.summary,
        ...(override?.details ?? {}),
      },
    };
  });
};

const allTiles = categoryConfigs.flatMap(buildTiles);
export const featureTiles = shuffleEntries(allTiles);

export const projectImages = [
  {
    title: 'Coastal Atrium',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Verdant Loft',
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Nordic Sanctuary',
    url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Luminous Studio',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Desert Pavilion',
    url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sculpted Stair Hall',
    url: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Verdigris Salon',
    url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Biophilic Library',
    url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Stone Courtyard',
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Oceanfront Atelier',
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Japandi Suite',
    url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Garden Bath',
    url: 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Monochrome Den',
    url: 'https://images.unsplash.com/photo-1462219184706-54ee45584537?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Travertine Loft',
    url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sunken Lounge',
    url: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Atrium Garden',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Minimalist Studio',
    url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Canyon Dining',
    url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Arched Gallery',
    url: 'https://images.unsplash.com/photo-1505692794400-5e0a87b38a6a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Limestone Patio',
    url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Tea Pavilion',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Layered Hall',
    url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1000&q=80',
  },
];

export const blogPosts = [
  {
    title: 'Designing with restraint',
    excerpt: 'Balancing tone-on-tone palettes with tactile contrast.',
    date: 'Nov 18 • Editorial',
  },
  {
    title: 'Biophilic rhythm at home',
    excerpt: 'How greenery and daylight inform our residential briefs.',
    date: 'Nov 05 • Process',
  },
  {
    title: 'Sourcing artisan textiles',
    excerpt: 'A look inside our collaborations with regional makers.',
    date: 'Oct 22 • Field Notes',
  },
  {
    title: 'Curating scent and sound',
    excerpt: 'Layering olfactory notes and ambient scores to deepen mood.',
    date: 'Oct 05 • Sensory',
  },
  {
    title: 'Micro luxury for compact homes',
    excerpt: 'Storage, millwork, and rituals designed for city footprints.',
    date: 'Sep 21 • Small Space',
  },
  {
    title: 'Finding calm through vintage sourcing',
    excerpt: 'Why patina-rich objects anchor contemporary palettes.',
    date: 'Sep 03 • Archive',
  },
];

export const careerOpenings = [
  { role: 'Design Lead', type: 'Full-time · NYC', status: 'Open' },
  { role: 'Material Researcher', type: 'Contract · Remote', status: 'Open' },
  { role: 'Project Coordinator', type: 'Full-time · Hybrid', status: 'Filled' },
];

export const teamFounders = [
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & Creative Director',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Leading with vision and craft, Sarah brings 15 years of design expertise to every project.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Co-Founder & Design Principal',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Marcus specializes in material research and sustainable design practices.',
  },
];

export const teamMembers = [
  {
    name: 'Elena Vasquez',
    role: 'Senior Designer',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'James Park',
    role: 'Material Researcher',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sophie Laurent',
    role: 'Project Coordinator',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'David Kim',
    role: 'Stylist',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Isabella Rossi',
    role: 'Design Strategist',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Alex Thompson',
    role: 'Visual Designer',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Maya Patel',
    role: 'Design Associate',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Ryan Foster',
    role: 'Studio Manager',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
];

