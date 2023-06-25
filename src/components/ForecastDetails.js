import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails(props) {
    const { forecast } = props;

  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div className="forecast-details">
      <h3 className="forecast-details__date">{formattedDate}</h3>
      <div className="forecast-details__max-temp">
        Maximum temperature: {forecast.temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temp">
        Minimum temperature: {forecast.temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {forecast.humidity}%</div>
      <div className="forecast-details__wind-speed">
        Wind speed: {forecast.wind.speed}mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind direction: {forecast.wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;