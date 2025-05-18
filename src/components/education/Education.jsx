import React from "react";

export default function Education() {
  return (
    <>
      <div className="flex flex-col mt-6">
        <div className="font-bold text-xl mb-2">Educación</div>
        <div className="my-2">
          <p className="font-semibold text-md mb-2 underline">Primaria:</p>
          <ul className="list-image-[url(./assets/cuadrado.svg)] list-inside ml-2">
          {primarias.map((primaria, index)=>(<li key={index}>{primaria}</li>))}
          </ul>
        </div>

        <div className="my-2">
          <p className="font-semibold text-md mb-2 underline">Secundaria:</p>
          <ul className="list-image-[url(./assets/cuadrado.svg)] list-inside ml-2">
            {secundarias.map((secundaria, index)=>(<li key={index}>{secundaria}</li>))}
          </ul>
        </div>

        <div className="my-2">
          <p className="font-semibold text-md mb-2 underline">Pregrado:</p>
          <ul className="list-image-[url(./assets/cuadrado.svg)] list-inside ml-2">
            {pregrados.map((pregrado, index)=>(<li key={index}>{pregrado}</li>))}
          </ul>
        </div>

        <div className="my-2">
          <p className="font-semibold text-md mb-2 underline">
            Cursos adicionales:
          </p>
          <ul className="list-image-[url(./assets/cuadrado.svg)] list-inside space-y-2 ml-2">
            {cursosAdicionales.map((cursoAdicional, index)=>(<li key={index}>{cursoAdicional}</li>))}
          </ul>
        </div>
      </div>
    </>
  );
}


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
