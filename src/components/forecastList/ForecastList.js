import ForecastItem from "../forecastItem/ForecastItem";
import classes from "./ForecastList.module.css";

const ForecastList = ({ weatherData, dark }) => {
  return (
    <div className={classes.itemsContainer}>
      {weatherData?.map((data, index) => {
        return <ForecastItem dark={dark} data={data} key={index} />;
      })}
    </div>
  );
};

export default ForecastList;
