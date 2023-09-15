import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ResultPages from './Components/ResultPages'


import SearchForm from './Components/Form/SearchForm.jsx';
import ErrorPage from './Components/ErrorPopup/Errors.jsx';

import NavBar from './Components/NavBar'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const apiKey = import.meta.env.VITE_API_KEY

  console.log(import.meta.env.VITE_API_KEY)

  return (
    <>


    <h1>
      RRR Team
      secret code 
      
      apiKey
    </h1>

      <h1>Welcome To ShelterHub</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      <Router>

      <header>
      <NavBar />
        </header>  
      
        {/* <div>
          <SearchBar onSearch={handleSearch} />
        </div>
     */}

        <Routes>
          {/* <Route path="/" element={searchResults.length > 0 ?  */}
          {/* <VideoPage searchResults={searchResults} toggleFavorite={toggleFavorite} favoriteVideoIds={favoriteVideoIds} /> : <div></div>} /> */}
          <Route path="/AboutMe" element={ <h1> RRR </h1>} />
          {/* <Route path="/video/:videoId" element={<ShowPage />} /> */}
          {/* <Route path="/favorites" element={<FavoritesPage favoriteVideoIds={favoriteVideoIds} searchResults={searchResults} />} /> */}
        </Routes>
      </Router>

      </div>

      <ResultPages />

    </>
  )
}

export default App
