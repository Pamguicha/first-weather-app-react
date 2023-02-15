import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function WeatherForecast(){
function handleResponse(response){
    console.log(response.data);
}

    let apiKey = "de2c40e370d58e257faf07ba4ea95840"; 
    let longitude = 40.7;
    let latitude = 74 ;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=0${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
  
            <div>
      <span> 5-day forecast </span>
      <hr />
      <table className="temperature">
        <tbody>
          <tr>
            <td> Wed</td>
          </tr>
          <tr>
           
            <td>
             <p className="forecastTemperature"> <b>35°c</b></p>
            </td>
          </tr>
          <tr>
            <td>
          <WeatherIcon code="01d"/>
            </td>
          
          </tr>
        </tbody>
      </table>
    </div>
  
    );
}