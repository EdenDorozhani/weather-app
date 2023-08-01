import Header2 from "../Wrapers/Header2";
import classes from "./ForecastItem.module.css";
import WeatherIcon from "../Wrapers/WeatherIcon";
import Paragraph from "../Wrapers/Paragraph";

const ForecastItem = ({ data }) => {
  return (
    <div className={classes.itemContainer}>
      <Header2>{data.title}</Header2>
      <WeatherIcon type={data.icon} />
      <Header2>{data.condition}</Header2>
      <Paragraph>
        {Math.round(data.minTemp)}
        <span>&#176;</span>/{Math.round(data.maxTemp)}
        <span>&#176;</span>
      </Paragraph>
    </div>
  );
};

export default ForecastItem;
