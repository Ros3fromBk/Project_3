import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutList from './Components/AboutPage/AboutList'

import ResultPages from './Components/ResultsPage/ResultPages'


// import SearchForm from './Components/Form/SearchForm.jsx';
// import ErrorPage from './Components/ErrorPopup/Errors.jsx';

import NavBar from './Components/Nav/NavBar'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './Components/AboutPage/AboutInfo'


function App() {
  const [count, setCount] = useState(0)
  const apiKey = import.meta.env.VITE_API_KEY

  console.log(import.meta.env.VITE_API_KEY)

  return (
    <>


      <h3>
        secret code
        apiKey
      </h3>

      <h1>Welcome To ShelterHub</h1>
      {/* 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

      <Router>

        <header>
          <NavBar />
        </header>

        {/* <div>
          <SearchBar onSearch={handleSearch} />
        </div>
     */}

        <Routes>
          <Route path="/" element={<h1>CASA </h1>} />
          <Route path="/NewYork" element={<h1>NY Shelters </h1>} />
          <Route path="/Miami" element={<h1>Miami Shelters</h1>} />
          <Route path="/LosAngeles" element={<h1>LA Shelters </h1>} />
          <Route path="/About" element={<AboutList />} />
          <Route path="/NewSearch" element={ <ResultPages />} />

        </Routes>
      </Router>


      {/* </div> */}


    </>
  )
}

export default App
