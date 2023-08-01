import axios from "axios";
import { useEffect, useState } from "react";

const UseGetWeatherData = (inputValue, weatherForecastType, amountOfDays) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [dataWeather, setDataWeather] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        alert("Could not get your position");
      }
    );

    let qValue;
    if (!inputValue) {
      qValue = `${latitude},${longitude}
  `;
    } else {
      qValue = `${inputValue}`;
    }

    if (latitude && longitude) {
      const currentLocationData = async () => {
        const response = await axios
          .get(
            `http://api.weatherapi.com/v1/${weatherForecastType}.json?key=da55ab24169d4911a32143914232807&q=${qValue}&${amountOfDays}`
          )
          .then((data) => {
            if (weatherForecastType === "current") {
              setDataWeather(data.data);
            } else {
              setDataWeather(data.data.forecast.forecastday);
            }
          })
          .catch((err) => {
            alert(err);
          });
      };
      currentLocationData();
    }
  }, [latitude, longitude, inputValue]);
  return {
    weather: dataWeather,
  };
};

export default UseGetWeatherData;
