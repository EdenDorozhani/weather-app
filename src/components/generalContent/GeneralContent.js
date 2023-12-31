import classes from "./GeneralContent.module.css";
import Header2 from "../header2/Header2";
import Paragraph from "../paragraph/Paragraph";
import WeatherIcon from "../icon/WeatherIcon";

const GeneralContent = ({ currentWeather, dark }) => {
  return (
    <div className={classes.weatherGeneral}>
      <div className={classes.city}>
        <Header2 dark={dark}>{currentWeather?.placeName}</Header2>
        <div className={classes.generalContent}>
          <WeatherIcon type={currentWeather?.icon} />
          <Paragraph dark={dark}>
            {Math.round(currentWeather?.temp)}
            <span>&#176;</span>
          </Paragraph>
        </div>
      </div>
      <Header2 dark={dark}>{currentWeather?.condition}</Header2>
    </div>
  );
};

export default GeneralContent;
