import { Fragment } from "react";
import PageDetails from "../components/PageDetails";
import AnimatedText from "../components/UI/AnimatedText";
import Technologies from "../components/UI/technologies";
import ProjectContainer from "../components/projects/ProjectContainer";
import Project from "../components/projects/Project";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import Project6 from "../assets/Project6.png";
import Project7 from "../assets/Project7.png";
import Project8 from "../assets/Project8.png";
import Project9 from "../assets/Project9.png";
import Project10 from "../assets/Project10.png";
import ProjectReverse from "../components/projects/ProjectReverse";
import { useContext } from "react";
import ModeContext from "../store/context";
const WebDevData = () => {
  const modeCtx = useContext(ModeContext);
  const night = modeCtx.night;
  const description =
    "In Web-Development, My focus has always been on providing the best possible User Experience without any compromise on the Usability of the website. Skills like Ethical Hacking, and UI/UX Design help me to develop and deploy more secure as well as aesthetic websites and web apps. In my journey as a Full-Stack web developer, I have created 20+ static as well as dynamic web applications.";
  return (
    <Fragment>
      <AnimatedText text="Web-Development" />
      <PageDetails desc={description} />
      <Technologies type="web" night={night} />
      <ProjectContainer title="Projects">
        <ProjectReverse
          title="Chair Shop"
          description="This is a static website made for a dummy chair shop. The purpose is to showcase the use cases and the quality of their product."
          vision="In near future, I want to link dynamic data of actual shops with help of back-end technologies."
          deployment="This website is deployed on GitHub Pages"
          technologies={["HTML5", "CSS3", "JavaScript"]}
          mockup={Project2}
          bgc={{ backgroundColor: "#087f5b" }}
          href="https://kickass28.github.io/Product_demo/"
        />
        <Project
          title="Omnifood-Never Cook Again"
          description="This website was built to practice the UX concepts like Proportion, Emphasis, Contrast, White Space, etc. along with modern JavaScript syntax."
          vision="This page is a large SPA(Single Page Application), In some scenarios, MPA might be a better option. Also, there is room for Search Engine optimization."
          deployment="This website is deployed on GitHub Pages"
          technologies={["HTML5", "CSS3", "JavaScript(ES6)"]}
          mockup={Project3}
          bgc={{ backgroundColor: "#e67e22" }}
          href="https://kickass28.github.io/omnifood/"
        />
        <ProjectReverse
          title="Kick Meals"
          description="This is a production-ready food order app that is developed to implement react into my web development. The app is very dynamic and flexible and can be easily adjusted as per the restaurant's themes and menu."
          vision="This app can be directly integrated with a vendor's menu card and order data can be received at the firebase backend."
          deployment="This web app is hosted on firebase"
          technologies={["HTML5", "CSS3", "React"]}
          mockup={Project6}
          bgc={{ backgroundColor: "#8a2b06" }}
          href="https://kick-development2.web.app/"
        />
        <Project
          title="Great Quotes"
          description="Being a writer I did not have pen and paper with me to write down when motivation hits me, The purpose of this app is to provide writers a platform to publish their quotes anytime and anywhere. Each published quote has a separate comments section, likes, and share feature."
          vision="In near future, I want to introduce another section of poems for poets as well."
          deployment="This web app is hosted on firebase"
          technologies={["HTML5", "CSS3", "React"]}
          mockup={Project7}
          bgc={{ backgroundColor: "teal" }}
          href="https://kick-development.firebaseapp.com/quotes"
        />
        <ProjectReverse
          title="Gadgets"
          description="One App that holds many features like Calorie Tracker, BMI Calculator, Loan-Interest Calculator, Finance and Sports news and updates, Weather reports, games, and much more."
          vision="This app's UI is very finely designed. This makes the app give a great user experience on all devices."
          deployment="This is hosted on Vercel"
          technologies={["HTML5", "CSS3", "React", "Next"]}
          mockup={Project8}
          bgc={{
            backgroundImage:
              "linear-gradient(to bottom right,rgb(200, 0, 0), red, rgb(255, 127, 127), rgb(210, 1, 210), rgb(255, 0, 255),#fff",
            backgroundSize: "400%",
          }}
          href="https://kick-development-gadgets.vercel.app/"
        />
        <Project
          title="Kick-API"
          description="This is a Full-Stack MERN app whose API is created with Express and Node which responds with dummy user data, color hex codes, recipe details, and much more. The use cases for the API are documented on the web using React and hosted on the web for public use."
          vision="In near future, I want to provide 3rd party authentication features through same API"
          deployment="This web app is hosted on firebase"
          technologies={["Express", "Node", "React"]}
          mockup={Project9}
          bgc={{
            backgroundImage:
              "linear-gradient(45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871)",
            backgroundSize: "400%",
          }}
          href="https://kick-api.herokuapp.com/"
        />
        <ProjectReverse
          title="Quizimenia"
          description="This app was made for the kids who are struggling with their mathematical ability to practice various mathematical operations."
          vision="This app's is designed to persist its complex states and timers even after page refresh."
          deployment="This is hosted on Firebase"
          technologies={["HTML5", "CSS3", "React", "Redux"]}
          mockup={Project10}
          bgc={{ backgroundColor: "rgb(45, 34, 34)" }}
          href="https://kick-math-quiz.web.app"
        />
      </ProjectContainer>
    </Fragment>
  );
};

export default WebDevData;
