const blogs = [
  {
    id: 1,
    title: "I Built a Home NAS from a Dead PC and a Forgotten Router and Learnt Networking",
    excerpt:
      "A hands-on dive into repurposing old hardware into a functional home NAS, covering subnetting, static IPs, SMB shares, and everything networking in between.",
    tags: ["Networking", "NAS", "Linux", "Hardware"],
    date: "Jul 2025",
    readTime: "8 min read",
    url: "https://wirelessnetwork.hashnode.dev/i-built-a-home-nas-from-a-dead-pc-and-a-forgotten-router-and-learnt-networking",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-surface relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20">

        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">Writing</p>
            <h2 className="text-3xl font-display font-bold">From the Blog</h2>
          </div>
          <a
            href="https://wirelessnetwork.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-textMuted hover:text-accent transition-colors group w-fit"
          >
            All posts
            <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col gap-4">
          {blogs.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col sm:flex-row sm:items-center gap-6 bg-background border border-white/25 rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent/60 via-accent/30 to-transparent rounded-l-2xl" />

              {/* Content */}
              <div className="flex-1 flex flex-col gap-3 pl-2">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm font-mono text-textMuted">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-textMuted leading-relaxed text-justify">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-400 bg-surface px-3 py-1 rounded-full border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right CTA */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:min-w-[80px]">
                <span className="flex items-center gap-2 text-sm font-medium text-textMuted group-hover:text-accent transition-colors">
                  Read
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
