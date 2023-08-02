import Header2 from "../Wrapers/Header2";
import classes from "./ForecastItem.module.css";
import WeatherIcon from "../Wrapers/WeatherIcon";
import Paragraph from "../Wrapers/Paragraph";

const ForecastItem = ({ data, dark }) => {
  return (
    <div className={classes.itemContainer}>
      <Header2 dark={dark}>{data.title}</Header2>
      <WeatherIcon type={data.icon} />
      <Header2 dark={dark}>{data.condition}</Header2>
      <Paragraph dark={dark}>
        {Math.round(data.minTemp)}
        <span>&#176;</span>/{Math.round(data.maxTemp)}
        <span>&#176;</span>
      </Paragraph>
    </div>
  );
};

export default ForecastItem;
