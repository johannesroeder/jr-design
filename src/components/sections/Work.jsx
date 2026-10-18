import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import Lightbox from "../ui/Lightbox";

function WorkImage({ src, alt, className = "", objectPosition = "center", index, onOpen }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`overflow-hidden rounded-sm cursor-pointer ${className}`}
      onClick={() => onOpen(index)}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ objectPosition }}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}

export default function Work() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    { src: "/img/table-bowl-vase.jpg", alt: t.work.alt.sideTable, className: "row-span-2", objectPosition: "top" },
    { src: "/img/bowl-ear.jpg",        alt: t.work.alt.bowl,      objectPosition: "60% center" },
    { src: "/img/ear-vase.jpg",         alt: t.work.alt.vase },
    { src: "/img/box-closeup.jpg",     alt: t.work.alt.box },
    { src: "/img/hang-lamp1.png",      alt: t.work.alt.lamp },
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
            <WorkImage key={img.src} {...img} index={i} onOpen={setLightboxIndex} />
          ))}
        </div>
      </div>

      <Lightbox
        photos={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
