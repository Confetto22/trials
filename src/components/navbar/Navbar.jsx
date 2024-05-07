import churchLogo from "../../../public/photos/homlogo.webp";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logolink">
        <img src={churchLogo} alt="" id="churchLogo" />
      </Link>
      {/* <ul className="menuList">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Events</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>Visit Us</li>
        </a>
      </ul> */}

      <ul className="menuList">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/events">
          <li>Events</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
      </ul>

      <button className="callBt">
        <i className="fa-solid fa-phone" id="make_call"></i>
      </button>
      <i className="fa-solid fa-bars " id="menuBt"></i>
    </nav>
  );
};

export default Navbar;
