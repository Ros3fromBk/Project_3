// import "../Components/
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand">
          <div className="container">
            <Link to="/" className="navbar-brand fs-1">
              <span>Shelter</span> For You
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">  Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutMe" className="nav-link"> About </Link>
              </li>
              <li className="nav-item">
                <Link to="/NewYork" className="nav-link">New York</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar