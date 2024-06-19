import { Link } from 'react-router-dom';
import {LinkedinLogo, InstagramLogo, GithubLogo} from "@phosphor-icons/react"
export const Navbar = () => {
  return (
    <nav className="nav">
     <Link className="logo" to="/">
     </Link>
      <ul className="navlinks">
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/works">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div className="icons">
        <a href="#"><LinkedinLogo size={24} weight="fill"/></a>
        <a href="#"><InstagramLogo size={24} weight="fill"/></a>
        <a href="#"><GithubLogo size={24} weight="fill"/></a>
      </div>
    </nav>
  );
};

