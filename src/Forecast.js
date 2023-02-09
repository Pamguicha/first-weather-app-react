import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
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
  );
}
