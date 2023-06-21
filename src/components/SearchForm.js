import React from "react";


function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input className="search-form_input" type="text" onChange={handleInputChange} value={searchText}/>
      <button className="search-form_button" type="submit" onClick={onSubmit}>Search</button>
    </div>
  );
}

export default SearchForm;