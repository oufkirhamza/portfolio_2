import React, { useContext } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MyContext } from "../../../utils/contextProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Star from "../../../components/Star";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  const { projects } = useContext(MyContext);
  useGSAP(() => {
    gsap.utils.toArray(".prjcts").forEach((prjct, i) => {
      ScrollTrigger.create({
        trigger: prjct,
        onEnter: () => console.log("enter"),
        start: "top 5%",
        endTrigger: ".cont",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        // toggleClass:'w-[10vw]'
      });
    });
  });
  return (
    <div className="cont text-white py-9 bg-[#060a21] min-h-[100vh] flex flex-col gap-3 items-center">
      <div className="flex items-center gap-3">
        <Star width={50} />
        <h1 className="text-3xl font-medium">Projects</h1>
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="prjcts flex relative justify-between gap-3 rounded-3xl pt-16  bg-gradient-to-tr from-[#060a21] to-[#121a44] border-2 border-[#1e26504b] overflow-hidden w-[70%]"
        >
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
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
          <div className="bg--500 flex flex-col gap-6 py-2 w-[50%] px-16">
            <h1>2024</h1>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div>
              <p className="text-xl">{project.description}</p>
            </div>
            <button className="px-4 z-50 opacity-85 cursor-pointer py-3 bg-white text-black rounded-lg w-fit text-xl font-medium flex items-center gap-2">
              View Project Details <MdOutlineArrowOutward />
            </button>
          </div>
          <div className="self-end h-[55vh] w-[50%] overflow-hidden">
            <img
              className="w-full h-full object-top object-cover rounded-tl-xl"
              src={project.images[0]}
              alt={project.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
