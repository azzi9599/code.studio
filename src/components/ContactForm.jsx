function ContactForm() {
  return (
    <section className="bg-white px-4 sm:px-6 py-12 sm:py-16 md:px-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 sm:mb-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#4f7975]">Contact</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-light text-[#0f2c2a]">Get in touch</h2>
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
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border-b border-[#8dd8cf]/40 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#0f2c2a] placeholder:text-[#4f7975] focus:border-[#0f2c2a] focus:outline-none resize-none"
          ></textarea>
          <button
            type="button"
            className="mt-6 sm:mt-8 w-full border border-[#0f2c2a] bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#0f2c2a] transition hover:bg-[#0f2c2a] hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

