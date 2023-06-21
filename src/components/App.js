/* eslint-disable  no-unused-vars */

import React, { useState, useEffect } from 'react';
import "../styles/App.css";
import LocationDetails from './LocationDetails';
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from './ForecastDetails';
import getForecast from "../requests/getForecast";
import SearchForm from './SearchForm';


const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find((item) => item.date === selectedDate);
  const { city, country } = location;

  const handleCitySearch = () => {
    getForecast(setSearchText,setSelectedDate, setForecasts, setLocation, setErrorMessage);
  };

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSearchText,setSelectedDate, setForecasts, setLocation);
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

