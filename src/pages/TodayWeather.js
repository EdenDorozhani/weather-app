import ExtendedWeather from "../components/extendedForecast/ExtendedWeather";
import { useOutletContext } from "react-router-dom";
import UseGetWeatherData from "../hook/UseGetWeatherData";

const TodayWeather = () => {
  const [inputValue, dark] = useOutletContext();
  const { weather } = UseGetWeatherData(
    inputValue,
    "forecast",
    "days=7&aqi=no&alerts=no"
  );

  const currentDay = weather?.[0].hour;
  const hours = currentDay?.filter((__, i) => {
    return i % 4 === 0 || i === currentDay?.length - 1;
  });

  const formatedWeatherHours = hours?.map((h) => {
    return {
      title: h.time.slice(11),
      feelsLike: h.feelslike_c,
      humidity: h.humidity,
      pressure_mb: h.pressure_mb,
      maxTemp: h.temp_c + 1,
      minTemp: h.temp_c - 1,
      windSpeed: h.wind_kph,
      condition: h.condition.text,
      icon: h.condition.icon,
    };
  });

  return <ExtendedWeather weatherData={formatedWeatherHours} dark={dark} />;
};

export default TodayWeather;
