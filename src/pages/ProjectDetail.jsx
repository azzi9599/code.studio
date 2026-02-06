import { useParams, Link } from 'react-router-dom';
import { featureTiles } from '../data/content';

function ProjectDetail() {
  const { id } = useParams();
  const project = featureTiles.find((tile) => tile.id === id);
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
      
      <div className="mb-8 sm:mb-10 overflow-hidden bg-[#e4f7f4] -mx-4 sm:-mx-6 md:-mx-20">
        <img
          src={project.url}
          alt={project.label}
          className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mx-auto ">
        <div className="mb-8 sm:mb-10 grid gap-6 sm:gap-8 md:items-start md:grid-cols-[20fr_80fr]">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#0f2c2a]">{project.label}</h1>
          </div>
          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-3 text-base sm:text-lg text-[#1c4a46] leading-relaxed">
              <p>{project.description}</p>
              <p>{detail.summary}</p>
            </div>
            <div className="grid gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4f7975] sm:grid-cols-2 md:grid-cols-5">
              {[
                { label: 'Location', value: detail.location },
                { label: 'Scope', value: detail.scope },
                { label: 'Type', value: detail.type },
                { label: 'Sub-type', value: detail.subtype },
                { label: 'Area', value: detail.area },
              ]
                .filter((item) => item.value)
                .map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p>{item.label}</p>
                    <p className="text-xs sm:text-sm normal-case tracking-normal text-[#1c4a46]">{item.value}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {(project.additionalImages ?? []).slice(0, 3).map((imgUrl, index) => (
            <div key={imgUrl} className="overflow-hidden bg-[#e4f7f4]">
              <img
                src={imgUrl}
                alt={`${project.label} detail ${index + 1}`}
                className="h-48 w-full object-cover sm:h-56 md:h-64"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

