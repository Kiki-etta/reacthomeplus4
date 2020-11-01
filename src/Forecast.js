import React, { useState } from "react";
import axios from "axios";
import ForecastShow from "./ForecastShow";



export default function Forecast (props){
    const[loaded,setLoaded] = useState (false);
    const[forecast,setForecast] = useState (null);
    


    function handleResponse(response){
   setForecast(response.data); 
    setLoaded(true);
   
}


if (loaded && props.city === forecast.city.name){
    return (
        <div className="row">
         <ForecastShow data = {forecast.list[0]}/>   
          <ForecastShow data = {forecast.list[1]}/> 
           <ForecastShow data = {forecast.list[2]}/> 
            <ForecastShow data = {forecast.list[3]}/> 
             <ForecastShow data = {forecast.list[4]}/> 
              <ForecastShow data = {forecast.list[5]}/> 
            </div>
        
    );

} else {
    let apiKey = `484f3d6f06753ea5697d7e6e574f9419`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return props.city;
}
    
}