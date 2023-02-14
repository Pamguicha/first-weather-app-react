import React, { useState} from "react";
export default function WeatherTemperature(props){
    return (
<> 
 <span className="space"> {Math.round(props.celsius)} </span>{" "}
          <span className="units">
              °C
            <span className="line"> | </span>
            <a
              id="faherenheit-link"
              href="/"
    
            >
              °F
            </a>
          </span>
</>
    );
   

    } 


