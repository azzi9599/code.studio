import { useParams, Link } from 'react-router-dom';
import { featureTiles } from '../data/content';

function ProjectDetail() {
  const { id } = useParams();
  const project = featureTiles.find((tile) => tile.id === id);
  const wideTileIndexes = [1, 4];
  const detail = project?.details ?? {
    location: 'India',
    type: 'Residential',
    year: '2023',
    area: '2,000 sq ft',
    scope: 'Interior design',
    summary:
      'Thoughtful planning, warm materials, and soft lighting work together to shape a calm, welcoming environment.',
  };

  if (!project) {
    return (
      <div className="px-6 py-20 text-center md:px-20">
        <p className="text-[#4f7975]">Project not found</p>
        <Link to="/" className="mt-4 inline-block text-sm uppercase tracking-[0.3em] text-[#45818E] underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 md:px-20">
      <Link to="/" className="mb-6 sm:mb-8 inline-block text-xs sm:text-sm uppercase tracking-[0.3em] text-[#45818E] hover:text-[#45818E] transition-colors">
        ← Back
      </Link>
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-10 overflow-hidden rounded-lg bg-[#e4f7f4]">
          <img
            src={project.url}
            alt={project.label}
            className="h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mb-8 sm:mb-10 grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Project</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#0f2c2a]">{project.label}</h1>
          </div>
          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-3 text-base sm:text-lg text-[#1c4a46]">
              <p>{project.description}</p>
              <p>{detail.summary}</p>
            </div>
            <div className="grid gap-3 sm:gap-4 text-xs sm:text-sm text-[#0f2c2a] md:grid-cols-2">
              <div>
                <p className="uppercase tracking-[0.2em] text-[#4f7975]">Location</p>
                <p>{detail.location}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-[#4f7975]">Project type</p>
                <p>{detail.type}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-[#4f7975]">Scope</p>
                <p>{detail.scope}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-[#4f7975]">Area</p>
                <p>{detail.area}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-[#4f7975]">Year</p>
                <p>{detail.year}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {project.additionalImages?.map((imgUrl, index) => {
            const isWide = wideTileIndexes.includes(index);
            return (
              <div
                key={imgUrl}
                className={`overflow-hidden rounded-lg bg-[#e4f7f4] ${isWide ? 'aspect-[2/1] sm:col-span-2' : 'aspect-square'}`}
              >
                <img
                  src={imgUrl}
                  alt={`${project.label} detail ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

