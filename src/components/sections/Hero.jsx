import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const bgRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url(/img/me-turning-banner.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-dark/50" aria-hidden="true" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src="/img/logo-plain-big-white.png"
          alt="Atelier JR logo"
          className="w-24 mb-8 opacity-90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          className="font-serif text-cream text-5xl md:text-7xl font-normal mb-4 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Atelier JR
        </motion.h1>
        <motion.p
          className="text-cream/70 text-xs tracking-[0.35em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t.hero.tagline}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-cream/50 text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-px h-10 bg-cream/30" />
      </motion.div>
    </section>
  );
}
