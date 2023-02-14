import React, { useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "celsius") {
    return (
<> 
 <span className="space"> {Math.round(props.celsius)} </span>
          <span className="units">
              °C | 
              <a href="/"
              onClick={showFahrenheit}>
                °F 
              </a>
          </span>
</>
    );
    } else {
        return "F";
    }

    } 


