import classes from "./logos.module.css";
import { useState } from "react";

const PandasLogo = () => {
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
      href="https://pandas.pydata.org/"
      onMouseOver={showHandler}
      onMouseOut={hideHandler}
      target="_blank"
      rel="noreferrer"
    >
      <li className={classes.techlogo} key="pandas">
        <svg
          viewBox="-50 0 300 300"
          height="46"
          fill="currentColor"
          stroke="currentColor"
        >
          <rect
            className="cls-1"
            x="74.88"
            y="68.42"
            width="24.09"
            height="50.02"
          />
          <rect
            className="cls-1"
            x="74.88"
            y="171.17"
            width="24.09"
            height="50.02"
          />
          <rect
            className="cls-2"
            x="74.88"
            y="133.04"
            width="24.09"
            height="23.6"
          />
          <rect
            className="cls-1"
            x="36.19"
            y="109.55"
            width="24.09"
            height="166.27"
          />
          <rect
            className="cls-1"
            x="112.78"
            y="212.44"
            width="24.09"
            height="50.02"
          />
          <rect
            className="cls-1"
            x="112.78"
            y="109.61"
            width="24.09"
            height="50.02"
          />
          <rect
            className="cls-3"
            x="112.78"
            y="174.23"
            width="24.09"
            height="23.6"
          />
          <rect
            className="cls-1"
            x="150.67"
            y="55.39"
            width="24.09"
            height="166.27"
          />
        </svg>
        <p className={`${!showTooltip ? classes.hide : ""}`}>Pandas</p>
      </li>
    </a>
  );
};

export default PandasLogo;
