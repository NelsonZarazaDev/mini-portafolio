import React from "react";

export default function SkillsTools() {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <div className="font-bold text-xl mb-2">Habilidades y herramientas</div>

        <div className="font-bold text-md mb-2">Habilidades blandas</div>
        <ul className="list-disc ml-7 mb-3 list-image-[url(./assets/cuadrado.svg)] list-inside space-y-2 ">
          {habilidadesBlandas.map((habilidades, index) => (
            <li key={index}>{habilidades}</li>
          ))}
        </ul>

        <div className="font-bold text-md mb-2">Lenguajes</div>
        <ul className="flex flex-wrap *:rounded-full *:border *:border-sky-100 *:px-2 *:py-0.5 *:m-1">
          {lenguajes.map((lenguaje, index) => (
            <li className="font-semibold hover:bg-mediumPurple border hover:border-lightPurple hover:text-veryDarkPurple transform transition-transform duration-200 hover:scale-110" key={index}>{lenguaje}</li>
          ))}
        </ul>

        <div className="font-bold text-md my-2">Frameworks y librerías</div>
        <ul className="flex flex-wrap *:rounded-full *:border *:border-sky-100 *:px-2 *:py-0.5 *:m-1">
          {frameworksLibrerias.map((frameworkLibreria, index) => (
            <li className="font-semibold hover:bg-mediumPurple border hover:border-lightPurple hover:text-veryDarkPurple transform transition-transform duration-200 hover:scale-110" key={index}>{frameworkLibreria}</li>
          ))}
        </ul>

        <div className="font-bold text-md my-2">Bases de datos</div>
        <ul className="flex flex-wrap *:rounded-full *:border *:border-sky-100 *:px-2 *:py-0.5 *:m-1">
          {baseDatos.map((baseDato, index) => (
            <li className="font-semibold hover:bg-mediumPurple border hover:border-lightPurple hover:text-veryDarkPurple transform transition-transform duration-200 hover:scale-110" key={index}>{baseDato}</li>
          ))}
        </ul>
      </div>
    </>
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
