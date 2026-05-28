import Footer from "./Footer";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-surface relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's work together.
          </h2>
          <p className="text-textMuted text-lg">
            Open to ML Engineering & Frontend Developer roles.
          </p>
          <p className="text-sm text-textMuted mt-2">
            Avg. response time &lt; 24 hrs • Happy to jump on recruiter screens
            first.
          </p>
        </div>

        <form
          className="space-y-8"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="5787ae03-0719-4461-af55-c37718533558"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                className="block w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:border-accent focus:ring-0 focus:outline-none transition-colors peer"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-sm text-textMuted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-textMuted peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                className="block w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:border-accent focus:ring-0 focus:outline-none transition-colors peer"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-sm text-textMuted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-textMuted peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder=" "
              className="block w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-transparent focus:border-accent focus:ring-0 focus:outline-none transition-colors peer resize-none"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-sm text-textMuted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-textMuted peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
            >
              Tell me about your project
            </label>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="group flex items-center gap-3 text-lg font-medium text-white hover:text-accent transition-colors"
            >
              Send Message
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </section>
  );
}
