import "./SearchForm.css";
import React, { useState } from "react";
import { fetchShelters } from "./FetchAPI";
import { useHistory } from "react-router-dom";
import { USAStates } from 'usa-states';

const usStates = new USAStates().states;

const SearchForm = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchShelters({ state, city, zipcode });
      history.push("/results", { data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          State
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {usStates.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          City
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Zipcode
          <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
