import React from "react";
import AnimatedSection from "../ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Portrait */}
          <AnimatedSection direction="right" className="relative">
            <img
              src="/img/johannes-2.jpg"
              alt="Johannes Roeder, founder of Atelier JR, in his workshop"
              className="w-full rounded-lg object-cover aspect-[4/5] shadow-lg"
            />
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <p className="text-wood text-xs tracking-[0.3em] uppercase mb-4">The maker</p>
            <h2 className="font-serif text-dark text-4xl md:text-5xl font-normal mb-6 leading-tight">
              Johannes Roeder
            </h2>
            <div className="w-12 h-px bg-wood mb-8" />
            <p className="text-dark/70 leading-relaxed mb-5">
              Born in Germany, Johannes moved to Antwerp to pursue his passion for fine woodworking and instrument building.
              Since then he has gathered extensive experience as a carpenter, furniture restorer, and guitar builder — always
              striving to push his boundaries.
            </p>
            <p className="text-dark/70 leading-relaxed mb-5">
              Through years of working alongside creative people, he developed a keen eye for shape and design — a constant
              hunt for inspiration and the next piece better than the last.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Today, Atelier JR crafts unique handmade objects — lamps, vases, bowls — blending organic flowing shapes
              with modern geometric design, each made from locally sourced, sustainably harvested wood.
            </p>
            <div className="mt-10 inline-block border border-sand px-6 py-3">
              <span className="font-serif text-dark text-2xl">15+</span>
              <span className="text-dark/50 text-xs tracking-widest uppercase ml-3">Years of craft</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
