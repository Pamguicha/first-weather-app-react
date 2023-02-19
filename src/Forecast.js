import React, {useState} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";



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
    <div className="container">
      <ForecastDay data = {forecast[0]}/>
           <ForecastDay data = {forecast[1]}/>
             <ForecastDay data = {forecast[2]}/>
              <ForecastDay data = {forecast[3]}/>
               <ForecastDay data = {forecast[4]}/>

      </div>
      
    
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