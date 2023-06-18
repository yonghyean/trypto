import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 27 36"
    {...props}
  >
    <path
      fill="#D1D5DB"
      d="M11.834 35.191C8.164 30.665 0 19.696 0 13.535 0 6.06 6.044 0 13.5 0 20.953 0 27 6.06 27 13.535c0 6.161-8.227 17.13-11.834 21.656a2.121 2.121 0 0 1-3.332 0ZM13.5 18.047a4.51 4.51 0 0 0 4.5-4.512 4.51 4.51 0 0 0-4.5-4.512A4.51 4.51 0 0 0 9 13.535a4.51 4.51 0 0 0 4.5 4.512Z"
    />
  </svg>
);
export default SvgBadge;
