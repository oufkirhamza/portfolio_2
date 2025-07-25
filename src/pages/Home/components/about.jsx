import React from "react";
import me from "../../../assets/img/P1088847.JPG";
import { FaArrowRight } from "react-icons/fa6";
import Star from "../../../components/Star";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-6 sm:gap-8 items-center bg-[#060a21] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <Star width={40} className="sm:w-[50px]" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">About</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between relative rounded-2xl sm:rounded-3xl gap-6 lg:gap-8 bg-gradient-to-tr from-[#060a21] to-[#121a44] overflow-hidden w-full max-w-6xl p-6 sm:p-8 lg:p-10">
        {/* <svg
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
        </svg> */}
        <div className="flex flex-col gap-4 lg:w-[50%] ">
          <h1 className="text-3xl">Know who am I</h1>
          <p className="leading-8">
            I’m a full-stack developer with a passion for building web and
            mobile apps that are both functional and user-friendly. I love
            creating seamless experiences using technologies like React.js,
            Laravel, and Expo React Native. From designing intuitive frontends
            to developing efficient backends, I enjoy turning ideas into
            impactful solutions. Let’s create something amazing together!
          </p>
          {/* <button className="border-2 bg-transparent px-4 py-2 self-start rounded-lg flex items-center gap-2">
            <span>Let's work </span> <FaArrowRight />
          </button> */}
        </div>
        <img
          loading="lazy"
          src={me}
          className="lg:w-[40%] rounded-xl h-[50vh] object-cover object-top "
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
