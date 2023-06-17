import React from 'react';
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css'


function ForecastSummaries({ forecasts, onForecastSelect }) {
    console.log(forecasts);
return (
    <div className="forecast-summaries">
        {
        forecasts.map((forecast) => (
            <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon.toString()}
            onSelect={onForecastSelect}
            temperature={forecast.temperature.max}
            />
        ))}
        </div>
   );
};


export default ForecastSummaries;