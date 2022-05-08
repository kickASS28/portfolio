import classes from "./logos.module.css";
import { useState } from "react";

const NpmLogo = ({ night }) => {
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
      href="https://www.npmjs.com/"
      onMouseOver={showHandler}
      onMouseOut={hideHandler}
      target="_blank"
      rel="noreferrer"
    >
      <li className={classes.techlogo} key="npm">
        <svg
          height="48"
          aria-hidden="true"
          focusable="false"
          data-icon="npm"
          role="img"
          viewBox="0 0 576 512"
        >
          <path
            fill={night ? "#FFF" : "#000"}
            d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
          />
        </svg>
        <p className={`${!showTooltip ? classes.hide : ""}`}>NPM</p>
      </li>
    </a>
  );
};

export default NpmLogo;
