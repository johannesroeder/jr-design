import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="max-w-xl">
          <p className="text-wood text-xs tracking-[0.3em] uppercase mb-4">{t.contact.label}</p>
          <h2 className="font-serif text-dark text-4xl md:text-5xl font-normal leading-tight mb-6">
            {t.contact.title}
          </h2>
          <div className="w-12 h-px bg-wood mb-8" />
          <p className="text-dark/60 leading-relaxed mb-10">{t.contact.body}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:atelier@johannesroeder.com"
              className="inline-block px-8 py-4 bg-dark text-cream text-xs tracking-widest uppercase text-center transition-colors duration-300 hover:bg-wood"
            >
              {t.contact.emailBtn}
            </a>
            <a
              href="https://www.instagram.com/atelier_jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-dark text-dark text-xs tracking-widest uppercase text-center transition-colors duration-300 hover:border-wood hover:text-wood"
            >
              {t.contact.instagramBtn}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
