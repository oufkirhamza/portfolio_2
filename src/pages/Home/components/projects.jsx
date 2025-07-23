import React, { useContext } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MyContext } from "../../../utils/contextProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Star from "../../../components/Star";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  const { projects } = useContext(MyContext);
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.utils.toArray(".prjcts").forEach((prjct, i) => {
      ScrollTrigger.create({
        trigger: prjct,
        onEnter: () => console.log("enter"),
        start: "top 10%",
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
    <div id="projects" className="cont text-white py-12 sm:py-16 lg:py-20 bg-[#060a21] min-h-[100vh] flex flex-col gap-6 sm:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <Star width={40} className="sm:w-[50px]" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">Projects</h1>
      </div>

      <div className="w-full max-w-7xl space-y-6 sm:space-y-8 lg:space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="prjcts flex flex-col lg:flex-row relative justify-between gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:pt-16 bg-gradient-to-tr from-[#060a21] to-[#121a44] border-2 border-[#1e26504b] overflow-hidden w-full"
          >
            {/* <svg
              className="opacity-25 absolute inset-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id={`noiseFilter-${index}`}>
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.5"
                  numOctaves="20"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter={`url(#noiseFilter-${index})`} />
            </svg> */}

            {/* Content Section */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:w-[50%] z-10 relative">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-sm sm:text-base text-blue-400 font-medium">{project.year}</span>
                <span className="hidden sm:block text-gray-500">•</span>
                <span className="text-sm sm:text-base text-gray-400">{project.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{project.title}</h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs sm:text-sm font-medium">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="px-4 sm:px-6 py-3 bg-white text-black rounded-lg w-fit text-base sm:text-lg lg:text-xl font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors z-50 relative mt-2"
              >
                View Project Details <MdOutlineArrowOutward />
              </button>
            </div>

            {/* Image Section */}
            <div className="lg:w-[50%] h-64 sm:h-80 lg:h-[55vh] overflow-hidden rounded-xl lg:rounded-tl-xl lg:rounded-bl-none lg:self-end">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={project.images[0]}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
