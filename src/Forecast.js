import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast(){
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