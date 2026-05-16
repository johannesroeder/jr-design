import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-dark text-2xl md:text-3xl leading-relaxed font-normal italic">
          "{t.philosophy.quote}"
        </p>
        <div className="mt-8 mx-auto w-16 h-px bg-wood" />
      </AnimatedSection>
    </section>
  );
}
