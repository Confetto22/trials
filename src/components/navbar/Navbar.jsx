import churchLogo from "../../assets/homlogo.webp";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <div className={`menuWindow ${menu ? "showmenu" : "hidemenu"} `}>
        <div className="menu_content">
          <ul className="menuWindowList">
            <Link to="/">
              <li>
                Home
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </Link>
            <Link to="/about">
              <li>
                About
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </Link>
            <Link to="/events">
              <li>
                Events
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                Contact
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </Link>
            <Link to="/membership">
              <li>
                Citizenship
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </Link>
          </ul>
          <hr className="menuDivide" />
          <div className="menu_socials">
            <a
              href="https://www.facebook.com/homchapel?mibextid=ZbWKwL"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.tiktok.com/@cloudioministries?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/homchapel/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="http://www.youtube.com/@houseofmysterychapelintern2095"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${menu ? "navbgAnimate" : null}`}>
        <Link to="/" className="logolink">
          <img src={churchLogo} alt="" id="churchLogo" />
        </Link>

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
          <Link to="/membership">
            <li>Citizenship</li>
          </Link>
        </ul>

        <a href="tel:233597127775">
          <button className="callBt">
            <i className="fa-solid fa-phone" id="make_call"></i>
          </button>
        </a>

        <i
          className={`fa-solid fa-bars ${menu ? "menuBtAnimate" : null}`}
          id="menuBt"
          onClick={() => setMenu(!menu)}
        ></i>
      </nav>
      <div className="navtop">
        <p className="navLocation">Tatop Weija Accra, Ghana</p>
        <a href="tel:233597127775">
          <button className="callBt navtopbt">
            <i className="fa-solid fa-phone" id="make_call"></i>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
