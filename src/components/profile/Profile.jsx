import React from "react";
import myPhoto from "../../assets/myPhoto.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Profile() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center space-y-5"
    >
      <div className="w-55 md:w-1/3 h-auto border-4 border-double overflow-hidden rounded-full rebotar phone-shadow">
        <img className="h-auto object-center" src={myPhoto} alt="Mi foto de perfil" />
      </div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-bold m-3 text-3xl text-center"
      >
        Nelson Mauricio Navarro Zaraza
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-bold text-veryDarkPurple bg-mediumPurple px-3 py-2 rounded-3xl shadow-xl shadow-nightBlue-500/20"
      >
        FULL STACK DEVELOPER
      </motion.div>
    </motion.div>
  );
}
