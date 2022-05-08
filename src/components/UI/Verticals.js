import React from "react";

import classes from "./Socials.module.css";
import Web from "../../assets/Web.jpg";
import Native from "../../assets/native.png";
import Python from "../../assets/Python.png";
import { Link } from "react-router-dom";

const Verticals = ({ night }) => {
  return (
    <ul className={classes.socials}>
      <li>
        <Link to="/web_developement">
          <img src={Web} alt="Gmail" width={100} height={100} />
          <span style={{ color: night ? "white" : "black" }}>
            Web Development
          </span>
        </Link>
      </li>
      <li>
        <Link to="/native_apps">
          <img src={Native} alt="LinkedIn" width={100} height={100} />
          <span style={{ color: night ? "white" : "black" }}>
            Native Applications
          </span>
        </Link>
      </li>
      <li>
        <Link to="/data_science_and_python">
          <img src={Python} alt="GitHub" width={100} height={100} />
          <span style={{ color: night ? "white" : "black" }}>Python</span>
        </Link>
      </li>
    </ul>
  );
};

export default Verticals;
