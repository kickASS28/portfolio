import classes from "./logos.module.css";
import { useState } from "react";
import ExpoLogoImg from "../../assets/expo.webp";

const ExpoLogo = ({ night }) => {
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
      href="https://docs.expo.dev/"
      onMouseOver={showHandler}
      onMouseOut={hideHandler}
      target="_blank"
      rel="noreferrer"
    >
      <li className={classes.techlogo} key="react native">
        <img
          src={ExpoLogoImg}
          width="80"
          height="80"
          alt="Expo Logo"
          style={{ borderRadius: 50 }}
        />
        <p className={`${!showTooltip ? classes.hide : ""}`}>Expo</p>
      </li>
    </a>
  );
};

export default ExpoLogo;
