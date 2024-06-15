import { Link } from 'react-router-dom';
import './styles.sass';

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo"><Link to="/">Logo</Link></div>
      <ul className="navlinks">
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/works">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div className="icons">
        <a href="#">GT</a>
        <a href="#">IN</a>
        <a href="#">IG</a>
      </div>
    </nav>
  );
};

