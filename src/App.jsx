import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from './Components/Form/SearchForm.jsx';
import ResultsPage from './Components/ResultsPage/Results.jsx';
import ErrorPage from './Components/ErrorPopup/Errors.jsx';

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
      <Router>
            <Switch>
              <Route exact path="/">
                {/* Your home component */}
              </Route>
              <Route path="/search">
                <SearchForm />
              </Route>
              <Route path="/results">
                <ResultsPage />
              </Route>
              <Route>
                <ResultsPage />
              </Route>
            </Switch>
          </Router>    
    
    </>
  )
}

export default App
