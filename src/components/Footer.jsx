export default function Footer() {
  return (
    <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-textMuted text-sm">
        © 2025 Ashutosh Bhagat. All Rights Reserved.
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/ashutosh-bhagat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textMuted hover:text-white transition-colors"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ashutosh-tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textMuted hover:text-white transition-colors"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a
          href="https://x.com/ashutosh_x25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textMuted hover:text-white transition-colors"
        >
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a
          href="mailto:asbh7190@gmail.com"
          className="text-textMuted hover:text-white transition-colors"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
      </div>
    </div>
  );
}
