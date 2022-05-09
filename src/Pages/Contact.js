import { Fragment } from "react";
import PageDetails from "../components/PageDetails";
import ProjectContainer from "../components/projects/ProjectContainer";
import AnimatedText from "../components/UI/AnimatedText";
import Socials from "../components/UI/Socials";
import Resume from "../assets/Ashwamedh_Bahod_Resume.pdf";

const ContactData = () => {
  const description =
    "Feel free to contact me Feel free to contact me on the below socials in case of any questions and concerns, I will be glad to hear from you :)";
  return (
    <Fragment>
      <AnimatedText text="Lets be in touch!" />
      <PageDetails desc={description} />
      <ProjectContainer title="Socials">
        <Socials />
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

export default ContactData;
