import React, { useState } from "react";
import axios from "axios";
import './Search.css';


export default function Search() {
  let [city, setCity] = useState("");
  let [details, setDetails] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `484f3d6f06753ea5697d7e6e574f9419`;
    let units = `units=metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`;

    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = Math.round(response.data.main.humidity);
    let wind = response.data.wind.speed;
    let icon = (
      <img
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
        alt="weather"
      />
    );
    setDetails(
      <ul className="Weather-Details">
        <li> Temperature : {temperature} C°</li>
        <li>Description : {description}</li>
        <li>Humidity : {humidity}%</li>
        <li>Wind : {wind}km/ph</li>
        <li>{icon}</li>
      </ul>
    );
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      {details}
    </div>
  );
}
