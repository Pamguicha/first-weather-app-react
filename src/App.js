
import Forecast from './Forecast';
import React,{useState} from 'react';
import axios from "axios";
import './App.css';
import './Main.css';

export default function Weather(){
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response){
console.log(response.data);
setTemperature(response.data.main.temp);
setReady(true);
}

if(ready) {

  return (
    <div className="city">
  <p className="intro"> The weather app</p>
   <form className="search-form">
     <input type="text" placeholder="Enter your city here" />
       <input className="btn" type="submit" value="Search" />
        <input className="currentbar" type="button" value="Current" />
   </form>
      
        <div className="container">
      <div className="item">
        <p className="toptown" id="test">
          Santiago, CL
        </p>
        <ul className="day-week">
          <li className="dayHour"> Wednesday 08:48 am </li>
          <li className="dayDay">
            {" "}
            <strong> Clear Sky </strong>
          </li>
        </ul>
        <h1>
           <img className="icons-animated" alt="clear day" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"></img>
          <span className="space"> 28 </span>{" "}
          <span className="units">
            <a
              id="celcius-link"
              href="https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm"
            >
              °C{" "}
            </a>
            <span className="line">|</span>{" "}
            <a
              id="faherenheit-link"
              href="https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm"
            >
              °F
            </a>
          </span>
        </h1>
      </div>
      <div className="item2">
        <ul>
          <li className="density">
            <i className="fa-solid fa-umbrella"></i> Pressure:{" "}
            <span className="pressure"> 10% </span>{" "}
          </li>
          <li className="density">
            <i className="fa-solid fa-temperature-half"></i> Humidity:{" "}
            <span className="humidityNumber">84%</span>
          </li>
          <li className="density">
            <i className="fa-solid fa-wind"></i> Wind:{" "}
            <span className="speedWind">36km/h</span>{" "}
          </li>
        </ul>
      </div>
    </div>
            <Forecast />
    </div>
  );
} else {
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = "Santiago";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);

 return "Loading...";

}

}


