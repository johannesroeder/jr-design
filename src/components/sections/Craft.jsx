import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function Craft() {
  const { t } = useLanguage();

  return (
    <section id="craft" className="bg-dark py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection>
            <p className="text-sand/60 text-xs tracking-[0.3em] uppercase mb-4">{t.craft.label}</p>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-normal mb-6 leading-tight">
              {t.craft.title1}<br />{t.craft.title2}
            </h2>
            <div className="w-12 h-px bg-wood mb-8" />
            <p className="text-cream/60 leading-relaxed mb-5">{t.craft.p1}</p>
            <p className="text-cream/60 leading-relaxed mb-10">{t.craft.p2}</p>

            <blockquote className="border-l-2 border-wood pl-6">
              <p className="font-serif text-cream/80 text-xl italic leading-relaxed mb-4">
                {t.craft.quote}
              </p>
              <cite className="text-sand/50 text-xs tracking-widest uppercase not-italic">
                {t.craft.quoteAuthor}
              </cite>
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="left">
            <div className="relative">
              <img
                src="/img/me-turning.jpg"
                alt={t.craft.imgAlt}
                className="w-full rounded-lg object-cover aspect-[3/4] shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-wood/40 rounded-sm -z-10" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
