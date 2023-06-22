//Dependencies
import React, { useState, useEffect } from 'react';
import "../styles/App.css";
import LocationDetails from './LocationDetails';
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from './ForecastDetails';
import getForecast from "../requests/getForecast";
import SearchForm from './SearchForm';

//Top level App Component
function App () {
  //useState Hook declared using array destructuring.
  //First variable represents the current value of the State
  //Second variable is the function to update that state
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);

  const handleCitySearch = () => {
    getForecast(searchText,setSelectedDate, setForecasts, setLocation, setErrorMessage);
  };

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast("",setSelectedDate, setForecasts, setLocation, setErrorMessage);
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} errorMessage={errorMessage}/>
      <SearchForm searchText={searchText} setSearchText={setSearchText} handleCitySearch={handleCitySearch} />
      {!errorMessage && (
        <>
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}
      </>
      )}
    </div>
  );
};

export default App;

