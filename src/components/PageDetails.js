import classes from "./PageDetails.module.css";

const PageDetails = (props) => {
  return (
    <div className="container">
      <div className={classes.card}>
        <p className={classes.description}>{props.desc}</p>
      </div>
    </div>
  );
};

export default PageDetails;
