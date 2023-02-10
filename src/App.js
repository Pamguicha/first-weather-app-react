import React,{useState} from 'react';
import WeatherInfo from './WeatherInfo';
import axios from "axios";
import './Main.css';
import "./Forecast.css";
import './App.css';


export default function Weather(props){
 
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response){

setWeatherData({
  ready:true,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  pressure: response.data.main.pressure,
  city: response.data.name,
  date: new Date(response.data.dt * 1000),
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
   <WeatherInfo data={weatherData}/>
      
       
    </div>
  );
} else {
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);

 return "Loading...";

}

}


