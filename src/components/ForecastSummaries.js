import React from 'react';
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css'


function ForecastSummaries({ forecasts }) {
    console.log(forecasts);
return (
    <div className="forecast-summaries">
        {
        forecasts.map((forecast) => (
            <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon}
            temperature={forecast.temperature.max}
            />
        ))}
        </div>
)
};


export default ForecastSummaries;