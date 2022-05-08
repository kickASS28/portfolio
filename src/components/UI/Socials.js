import React from "react";

import classes from "./Socials.module.css";
import Gmail from "../../assets/gmail.jpg";
import LinkedIn from "../../assets/LinkedIn.png";
import GitHub from "../../assets/GitHub.png";

const Socials = (props) => {
  return (
    <ul className={classes.socials}>
      <li>
        <a href="mailto:ashwamedhpb@gmail.com" target="_blank" rel="noreferrer">
          <img src={Gmail} alt="Gmail" width={100} height={100} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ashwamedh-bahod-157a061a9"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" width={100} height={100} />
        </a>
      </li>
      <li>
        <a href="https://github.com/kickASS28" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="GitHub" width={100} height={100} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
