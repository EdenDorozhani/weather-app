import classes from "./WeatherContainer.module.css";

const WeatherContainer = (props) => {
  return <div className={classes.weatherContainer}>{props.children}</div>;
};

export default WeatherContainer;
