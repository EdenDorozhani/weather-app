import ForecastItem from "./ForecastItem";
import classes from "./ForecastList.module.css";

const ForecastList = ({ weatherData }) => {
  return (
    <div className={classes.itemsContainer}>
      {weatherData?.map((data, index) => {
        return <ForecastItem data={data} key={index} />;
      })}
    </div>
  );
};

export default ForecastList;
