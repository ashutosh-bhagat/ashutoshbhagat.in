import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const res = await response.json();

      if (res.success) {
        setSubmitStatus("success");
        e.target.reset(); // Clear all inputs
      } else {
        setSubmitStatus("error");
        setErrorMessage(res.message || "Failed to submit. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Status Alerts */}
        {submitStatus === "success" && (
          <div className="p-4 mb-8 bg-accent/15 border border-accent/30 rounded-lg text-accent text-sm flex items-center gap-3 max-w-2xl animate-fade-in">
            <i className="fas fa-check-circle text-lg shrink-0"></i>
            <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 mb-8 bg-red-500/15 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-3 max-w-2xl animate-fade-in">
            <i className="fas fa-exclamation-circle text-lg shrink-0"></i>
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
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
              disabled={isSubmitting}
              className={`group flex items-center gap-3 text-lg font-medium transition-colors ${
                isSubmitting
                  ? "text-textMuted cursor-not-allowed"
                  : "text-white hover:text-accent"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <i className="fas fa-spinner fa-spin text-sm"></i>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </section>
  );
}
