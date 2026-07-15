import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="font-display font-bold text-lg tracking-tight text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              {/* <i className="fas fa-terminal text-accent text-sm"></i> */}
              <span>ashutosh<span className="text-accent">.</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a
                href="#about"
                className="text-sm font-medium text-textMuted hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#stack"
                className="text-sm font-medium text-textMuted hover:text-white transition-colors"
              >
                Stack
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-textMuted hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#blog"
                className="text-sm font-medium text-textMuted hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none p-2"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } md:hidden bg-background border-b border-white/10 absolute w-full z-50`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <a
            href="#about"
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium text-textMuted hover:text-white"
          >
            About
          </a>
          <a
            href="#stack"
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium text-textMuted hover:text-white"
          >
            Stack
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium text-textMuted hover:text-white"
          >
            Work
          </a>
          <a
            href="#blog"
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium text-textMuted hover:text-white"
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium text-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
