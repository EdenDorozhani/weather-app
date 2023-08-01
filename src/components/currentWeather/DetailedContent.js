import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./DetailedContent.module.css";
import Paragraph from "../Wrapers/Paragraph";
import { useSelector } from "react-redux";

const DetailedContent = ({ currentWeather }) => {
  const state = useSelector((state) => state.mode);

  const classNames = [classes.icon, state ? classes.night : null].join(" ");

  return (
    <div className={classes.weatherDetailed}>
      <Paragraph>
        Feels like {currentWeather?.feelsLike}
        <span>&#176;</span>
      </Paragraph>
      <div>
        <FontAwesomeIcon icon={faDroplet} className={classNames} />
        <p className={classNames}>Humidity</p>
        <Paragraph>{currentWeather?.humidity}%</Paragraph>
      </div>
      <div>
        <FontAwesomeIcon icon={faWind} className={classNames} />
        <p className={classNames}>Wind</p>
        <Paragraph>{currentWeather?.windSpeed}kph</Paragraph>
      </div>
      <div>
        <FontAwesomeIcon icon={faCompress} className={classNames} />
        <p className={classNames}>Pressure</p>
        <Paragraph>{currentWeather?.pressure}hPa</Paragraph>
      </div>
    </div>
  );
};

export default DetailedContent;
