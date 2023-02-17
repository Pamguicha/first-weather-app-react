import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay (props){
    function maxTemperature(){
        let temperature =  Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];

}


    return (  
    <>
          <tr>
            <td> {day()}</td>
             <td> {day()}</td>
          </tr>
          <tr>              
                <td>
             <p className="forecastTemperature"> <b>{maxTemperature()}</b></p>
            
            </td>
                  <td>
             <p className="forecastTemperature"> <b>{maxTemperature()}</b></p>
            
            </td>
             </tr>
             <tr>
            <td>
          <WeatherIcon code={props.data.weather[0].icon}/>
            </td>
              <td>
          <WeatherIcon code={props.data.weather[0].icon}/>
            </td>
          
          </tr>
          
   
    </>
      );
    
}