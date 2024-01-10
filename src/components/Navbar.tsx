import '../styles/navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav id="navbar-container">
      <div>
        <img src={logo} alt="LimoX Logo" />{' '}
      </div>
      <div id="navbar-links">
        <div>QUICK BOOKING</div>
        <div id="navbar-menu"></div>
      </div>
    </nav>
  )
}

export default Navbar
