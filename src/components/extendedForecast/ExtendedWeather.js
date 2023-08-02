import { Link } from "react-router-dom";
import Container from "../Wrapers/Container";
import Title from "../Wrapers/Title";
import WeatherContainer from "../Wrapers/WeatherContainer";
import classes from "./ExtendedWeather.module.css";
import ForecastList from "./ForecastList";
import { useSelector } from "react-redux";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const ExtendedWeather = ({ title, weatherData, dark }) => {
  const waiting = useSelector((state) => state.waiting);

  const classNames = [classes.button, dark ? classes.night : null].join(" ");

  return (
    <Container>
      <WeatherContainer>
        {waiting && <LoadingSpinner dark={dark} />}
        {!waiting && (
          <>
            <Link to={!title ? "weekly" : "/"}>
              <button className={classNames}>{title ? title : "Weekly"}</button>
            </Link>
            <Title dark={dark}>
              Extended Forecast {title ? "Weekly" : "Today"}
            </Title>
            <ForecastList dark={dark} weatherData={weatherData} />
          </>
        )}
      </WeatherContainer>
    </Container>
  );
};

export default ExtendedWeather;
