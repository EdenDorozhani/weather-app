import Container from "../container/Container";
import WeatherContainer from "../weatherContainer/WeatherContainer";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ dark }) => {
  const classNamess = [
    classes.loadingSpinner,
    dark ? classes.night : null,
  ].join(" ");

  return (
    <Container>
      <WeatherContainer>
        <div className={classes.spinnerContainer}>
          <div className={classNamess}></div>
        </div>
      </WeatherContainer>
    </Container>
  );
};

export default LoadingSpinner;
