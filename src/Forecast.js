import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import axios from "axios";


export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);


function handleResponse(response){
   setForecast(response.data.daily);
   setLoaded(true);
}

if (loaded) {
  return (
            <div>
      <span> 5-day forecast </span>
      <hr />
      <ForecastDay />
      <table className="temperature">
        <tbody>
          <tr>
            <td> {forecast[0].dt}</td>
          </tr>
          <tr>
           
            <td>
             <p className="forecastTemperature"> <b>{Math.round(forecast[0].temp.max)}°c</b></p>
            </td>
          </tr>
          <tr>
            <td>
          <WeatherIcon code={forecast[0].weather[0].icon}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
    );
    } else {

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"; 
    let longitude = props.coordinates.lon; 
    let latitude = props.coordinates.lat; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}