import React from "react";
import StackIcon from "tech-stack-icons";
import Star from "../../../components/Star";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  useGSAP(() => {
    gsap.from(".frontend", {
      y: "100%",
      duration: 1,
      opacity:0,
      scrollTrigger: {
        trigger: ".frontend",
        start: "bottom bottom+=0%",
        end: "top top+=40%",
        scrub:true,
      },
    });
    gsap.from(".backend", {
      x: "-100%",
      duration: 1,
      opacity:0,
      scrollTrigger: {
        trigger: ".backend",
        scrub:true,
        start: "bottom bottom+=0%",
        end: "top top+=40%",
      },
    });
    gsap.from(".outils", {
      x: "100%",
      duration: 1,
      opacity:0,
      scrollTrigger: {
        scrub:true,
        trigger: ".outils",
        start: "bottom bottom+=0%",
        end: "top top+=40%",
      },
    });
  });
  return (
    <div className="overflow-x-hidden text-white py-9 bg-[#060a21] min-h-[80vh] flex flex-col gap-3 items-center">
      <div className="flex flex-col items-center relative justify-between gap-3 w-[70%]">
        <div className="flex text-center items-center gap-3">
          <Star width={50} />
          <h1 className="text-3xl font-medium">My Tech Stack</h1>
        </div>
        <div className="flex flex-col gap-5">
          
          <div className="frontend flex relative flex-wrap gap-12 rounded-3xl bg-gradient-to-bl from-[#060a21] to-[#121a44] overflow-hidden py-10 px-7">
            <svg
              className="opacity-25 absolute inset-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.5"
                  numOctaves="20"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="70%" filter="url(#noiseFilter)" />
            </svg>
            <StackIcon name="html5" />
            <StackIcon name="css3" />
            <StackIcon name="js" />
            <StackIcon name="reactjs" />
            <StackIcon name="sass" />
            <StackIcon name="tailwindcss" />
            <StackIcon name="bootstrap5" />
          </div>
          <div className="flex gap-2">
            <div className="backend flex relative gap-10 rounded-3xl bg-gradient-to-tr from-[#060a21] to-[#121a44] overflow-hidden py-10 px-7">
              <svg
                className="opacity-25 absolute inset-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.5"
                    numOctaves="20"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="70%" filter="url(#noiseFilter)" />
              </svg>
              <StackIcon name="php" />
              <StackIcon name="laravel" />
              <StackIcon name="mysql" />
            </div>
            <div className="outils flex relative gap-10 rounded-3xl bg-gradient-to-br from-[#121a44] to-[#060a21] overflow-hidden py-10 px-7">
              <svg
                className="opacity-25 absolute inset-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.5"
                    numOctaves="20"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="70%" filter="url(#noiseFilter)" />
              </svg>
              <StackIcon name="postman" />
              <StackIcon name="git" />
              <StackIcon grayscale name="github" />
              <StackIcon name="bash" />
              <StackIcon name="figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
