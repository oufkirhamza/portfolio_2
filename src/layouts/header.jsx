import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center fixed right-[50%] translate-x-[50%] z-[100] top-4">
      <div className="px-5 z-40 py-3 text-white/90 border-2  border-white/70 rounded-full flex items-center justify-center gap-5 relative  font-bold">
        <Link className="z-40" to={"/"}>Home</Link>
        <Link className="z-40" to={"/"}>Works</Link>
        <Link className="z-40" to={"/"}>About</Link>
        <Link className="z-40" to={"/"}>Contact</Link>
        <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/10"></div>
      </div>
    </div>
  );
};

export default Header;
