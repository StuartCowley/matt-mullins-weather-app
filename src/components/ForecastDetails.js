import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <h3 className="forecast-details__date">{formattedDate}</h3>
      <div className="forecast-details__max-temp">
        Maximum temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temp">
        Minimum temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind-speed">
        Wind speed: {wind.speed}mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;