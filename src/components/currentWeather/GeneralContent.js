import classes from "./GeneralContent.module.css";
import Header2 from "../Wrapers/Header2";
import Paragraph from "../Wrapers/Paragraph";
import WeatherIcon from "../Wrapers/WeatherIcon";

const GeneralContent = ({ currentWeather }) => {
  return (
    <div className={classes.weatherGeneral}>
      <div className={classes.city}>
        <Header2>{currentWeather?.placeName}</Header2>
        <div className={classes.generalContent}>
          <WeatherIcon type={currentWeather?.icon} />
          <Paragraph>
            {Math.round(currentWeather?.temp)}
            <span>&#176;</span>
          </Paragraph>
        </div>
      </div>
      <Header2>{currentWeather?.condition}</Header2>
    </div>
  );
};

export default GeneralContent;
