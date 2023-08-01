import { useSelector } from "react-redux";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  const state = useSelector((state) => state.mode);

  const classNamess = [
    classes.loadingSpinner,
    state ? classes.night : null,
  ].join(" ");

  return (
    <div className={classes.spinnerContainer}>
      <div className={classNamess}></div>
    </div>
  );
};

export default LoadingSpinner;
