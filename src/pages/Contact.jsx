function Contact() {
  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-6 pb-12 sm:pb-20 md:px-20">
      <header className="space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Work with us</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0f2c2a]">Let's create something together</h1>
        <p className="max-w-3xl text-base sm:text-lg text-[#1c4a46]">
          We're always looking for talented collaborators, creative partners, and passionate individuals to join our journey. Whether you're a designer, artist, or creative professional, we'd love to hear from you.
        </p>
      </header>

      <div className="grid gap-8 sm:gap-12 md:gap-16 md:grid-cols-2">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Opportunities</p>
            <div className="space-y-4 text-sm sm:text-base text-[#0f2c2a]">
              <div>
                <p className="font-medium">Freelance Collaborations</p>
                <p className="text-[#4f7975] mt-1">Work on exciting projects with our team</p>
              </div>
              <div>
                <p className="font-medium">Partnerships</p>
                <p className="text-[#4f7975] mt-1">Join us in creating exceptional design experiences</p>
              </div>
              <div>
                <p className="font-medium">Creative Consultations</p>
                <p className="text-[#4f7975] mt-1">Share your expertise and insights</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Get in touch</p>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#0f2c2a]">
              <p>hello@co-de.studio</p>
              <a href="https://wa.me/919896011173" target="_blank" rel="noopener noreferrer" className="hover:text-[#45818E] transition-colors">+91 98960 11173</a>
            </div>
          </div>
        </div>

        <form className="space-y-4">
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
          <input
            type="text"
            placeholder="Role / Interest"
            className="w-full border-b border-[#8dd8cf]/40 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#0f2c2a] placeholder:text-[#4f7975] focus:border-[#0f2c2a] focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Tell us about yourself and how you'd like to work with us"
            className="w-full border-b border-[#8dd8cf]/40 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#0f2c2a] placeholder:text-[#4f7975] focus:border-[#0f2c2a] focus:outline-none resize-none"
          ></textarea>
          <button
            type="button"
            className="mt-6 sm:mt-8 w-full sm:w-auto border border-[#0f2c2a] bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#0f2c2a] transition hover:bg-[#0f2c2a] hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

