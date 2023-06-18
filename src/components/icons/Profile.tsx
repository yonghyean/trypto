import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 68 68"
    {...props}
  >
    <g filter="url(#profile_svg__a)">
      <rect width={60} height={60} x={4} fill="#fff" rx={30} />
      <path
        fill="#D1D5DB"
        fillRule="evenodd"
        d="M30 25a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5h-8Z"
        clipRule="evenodd"
      />
      <rect width={59} height={59} x={4.5} y={0.5} stroke="#000" rx={29.5} />
    </g>
    <circle
      cx={54}
      cy={49}
      r={9.375}
      fill="#FFCD1E"
      stroke="#fff"
      strokeWidth={1.25}
    />
    <path
      fill="#fff"
      d="M56.134 45.182a1.19 1.19 0 0 1 1.684 1.684l-.472.472-1.684-1.684.472-.472ZM54.82 46.496l-4.987 4.987v1.684h1.684l4.987-4.988-1.683-1.683Z"
    />
    <defs>
      <filter
        id="profile_svg__a"
        width={68}
        height={68}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_512_3034"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_512_3034"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgProfile;
