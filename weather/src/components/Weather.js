import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import logo from "../logo.svg";

// Fetch
import apiKey from "../config";

// List of all cities with specific codes
const cityData = require("../city.list.json");

const Weather = ({ city, state, search }) => {
  const [loading, setLoading] = useState(false);
  const [locationCode, setLocationCode] = useState(4752031);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [conditions, setConditions] = useState("");
  const [localCity, setLocalCity] = useState("...");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (city && state) {
      findCityCode(city, state);
      handleWeatherFetch(locationCode);
    }

    if (city && search) {
      handleWeatherFetch(locationCode);
    }
  }, [city, state, search]);

  //Runs fetch api with the city code to get precise weather
  const findCityCode = (city, state) => {
    console.log(city, state);
    for (let i = 0; i < cityData.length; i++) {
      if (city === cityData[i].name && state === cityData[i].state) {
        let code = cityData[i].id;
        console.log("city-code:", cityData[i].id);
        setLocationCode(code);
        setLocalCity(city);
      }
    }
  };

  const roundTemp = (temp) => {
    let formattedTemp = Math.round(temp);
    formattedTemp = Math.trunc(formattedTemp);
    return formattedTemp;
  };

  // Weather API call
  const handleWeatherFetch = (code) => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${code}&units=imperial&APPID=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        let conditions = res.data.weather[0].description;
        let curTemp = roundTemp(res.data.main.temp);
        let feelLike = roundTemp(res.data.main.feels_like);

        setCurrentTemp(curTemp);
        setFeelsLike(feelLike);
        setResults(res.data);
        setConditions(conditions);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching the weather data:", error);
      });
  };

  return (
    <>
      <Card className="weather-card">
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Todays weather in {localCity} </Card.Title>
          <Card.Text>Current Temperature: {currentTemp}°</Card.Text>
          <Card.Text>Feels Like: {feelsLike}°</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Weather;
