import React from "react";
import Profile from "../components/profile/Profile";
import AboutMe from "../components/aboutMe/AboutMe";
import SkillsTools from "../components/skillsTools/SkillsTools";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";

export default function Portfolio() {
  return (
    <div className="bg-nightBlue lg:flex lg:justify-center lg:py-8 text-white">
      <div className="lg:w-5xl lg:h-auto bg-linear-180 bg-gradient from-darkPurple via-deepPurple to-veryDarkPurple lg:rounded-2xl shadow-xl/30 shadow-indigo-500/50 flex flex-col p-4 md:p-12">
        <Profile />
        <Contact />
        <hr className="w-full mt-2" />
        <div className="md:flex space-y-4 my-4">
          <div className="md:w-[50%] px-2 space-y-3">
            <AboutMe />
            <Education />
          </div>
          <div className="md:w-px md:h-auto md:bg-gray-300 md:mx-4" />
          <div className="md:w-[50%] px-2">
            <SkillsTools />
          </div>
        </div>
      </div>
    </div>
  );
}
