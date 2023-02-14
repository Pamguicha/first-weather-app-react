import React, { useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    if (unit === "celsius") {
    return (
<> 
 <span className="space"> {Math.round(props.celsius)} </span>
          <span className="units">
              °C | 
              <a href="/">°F 
              </a>
          </span>
</>
    );
    } else {
        return "F";
    }

    } 


