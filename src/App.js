import MainNav from "./components/UI/MainNav";
import HomePage from "./Pages/HomePage";
import classes from "./App.module.css";
import ModeContext from "./store/context";
import WebDevData from "./Pages/Web_developement";
import DataScienceData from "./Pages/Data_Science";
import NativeData from "./Pages/Native";
import OtherData from "./Pages/Other";
import ContactData from "./Pages/Contact";
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import MobileNav from "./components/UI/MobileNav";

function App() {
  const modeCtx = useContext(ModeContext);
  const night = modeCtx.night;
  return (
    <div className={`${night ? classes.main_reverse : classes.main}`}>
      <MainNav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/web_developement" element={<WebDevData />} />
        <Route path="/native_apps" element={<NativeData />} />
        <Route path="/data_science_and_python" element={<DataScienceData />} />
        <Route path="/other" element={<OtherData />} />
        <Route path="/contact" element={<ContactData />} />
      </Routes>
    </div>
  );
}

export default App;
