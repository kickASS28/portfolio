import { useContext, useState } from "react";
import ModeContext from "../../store/context";
import classes from "./MobileNav.module.css";
import { NavLink, Link } from "react-router-dom";
import MenuButton from "./MenuButton";

const MobileNav = () => {
  const modeCtx = useContext(ModeContext);
  const night = modeCtx.night;
  const [menuVisible, setMenuVisible] = useState(false);

  const mobileNavHideShowHandler = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header
      className={`${classes.header} ${
        night ? classes.bgreverse_color_herder : classes.bgcolor_header
      }`}
    >
      <nav className={classes.navigation}>
        <div className={classes.brand_mode_container}>
          <div
            className={`${classes.navbar_brand} ${
              night ? classes.reverse_color_nav_brand : classes.color_nav_brand
            }`}
          >
            <Link to="/home">Ashwamedh Bahod</Link>
          </div>
          {menuVisible && (
            <div className={classes.navbar_actions}>
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
          )}
          <div onClick={mobileNavHideShowHandler}>
            <MenuButton night={night} />
          </div>
        </div>
        {menuVisible && (
          <div className={classes.navbar_nav}>
            <ul>
              <li>
                <NavLink
                  to="/web_developement"
                  className={`${classes.navbar_nav_item} ${
                    night ? classes.navbar_nav_item_reverse : ""
                  }`}
                  onClick={mobileNavHideShowHandler}
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
                  onClick={mobileNavHideShowHandler}
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
                  onClick={mobileNavHideShowHandler}
                >
                  Python and Data Science
                </NavLink>
              </li>
              <li>
                <Link
                  className={`${classes.navbar_actions_item} ${
                    night ? classes.navbar_actions_item_reverse : ""
                  }`}
                  to="/contact"
                  onClick={mobileNavHideShowHandler}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MobileNav;
