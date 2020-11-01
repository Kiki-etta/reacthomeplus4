import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faTemperatureHigh, faTint, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   


library.add( faTint, faWind, faTemperatureHigh)


export default function RealtimeInfo(props){

    return ( <div className = "RealtimeInfo">
       <div>
         </div>
         <h1>
             <img src ={props.info.iconUrl}
                  alt = {props.info.description}
            />
        {props.info.city}
        </h1>

       <div className="row" id="current-day">
        <div className="col-4">
          <div> {Math.round(props.info.temperature)}ºC</div>
           <FontAwesomeIcon icon={faTemperatureHigh}/>
          temperature
        </div>
        <div className="col-4">
          <span> {Math.round(props.info.humidity)}%</span> <br />
          <FontAwesomeIcon icon={faTint}/>
          <br />
          humidity
        </div>
        <div className="col-4">
          <span>{Math.round(props.info.wind)}km/h</span>
          <br />
          <FontAwesomeIcon icon={faWind}/>
          <br />
          wind speed
        </div>
      </div>
    </div> );  
}