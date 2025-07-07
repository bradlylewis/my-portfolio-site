import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-16 bg-brand-white-light border-b border-gray-200 shadow">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl ">Bradly Lewis</div>

        {/* Desktop Menu (visible from md and up) */}
        <ul className="hidden md:flex space-x-6 tracking-wide">
          <li><a href="#top" className="hover:underline">Home</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button (hidden on md and up) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 hover:cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown (only visible on small screens) */}
      {menuOpen && (
        <ul className="md:hidden min-h-[calc(100vh-4rem)] text- px-4 pb-4 bg-white flex flex-col text-center justify-center shadow">
          <li><a href="#top" onClick={() => setMenuOpen(false)} className="block w-full py-6">Home</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} className="block w-full py-6">Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block w-full py-6">Projects</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)} className="block w-full py-6">Experience</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block w-full py-6">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
