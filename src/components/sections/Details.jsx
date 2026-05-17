import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const photos = [
  { src: "/img/chisel.jpg", alt: "Two chisels resting on the workbench" },
  { src: "/img/plane.jpg", alt: "Close-up of a vintage hand plane" },
  { src: "/img/workinprogress.jpg", alt: "Work in progress — chisel marks in wood" },
  { src: "/img/wood.jpg", alt: "Raw wood blanks and a turned bowl on the shelf" },
  { src: "/img/saw.jpg", alt: "Table saw blade in the workshop" },
];

function DetailPhoto({ src, alt, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden flex-1 h-[35vh]"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
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

export default function Details() {
  return (
    <section className="flex flex-col md:flex-row gap-1">
      {photos.map((photo, i) => (
        <DetailPhoto key={i} {...photo} index={i} />
      ))}
    </section>
  );
}
