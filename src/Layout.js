import React, { useState } from "react";
import "./Layout.css";
import Search from './Search';
import Date from './Date';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";




export default function Layout() {
  
  const[weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon : (
      <img
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
        alt="weather"
      />
    ),
    });
      
    
  }

  if (weatherData.ready){
return (
      <div class="container">
         <div className="Weather">
             <h2>
          <Date />
      </h2>
      <h3>{weatherData.city}</h3>
       
       <div className="row" id="current-day">
        <div className="col-4">
          <div> {Math.round(weatherData.temperature)}ºC</div>
          <i>
            {weatherData.icon}
          </i>
          temperature
        </div>
        <div className="col-4">
          <span> {Math.round(weatherData.humidity)}%</span> <br />
          <i FontAwesomeIcon icon={["fas fa-tint"]}></i>
          <br />
          humidity
        </div>
        <div className="col-4">
          <span>{Math.round(weatherData.wind)}km/h</span>
          <br />
          <i className="fas fa-wind"></i>
          <br />
          wind speed
        </div>
      </div>
      <br>
      </br>

 <Search/>


      <h5>Weather for the coming hours</h5>
        <div class="row" id="coming-days"></div>
    </div>
    <footer >
    Open source code
    <div href="https://github.com/Kiki-etta/reacthomeplus4"
      target = "_blank" >
          by Kiki-etta
      
    </div>
  </footer>
     </div>
  ); 

  }else {
     const apiKey = `484f3d6f06753ea5697d7e6e574f9419`;
    let units = `units=metric`;
    let  city =  "Amsterdam";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`;  
  axios.get(apiUrl).then(handleResponse);

return "Loading...";
  }

  }
