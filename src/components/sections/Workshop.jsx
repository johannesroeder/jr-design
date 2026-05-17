import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Placeholder images from Unsplash — replace src values with your own photos
// Placeholder images from Unsplash — swap these src values for your own workshop photos
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

function StripPhoto({ src, alt, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden flex-1 h-[60vh] md:h-[70vh]"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
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
  return (
    <section className="flex flex-col md:flex-row gap-1">
      {photos.map((photo, i) => (
        <StripPhoto key={i} {...photo} index={i} />
      ))}
    </section>
  );
}
