export default function Hero() {
  const inputNodes = [60, 150, 240];
  const hidden1Nodes = [45, 115, 185, 255];
  const hidden2Nodes = [45, 115, 185, 255];
  const outputNodes = [150];

  return (
    <section className="min-h-[90vh] flex items-center relative pt-20 lg:pt-28 overflow-hidden bg-background">
      {/* Background Tech Grid Pattern (Static & Faint, 100% Performance Safe) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* Spotlight Ambient Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-white/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent blink"></span>
              Open to Work
            </div>

            <div className="font-mono text-[10px] sm:text-sm tracking-wider text-textMuted/40 mb-3.5 lowercase flex items-center gap-1.5 select-none">
              <span className="text-accent/60 font-semibold">
                ashutosh@portfolio:~$
              </span>
              <span className="text-white">cat ashutosh-bhagat.sh</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
              ashutosh
              <br />
              bhagat<span className="text-accent">.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-textMuted leading-relaxed mb-8 max-w-xl">
              Machine Learning Engineer & Frontend Developer.
              <br className="hidden md:block" />
              Specializing in{" "}
              <strong className="text-white">Supervised Learning</strong> models
              and building interactive web interfaces with{" "}
              <strong className="text-white">React</strong>.
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex flex-col sm:flex-row justify-start gap-3 w-full sm:w-auto">
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

          {/* Right Column: Sleek Animated Node Graph (Thematic, Generalized, GPU-Accelerated) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full max-w-lg lg:max-w-none mx-auto z-10 mt-6 lg:mt-0">
            <div className="w-full bg-[#0d0d0d]/80 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md flex flex-col relative overflow-hidden">
              {/* CSS Styles for hardware-accelerated animations */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                @keyframes flow {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
                @keyframes pulseGlow {
                  0%, 100% {
                    filter: drop-shadow(0 0 2px rgba(34, 197, 94, 0.3));
                    opacity: 0.7;
                  }
                  50% {
                    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.8));
                    opacity: 1;
                  }
                }
                .synapse {
                  stroke: rgba(34, 197, 94, 0.35); /* Increased visibility */
                  stroke-dasharray: 4 4;
                  animation: flow 1.2s linear infinite;
                }
                .neuron {
                  fill: #0d0d0d;
                  stroke: #22c55e;
                  stroke-width: 2;
                  animation: pulseGlow 3s ease-in-out infinite;
                  transition: fill 0.2s ease, filter 0.2s ease;
                }
                .neuron:hover {
                  fill: #22c55e;
                  filter: drop-shadow(0 0 10px #22c55e);
                  cursor: pointer;
                }
              `,
                }}
              />

              {/* Window Header */}
              <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3 select-none">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider">
                  Model Topology
                </span>
                <span className="w-12"></span>
              </div>

              {/* SVG Canvas Area */}
              <div className="w-full flex justify-center py-2">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto max-w-[380px]"
                >
                  {/* Layer Connections (Synapses) */}
                  {/* 1. Input to Hidden 1 */}
                  {inputNodes.map((y1, i) =>
                    hidden1Nodes.map((y2, j) => (
                      <line
                        key={`l1-${i}-${j}`}
                        x1={40}
                        y1={y1}
                        x2={150}
                        y2={y2}
                        className="synapse"
                        style={{ animationDelay: `${(i + j) * 0.1}s` }}
                      />
                    )),
                  )}

                  {/* 2. Hidden 1 to Hidden 2 */}
                  {hidden1Nodes.map((y1, i) =>
                    hidden2Nodes.map((y2, j) => (
                      <line
                        key={`l2-${i}-${j}`}
                        x1={150}
                        y1={y1}
                        x2={260}
                        y2={y2}
                        className="synapse"
                        style={{ animationDelay: `${0.3 + (i + j) * 0.1}s` }}
                      />
                    )),
                  )}

                  {/* 3. Hidden 2 to Output */}
                  {hidden2Nodes.map((y1, i) =>
                    outputNodes.map((y2, j) => (
                      <line
                        key={`l3-${i}-${j}`}
                        x1={260}
                        y1={y1}
                        x2={360}
                        y2={y2}
                        className="synapse"
                        style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                      />
                    )),
                  )}

                  {/* Layer Nodes (Neurons) */}
                  {/* Input Layer */}
                  {inputNodes.map((y, i) => (
                    <circle
                      key={`c1-${i}`}
                      cx={40}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}

                  {/* Hidden Layer 1 */}
                  {hidden1Nodes.map((y, i) => (
                    <circle
                      key={`c2-${i}`}
                      cx={150}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                    />
                  ))}

                  {/* Hidden Layer 2 */}
                  {hidden2Nodes.map((y, i) => (
                    <circle
                      key={`c3-${i}`}
                      cx={260}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                    />
                  ))}

                  {/* Output Layer */}
                  {outputNodes.map((y, i) => (
                    <circle
                      key={`c4-${i}`}
                      cx={360}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: "1.2s" }}
                    />
                  ))}
                </svg>
              </div>

              {/* Redesigned Inspirational Quote on Connections & AI */}
              <div className="mt-4 p-4 bg-background/60 rounded-xl border border-accent/20 relative overflow-hidden shadow-inner shadow-accent/5">
                {/* Accent Glow Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

                <div className="pl-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <i className="fas fa-network-wired text-[10px] text-accent"></i>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-semibold">
                      Synaptic Connection Principle
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-white leading-relaxed font-display font-medium tracking-wide">
                    In both silicon and synapses, intelligence is not stored in
                    nodes, but forged in the connections between them.
                  </p>
                </div>
              </div>

              {/* Window Footer Detail */}
              <div className="flex justify-between items-center pt-3 text-[10px] font-mono text-textMuted select-none opacity-40 mt-1">
                <span>Input: [x₁, x₂, x₃]</span>
                <span>Output: [ŷ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-0"></div>

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
