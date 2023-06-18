import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M4.25 25.5h25.5v-2.833H4.25V25.5Zm0-7.083h25.5v-2.834H4.25v2.834Zm0-9.917v2.833h25.5V8.5H4.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenu;
