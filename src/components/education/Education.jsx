import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const primarias = [
  "Institución Educativa Argelino Durán Quintero (2014)",
];

const secundarias = [
  "Escuela Normal Superior de Ocaña (2019)",
];

const pregrados = [
  "Ingeniería de Sistemas - Universidad Francisco de Paula Santander Ocaña (En curso)",
];

const cursosAdicionales = [
  "Beca en análisis de ciberseguridad (Colnodo)",
  "Spring Boot: Aprende los Módulos para Ser un Experto Senior (Udemy)",
  "Universidad Java - Cero a Experto (Udemy)",
  "Django REST Framework de cero a experto (Udemy)",
  "GIT+GitHub: Todo un sistema de control de versiones de cero (Udemy)",
  "React intensivo: desde cero a avanzado (Udemy)",
  "Master en Python: Aprender Python 3, Django, Flask y Tkinter (Udemy)",
];

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col mt-6"
    >
      <div className="font-bold text-xl mb-2">Educación</div>

      <Section title="Primaria:" items={primarias} />
      <Section title="Secundaria:" items={secundarias} />
      <Section title="Pregrado:" items={pregrados} />
      <Section title="Cursos adicionales:" items={cursosAdicionales} spaced />
    </motion.div>
  );
}

function Section({ title, items, spaced = false }) {
  return (
    <div className="my-2">
      <p className="font-semibold text-md mb-2 underline">{title}</p>
      <ul className={`list-image-[url(./assets/cuadrado.svg)] list-inside ml-2 ${spaced ? "space-y-2" : ""}`}>
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, rotateX: -90, transformOrigin: "top" }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
