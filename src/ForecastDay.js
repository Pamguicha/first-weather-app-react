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
    let days = ["Sun", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];

}


    return (  
    <>
    
          <div className="cell"> {day()} 
          </div>
            <div className="cell middle">  
            <p className="forecastTemperature"> <b>{maxTemperature()}</b></p> 
            </div>
           <div className="cell middle"> 
            <WeatherIcon code={props.data.weather[0].icon}/>
           </div>
    
      
      
         
      
      
          
      
   
    </>
      );
    
}