const projects = [
  {
    id: 1,
    num: "01",
    type: "AI / Full-Stack · Team Project",
    title: "AyurFit",
    description:
      "Built the ML backend for an AI wellness platform that maps patient symptoms to Ayurvedic prescriptions. Used Sentence Transformers to embed symptom text, then a LinearSVC for disease classification and a Decision Tree for herbal recommendations.",
    image: "./project-img/ayurfit-demo.png",
    icon: "fas fa-leaf",
    tags: ["Sentence Transformers", "FastAPI", "scikit-learn", "HuggingFace"],
    github: "https://github.com/ashutosh-bhagat/AyurFit--Holistic_Wellness",
    live: "https://ayurfit.ashutoshbhagat.in/",
  },
  {
    id: 2,
    num: "02",
    type: "AI / NLP",
    title: "News_Catcher",
    description:
      "An AI-powered news intelligence system that uses Sentence Transformers to understand the semantic meaning of user input and retrieve contextually similar past news articles. Implements vector similarity search using FAISS for efficient large-scale retrieval.",
    image: "./project-img/news-catcher.png",
    icon: "fas fa-robot",
    tags: ["NLP", "Sentence Transformers", "FAISS", "Streamlit"],
    github: "https://github.com/ashutosh-bhagat/News-Catcher",
    live: null,
  },
  {
    id: 3,
    num: "03",
    type: "Web App",
    title: "Clipy_Clipboard",
    description:
      "A secure online clipboard for sharing text and files instantly through unique codes. Built for fast, cross-device transfer with temporary, privacy-focused access.",
    image: "./project-img/clipy-clipboard.png",
    icon: "fas fa-clipboard",
    tags: ["Python", "FastAPI", "HTML5 & CSS3"],
    github: "https://github.com/ashutosh-bhagat/Clipy_Clipboard",
    live: "https://clipy-clipboard.vercel.app/",
  },
  {
    id: 4,
    num: "04",
    type: "Machine Learning",
    title: "Student_Performance_Predictor",
    description:
      "Forecasts student midterm grades based on behavioral and academic input factors using supervised learning and a linear regression model.",
    image: "./project-img/grade-prediction.png",
    icon: "fas fa-graduation-cap",
    tags: ["Python", "Scikit-Learn", "Streamlit"],
    github: "https://github.com/ashutosh-bhagat/Grade-Prediction",
    live: "https://mid-grade-prediction.streamlit.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="mb-12">
          <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl font-display font-bold">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-surface rounded-2xl border border-white/5 overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video bg-background flex items-center justify-center overflow-hidden">
                <i className={`${project.icon} text-5xl text-white/10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest">
                    {project.type}
                  </span>
                  <span className="text-[10px] font-mono text-white/20">
                    {project.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-textMuted leading-relaxed flex-1 text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-gray-400 bg-background px-2.5 py-1 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      <i className="fas fa-arrow-up-right-from-square text-[10px]" />{" "}
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-textMuted hover:text-white transition-colors flex items-center gap-1.5 ml-auto"
                  >
                    <i className="fab fa-github" /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
