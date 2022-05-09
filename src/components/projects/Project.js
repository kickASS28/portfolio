import classes from "./Project.module.css";

const Project = (props) => {
  const appOnClickHandler = (e) => {
    e.preventDefault();
    if (props.app) {
      let confirm = window.confirm(
        "Are Sure you want to download the APK file?"
      );
      if (confirm) {
        window.open(props.href);
      }
    } else {
      window.open(props.href, "_blank");
    }
  };

  return (
    <div className={classes.mainLink} onClick={appOnClickHandler}>
      <div className={classes.card}>
        <div className={classes.img_container}>
          <img src={props.mockup} alt="project" width="100%" height="100%" />
        </div>
        <div className={classes.text_container} style={props.bgc}>
          <h4 className={classes.title}>{props.title}</h4>
          <div className={classes.detail_container}>
            <div className={classes.details}>
              <h5>Description</h5>
              <p>{props.description}</p>
            </div>
            <div className={classes.vision}>
              <h5>Vision</h5>
              <p>{props.vision}</p>
            </div>
            <div className={classes.deployment}>
              <h5>Deployment Details</h5>
              <p>{props.deployment}</p>
              <div className={classes.actions}>
                <a
                  href={props.href}
                  target="_blank"
                  rel="noreferrer"
                  download={props.app}
                >
                  {!props.app ? "Visit " : "Download App"}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="16"
                    data-icon="directions"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"
                    />
                  </svg>{" "}
                </a>
              </div>
            </div>
            <div className={classes.technologies}>
              <h5>Technologies Used</h5>
              <ul>
                {props.technologies.map((tech) => {
                  return (
                    <li className={classes.tech} key={tech}>
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
