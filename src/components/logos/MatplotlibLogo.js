import classes from "./logos.module.css";
import { useState } from "react";
const MatplotlibLogo = () => {
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
      href="https://matplotlib.org/"
      onMouseOver={showHandler}
      onMouseOut={hideHandler}
      target="_blank"
      rel="noreferrer"
    >
      <li className={classes.techlogo} key="matplotlib">
        <svg width="45" height="45" stroke="gray" viewBox="-10 0 190 170">
          <g strokeWidth="2" fill="#FFF">
            <circle cx="90" cy="90" r="88" />
            <circle cx="90" cy="90" r="66" />
            <circle cx="90" cy="90" r="44" />
            <circle cx="90" cy="90" r="22" />
            <path d="m90,2v176m62-26-124-124m124,0-124,124m150-62H2" />
          </g>
          <g opacity=".8">
            <path d="m90,90h18a18,18 0 0,0 0-5z" />
            <path d="m90,90 34-43a55,55 0 0,0-15-8z" />
            <path d="m90,90-16-72a74,74 0 0,0-31,15z" />
            <path d="m90,90-58-28a65,65 0 0,0-5,39z" />
            <path d="m90,90-33,16a37,37 0 0,0 2,5z" />
            <path d="m90,90-10,45a46,46 0 0,0 18,0z" />
            <path d="m90,90 46,58a74,74 0 0,0 12-12z" />
          </g>
        </svg>
        <p className={`${!showTooltip ? classes.hide : ""}`}>Matplotlib</p>
      </li>
    </a>
  );
};

export default MatplotlibLogo;
