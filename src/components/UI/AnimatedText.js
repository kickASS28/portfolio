import classes from "./AnimatedText.module.css";
import ModeContext from "../../store/context";
import { useContext } from "react";

const AnimatedText = (props) => {
  const night = useContext(ModeContext).night;
  return (
    <div className={`container ${classes.animated_text_container}`}>
      <h1
        className={`${classes.animated_gradient_text} ${
          night
            ? classes.animated_text_color_reversed
            : classes.animated_text_color
        }`}
      >
        {props.text}
      </h1>
      <div className={classes.animated_gradient_text_overlay}>{props.text}</div>
    </div>
  );
};

export default AnimatedText;
