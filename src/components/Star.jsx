import React from "react";

const Star = ({width, height, className}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6046 30.905C15.1638 16.4798 14.8034 16.1217 0.378174 15.6786C14.8034 15.2377 15.1615 14.8773 15.6046 0.452148C16.0454 14.8773 16.4058 15.2355 30.831 15.6786C16.4058 16.1217 16.0477 16.4754 15.6046 30.905Z"
        fill="url(#paint0_linear_1_247)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_247"
          x1="0.378174"
          y1="1.25354"
          x2="34.4636"
          y2="7.07885"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3550d5" />
          <stop offset="1" stopColor="#172fa3" stopOpacity="0.74" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Star;
