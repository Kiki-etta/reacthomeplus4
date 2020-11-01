import React from "react";
import {  faBolt, faCloud, faCloudMeatball, faCloudMoon, faCloudRain, faCloudShowersHeavy, faCloudSunRain, faMoon,  faSmog, faSnowflake, faSun} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   

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