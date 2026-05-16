import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function DefaultFooter() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cream/40 text-xs tracking-wide">
          © {year} Atelier JR / JR Design
        </p>

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
        </div>
      </div>
    </footer>
  );
}
