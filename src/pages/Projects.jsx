import { featureTiles, projectImages } from '../data/content';
import heroImage from '/Hospitality/Ramada/dulex bedroom 2.png';

function Projects() {
  const heroProject = {
    ...projectImages[0],
    url: heroImage ?? featureTiles[0]?.url ?? projectImages[0]?.url,
    name: 'Royal Enfield Global Headquarters',
    location: 'Corporate | Chennai',
    description:
      "Blending design and craft with engineering to create a future-forward campus rooted in the brand's century-old legacy, with flexible work zones and shaded courtyards that soften the scale of the campus.",
  };

  const secondaryProjects = [
    {
      ...projectImages[1],
      name: 'Experience Center',
      description:
        'A layered retail environment that balances heritage details with a modern customer journey, guiding visitors through curated displays and tactile material moments.',
    },
    {
      ...projectImages[2],
      name: 'Office Atrium',
      description:
        'A light-filled collaborative hub designed for warmth, wayfinding, and daily rituals, with stepped seating and greenery that encourage casual gatherings.',
    },
  ];

  const similarProjects = projectImages.slice(-3);

  return (
    <div className="space-y-8 sm:space-y-10 px-4 sm:px-6 pb-10 sm:pb-16 md:px-20">
      <section className="space-y-4 sm:space-y-6">
        <div className="overflow-hidden bg-[#e4f7f4] md:mx-auto md:max-w-5xl">
          <img
            src={heroProject.url}
            alt={heroProject.name}
            className="h-[360px] w-full object-cover sm:h-[440px] md:h-[560px]"
            loading="lazy"
          />
        </div>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-[1.1fr_1fr] md:items-end md:mx-auto md:max-w-5xl">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0f2c2a]">{heroProject.name}</h1>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">{heroProject.location}</p>
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#1c4a46]">
            {heroProject.description}
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {secondaryProjects.map((project) => (
          <div key={project.name} className="space-y-2 sm:space-y-3">
            <div className="overflow-hidden bg-[#e4f7f4]">
              <img
                src={project.url}
                alt={project.name}
                className="h-48 w-full object-cover sm:h-56 md:h-64"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-light text-[#0f2c2a]">{project.name}</h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#1c4a46]">{project.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0f2c2a] uppercase tracking-[0.3em]">Similar projects</h2>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {similarProjects.map((image) => (
            <div key={image.title} className="space-y-2">
              <div className="overflow-hidden bg-[#e4f7f4]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-44 w-full object-cover sm:h-52"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4f7975]">{image.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

