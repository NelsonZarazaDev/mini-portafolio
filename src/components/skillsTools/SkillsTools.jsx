import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillsTools() {
  // Hook para detectar visibilidad con options { triggerOnce: true para que no se repita }
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refSoftSkills, inViewSoftSkills] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refLanguages, inViewLanguages] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refFrameworks, inViewFrameworks] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refDB, inViewDB] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="flex flex-col space-y-6">

      {/* Título Principal */}
      <motion.div
        ref={refTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-bold text-xl mb-2"
      >
        Habilidades y herramientas
      </motion.div>

      {/* Habilidades blandas */}
      <motion.div
        ref={refSoftSkills}
        initial={{ opacity: 0, x: -50 }}
        animate={inViewSoftSkills ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="font-bold text-md mb-2">Habilidades blandas</div>
        <ul className="list-disc ml-7 mb-3 list-inside space-y-2">
          {habilidadesBlandas.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </motion.div>

      {/* Lenguajes */}
      <motion.div
        ref={refLanguages}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inViewLanguages ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="font-bold text-md mb-2">Lenguajes</div>
        <ul className="flex flex-wrap *:rounded-full *:border *:border-sky-100 *:px-2 *:py-0.5 *:m-1">
          {lenguajes.map((lenguaje, index) => (
            <motion.li
              key={index}
              className="font-semibold hover:bg-mediumPurple border hover:border-lightPurple hover:text-veryDarkPurple transform transition-transform duration-200 hover:scale-110"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {lenguaje}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Frameworks y librerías */}
      <motion.div
        ref={refFrameworks}
        initial={{ opacity: 0, x: 50 }}
        animate={inViewFrameworks ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="font-bold text-md my-2">Frameworks y librerías</div>
        <ul className="flex flex-wrap *:rounded-full *:border *:border-sky-100 *:px-2 *:py-0.5 *:m-1">
          {frameworksLibrerias.map((framework, index) => (
            <motion.li
              key={index}
              className="font-semibold hover:bg-mediumPurple border hover:border-lightPurple hover:text-veryDarkPurple transform transition-transform duration-200 hover:scale-110"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {framework}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bases de datos */}
      <motion.div
        ref={refDB}
        initial="hidden"
        animate={inViewDB ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="font-bold text-md my-2">Bases de datos</div>
        <ul className="flex flex-wrap *:rounded-full *:border *:border-sky-100 *:px-2 *:py-0.5 *:m-1">
          {baseDatos.map((base, index) => (
            <motion.li
              key={index}
              className="font-semibold hover:bg-mediumPurple border hover:border-lightPurple hover:text-veryDarkPurple transform transition-transform duration-200 hover:scale-110"
              initial={{ opacity: 0, y: 10 }}
              animate={inViewDB ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {base}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

const habilidadesBlandas = [
  "Trabajo en equipo",
  "Pensamiento crítico",
  "Gestión del tiempo",
  "Comunicación efectiva",
  "Aprendizaje autodidacta",
];

const lenguajes = [
  "Java",
  "Python",
  "Dart",
  "PHP",
  "TypeScript",
  "HTML5",
  "CSS3",
  "JavaScript",
];

const frameworksLibrerias = [
  "Spring Boot",
  "Django rest",
  "React",
  "TailwindCSS",
  "Bootstrap",
];

const baseDatos = ["PostgreSQL", "MySQL", "MongoDB"];
