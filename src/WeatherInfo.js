import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from "./WeatherTemperature";

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
            <div>
      <span> 5-day forecast </span>
      <hr />
      <table className="temperature">
        <tbody>
          <tr>
            <td> Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
            <td>Sun</td>
          </tr>
          <tr>
            <td>
              {" "}
              <strong>16°c</strong>{" "}
            </td>
            <td>
              <strong>13°c</strong>
            </td>
            <td>
              <strong>17°c</strong>
            </td>
            <td>
              <strong>11°c</strong>
            </td>
            <td>
              <strong>16°c</strong>
            </td>
          </tr>
          <tr>
            <td>
           <img className="icons-animated" alt="cloudy day" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg"></img>
            </td>
            <td>
          <img className="icons-animated" alt="rainy day" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg"></img>
            </td>
            <td>
              {" "}
           <img className="icons-animated" alt="overcast day" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day.svg"></img>
            </td>
            <td>
            <img className="icons-animated" alt="drizzle day" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg"></img>
            </td>
            <td>
              <img className="icons-animated" alt="clear day" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 
  
   </div>
 
);
}