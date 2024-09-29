import { Link } from 'react-router-dom';
import logo from '../assets/download.jpeg'
const Title = () => {
  return (
    // <h1>Tasty Trek</h1>
    <img src={logo} alt="logo" className="logo" />
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to='/'><Title /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to='/about/'>About</Link></li>
          <li><Link to='/contact/'>Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;