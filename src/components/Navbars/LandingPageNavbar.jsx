import React, { useState, useEffect } from "react";

export default function LandingPageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — only visible when scrolled */}
        <span
          className={`font-serif text-cream text-lg tracking-widest transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Atelier JR
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 ml-auto">
          {[["about", "About"], ["work", "Work"], ["craft", "Craft"], ["contact", "Contact"]].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="text-cream/80 hover:text-cream text-xs tracking-widest uppercase transition-colors duration-200 bg-transparent border-0 cursor-pointer font-sans"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/atelier_jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-cream text-xs tracking-widest uppercase transition-colors duration-200"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
        <ul className="flex flex-col gap-0 list-none m-0 px-6 pb-4 bg-dark">
          {[["about", "About"], ["work", "Work"], ["craft", "Craft"], ["contact", "Contact"]].map(([id, label]) => (
            <li key={id} className="border-b border-cream/10">
              <button
                onClick={() => scrollTo(id)}
                className="w-full text-left text-cream/80 hover:text-cream py-3 text-xs tracking-widest uppercase bg-transparent border-0 cursor-pointer font-sans"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="https://www.instagram.com/atelier_jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-cream text-xs tracking-widest uppercase"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
