import { Fragment, useContext } from "react";
import PageDetails from "../components/PageDetails";
import ProjectContainer from "../components/projects/ProjectContainer";
import AnimatedText from "../components/UI/AnimatedText";
import Verticals from "../components/UI/Verticals";
import Resume from "../assets/Ashwamedh_Bahod_Resume.pdf";
import ModeContext from "../store/context";

const HomePage = () => {
  const modeCtx = useContext(ModeContext);
  const night = modeCtx.night;
  const description =
    "Hi there, thank you for your interest in me! The purpose of this portfolio is to highlight my development journey and skills associated with the web, native apps, and python. The projects that I am including are all but the ones that I feel best to describe my abilities in that particular technology.";
  return (
    <Fragment>
      <AnimatedText text="Welcome" />
      <PageDetails desc={description} />
      <ProjectContainer title="My interests">
        <Verticals night={night} />
        <a
          className="resume"
          href={Resume}
          target="_blank"
          rel="noreferrer"
          download
        >
          Click Here To Download My Resume ➤
        </a>
      </ProjectContainer>
    </Fragment>
  );
};

export default HomePage;
