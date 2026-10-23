import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function DefaultFooter() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const logoSrc = `/img/certified-craft-logo-${lang}.jpg`;

  return (
    <footer className="bg-dark px-6">
      {/* Partner / accreditation bar */}
      <div className="bg-cream -mx-6 px-6 py-8 flex items-center justify-center gap-8">
        <img
          src={logoSrc}
          alt="Gecertificeerd Vakman — Certified Craftsman"
          className="h-16 w-auto"
        />
      </div>

      {/* Main footer row */}
      <div className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <p className="text-cream/40 text-xs tracking-wide">© {year} Atelier JR</p>
          <p className="text-cream/25 text-xs tracking-wide">BTW BE0555800496</p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/privacy")}
            className="text-cream/40 hover:text-cream/70 text-xs tracking-wide transition-colors duration-200 bg-transparent border-0 cursor-pointer font-sans"
          >
            {t.footer.privacy}
          </button>
          <a
            href="https://www.instagram.com/atelier_jr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/40 hover:text-cream/70 text-xs tracking-wide transition-colors duration-200"
            aria-label="Atelier JR on Instagram"
          >
            {t.footer.instagram}
          </a>
          <span className="text-cream/15 text-xs">·</span>
          <a
            href="https://cutcutapp.johannesroeder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/25 hover:text-cream/60 text-xs tracking-wide transition-colors duration-200"
            title="Cutlist optimizer tool"
          >
            CutCut App
          </a>
        </div>
      </div>
    </footer>
  );
}
