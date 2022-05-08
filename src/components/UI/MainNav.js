import { useContext } from "react";
import ModeContext from "../../store/context";
import classes from "./MainNav.module.css";
import { NavLink, Link } from "react-router-dom";

const MainNav = () => {
  const modeCtx = useContext(ModeContext);
  const night = modeCtx.night;
  return (
    <header
      className={`${classes.header} ${
        night ? classes.bgreverse_color_herder : classes.bgcolor_header
      }`}
    >
      <nav className={classes.navigation}>
        <div
          className={`${classes.navbar_brand} ${
            night ? classes.reverse_color_nav_brand : classes.color_nav_brand
          }`}
        >
          <Link to="/home">Ashwamedh Bahod</Link>
        </div>
        <div className={classes.navbar_nav}>
          <ul>
            <li>
              <NavLink
                to="/web_developement"
                className={`${classes.navbar_nav_item} ${
                  night ? classes.navbar_nav_item_reverse : ""
                }`}
                href="#"
              >
                Web-Develpoement
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/native_apps"
                className={`${classes.navbar_nav_item} ${
                  night ? classes.navbar_nav_item_reverse : ""
                }`}
              >
                Native Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/data_science_and_python"
                className={`${classes.navbar_nav_item} ${
                  night ? classes.navbar_nav_item_reverse : ""
                }`}
              >
                Python and Data Science
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.navbar_actions}>
          <Link
            className={`${classes.navbar_actions_item} ${
              night ? classes.navbar_actions_item_reverse : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>

          <div className={classes.mode_switch}>
            <p>{`${night ? "Night" : "Day"}`}</p>
            <label className={classes.switch}>
              <input
                type="checkbox"
                onChange={() => {
                  modeCtx.changeMode();
                }}
              />
              <span className={`${classes.slider} ${classes.round}`}></span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
