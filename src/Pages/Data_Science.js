import { Fragment } from "react";
import AnimatedText from "../components/UI/AnimatedText";
import Technologies from "../components/UI/technologies";
import PythonProject1 from "../assets/PythonProject1.png";
import PageDetails from "../components/PageDetails";
import ProjectContainer from "../components/projects/ProjectContainer";
import ProjectReverse from "../components/projects/ProjectReverse";
import Project from "../components/projects/Project";

const DataScienceData = () => {
  const description =
    "Python and Data Science have ignited my interest many times. The ability of Data Science to bring simplicity into complex and vague information always delights me. I have utilized the basics of Statics and Probability, Web Scraping, Exploratory Data Analysis, and Data Visualization in my designs.";
  return (
    <Fragment>
      <AnimatedText text="Python and Data Science" />
      <PageDetails desc={description} />
      <Technologies type="ds" />
      <ProjectContainer title="Contribution">
        <ProjectReverse
          title="Positive Int"
          description="This is my contribution to the python community. Positive Int is a sub class of Int that will always return a positive integer value for any valid algrebic operation."
          vision="NA"
          deployment="Code file can be downloaded from GitHub Repo"
          technologies={["Python", "Python Discripters"]}
          bgc={{ backgroundColor: "gray" }}
          href="https://github.com/kickASS28/Python/"
          mockup={PythonProject1}
        />
        <Project
          title="Dynamic Array"
          description="This is implimentation of a Dynamic Array which will grow or shrink on basis of the space requirement and also allows to remove or add elements to the array."
          vision="NA"
          deployment="Code file can be downloaded from GitHub Repo"
          technologies={["Python", "Python Ctypes"]}
          bgc={{ backgroundColor: "gray" }}
          href="https://github.com/kickASS28/Python/"
          mockup={PythonProject1}
        />
      </ProjectContainer>
    </Fragment>
  );
};

export default DataScienceData;
