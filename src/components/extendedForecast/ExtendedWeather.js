import { Link } from "react-router-dom";
import Container from "../container/Container";
import Title from "../title/Title";
import WeatherContainer from "../weatherContainer/WeatherContainer";
import classes from "./ExtendedWeather.module.css";
import ForecastList from "../forecastList/ForecastList";

const ExtendedWeather = ({ title, weatherData, dark }) => {
  const classNames = [classes.button, dark ? classes.night : null].join(" ");

  return (
    <Container>
      <WeatherContainer>
        <Link to={!title ? "weekly" : "/"}>
          <button className={classNames}>{title ? title : "Weekly"}</button>
        </Link>
        <Title dark={dark}>
          Extended Forecast {title ? "Weekly" : "Today"}
        </Title>
        <ForecastList dark={dark} weatherData={weatherData} />
      </WeatherContainer>
    </Container>
  );
};

export default ExtendedWeather;
