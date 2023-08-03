import ExtendedWeather from "../components/extendedForecast/ExtendedWeather";
import { useOutletContext } from "react-router-dom";
import UseGetWeatherData from "../hook/UseGetWeatherData";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const WeeklyWeather = () => {
  const [inputValue, dark] = useOutletContext();
  const waiting = useSelector((state) => state.waiting);
  const { weather } = UseGetWeatherData(
    inputValue,
    "forecast",
    "days=7&aqi=no&alerts=no"
  );

  const currentWeek = weather;

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
  }

  const formatedWeatherDays = currentWeek?.map((day) => {
    return {
      title: getDayOfWeek(day.date),
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      condition: day.day.condition.text,
      icon: day.day.condition.icon,
    };
  });

  return (
    <>
      {waiting && <LoadingSpinner dark={dark} />}
      {!waiting && (
        <ExtendedWeather
          title={"Daily"}
          weatherData={formatedWeatherDays}
          dark={dark}
        />
      )}
    </>
  );
};

export default WeeklyWeather;
