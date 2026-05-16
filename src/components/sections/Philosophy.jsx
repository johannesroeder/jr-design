import React from "react";
import AnimatedSection from "../ui/AnimatedSection";

export default function Philosophy() {
  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-dark text-2xl md:text-3xl leading-relaxed font-normal italic">
          "We make objects that feel like they were always meant to exist — born from sustainably harvested wood, shaped by hand in Antwerp."
        </p>
        <div className="mt-8 mx-auto w-16 h-px bg-wood" />
      </AnimatedSection>
    </section>
  );
}
