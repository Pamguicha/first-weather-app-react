import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
return (

   <div className="weatherInfo">
 <div className="bigContainer">
      <div className="item">
        <p className="toptown" id="test">
          {props.data.city}, {props.data.country}
        </p>
        <ul className="day-week">
          <li className="dayHour"> 
          <FormattedDate date={props.data.date}/>
            </li>
          <li className="dayDay">
            {" "}
            <strong> {props.data.description} </strong>
          </li>
        </ul>
        <h1>
          <WeatherIcon code={props.data.icon}  />
          <WeatherTemperature celsius={props.data.temperature} />
        </h1>
      </div>
      <div className="item2">
        <ul>
          <li className="density"> Pressure:
            <span className="pressure"> {props.data.pressure} </span>{" "}
          </li>
          <li className="density">
            Humidity:
            <span className="humidityNumber"> {props.data.humidity} %</span>
          </li>
          <li className="density">
             Wind:
            <span className="speedWind">{props.data.wind}km/h</span>{" "}
          </li>
        </ul>
      </div>
      
    </div>
   
    
 
  
   </div>
 
);
}