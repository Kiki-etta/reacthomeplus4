import React from "react";
import "./Layout.css";
import Search from './Search';
import Date from './Date';
import 'bootstrap/dist/css/bootstrap.css';




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



      <h5>Weather for the coming hours</h5>
    </div>
    <footer id="link-text">
    Open source code
    <footer href="https://github.com/Kiki-etta/reacthomeplus4"
      target = "_blank" >
          by Kiki-etta
      
    </footer>
  </footer>
     </div>
  ); 
     
    
}
