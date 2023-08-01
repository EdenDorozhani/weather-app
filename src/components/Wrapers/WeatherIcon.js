import classes from "./WeatherIcon.module.css";

const WeatherIcon = ({ type }) => {
  return <img className={classes.icon} src={type} />;
};

export default WeatherIcon;
