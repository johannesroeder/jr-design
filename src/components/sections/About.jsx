import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: stacked portrait + detail */}
          <AnimatedSection direction="right" className="flex flex-col gap-3">
            <img
              src="/img/johannes-side.jpg"
              alt="Johannes Roeder, founder of Atelier JR"
              className="w-full rounded-lg object-cover aspect-[4/5] shadow-lg"
            />
            <img
              src="/img/johannes.jpg"
              alt="Johannes Roeder at work in Atelier JR"
              className="w-full rounded-lg object-cover aspect-[16/7] shadow-md"
            />
          </AnimatedSection>

          {/* Right: bio text */}
          <AnimatedSection delay={0.15} className="md:pt-12">
            <p className="text-wood text-xs tracking-[0.3em] uppercase mb-4">{t.about.label}</p>
            <h2 className="font-serif text-dark text-4xl md:text-5xl font-normal mb-6 leading-tight">
              Johannes Roeder
            </h2>
            <div className="w-12 h-px bg-wood mb-8" />
            <p className="text-dark/70 leading-relaxed mb-5">{t.about.p1}</p>
            <p className="text-dark/70 leading-relaxed mb-5">{t.about.p2}</p>
            <p className="text-dark/70 leading-relaxed">{t.about.p3}</p>
            <div className="mt-10 inline-block border border-sand px-6 py-3">
              <span className="font-serif text-dark text-2xl">15+</span>
              <span className="text-dark/50 text-xs tracking-widest uppercase ml-3">{t.about.yearsLabel}</span>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
