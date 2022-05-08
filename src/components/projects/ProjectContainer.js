import classes from "./ProjectContainer.module.css";

const ProjectContainer = (props) => {
  return (
    <div className={classes.projects_container}>
      <div className={classes.heading_container}>
        <span className="headings">{props.title}</span>
      </div>
      {props.children}
    </div>
  );
};

export default ProjectContainer;
