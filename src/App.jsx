import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResultPages from './Components/ResultPages'

import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const apiKey = import.meta.env.VITE_API_KEY

  console.log(import.meta.env.VITE_API_KEY)

  return (
    <>

    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Welcome To ShelterHub</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      <Router>

        <NavBar />
      
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

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ResultPages />

    </>
  )
}

export default App
