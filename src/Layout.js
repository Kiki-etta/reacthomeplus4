import React, { useState } from "react";
import "./Layout.css";
import Date from './Date';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import RealtimeInfo from "./RealtimeInfo";
import Forecast from "./Forecast";



export default function Layout(props) {
  
  const[weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
   
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      lat: response.data.coord.lat,
      long: response.data.coord.lon,
    })
    ;
  }

  function search (){
    const apiKey = `484f3d6f06753ea5697d7e6e574f9419`;
    let units = `units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`;  
  axios.get(apiUrl).then(handleResponse);

  }

  function searchCurrentCoordinates(position) {
    const apiKey = "ad04b7a362cea2ed31488d67c6adbf93";
    let updatedApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(updatedApiUrl).then(handleResponse);
  }

function handleSubmit(event){
  event.preventDefault();
  search(city);
  
}
  function CurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentCoordinates);
  }


function updateCity(event) {
    setCity(event.target.value);

}

  if (weatherData.ready){
      return (
        <div className = "Wrapper">
          <div className="container">
         <div className="Weather">  
          <RealtimeInfo info ={weatherData}/>
          <br/>
          
            <h2>
              <Date />
            </h2>

         <h4 className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter city"
              autoComplete="off"
               onChange={updateCity}/>
            <input type="submit" value="Go" />

            <button
                type="button"
                onClick={CurrentLocation}
                className="searchCurrentLocation"
              >
                Current Location
              </button>
            
          </form>         
        </h4>
        <br/>
      <h3>Weather for the coming hours</h3>
        <div  id="coming-days">
          <Forecast city = {weatherData.city}/>
        </div>
    </div>
    <p>
    Open source code 
    <a className="link" href="https://github.com/Kiki-etta/reacthomeplus4"
      >  Kiki-etta
    </a>
  </p>
     </div>
        </div>
      
  ); 

  }else {
    search();
return "Loading...";
  }

  }
