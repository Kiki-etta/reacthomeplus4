   import React from "react";
   


   export default function ForecastShow(props){
return (
   
       <div className = "col-2">
        {new Date(props.data.dt * 1000).getHours()}:00  
        <br/>
        {props.data.weather[0].icon}
         <br/>
        {Math.round(props.data.main.temp)}C°
       </div>   
   
);
   } 