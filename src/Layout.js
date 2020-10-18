import React from "react";
import "./Layout.css";
import './illustration.png';

export default function Layout() {
  let weatherData = {
    city: "Amsterdam",
    date: "Today",
    img: "./illustration.png",
    temperature: 19,
    humidity: 57,
    wind: 15
  };

  return (
    <div className="Weather">
      <h3>{weatherData.city}</h3>

      <img className="main-img" src={weatherData.img} alt="main img" />
      <h2>{weatherData.date}</h2>

      <className className="row" id="current-day">
        <div className="col-4">
          <div> {weatherData.temperature}ºC</div>
          <br />
          <img className="fa-cloud-sun" alt="" />
          temperature
        </div>

        <div className="col-4">
          <span> {weatherData.humidity}%</span> <br />
          <i className="fas fa-tint"></i>
          <br />
          humidity
        </div>
        <div className="col-4">
          <span>{weatherData.wind}km/h</span>
          <br />
          <i className="fas fa-wind"></i>
          <br />
          wind speed
        </div>
      </className>

      <br />

      <h4 className="search">
        <form>
          <input
            id="city-input"
            type="search"
            placeholder="Enter city"
            autofocus="on"
            autoComplete="off"
          />

          <input type="submit" value="Go" />

          <button className="current-location-button">Current Location</button>
        </form>
      </h4>

      <h5>Weather for the coming hours</h5>

      <div className="row"></div>
    </div>
  );
}
