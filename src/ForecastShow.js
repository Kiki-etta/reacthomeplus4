   import React from "react";
import WeatherIcon from "./WeatherIcon";


   export default function ForecastShow(props){
return (
   
       <div className = "col-2">
        {new Date(props.data.dt * 1000).getHours()}:00  
        <br/>


        <WeatherIcon code ={props.data.weather[0].icon}
/>

        {Math.round(props.data.main.temp)}C°
       </div>   
);
   } 