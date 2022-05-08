import { Fragment } from "react";
import BootstarpLogo from "../logos/BootstrapLogo";
import D3JSLogo from "../logos/D3JSLogo";
import DjangoLogo from "../logos/DjangoLogo";
import ExcelLogo from "../logos/ExcelLogo";
import MatplotlibLogo from "../logos/MatplotlibLogo";
import MongoDBLogo from "../logos/MongoDBLogo";
import NextjsLogo from "../logos/NextjsLogo";
import NodejsLogo from "../logos/NodejsLogo";
import ExpressjsLogo from "../logos/ExpressJsLogo";
import NpmLogo from "../logos/NpmLogo";
import NumpyLogo from "../logos/NumpyLogo";
import PandasLogo from "../logos/PandasLogo";
import ReactjsLogo from "../logos/ReactjsLogo";
import ScipyLogo from "../logos/ScipyLogo";
import ReactNativeLogo from "../logos/ReactNativeLogo";
import classes from "./technologies.module.css";
import ExpoLogo from "../logos/ExpoLogo";

const Technologies = ({ night, type }) => {
  const web = (
    <div
      className={`${classes.container} ${
        night ? classes.container_reverse : ""
      }`}
    >
      <span className="headings">Worked with 10+ different technologies</span>
      <ul className={classes.technologies}>
        <MongoDBLogo night={night} />
        <ExpressjsLogo night={night} />
        <ReactjsLogo night={night} />
        <NodejsLogo night={night} />
        <NpmLogo night={night} />
        <NextjsLogo night={night} />
        <DjangoLogo night={night} />
        <BootstarpLogo night={night} />
        <MongoDBLogo night={night} />
        <ExpressjsLogo night={night} />
        <ReactjsLogo night={night} />
        <NodejsLogo night={night} />
        <NpmLogo night={night} />
        <NextjsLogo night={night} />
        <DjangoLogo night={night} />
        <BootstarpLogo night={night} />
      </ul>
    </div>
  );
  const ds = (
    <div
      className={`${classes.container} ${
        night ? classes.container_reverse : ""
      }`}
    >
      <span className="headings">Worked with many data science tools</span>
      <ul className={classes.technologies}>
        <PandasLogo night={night} />
        <NumpyLogo night={night} />
        <D3JSLogo night={night} />
        <ScipyLogo night={night} />
        <ExcelLogo night={night} />
        <MatplotlibLogo night={night} />
        <PandasLogo night={night} />
        <NumpyLogo night={night} />
        <D3JSLogo night={night} />
        <ScipyLogo night={night} />
        <ExcelLogo night={night} />
        <MatplotlibLogo night={night} />
      </ul>
    </div>
  );

  const na = (
    <div
      className={`${classes.container} ${
        night ? classes.container_reverse : ""
      }`}
    >
      <span className="headings">Tools I have worked with</span>
      <ul className={`${classes.technologies} ${classes.technologies_native}`}>
        <ReactNativeLogo night={night} />
        <ExpoLogo />
        <ReactNativeLogo night={night} />
        <ExpoLogo />
      </ul>
    </div>
  );

  return (
    <Fragment>
      {type === "web" && web}
      {type === "ds" && ds}
      {type === "na" && na}
    </Fragment>
  );
};

export default Technologies;
