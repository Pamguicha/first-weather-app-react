import React,{useState} from 'react';
import WeatherInfo from './WeatherInfo';
import Forecast from "./Forecast";
import axios from "axios";
import './Main.css';
import "./Forecast.css";
import './App.css';


export default function Weather(props){
 
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){

setWeatherData({
  ready:true,
  coordinates: response.data.coord,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  pressure: response.data.main.pressure,
  city: response.data.name,
  date: new Date(response.data.dt * 1000),
  description: response.data.weather[0].description,
  icon: response.data.weather[0].icon


});
}
function search(){
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
};

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
setCity(event.target.value);
}


if(weatherData.ready) {

  return (
    <div className="city">
  <p className="intro"> The weather app</p>
   <form onSubmit={handleSubmit}  className="search-form">
     <input 
     type="search" 
     placeholder="Enter your city here"
     autoFocus="on"
     onChange = {handleCityChange}
     />
       <input className="btn" type="submit" value="Search" />
        <input className="currentbar" type="button" value="Current" />
   </form>
   <WeatherInfo data={weatherData}/>
      <span> 5-day forecast </span>
      <hr />
    <Forecast coordinates={weatherData.coordinates} />
    
       
    </div>
  );
} else {

search();
 return "Loading...";

}

}


