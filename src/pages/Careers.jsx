function Careers() {
  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-6 pb-12 sm:pb-20 md:px-20">
      <header className="space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Media</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0f2c2a]">Press & Publications</h1>
        <p className="max-w-3xl text-base sm:text-lg text-[#1c4a46]">
          Explore our featured projects, design insights, and the stories behind our work. From editorial features to design publications, discover how we craft calm, curated interiors.
        </p>
      </header>

      {/* Featured Publications Section */}
      <section className="space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl font-light text-[#0f2c2a]">Featured Publications</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#8dd8cf]/30 bg-white/90 shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-[#e4f7f4]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
                alt="Design Magazine Feature"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 p-5 sm:p-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4f7975]">Design Magazine</p>
              <h3 className="text-base sm:text-lg font-light text-[#0f2c2a]">Minimalist Interiors: A New Perspective</h3>
              <p className="text-sm text-[#1c4a46]">Featured in our latest residential project showcase</p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#8dd8cf]/30 bg-white/90 shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-[#e4f7f4]">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
                alt="Architecture Journal"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 p-5 sm:p-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4f7975]">Architecture Journal</p>
              <h3 className="text-base sm:text-lg font-light text-[#0f2c2a]">Sustainable Design Practices</h3>
              <p className="text-sm text-[#1c4a46]">Exploring material research and eco-conscious interiors</p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#8dd8cf]/30 bg-white/90 shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-[#e4f7f4]">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80"
                alt="Interior Design Quarterly"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 p-5 sm:p-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4f7975]">Interior Design Quarterly</p>
              <h3 className="text-base sm:text-lg font-light text-[#0f2c2a]">The Art of Calm Spaces</h3>
              <p className="text-sm text-[#1c4a46]">How thoughtful design creates tranquility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Inquiries Section */}
      <section className="space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl font-light text-[#0f2c2a]">Press Inquiries</h2>
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[#1c4a46]">
          <p>
            For media inquiries, interview requests, or high-resolution images, please contact our press team.
          </p>
          <div className="space-y-2 text-sm sm:text-base text-[#0f2c2a]">
            <p><strong>Email:</strong> press@co-de.studio</p>
            <p><strong>Phone:</strong> +1 (646) 555-0149</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;





