import React from "react";

const Logo = () => {
  return (
    <div>
      <svg
        width="50"
        height="50"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="rotate(45 64 64)">
          <rect x="34" y="34" width="60" height="60" rx="12" fill="#F4C20D" />

          <path
            d="M52 64
         C58 52, 70 48, 82 52
         C74 56, 66 64, 60 76
         C56 72, 53 68, 52 64Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
