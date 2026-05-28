export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative pt-24 lg:pt-28 overflow-hidden">
      {/* Spotlight Background (Shifted slightly right) */}
      <div className="absolute top-[-20%] right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="w-full max-w-none">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent blink"></span>
            Available for hire
          </div>

          {/* Main Title (Name) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
            ashutosh<br />bhagat<span className="text-accent">.</span>
          </h1>

          {/* Subtitle / Value Prop */}
          <p className="text-base md:text-lg text-textMuted leading-relaxed mb-8">
            Machine Learning Engineer & Frontend Developer.<br className="hidden md:block" />
            Specializing in{" "}
            <strong className="text-white">Supervised Learning</strong> models and
            high-performance{" "}
            <strong className="text-white">FastAPI</strong> backends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-start gap-3">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="./Ashutosh_Bhagat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto flex justify-center items-center gap-2 group"
            >
              My Resume
              <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <a
          href="#about"
          className="text-textMuted hover:text-white transition-colors p-2"
        >
          <i className="fas fa-arrow-down text-xl opacity-50"></i>
        </a>
      </div>
    </section>
  );
}
