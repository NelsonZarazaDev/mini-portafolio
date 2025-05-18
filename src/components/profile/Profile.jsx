import React from "react";
import myPhoto from "../../assets/myPhoto.webp";

export default function Profile() {
  return (
    <>
      <div className="w-full flex flex-col items-center space-y-5">
        <div className="w-55 md:w-1/3 h-auto border-4 border-double overflow-hidden rounded-full rebotar phone-shadow">
          <img className="h-auto object-center" src={myPhoto} alt="" />
        </div>
        <div className="font-bold m-3 text-3xl text-center">
          Nelson Mauricio Navarro Zaraza
        </div>
        <div className="font-bold text-deepPurple bg-mediumPurple px-3 py-2 rounded-3xl shadow-xl shadow-nightBlue-500/20">
          FULL STACK DEVELOPER
        </div>
      </div>
    </>
  );
}
