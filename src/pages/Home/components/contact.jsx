import { MdArrowOutward } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contact" className="text-white py-9 bg-[#060a21] flex flex-col gap-3 items-center">
      <div className="flex relative p-5 justify-between gap-3 rounded-3xl  bg-gradient-to-tr from-[#060a21] to-[#121a44] border-2 border-[#1e26504b] overflow-hidden w-[70%]">
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
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-2xl font-bold">Let's Connect and Create Something Amazing! </p>
            <p>
              Reach out to me for collaborations, inquiries, or just to say
              hello.{" "}
            </p>
          </div>
          <a href="mailto:oufkirhamza08@gmail.com" className="px-4 z-50 opacity-85 cursor-pointer py-3 bg-white text-black rounded-lg w-fit text-medium font-medium flex items-center gap-2">
            Contact Me <MdArrowOutward />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
