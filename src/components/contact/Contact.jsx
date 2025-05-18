import React from "react";
import github from "../../assets/github_light.svg";
import gmail from "../../assets/gmail.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import tiktok from "../../assets/tiktok.svg";
import youtube from "../../assets/youtube.svg";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center space-x-2 my-6">
        {redesSociales.map((redSocial, index) => (
          <a key={index} className="bg-lightPurple rounded-full flex justify-center items-center hover:-translate-y-2 hover:duration-300 shadow-xl/30" href={redSocial.link} target="_blank">
            <img className="w-8 h-8 m-2" src={redSocial.icono} alt="" />
          </a>
        ))}
      </div>
    </>
  );
}

const redesSociales = [
  { icono: github, link: "https://github.com/NelsonZarazaDev" },
  { icono: linkedin, link: "https://www.linkedin.com/in/nelson-mauricio-navarro-zaraza-3448542a5/" },
  { icono: gmail, link: "mailto:nelsonmauricionavarrozaraza@gmail.com" },
  { icono: instagram, link: "https://www.instagram.com/nelson_mauricio_z/" },
  { icono: tiktok, link: "https://www.tiktok.com/@nelson_mauricio_z" },
  { icono: youtube, link: "https://www.youtube.com/@Ctrl_Code" },
];
