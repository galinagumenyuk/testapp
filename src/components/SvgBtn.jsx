import * as React from "react";

const SvgBtn = (props) => (
  <svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.886 6.598-4.782 4.78a.84.84 0 0 1-1.192 0l-.794-.794a.84.84 0 0 1 0-1.191l3.389-3.39-3.389-3.389a.84.84 0 0 1 0-1.191L1.909.62a.84.84 0 0 1 1.192 0l4.781 4.781c.334.33.334.865.004 1.196Z"
      fill="none"
    />
  </svg>
)

export default SvgBtn