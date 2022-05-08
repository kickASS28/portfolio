import classes from "./logos.module.css";
import { useState } from "react";

const ReactNativeLogo = ({ night }) => {
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
      href="https://reactnative.dev/"
      onMouseOver={showHandler}
      onMouseOut={hideHandler}
      target="_blank"
      rel="noreferrer"
    >
      <li className={classes.techlogo} key="react native">
        <svg
          height="46"
          viewBox="0 0 24 22"
          fill="none"
          stroke={night ? "#FFF" : "#000"}
        >
          <path d="M12 12.807a2.05 2.05 0 100-4.1 2.05 2.05 0 000 4.1z"></path>
          <path d="M12 14.957c6.075 0 11-1.88 11-4.2 0-2.32-4.925-4.2-11-4.2s-11 1.88-11 4.2c0 2.32 4.925 4.2 11 4.2z"></path>
          <path d="M8.363 12.857c3.037 5.261 7.128 8.586 9.137 7.426 2.009-1.16 1.175-6.365-1.863-11.626C12.6 3.396 8.51.071 6.5 1.231 4.491 2.39 5.325 7.596 8.363 12.857z"></path>
          <path d="M8.363 8.657C5.325 13.918 4.49 19.124 6.5 20.283c2.009 1.16 6.1-2.165 9.137-7.426C18.675 7.596 19.51 2.391 17.5 1.231 15.491.07 11.4 3.396 8.363 8.657z"></path>
        </svg>
        <p className={`${!showTooltip ? classes.hide : ""}`}>React Native</p>
      </li>
    </a>
  );
};

export default ReactNativeLogo;
