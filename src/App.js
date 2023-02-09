import React,{useState} from 'react';
import axios from "axios";
import './Main.css';
import "./Forecast.css";
import './App.css';


export default function Weather(){
 
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response){
console.log(response.data);
setWeatherData({
  ready:true,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  pressure: response.data.main.pressure,
  city: response.data.name,
  date: "Wednesday 08:48 am",
  description: response.data.weather[0].description,
  iconUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"


})


}

if(weatherData.ready) {

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
          {weatherData.city}
        </p>
        <ul className="day-week">
          <li className="dayHour"> {weatherData.date} </li>
          <li className="dayDay">
            {" "}
            <strong> {weatherData.description} </strong>
          </li>
        </ul>
        <h1>
           <img className="icons-animated" 
           alt={weatherData.description} 
           src={weatherData.iconUrl}>

           </img>
          <span className="space"> {Math.round(weatherData.temperature)} </span>{" "}
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
            <span className="pressure"> {weatherData.pressure} </span>{" "}
          </li>
          <li className="density">
            <i className="fa-solid fa-temperature-half"></i> Humidity:{" "}
            <span className="humidityNumber"> {weatherData.humidity} %</span>
          </li>
          <li className="density">
            <i className="fa-solid fa-wind"></i> Wind:{" "}
            <span className="speedWind">{weatherData.wind}km/h</span>{" "}
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
} else {
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = "Santiago";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);

 return "Loading...";

}

}


