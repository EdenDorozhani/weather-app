import { Outlet } from "react-router-dom";
import HeaderContainer from "../components/header/HeaderContainer";
import SearchBar from "../components/searchBar/SearchBar";
import CurrentWeather from "../components/currentWeather/CurrentWeather";
import { useEffect, useState } from "react";
import axios from "axios";
import UseGetWeatherData from "../hook/UseGetWeatherData";

const Root = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropDownData, setDropDownData] = useState("");
  const [onChangeValue, setOnChangeValue] = useState("");

  const { weather } = UseGetWeatherData(inputValue, "current", "aqi=no");

  useEffect(() => {
    if (!onChangeValue) return;

    const dropDownData = async () => {
      const response = axios(
        `http://api.weatherapi.com/v1/search.json?key=da55ab24169d4911a32143914232807&q=${onChangeValue}`
      )
        .then((data) => {
          setDropDownData(data.data || []);
        })
        .catch((err) => {
          alert(err);
        });
    };
    dropDownData();
  }, [onChangeValue]);

  const getOnSubmitValue = (value) => {
    setInputValue(value);
  };
  const onChangeHanlder = (value) => {
    setOnChangeValue(value);
  };

  const formatedCurrentWeather = {
    placeName: weather?.location.name,
    feelsLike: weather?.current.feelslike_c,
    humidity: weather?.current.humidity,
    pressure: weather?.current.pressure_mb,
    windSpeed: weather?.current.wind_kph,
    condition: weather?.current.condition.text,
    icon: weather?.current.condition.icon,
    temp: weather?.current.temp_c,
  };
  return (
    <>
      <>
        <HeaderContainer />
        <SearchBar
          getOnSubmitValue={getOnSubmitValue}
          getOnChangeValue={onChangeHanlder}
          dropDownData={dropDownData}
          setDropDownData={setDropDownData}
        />
        <CurrentWeather currentWeather={formatedCurrentWeather} />
      </>
      <Outlet context={[inputValue]} />
    </>
  );
};

export default Root;
