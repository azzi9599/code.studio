import ContactForm from '../components/ContactForm';
import { teamMembers } from '../data/content';
import kanikaPhoto from '../Kanika Garg.jpg';
import nikhilPhoto from '../Nikhil Sharma.jpeg';

function About() {
  const kanikaFullBio =
    'Design Principal at co-de.studio, Kanika single handedly heads diverse projects including Exhibitions, Residential and Commercial Interiors and Architecture, taking them from concept to execution. Her core strength lies in spatial planning, detailing, material selections, client management, coordination and implementation. An avid advocate for “Craft-Revival”, she believes in collaboration with artisans for various projects wherever possible. Kanika is a Gold-Medallist in her Undergraduate studies and an Academic Excellence Awardee in her Post Graduate studies in CEPT University. She further studied in Germany for her Masters in Interior Architecture and design.';

  const nikhilFullBio = "Design Principal at co-de.studio, Nikhil provides design expertise on a range of projects in the fields of Architecture, Interiors & Furniture Design. He has a keen eye for detail and he brings an understated luxury to all the projects he undertakes. His project coordination skills ensure quality control and effective execution of projects on site. Some projects undertaken by him include boutique interior design projects for commercial, corporate & residential spaces. Nikhil won the academic excellence award for his postgraduate studies in the field of furniture design from CEPT University, Ahmedabad.";

  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-6 pb-12 sm:pb-20 md:px-20">
      <header className="mx-auto max-w-5xl space-y-3 sm:space-y-4 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">About</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0f2c2a]">About co-de.studio</h1>
        <p className="text-base sm:text-lg text-[#1c4a46]">
          Co-Design Studio, or co-de.studio as it came to be, was founded by two passionate designers in 2020 and has
          since grown to be a multidisciplinary boutique architecture practice with a team of talented designers and
          professionals who strive to create inspirational projects. The practice is focused on delivering bespoke,
          high-end design solutions that blend innovation, functionality, and aesthetic excellence. By integrating
          architecture with interior design, landscape, and technology, we create tailored spaces that reflect each
          client's unique vision and lifestyle. We employ cutting-edge materials and design techniques to develop
          sophisticated, human-centred spaces. From opulent residences, dynamic commercial and hospitality projects, our
          holistic approach adapts to the ever-changing needs of modern living, ensuring that every project is a
          seamless fusion of form, function, and personalized design.
        </p>
      </header>

      {/* Founders Section */}
      <section className="space-y-8 sm:space-y-10">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mx-auto max-w-5xl">
          {/* Kanika card */}
          <div className="space-y-4 sm:space-y-5 flex flex-col bg-white/80 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="aspect-[3/4] w-full max-w-[220px] sm:max-w-[260px] overflow-hidden bg-[#e4f7f4] rounded-xl">
              <img
                src={kanikaPhoto}
                alt="Kanika Garg"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0f2c2a]">Kanika Garg</h3>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-[#4f7975]"></div>
                <p className="text-xs sm:text-sm text-[#4f7975] font-light uppercase tracking-wider">FOUNDING PARTNER</p>
                <div className="h-px w-8 bg-[#4f7975]"></div>
              </div>
              <p className="text-xs sm:text-sm text-[#1c4a46] leading-relaxed">
                {kanikaFullBio}
              </p>
            </div>
          </div>
          {/* Nikhil card */}
          <div className="space-y-4 sm:space-y-5 flex flex-col bg-white/80 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="aspect-[3/4] w-full max-w-[220px] sm:max-w-[260px] overflow-hidden bg-[#e4f7f4] rounded-xl">
              <img
                src={nikhilPhoto}
                alt="Nikhil Sharma"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0f2c2a]">Nikhil Sharma</h3>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-[#4f7975]"></div>
                <p className="text-xs sm:text-sm text-[#4f7975] font-light uppercase tracking-wider">FOUNDING PARTNER</p>
                <div className="h-px w-8 bg-[#4f7975]"></div>
              </div>
              <p className="text-xs sm:text-sm text-[#1c4a46] leading-relaxed">
                {nikhilFullBio}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="#team"
            className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#0f2c2a] border border-[#0f2c2a] px-5 py-2.5 rounded-full hover:bg-[#0f2c2a] hover:text-white transition-colors"
          >
            Team
          </a>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="space-y-4 sm:space-y-6">
        <h2 className="text-center text-lg sm:text-xl font-light text-[#0f2c2a]">Team</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-4 sm:px-0">
          {teamMembers.map((member) => (
            <div key={member.name} className="group overflow-hidden rounded-[12px] sm:rounded-[16px] border border-[#8dd8cf]/30 bg-white/90 shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-square overflow-hidden bg-[#e4f7f4]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1 p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-light text-[#0f2c2a]">{member.name}</h3>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#4f7975]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default About;





