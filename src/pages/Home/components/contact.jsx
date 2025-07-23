import { MdArrowOutward } from "react-icons/md";
import StarBorder from "../../../components/blocks/Animations/StarBorder/StarBorder";
const Contact = () => {
  return (
    <div
      id="contact"
      className="text-white py-12 sm:py-16 lg:py-20 bg-[#060a21] flex flex-col gap-6 items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row relative p-6 sm:p-8 lg:p-10 justify-between gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#060a21] to-[#121a44] border-2 border-[#1e26504b] overflow-hidden w-full max-w-6xl">
        {/* <svg
          className="opacity-25 absolute inset-0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilterContact">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="20"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterContact)" />
        </svg> */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-8 relative z-10">
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Let's Connect and Create Something Amazing!
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Reach out to me for collaborations, inquiries, or just to say hello.
            </p>
          </div>
          <div className="flex-shrink-0">
            <StarBorder
              as="a"
              href="mailto:oufkirhamza08@gmail.com"
              className="custom-class inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-medium"
              color="cyan"
              speed="8s"
            >
              Contact Me <MdArrowOutward />
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
