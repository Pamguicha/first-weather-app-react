import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function WeatherInfo(props){
return (

   <div className="weatherInfo">
 <div className="container">
      <div className="item">
        <p className="toptown" id="test">
          {props.data.city}
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
          <li className="density">
            <i className="fa-solid fa-umbrella"></i> Pressure:{" "}
            <span className="pressure"> {props.data.pressure} </span>{" "}
          </li>
          <li className="density">
            <i className="fa-solid fa-temperature-half"></i> Humidity:{" "}
            <span className="humidityNumber"> {props.data.humidity} %</span>
          </li>
          <li className="density">
            <i className="fa-solid fa-wind"></i> Wind:{" "}
            <span className="speedWind">{props.wind}km/h</span>{" "}
          </li>
        </ul>
      </div>
    </div>
    <Forecast />
    
 
  
   </div>
 
);
}