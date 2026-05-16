import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function WorkImage({ src, alt, className = "", index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`overflow-hidden rounded-sm ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}

export default function Work() {
  const { t } = useLanguage();

  const images = [
    { src: "/img/hang-lamp1.png", alt: t.work.alt.lamp, className: "row-span-2" },
    { src: "/img/vase.jpg",        alt: t.work.alt.vase },
    { src: "/img/candles.jpg",     alt: t.work.alt.candles },
    { src: "/img/box-closeup.jpg", alt: t.work.alt.box },
    { src: "/img/candles-box.jpg", alt: t.work.alt.candlesBox },
  ];

  return (
    <section id="work" className="bg-sand/20 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-wood text-xs tracking-[0.3em] uppercase mb-3">{t.work.label}</p>
          <h2 className="font-serif text-dark text-4xl md:text-5xl font-normal">{t.work.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-3 md:gap-4 auto-rows-[240px]">
          {images.map((img, i) => (
            <WorkImage key={img.src} {...img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
