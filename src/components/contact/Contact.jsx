import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importa tus íconos
import github from "../../assets/github_light.svg";
import gmail from "../../assets/gmail.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";

const redesSociales = [
  { icono: github, link: "https://github.com/NelsonZarazaDev" },
  { icono: linkedin, link: "https://www.linkedin.com/in/nelson-mauricio-navarro-zaraza-3448542a5/" },
  { icono: gmail, link: "mailto:nelsonmauricionavarrozaraza@gmail.com" },
  { icono: whatsapp, link: "https://wa.me/573157465208" },
];

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        hidden: {},
      }}
      className="flex flex-wrap justify-center space-x-2 my-6"
    >
      {redesSociales.map((redSocial, index) => (
        <motion.a
          key={index}
          href={redSocial.link}
          target="_blank"
          className="bg-lightPurple rounded-full flex justify-center items-center hover:-translate-y-2 hover:duration-300 shadow-xl/30"
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <img className="w-8 h-8 m-2" src={redSocial.icono} alt="icono red social" />
        </motion.a>
      ))}
    </motion.div>
  );
}
