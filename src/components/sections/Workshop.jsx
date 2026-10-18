import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Lightbox from "../ui/Lightbox";

const photos = [
  {
    src: "/img/workshop.jpg",
    alt: "The Atelier JR workshop — tool wall and workbench",
  },
  {
    src: "/img/me-working.jpg",
    alt: "Johannes Roeder at work, chiselling a piece of wood",
  },
  {
    src: "/img/sharpening.jpg",
    alt: "Johannes sharpening tools at the grinder",
  },
];

function StripPhoto({ src, alt, index, onOpen }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden flex-1 h-[60vh] md:h-[70vh] cursor-pointer"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={() => onOpen(index)}
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

export default function Workshop() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="flex flex-col md:flex-row gap-1">
      {photos.map((photo, i) => (
        <StripPhoto key={i} {...photo} index={i} onOpen={setLightboxIndex} />
      ))}
      <Lightbox
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
