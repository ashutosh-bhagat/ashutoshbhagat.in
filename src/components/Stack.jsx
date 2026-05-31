export default function Stack() {
  return (
    <section id="stack" className="py-16 bg-surface relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-10 md:text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Technical Proficiency
          </h2>
          <p className="text-textMuted">
            A breakdown of my engineering toolkit.
          </p>
        </div>

        {/* Categories (Responsive 3-column grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Core / AI & ML */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col grid-popup">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-accent mb-6">
              <i className="fas fa-brain text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              AI & Machine Learning
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Python (Advanced)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Supervised Learning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Scikit-Learn & Pandas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>{" "}
                Natural Language Processing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>{" "}
                Data Preprocessing
              </li>
            </ul>
          </div>

          {/* Frontend & Design */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col grid-popup">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <i className="fas fa-laptop-code text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              Frontend & Design
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                HTML5 & CSS3
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Graphic Design (Figma)
              </li>
            </ul>
          </div>

          {/* Technical Concepts (New Column) */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col grid-popup">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-sky-400 mb-6">
              <i className="fas fa-cubes text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              Technical Concepts
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Computer Networks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Database Management Systems (DBMS)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Software Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Data Visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                Data Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
