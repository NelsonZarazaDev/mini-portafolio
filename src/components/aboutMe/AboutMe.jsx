import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true, // solo una vez cuando entre en vista
    threshold: 0.2, // % visible para activarse
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col"
    >
      <div className="font-bold text-xl mb-2">Acerca de mí</div>
      <span>
        👋🏾 ¡Hola! Soy estudiante de Ingeniería de Sistemas y desarrollador Full
        Stack con enfoque en el desarrollo de soluciones tecnológicas prácticas,
        escalables y orientadas a objetivos. Además, soy entusiasta
        del análisis de ciberseguridad.
      </span>
    </motion.div>
  );
}
