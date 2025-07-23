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
    <div className="overflow-x-hidden text-white py-12 sm:py-16 lg:py-20 bg-[#060a21] min-h-[80vh] flex flex-col gap-6 sm:gap-8 items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center relative justify-between gap-6 sm:gap-8 w-full max-w-6xl">
        <div className="flex text-center items-center gap-3 mb-4 sm:mb-6">
          <Star width={40} className="sm:w-[50px]" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">My Tech Stack</h1>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Frontend Technologies */}
          <div className="frontend flex relative flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 rounded-2xl sm:rounded-3xl bg-gradient-to-bl from-[#060a21] to-[#121a44] overflow-hidden py-8 sm:py-10 px-6 sm:px-8">
            {/* <svg
              className="opacity-25 absolute inset-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilterFrontend">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.5"
                  numOctaves="20"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="70%" filter="url(#noiseFilterFrontend)" />
            </svg> */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-blue-400">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <StackIcon name="html5" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="css3" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="js" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="reactjs" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="sass" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="tailwindcss" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="bootstrap5" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
          </div>

          {/* Backend and Tools */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Backend */}
            <div className="backend flex-1 flex relative flex-col items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#060a21] to-[#121a44] overflow-hidden py-8 sm:py-10 px-6 sm:px-8">
              {/* <svg
                className="opacity-25 absolute inset-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="noiseFilterBackend">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.5"
                    numOctaves="20"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="70%" filter="url(#noiseFilterBackend)" />
              </svg> */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-green-400">Backend</h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <StackIcon name="php" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon name="laravel" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon name="mysql" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="outils flex-1 flex relative flex-col items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121a44] to-[#060a21] overflow-hidden py-8 sm:py-10 px-6 sm:px-8">
              {/* <svg
                className="opacity-25 absolute inset-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="noiseFilterTools">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.5"
                    numOctaves="2"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="70%" filter="url(#noiseFilterTools)" />
              </svg> */}
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-purple-400">Tools</h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <StackIcon name="github" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon name="postman" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon name="git"  className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon name="bash" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon name="figma" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
