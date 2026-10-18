import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ photos, index, onClose, onChange }) {
  const isOpen = index !== null && index !== undefined;
  const photo = isOpen ? photos[index] : null;
  const total = photos.length;

  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, prev, next]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/92 px-4"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-cream/60 hover:text-cream text-3xl leading-none bg-transparent border-0 cursor-pointer font-sans z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev arrow */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-cream/50 hover:text-cream text-4xl bg-transparent border-0 cursor-pointer font-sans z-10 select-none"
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          {/* Image + caption */}
          <motion.div
            key={photo?.src}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photo?.src}
              alt={photo?.alt}
              className="max-h-[85vh] max-w-[88vw] object-contain"
            />
            {photo?.alt && (
              <p className="text-cream/45 text-xs tracking-widest uppercase text-center max-w-md">
                {photo.alt}
              </p>
            )}
          </motion.div>

          {/* Next arrow */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-cream/50 hover:text-cream text-4xl bg-transparent border-0 cursor-pointer font-sans z-10 select-none"
              aria-label="Next photo"
            >
              ›
            </button>
          )}

          {/* Counter */}
          {total > 1 && (
            <p className="absolute bottom-5 text-cream/30 text-xs tracking-widest">
              {index + 1} / {total}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
