import { Link } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";
import { Container } from "../Container";
export const Navbar = () => {
  return (
    <Container>
      <nav className="nav">
        <Link className="logo" to="/"></Link>
        <ul className="navlinks">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/works">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="icons">
          <a href="#">
            <LinkedinLogo weight="fill" />
          </a>
          <a href="#">
            <InstagramLogo weight="fill" />
          </a>
          <a href="#">
            <GithubLogo weight="fill" />
          </a>
        </div>
      </nav>
    </Container>
  );
};
