import Container from "../Wrapers/Container";
import DetailedContent from "./DetailedContent";
import GeneralContent from "./GeneralContent";
import classes from "./CurrentWeather.module.css";
import Title from "../Wrapers/Title";
import WeatherContainer from "../Wrapers/WeatherContainer";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <Container>
      <WeatherContainer>
        <Title>Current Weather</Title>
        <div className={classes.weatherInfo}>
          <GeneralContent currentWeather={currentWeather} />
          <DetailedContent currentWeather={currentWeather} />
        </div>
      </WeatherContainer>
    </Container>
  );
};

export default CurrentWeather;
