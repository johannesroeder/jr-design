import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(
    () => !localStorage.getItem(STORAGE_KEY)
  );

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  const cb = t.cookieBanner;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-dark border-t border-white/10 px-6 py-4"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="text-cream/60 text-xs leading-relaxed flex-1">
              {cb.text}{" "}
              <button
                onClick={() => navigate("/privacy")}
                className="text-cream/80 underline underline-offset-2 hover:text-cream transition-colors bg-transparent border-0 cursor-pointer font-sans text-xs"
              >
                {cb.learnMore}
              </button>
            </p>
            <button
              onClick={accept}
              className="shrink-0 border border-wood text-cream/80 hover:text-cream hover:border-cream/60 text-xs tracking-widest uppercase px-5 py-2 transition-colors duration-200 bg-transparent cursor-pointer font-sans"
            >
              {cb.accept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
