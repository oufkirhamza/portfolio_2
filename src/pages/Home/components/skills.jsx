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
      opacity: 0,
      scrollTrigger: {
        trigger: ".frontend",
        start: "bottom bottom+=0%",
        end: "top top+=40%",
        scrub: true,
      },
    });
    gsap.from(".backend", {
      x: "-100%",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".backend",
        scrub: true,
        start: "bottom bottom+=0%",
        end: "top top+=40%",
      },
    });
    gsap.from(".outils", {
      x: "100%",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        scrub: true,
        trigger: ".outils",
        start: "bottom bottom+=0%",
        end: "top top+=40%",
      },
    });
  });
  const GithubIncon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 sm:w-16 sm:h-16"
        fill="none"
        viewBox="0 0 100 100"
      >
        <path
          fill="#fff"
          d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.326 40.834 34.193 47.446 2.499.462 3.416-1.085 3.416-2.406 0-1.192-.046-5.131-.067-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.552-7.315-5.552-7.315-4.536-3.104.342-3.04.342-3.04 5.021.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.543-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.39 4.595 3.39 9.26 0 6.69-.057 12.074-.057 13.721 0 1.33.9 2.89 3.434 2.399C85.691 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"
        />
        <path
          fill="#fff"
          d="M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.108-.256.5-.327.862-.156.363.163.57.505.445.755m2.459 2.194c-.238.221-.705.118-1.021-.231-.327-.349-.388-.814-.146-1.04.245-.22.698-.117 1.025.232.328.353.391.816.142 1.04zm1.687 2.808c-.306.213-.807.013-1.117-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.117.42.306.452.306.985-.007 1.203m2.854 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.294.191.435.403.567.979.275 1.278m3.687 1.098c-.12.391-.682.57-1.249.403-.565-.171-.935-.63-.821-1.026.117-.394.682-.58 1.253-.401.564.17.935.625.818 1.024m4.198.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.089-.726 0-.416.47-.755 1.067-.765.595-.012 1.082.32 1.082.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.349-.826.928-.933.591-.103 1.12.14 1.196.548"
        />
      </svg>
    );
  };
  return (
    <div className="overflow-x-hidden text-white pt-36 lg:py-20 bg-[#060a21] min-h-[80vh] flex flex-col gap-6 sm:gap-8 items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center relative justify-between gap-6 sm:gap-8 w-full max-w-6xl">
        <div className="flex text-center items-center gap-3 mb-4 sm:mb-6">
          <Star width={40} className="sm:w-[50px]" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            My Tech Stack
          </h1>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Frontend Technologies */}
          <div className="frontend flex relative flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 rounded-2xl sm:rounded-3xl bg-gradient-to-bl from-[#060a21] to-[#121a44] overflow-hidden py-8 sm:py-10 px-6 sm:px-8">
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-blue-400">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <StackIcon name="html5" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="css3" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon name="js" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon
                  name="reactjs"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <StackIcon name="sass" className="w-12 h-12 sm:w-16 sm:h-16" />
                <StackIcon
                  name="tailwindcss"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <StackIcon
                  name="bootstrap5"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          </div>

          {/* Backend and Tools */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Backend */}
            <div className="backend flex-1 flex relative flex-col items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#060a21] to-[#121a44] overflow-hidden py-8 sm:py-10 px-6 sm:px-8">
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-green-400">
                  Backend
                </h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <StackIcon name="php" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon
                    name="laravel"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <StackIcon
                    name="mysql"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="outils flex-1 flex relative flex-col items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121a44] to-[#060a21] overflow-hidden py-8 sm:py-10 px-6 sm:px-8">
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-purple-400">
                  Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {GithubIncon()}
                  <StackIcon
                    name="postman"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <StackIcon name="git" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <StackIcon
                    name="bash"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <StackIcon
                    name="figma"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
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
