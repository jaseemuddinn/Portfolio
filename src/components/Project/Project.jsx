import customiseOnnoff from "../../assets/ProjectsImg/customiseOnnoff.png";
import di from "../../assets/ProjectsImg/di.png";
import ggvra from "../../assets/ProjectsImg/ggvra.png";
import movieSite from "../../assets/ProjectsImg/movieSite.png";
import onnoff from "../../assets/ProjectsImg/onnoff.png";
import shoeStore from "../../assets/ProjectsImg/shoeStore.png";
import socialHub from "../../assets/ProjectsImg/socialHub.png";
import Techlab from "../../assets/ProjectsImg/Techlab.png";
import ProjectHeading from "../Heading/ProjectHeading";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

function Project() {
  return (
    <section className="bg-[#413e40] p-4 md:p-8">
      <h1>
        <ProjectHeading />
      </h1>
      <div className="mx-auto max-w-7xl">
        <Link
          heading="Customisation"
          subheading="Three.js"
          imgSrc={customiseOnnoff}
          href="https://customisation.onnoff.in/"
          target="_blank"
        />
        <Link
          heading="OnnOff"
          subheading="Wordpress"
          imgSrc={onnoff}
          href="https://onnoff.in/"
          target="_blank"
        />
        <Link
          heading="Dinnovations"
          subheading="React + Tailwind"
          imgSrc={di}
          href="https://dinnovations.vercel.app/"
          target="_blank"
        />
        <Link
          heading="GGVR Association"
          subheading="Wordpress"
          imgSrc={ggvra}
          href="https://ggvra.in/"
          target="_blank"
        />
        <Link
          heading="Movie Site FT"
          subheading="React + Tailwind"
          imgSrc={movieSite}
          href="https://movie-site-theta-eight.vercel.app/"
          target="_blank"
        />
        <Link
          heading="Shoe StoreFT"
          subheading="React + Tailwind"
          imgSrc={shoeStore}
          href="https://shoe-store-ui.vercel.app/"
          target="_blank"
        />
        <Link
          heading="SocialHub"
          subheading="React + Vite + Tailwind"
          imgSrc={socialHub}
          href="https://social-hub.app/"
          target="_blank"
        />
        <Link
          heading="TechLab"
          subheading="Wordpress"
          imgSrc={Techlab}
          href="http://techlabstudio.in/"
          target="_blank"
        />
      </div>
    </section>
  );
}

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div>
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 border-neutral-400 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-3xl font-bold text-neutral-100 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-neutral-50" />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default Project;
