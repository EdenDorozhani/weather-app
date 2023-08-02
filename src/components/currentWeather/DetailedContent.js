import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./DetailedContent.module.css";
import Paragraph from "../Wrapers/Paragraph";

const DetailedContent = ({ currentWeather, dark }) => {
  const classNames = [classes.icon, dark ? classes.night : null].join(" ");

  return (
    <div className={classes.weatherDetailed}>
      <Paragraph dark={dark}>
        Feels like {currentWeather?.feelsLike}
        <span>&#176;</span>
      </Paragraph>
      <div>
        <FontAwesomeIcon icon={faDroplet} className={classNames} />
        <p className={classNames}>Humidity</p>
        <Paragraph dark={dark}>{currentWeather?.humidity}%</Paragraph>
      </div>
      <div>
        <FontAwesomeIcon icon={faWind} className={classNames} />
        <p className={classNames}>Wind</p>
        <Paragraph dark={dark}>{currentWeather?.windSpeed}kph</Paragraph>
      </div>
      <div>
        <FontAwesomeIcon icon={faCompress} className={classNames} />
        <p className={classNames}>Pressure</p>
        <Paragraph dark={dark}>{currentWeather?.pressure}hPa</Paragraph>
      </div>
    </div>
  );
};

export default DetailedContent;
