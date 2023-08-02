import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ dark }) => {
  const classNamess = [
    classes.loadingSpinner,
    dark ? classes.night : null,
  ].join(" ");

  return (
    <div className={classes.spinnerContainer}>
      <div className={classNamess}></div>
    </div>
  );
};

export default LoadingSpinner;
