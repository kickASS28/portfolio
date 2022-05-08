import React, { useState } from "react";
import ModeContext from "./context";

const ContextProvider = (props) => {
  const [night, setNight] = useState(false);
  const changeMode = (event) => {
    setNight(!night);
  };
  return (
    <ModeContext.Provider value={{ night, changeMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ContextProvider;
