import classes from "./logos.module.css";
import { useState } from "react";

const NumpyLogo = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const showHandler = () => {
    setShowTooltip(true);
  };
  const hideHandler = () => {
    setShowTooltip(false);
  };
  return (
    <a
      className={classes.anchor}
      href="https://numpy.org/"
      onMouseOver={showHandler}
      onMouseOut={hideHandler}
      target="_blank"
      rel="noreferrer"
    >
      <li className={classes.techlogo} key="numpy">
        <svg
          viewBox="0 0 500 500"
          height="46"
          fill="currentColor"
          stroke="currentColor"
        >
          <g data-name="Layer 1">
            <polygon points="220.93 127.14 151.77 92.23 75.87 130.11 146.9 165.78 220.93 127.14" />
            <polygon points="252.63 143.14 325.14 179.74 249.91 217.52 178.77 181.79 252.63 143.14" />
            <polygon points="349.47 92.76 423.96 130.11 357.34 163.57 284.68 126.92 349.47 92.76" />
            <polygon points="317.41 76.67 250.35 43.05 184.01 76.15 253.11 111 317.41 76.67" />
            <polygon points="264.98 365.44 264.98 456.95 346.22 416.41 346.13 324.86 264.98 365.44" />
            <polygon points="346.1 292.91 346.01 202.32 264.98 242.6 264.98 333.22 346.1 292.91" />
            <polygon points="443.63 275.93 443.63 367.8 374.34 402.38 374.29 310.93 443.63 275.93" />
            <polygon points="443.63 243.81 443.63 153.79 374.21 188.3 374.27 279.07 443.63 243.81" />
            <path d="M236.3,242.6l-54.72-27.51V334s-66.92-142.39-73.12-155.18c-.8-1.65-4.09-3.46-4.93-3.9-12-6.3-47.16-24.11-47.16-24.11V360.89l48.64,26V277.08s66.21,127.23,66.88,128.62,7.32,14.8,14.42,19.51c9.46,6.26,50,30.64,50,30.64Z" />
          </g>
        </svg>
        <p className={`${!showTooltip ? classes.hide : ""}`}>Numpy</p>
      </li>
    </a>
  );
};

export default NumpyLogo;
