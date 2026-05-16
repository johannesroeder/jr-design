import React from "react";
import AnimatedSection from "../ui/AnimatedSection";

export default function Craft() {
  return (
    <section id="craft" className="bg-dark py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text side */}
          <AnimatedSection>
            <p className="text-sand/60 text-xs tracking-[0.3em] uppercase mb-4">The process</p>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-normal mb-6 leading-tight">
              Made by hand.<br />Made to last.
            </h2>
            <div className="w-12 h-px bg-wood mb-8" />
            <p className="text-cream/60 leading-relaxed mb-5">
              Every piece begins with carefully selected, sustainably harvested wood — locally sourced, so no tree is
              cut solely for production. From raw timber to finished object, each step is done by hand.
            </p>
            <p className="text-cream/60 leading-relaxed mb-10">
              Collections are made in small batches, making each design as special as the wood it came from. Organic
              flowing shapes meet modern geometric precision — a dialogue between nature and intention.
            </p>

            {/* Restored blockquote */}
            <blockquote className="border-l-2 border-wood pl-6">
              <p className="font-serif text-cream/80 text-xl italic leading-relaxed mb-4">
                "I'm on a constant hunt for inspiration and perfection. Always reflecting on previous attempts,
                I strive to make my next piece better than the last."
              </p>
              <cite className="text-sand/50 text-xs tracking-widest uppercase not-italic">— Johannes</cite>
            </blockquote>
          </AnimatedSection>

          {/* Image side */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="relative">
              <img
                src="/img/me-turning.jpg"
                alt="Johannes at the lathe, turning a piece of wood in his Antwerp workshop"
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
