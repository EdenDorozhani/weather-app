import Container from "../Wrapers/Container";
import DetailedContent from "./DetailedContent";
import GeneralContent from "./GeneralContent";
import classes from "./CurrentWeather.module.css";
import Title from "../Wrapers/Title";
import WeatherContainer from "../Wrapers/WeatherContainer";

const CurrentWeather = ({ currentWeather, dark }) => {
  return (
    <Container>
      <WeatherContainer>
        <Title dark={dark}>Current Weather</Title>
        <div className={classes.weatherInfo}>
          <GeneralContent dark={dark} currentWeather={currentWeather} />
          <DetailedContent dark={dark} currentWeather={currentWeather} />
        </div>
      </WeatherContainer>
    </Container>
  );
};

export default CurrentWeather;
