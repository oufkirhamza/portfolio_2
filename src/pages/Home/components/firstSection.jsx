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
      // width:"100%",
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
          <div className="flex flex-col gap-3 items-center text-center w-[40%] z-30">
            <div className="flex flex-col items-center">
              <img src={memoji} alt="" />
              <div className="flex items-center gap-2  bg-[#060a21] px-3 py-2 rounded-full">
                <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                <h1>Looking for new projects</h1>
              </div>
            </div>
            <h1 className="text-lg text-white/80">Hi, my name is </h1>
            <h1 className="text-4xl font-bold">OUFKIR Hamza</h1>
            <p className="text-2xl ">
              Full-stack developer focused on delivering powerful and intuitive
              digital solutions.
            </p>
            <div className="flex gap-5">
              <button className="px-5 py-2 bg-white border-2 border-white rounded-lg text-black font-medium">
                👋 Get in touch
              </button>
              <button className="px-5 py-2 border-2 border-white text-white flex items-center rounded-lg font-medium gap-2">
                View projects <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
          {/* !!!!!!!!!!!!!!! circles !!!!!!!!!!!!!!!!!!! */}
          <div className="overflow-hidden absolute w-[42rem] h-[42rem] border-2 border-[#2b5ab181] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-50% to-[#1930a24b]">
            {" "}
            <svg
              className="opacity-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
          <div className="overflow-hidden absolute w-[52rem] h-[52rem] border-2 border-[#2b5ab19f] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-[#1930a24b]">
            <svg
              className="opacity-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
          <div className="overflow-hidden absolute w-[62rem] h-[62rem] border-2 border-[#2b5ab19f] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-[#1930a24b]">
            <svg
              className="opacity-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
          <div className="overflow-hidden absolute w-[72rem] h-[72rem] border-2 border-[#2b5ab19f] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-[#1930a24b]">
            <svg
              className="opacity-15"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="10"
                  numOctaves="100"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
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
