import Container from "../container/Container";
import DetailedContent from "../detailedContent/DetailedContent";
import GeneralContent from "../generalContent/GeneralContent";
import classes from "./CurrentWeather.module.css";
import Title from "../title/Title";
import WeatherContainer from "../weatherContainer/WeatherContainer";

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
