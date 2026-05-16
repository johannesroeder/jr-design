import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Placeholder images from Unsplash — replace src values with your own photos
// Placeholder images from Unsplash — swap these src values for your own workshop photos
const photos = [
  {
    src: "https://images.unsplash.com/photo-1547609434-b732edfee020?auto=format&fit=crop&w=900&q=80",
    alt: "Craftsman at work — replace with your own photo",
  },
  {
    src: "https://images.unsplash.com/photo-1546964432-2ca7fcd08632?auto=format&fit=crop&w=900&q=80",
    alt: "Workshop atmosphere — replace with your own photo",
  },
  {
    src: "https://images.unsplash.com/photo-1687422810663-c316494f725a?auto=format&fit=crop&w=900&q=80",
    alt: "Woodworking detail — replace with your own photo",
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
