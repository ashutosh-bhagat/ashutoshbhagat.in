export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-background border-t border-white/5 relative"
    >
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-textMuted leading-relaxed text-lg">
              <p className="text-justify">
                I started my tech journey in the creative field as a Graphic
                Designer, cultivating an eye for detail and user experience.
                Driven by curiosity, I transitioned into engineering, finding my
                true passion in{" "}
                <strong className="text-white">Machine Learning</strong>. I thrive
                on the logic of algorithms and the challenge of optimizing
                predictive models.
              </p>
              <p className="text-justify">
                To bridge the gap between data and users, I focused on frontend
                development, mastering <strong className="text-white">JavaScript</strong> and
                recently adopting <strong className="text-white">React</strong>. This allows me
                to translate machine learning models into intuitive, interactive user experiences.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-3">
                Active Community Member
              </h3>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-white/5 mb-1.5">
                <div
                  className="p-2.5 bg-white/10 rounded-lg text-accent flex items-center justify-center"
                  style={{ width: "56px", height: "56px" }}
                >
                  <img
                    src="./ISTE.png"
                    alt="AWS UG Community Vadodara"
                    className="object-contain w-10 h-10"
                    style={{ filter: "brightness(0.8) contrast(1)" }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    ISTE Committee, SVIT Vasad 2026
                  </h4>
                  <p className="text-sm text-textMuted">Technical Head</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-white/5 mb-1.5">
                <div
                  className="p-2.5 bg-white/10 rounded-lg text-accent flex items-center justify-center"
                  style={{ width: "56px", height: "56px" }}
                >
                  <img
                    src="./aim logo.png"
                    alt="A.I.M. Club"
                    className="object-contain w-10 h-10"
                    style={{ filter: "brightness(1) contrast(1.25)" }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">The A.I.M. Club</h4>
                  <p className="text-sm text-textMuted">
                    Vice President and Contributor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-white/5 mb-1.5">
                <div
                  className="p-2.5 bg-white/10 rounded-lg text-accent flex items-center justify-center"
                  style={{ width: "56px", height: "56px" }}
                >
                  <img
                    src="./aws.svg"
                    alt="AWS UG Community Vadodara"
                    className="object-contain w-10 h-10"
                    style={{ filter: "brightness(1) contrast(1.25)" }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    AWS UG Community Vadodara
                  </h4>
                  <p className="text-sm text-textMuted">
                    Contributor and Graphic Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
            {/* Framed Profile Picture with Shifting Accent Border */}
            <div className="relative group w-full max-w-xs h-[24rem] sm:max-w-sm sm:h-[28rem] md:w-[28rem] md:h-[34rem] lg:w-[30rem] lg:h-[38rem]">
              {/* Shifting Accent Outline Frame */}
              <div className="absolute inset-0 border border-accent/30 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              {/* Profile image container */}
              <div className="absolute inset-0 bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
                <img
                  src="../../public/Ashutosh.jpeg"
                  alt="Ashutosh Bhagat"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
