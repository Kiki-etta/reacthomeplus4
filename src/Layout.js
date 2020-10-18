import React from "react";
import "./Layout.css";
import Search from './Search';
import Date from './Date';

export default function Layout() {
   let weatherData = {
    city: "Amsterdam",
    date: "Today",
    temperature: 19,
    humidity: 57,
    wind: 15
  };

  return (
      <div class="container">
         <div className="Weather">
             <h2>
          <Date />
      </h2>
      <h3>{weatherData.city}</h3>
        <Search/>


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

          <button className="current-location-button">Current Location</button>
      <h5>Weather for the coming hours</h5>

      <div className="row"></div>
    </div>
     </div>
  ); 
     
    
}
