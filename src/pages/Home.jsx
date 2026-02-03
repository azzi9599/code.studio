import { useState } from 'react';
import { Link } from 'react-router-dom';
import { featureTiles, teamMembers } from '../data/content';
import heroImage from '/Hospitality/Ramada/dulex bedroom 3.png';
import kanikaPhoto from '../Kanika Garg.jpg';
import nikhilPhoto from '../Nikhil Sharma.jpeg';

function Home() {
  const [showTeam, setShowTeam] = useState(false);
  const kanikaFullBio =
    'Design Principal at co-de.studio, Kanika single handedly heads diverse projects including Exhibitions, Residential and Commercial Interiors and Architecture, taking them from concept to execution. Her core strength lies in spatial planning, detailing, material selections, client management, coordination and implementation. An avid advocate for “Craft-Revival”, she believes in collaboration with artisans for various projects wherever possible. Kanika is a Gold-Medallist in her Undergraduate studies and an Academic Excellence Awardee in her Post Graduate studies in CEPT University. She further studied in Germany for her Masters in Interior Architecture and design.';

  const nikhilFullBio = "Design Principal at co-de.studio, Nikhil provides design expertise on a range of projects in the fields of Architecture, Interiors & Furniture Design. He has a keen eye for detail and he brings an understated luxury to all the projects he undertakes. His project coordination skills ensure quality control and effective execution of projects on site. Some projects undertaken by him include boutique interior design projects for commercial, corporate & residential spaces. Nikhil won the academic excellence award for his postgraduate studies in the field of furniture design from CEPT University, Ahmedabad.";

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="px-4 sm:px-6 md:px-20 pb-12 sm:pb-20">
        <div className="relative mb-0 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-hidden bg-[#e4f7f4] -mx-4 sm:-mx-6 md:-mx-20">
          <img
            src={heroImage ?? featureTiles[2]?.url}
            alt={featureTiles[2]?.label || 'Featured project'}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="px-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.3em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
              Creating Bespoke Spaces
            </h1>
          </div>
        </div>
        <div className="grid gap-2 sm:gap-3 bg-white p-2 sm:p-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4">
          {featureTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/project/${tile.id}`}
              className="group relative aspect-square overflow-hidden bg-[#e4f7f4]"
            >
              <img
                src={tile.url}
                alt={tile.label}
                className="h-full w-full object-cover transition duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f2c2a]/90 to-transparent px-2 py-2 sm:px-4 sm:py-3 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About teaser below image grid */}
      <section className="px-4 sm:px-6 md:px-20 -mt-6 sm:-mt-8">
        <div className="mx-auto max-w-5xl space-y-4 sm:space-y-5 text-center">
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#4f7975]">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0f2c2a]">
            About co-de.studio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1c4a46] leading-relaxed">
            Co-Design Studio, or co-de.studio as it came to be, was founded by two passionate designers in 2020 and has
            since grown to be a multidisciplinary boutique architecture practice with a team of talented designers and
            professionals who strive to create inspirational projects. The practice is focused on delivering bespoke,
            high-end design solutions that blend innovation, functionality, and aesthetic excellence. By integrating
            architecture with interior design, landscape, and technology, we create tailored spaces that reflect each
            client's unique vision and lifestyle.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-4 sm:px-6 md:px-20 pb-10 sm:pb-12">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {/* Kanika card */}
            <div className="space-y-4 sm:space-y-5 flex flex-col bg-white/80 rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="aspect-[3/4] w-full max-w-[220px] sm:max-w-[260px] overflow-hidden bg-[#e4f7f4] rounded-xl">
                <img
                  src={kanikaPhoto}
                  alt="Kanika Garg"
                  className="h-full w-full object-cover object-top"
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
            <button
              type="button"
              onClick={() => setShowTeam(true)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#0f2c2a] border border-[#0f2c2a] px-5 py-2.5 rounded-full hover:bg-[#0f2c2a] hover:text-white transition-colors"
            >
              Team
            </button>
          </div>
          {showTeam && (
            <section className="space-y-4 sm:space-y-6">
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
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowTeam(false)}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#0f2c2a] border border-[#0f2c2a] px-4 py-1.5 rounded-full hover:bg-[#0f2c2a] hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </section>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-12 sm:space-y-16 px-4 sm:px-6 pb-12 sm:pb-20 md:px-20">
        <header className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0f2c2a]">Get in touch</h1>
          
        </header>

        <div className="space-y-4 sm:space-y-6">
          <form className="w-full max-w-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-[#8dd8cf]/40 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#0f2c2a] placeholder:text-[#4f7975] focus:border-[#0f2c2a] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-[#8dd8cf]/40 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#0f2c2a] placeholder:text-[#4f7975] focus:border-[#0f2c2a] focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border-b border-[#8dd8cf]/40 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#0f2c2a] placeholder:text-[#4f7975] focus:border-[#0f2c2a] focus:outline-none resize-none"
            ></textarea>
            <button
              type="button"
              className="mt-6 sm:mt-8 w-full sm:w-auto border border-[#0f2c2a] bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#0f2c2a] transition hover:bg-[#0f2c2a] hover:text-white"
            >
              Send
            </button>
          </form>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="h-[250px] sm:h-[300px] w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps?q=Emaar+Emerald+Plaza+Sector+65+Gurugram+122018&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="Location Map"
              ></iframe>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Contact information</p>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#0f2c2a]">
                <p>hello@co-de.studio</p>
                <a href="https://wa.me/919896011173" target="_blank" rel="noopener noreferrer" className="hover:text-[#45818E] transition-colors">+91 98960 11173</a>
                <p className="break-words">Co-De.Studio<br />802, Emaar Emerald Plaza,<br />Sector 65, Gurugram - 122018</p>
                <div className="pt-3">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Studio hours</p>
                  <div className="mt-2 space-y-1">
                    <p>Mon–Thu · 10a – 6p</p>
                    <p>Fri · 10a – 3p</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;

