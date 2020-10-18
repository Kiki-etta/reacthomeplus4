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

     
      <h5>Weather for the coming hours</h5>

    </div>
     </div>
  ); 
     
    
}
