import {Link} from "react-router-dom"
import "./header.styles.scss"

const Header = () =>
  <nav className="nav-menu container">
    <div className="logo">
      <Link to="/">NOMAD</Link>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
    </ul>
  </nav>

export default Header