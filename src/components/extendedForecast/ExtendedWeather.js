import { Link } from "react-router-dom";
import Container from "../Wrapers/Container";
import Title from "../Wrapers/Title";
import WeatherContainer from "../Wrapers/WeatherContainer";
import classes from "./ExtendedWeather.module.css";
import ForecastList from "./ForecastList";
import { useSelector } from "react-redux";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const ExtendedWeather = ({ title, weatherData }) => {
  const state = useSelector((state) => state.mode);
  const waiting = useSelector((state) => state.waiting);

  const classNames = [classes.button, state ? classes.night : null].join(" ");

  return (
    <Container>
      <WeatherContainer>
        {waiting && <LoadingSpinner />}
        {!waiting && (
          <>
            <Link to={!title ? "weekly" : "/"}>
              <button className={classNames}>{title ? title : "Weekly"}</button>
            </Link>
            <Title>Extended Forecast {title ? "Weekly" : "Today"}</Title>
            <ForecastList weatherData={weatherData} />
          </>
        )}
      </WeatherContainer>
    </Container>
  );
};

export default ExtendedWeather;
