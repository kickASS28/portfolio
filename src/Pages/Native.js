import { Fragment } from "react";
import { useContext } from "react";
import PageDetails from "../components/PageDetails";
import Guess_a_number from "../assets/Guess_a_number.apk";
import Recipe_book from "../assets/Recipe_book.apk";
import GeoLocator from "../assets/GeoLocator.apk";
import NativeProject1 from "../assets/NativeProject1.png";
import NativeProject2 from "../assets/NativeProject2.png";
import NativeProject3 from "../assets/NativeProject3.png";
import Project from "../components/projects/Project";
import ProjectContainer from "../components/projects/ProjectContainer";
import ProjectReverse from "../components/projects/ProjectReverse";
import AnimatedText from "../components/UI/AnimatedText";
import Technologies from "../components/UI/technologies";
import ModeContext from "../store/context";

const NativeData = () => {
  const modeCtx = useContext(ModeContext);
  const night = modeCtx.night;
  const description =
    "Now a days a developer is not complete if he does not do plaform independent development. Native device apps are also major part of this. I love to create and work on native device apps as well. I have created apps both for Android and IOS platforms using React Native and Expo.";
  return (
    <Fragment>
      <AnimatedText text="Native Applications" />
      <PageDetails desc={description} />
      <Technologies type="na" night={night} />
      <ProjectContainer title="Projects">
        <ProjectReverse
          title="Guess a number game"
          description="This is a simple mobile game in which user has to select a number and computer will try to guess that number"
          vision="Multiplayer and more choise to user"
          deployment="apk version can be downloaded from below link"
          technologies={["JavaScript", "React Native", "Expo"]}
          bgc={{ backgroundColor: "#f7287b" }}
          href={Guess_a_number}
          app={true}
          mockup={NativeProject1}
        />
        <Project
          title="Recipe book"
          description="This was made to store different recepies, their ingredients, and steps to prepare them."
          vision="In near future, I want add more customised experience as per user's prefrences."
          deployment="apk version can be downloaded from below link"
          technologies={["JavaScript", "React Native", "Expo"]}
          bgc={{ backgroundColor: "#4a148c" }}
          href={Recipe_book}
          app={true}
          mockup={NativeProject2}
        />
        <ProjectReverse
          title="GeoLocator"
          description="This app uses native device features like camera, location, storage, etc. to provide users a platform to store their favourite locations world wide."
          vision="In near future, I plan to publish this app on Google Play store and Apple app store."
          deployment="apk version can be downloaded from below link"
          technologies={["JavaScript", "React Native", "Expo"]}
          bgc={{ backgroundColor: "#fc9208" }}
          href={GeoLocator}
          app={true}
          mockup={NativeProject3}
        />
      </ProjectContainer>
    </Fragment>
  );
};

export default NativeData;
