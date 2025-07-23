import { useContext } from "react";
import "./firstSection.sass";
import { MyContext } from "../../../utils/contextProvider";
import memoji from "../../../assets/img/character.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import Star from "../../../components/Star";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const FirstSection = () => {
  const { test } = useContext(MyContext);
  // gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".bigcircle", {
      ScrollTrigger: {
        trigger: "bigcircle",
        markers: true,
        // onEnter: () => console.log("tezz"),
        start: "top top+=10%",
        // endTrigger: ".cont",
        end: "bottom bottom",
        // width:"100%",
        // scrub: 1,
        // pin: true,
        // pinSpacing: false,
        // toggleClass:'w-[10vw]'
      },
      // width:"100%",npm
    });
  },[]);
  return (
    <>
      <div className="min-h-[100vh] w-full overflow-hidden">
        <div className="relative bg-gradient-to-t text-white from-[#060a21] to-[#0d195d] w-full min-h-[100vh] flex justify-center items-center">
          <div className="flex justify-center gap-10 absolute -top-7 right-[50%] translate-x-[50%]">
            {/* lights */}
            <div className="bigcircle motion-preset-blink motion-duration-2000 w-5 opacity-30 blur-md right-[60%] h-[50vh] rotate-12 bg-gradient-to-b from-white/40 rounded-full backdrop-blur-sm"></div>
            <div className="motion-preset-blink motion-duration-2000 w-5 opacity-30 blur-md right-[30%] h-[50vh] rotate-6 bg-gradient-to-b from-white/40 rounded-full backdrop-blur-sm"></div>
            <div className="motion-preset-blink motion-duration-2000 w-5 opacity-30 blur-md right-[70%] h-[50vh] -rotate-3 bg-gradient-to-b from-white/40 rounded-full backdrop-blur-sm"></div>
            <div className="motion-preset-blink motion-duration-2000 w-5 opacity-30 blur-md right-[50%] h-[50vh] -rotate-12 bg-gradient-to-b from-white/40 rounded-full backdrop-blur-sm"></div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 items-center text-center w-full max-w-4xl px-4 sm:px-6 lg:px-8 z-30">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <img src={memoji} alt="Hamza Oufkir" className=" lg:w-auto lg:h-auto" />
              <div className="flex items-center gap-2 bg-[#060a21] px-3 py-2 rounded-full text-sm sm:text-base">
                <div className="bg-green-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                <span>Looking for new projects</span>
              </div>
            </div>
            <h1 className="text-base sm:text-lg lg:text-xl text-white/80">Hi, my name is</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">OUFKIR Hamza</h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-3xl">
              Full-stack developer focused on delivering powerful and intuitive
              digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
              <a
                href="#contact"
                className="px-5 py-3 bg-white border-2 border-white rounded-lg text-black font-medium hover:bg-gray-100 transition-colors text-center"
              >
                👋 Get in touch
              </a>
              <a
                href="#projects"
                className="px-5 py-3 border-2 border-white text-white flex items-center justify-center rounded-lg font-medium gap-2 hover:bg-white/10 transition-colors"
              >
                View projects <MdOutlineArrowOutward />
              </a>
            </div>
          </div>
          {/* !!!!!!!!!!!!!!! circles !!!!!!!!!!!!!!!!!!! */}
          <div className="overflow-hidden absolute w-80 h-80 lg:w-[42rem] lg:h-[42rem] border-2 border-[#2b5ab181] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-50% to-[#1930a24b]">
            <svg
              className="opacity-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter1">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter1)" />
            </svg>
          </div>
          <div className="overflow-hidden absolute w-96 h-96 lg:w-[52rem] lg:h-[52rem] border-2 border-[#2b5ab19f] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-[#1930a24b]">
            <svg
              className="opacity-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter2)" />
            </svg>
          </div>
          <div className="overflow-hidden absolute w-[28rem]  sm:w-[ sm:h-[36rem] lg:w-[62rem] lg:h-[62rem] border-2 border-[#2b5ab19f] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-[#1930a24b]">
            <svg
              className="opacity-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter3">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter3)" />
            </svg>
          </div>
          <div className="overflow-hidden absolute w-[42rem]  sm:w-[ sm:h-[44rem] lg:w-[72rem] lg:h-[72rem] border-2 border-[#2b5ab19f] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-[#1930a24b]">
            <svg
              className="opacity-15"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter4">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter4)" />
            </svg>
          </div>
          <div className="w-full h-[50vh] absolute bottom-0 bg-gradient-to-t from-[#060a21] "></div>
          {/* stars */}
          <Star
            width={40}
            height={40}
            className={`absolute top-[54%] left-[70%] motion-preset-pulse motion-duration-2000`}
          />
          <Star
            width={40}
            height={40}
            className={`absolute top-[20%] left-[42%] rotate-45  motion-preset-pulse motion-duration-2000`}
          />
          <Star
            width={40}
            height={40}
            className={`absolute top-[65%] left-[32%] rotate-45  motion-preset-pulse motion-duration-2000`}
          />
        </div>
      </div>
    </>
  );
};
