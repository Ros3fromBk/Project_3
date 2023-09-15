import "../Nav/NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand">
          <div className="container">
            <Link to="/" className="navbar-brand fs-1">
              <span>Shelter For You</span> 
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">  Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link"> About </Link>
              </li>
              <li className="nav-item">
                <Link to="/NewYork" className="nav-link">New York</Link>
              </li>
              <li className="nav-item">
                <Link to="/LosAngeles" className="nav-link">Los Angeles</Link>
              </li><li className="nav-item">
                <Link to="/Miami" className="nav-link">Miami</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar