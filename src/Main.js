import React from "react";
import "./Main.css";

export default function Main() {
  return (
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
  );
}
