import "./SearchBar.css";

import React, { useState } from 'react'
import "../Components/SearchBar.css"

const SearchBar = ({ onSearch }) => {

    const [query, setQuery] = useState("")

    const handleInputChange = e => setQuery(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        const apiKey = import.meta.env.VITE_API_KEY
        const maxResults = 8
        fetch(`'https://homeless-shelter.p.rapidapi.com/state-city?${query}&key=${apiKey}&part=snippet&type=video&maxResults=${maxResults}`)
        .then(r => r.json())
        .then(data => onSearch(data.items))
        .catch(err => console.log(err))
}

return (
    <div className='SearchBar'>
        <aside id="search">
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="row">
                        <label htmlFor="SearchBar" className="col-auto col-form-label">
                            {/* Search YouTube */}
                        </label>
                        <div className="col">
                            <input
                                id="SearchBar"
                                className="form-control"
                                name="SearchBar"
                                type="text"
                                placeholder="Search Videos..."
                                value={query}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </aside>
    </div>
)
}

export default SearchBar