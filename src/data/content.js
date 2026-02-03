export const heroStats = [
  { label: 'Years crafting calm spaces', value: '15+' },
  { label: 'Boutique residences', value: '120' },
  { label: 'Global design awards', value: '08' },
];

const MAX_IMAGES_PER_CATEGORY = 6;

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

const homesEntries = getImageEntriesFromGlob(
  import.meta.glob('/Homes/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' }),
);
const hospitalityEntries = getImageEntriesFromGlob(
  import.meta.glob('/Hospitality/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' }),
);
const workplacesEntries = getImageEntriesFromGlob(
  import.meta.glob('/Workplaces & Retail/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' }),
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
  const entries = allEntries.slice(0, MAX_IMAGES_PER_CATEGORY);
  return entries.map((entry, index) => {
    const subfolder = getSubfolder(entry.path) || config.key;
    const label = `${subfolder} ${index + 1}`;
    return {
      id: slugify(`${config.key}-${subfolder}-${index + 1}`),
      label,
      url: entry.url,
      description: config.description,
      additionalImages: getAdditionalImages(allEntries, index, 3),
      details: {
        location: 'India',
        type: config.type,
        year: '2023',
        area: config.area,
        scope: config.scope,
        summary: config.summary,
      },
    };
  });
};

export const featureTiles = categoryConfigs.flatMap(buildTiles);

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

