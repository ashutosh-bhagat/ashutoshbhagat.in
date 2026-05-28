export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-background relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-10">
          <h2 className="text-3xl font-display font-bold">Featured Projects</h2>
        </div>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-10 grid-popup">
            <div
              className="md:col-span-5 relative overflow-hidden rounded-lg bg-surface aspect-video border border-white/5 max-w-2xl w-full mx-auto"
              style={{ minHeight: "320px", maxHeight: "440px" }}
            >
              {/* Placeholder for Project Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fas fa-robot text-4xl md:text-5xl text-textMuted group-hover:text-accent transition-colors"></i>

                <img
                  src=""
                  alt="Clipy-Clipboard Screenshot"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="text-accent text-xs font-mono tracking-[0.4em] mb-3 uppercase">
                01. AI/NLP Project
              </div>
              <div
                className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-2 w-auto"
                style={{ width: "fit-content", minWidth: 0 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent blink"></span>
                <span>Deployed</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">News-Catcher</h3>
              <p className="text-textMuted mb-5 leading-relaxed text-base text-justify">
                Developed an AI-powered news intelligence system that uses
                transformer-based embeddings to understand the semantic meaning
                of user input and retrieve contextually similar past news
                articles. Implemented vector similarity search using FAISS for
                efficient large-scale retrieval, forming the foundation for a
                predictive reasoning system based on historical patterns.
              </p>
              <div className="flex flex-wrap gap-3 text-[0.65rem] font-mono text-gray-400 mb-5">
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  NLP
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Sentence Transformers (BERT)
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Semantic Search
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  FAISS
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Streamlit
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ashutosh-bhagat/News-Catcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors text-sm font-medium border-b border-transparent hover:border-accent"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ashutosh-bhagat/News-Catcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textMuted hover:text-white transition-colors"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-white/10 pb-10 grid-popup">
            <div
              className="md:col-span-5 md:order-2 relative overflow-hidden rounded-lg bg-surface aspect-video border border-white/5 max-w-2xl w-full mx-auto"
              style={{ minHeight: "320px", maxHeight: "440px" }}
            >
              {/* Placeholder for Project Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fas fa-clipboard text-4xl md:text-5xl text-textMuted group-hover:text-accent transition-colors"></i>

                <img
                  src="./project-img/clipy-clipboard.png"
                  alt="Handwritten Digit Classifier screenshot"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:order-1 flex flex-col justify-center">
              <div className="text-accent text-xs font-mono tracking-[0.4em] mb-3 uppercase">
                02.Web Application
              </div>
              <div
                className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-green-500 mb-2 w-auto"
                style={{ width: "fit-content", minWidth: 0 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent blink"></span>
                <span>Deployed</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Clipy-Clipboard
              </h3>
              <p className="text-textMuted mb-5 leading-relaxed text-base text-justify">
                A secure online clipboard that lets users share text and files
                instantly through unique codes. Built for fast, cross-device
                transfer with temporary, privacy-focused access. Developed using
                FastAPI, Tailwind CSS, and modern web technologies for a smooth,
                lightweight experience.
              </p>
              <div className="flex flex-wrap gap-3 text-[0.65rem] font-mono text-gray-400 mb-5">
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Python
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  FastAPI
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  HTML5 & CSS3
                </span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://clipy-clipboard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors text-sm font-medium border-b border-transparent hover:border-accent"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ashutosh-bhagat/Clipy_Clipboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textMuted hover:text-white transition-colors"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-10 grid-popup">
            <div
              className="md:col-span-5 relative overflow-hidden rounded-lg bg-surface aspect-video border border-white/5 max-w-2xl w-full mx-auto"
              style={{ minHeight: "320px", maxHeight: "440px" }}
            >
              {/* Placeholder for Project Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fas fa-graduation-cap text-4xl md:text-5xl text-textMuted group-hover:text-accent transition-colors"></i>

                <img
                  src="./project-img/grade-prediction.png"
                  alt="Clipy-Clipboard Screenshot"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="text-accent text-xs font-mono tracking-[0.4em] mb-3 uppercase">
                03.Machine Learning Project
              </div>
              <div
                className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-2 w-auto"
                style={{ width: "fit-content", minWidth: 0 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent blink"></span>
                <span>Deployed</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Student Performance Prediction
              </h3>
              <p className="text-textMuted mb-5 leading-relaxed text-base text-justify">
                In order to forecast student's midterm grades based on a variety
                of behavioral and academic factors, the project employs
                supervised learning and a linear regression model. Examining how
                machine learning can help with academic performance analysis and
                prediction was the aim.
              </p>

              <div className="flex flex-wrap gap-3 text-[0.65rem] font-mono text-gray-400 mb-5">
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Python
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Machine Learning
                </span>
                <span className="bg-surface px-2 py-1 rounded border border-white/5 hover:text-accent transition-colors">
                  Streamlit
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://mid-grade-prediction.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors text-sm font-medium border-b border-transparent hover:border-accent"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ashutosh-bhagat/Grade-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textMuted hover:text-white transition-colors"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
