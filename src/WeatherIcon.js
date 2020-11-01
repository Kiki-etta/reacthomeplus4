import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faBolt, faCloud, faCloudMeatball, faCloudMoon, faCloudRain, faCloudShowersHeavy, faCloudSunRain, faMoon,  faSmog, faSnowflake, faSun, faTemperatureHigh, faTint, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   
library.add( faTint, faWind, faTemperatureHigh)

export default function WeatherIcon (props){
    const mapping = {
        "01d": faSun,
        "01n": faMoon,
        "02d": faSun,
        "02n": faCloudMoon,
        "03d": faCloud,
        "03n": faCloudMoon,
        "04d": faCloudMeatball,
        "04n": faCloudMoon,
        "09d": faCloudShowersHeavy,
        "09n": faCloudShowersHeavy,
         "10n": faCloudRain,
         "10d": faCloudSunRain,
         "11d": faBolt,
         "11n": faBolt,
         "13d": faSnowflake,
         "13n": faSnowflake,
         "50d": faSmog,
         "50n":faSmog

         
    };



   
   return(
        <div>
<FontAwesomeIcon icon={mapping[props.code]} />
    </div>
    
    );
        


}