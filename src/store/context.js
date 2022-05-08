import React from "react";

const ModeContext = React.createContext({ night: false, changeMode: () => {} });

export default ModeContext;
