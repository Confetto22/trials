import "./Footer.css";
import churchLogo from "../../assets/homlogo.webp";
// import Map from "../map/Map";
import { Link } from "react-router-dom";
import altarPic from "../../assets/567A9715.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={churchLogo} alt="" id="footer_logo" />

      <hr className="footerDivide" />
      <div className="footer_main">
        <div className="footer_details">
          <div className="col-1">
            <div className="footer_location">
              <h5 className="location_head">
                <i className="fa-solid fa-church"></i>
                Mystery Temple
              </h5>
              <p>Tatop Weija,Accra.</p>
            </div>

            <div className="serviceTimes">
              <div className="footer_friService">
                <h5 className="friService_head">
                  <i className="fa-solid fa-calendar"></i>
                  Fridays
                </h5>
                <p>06:00PM - 08:30PM</p>
              </div>
              <div className="footer_sundays">
                <h5 className="sundays_head">
                  <i className="fa-solid fa-calendar"></i>
                  Sundays
                </h5>
                <p>07:30AM - 10:45AM</p>
              </div>
            </div>
          </div>
          {/* <Map /> */}
        </div>

        <div className="footer_colbox">
          <div className="in_touch">
            <div className="inTouch_text">
              <h5 className="in_touch_head">Stay In Touch</h5>
              <p>follow our socials to stay updated on our latest info</p>
            </div>

            <div className="socials">
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
          <ul className="footer_menuList">
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
        </div>
        <img src={altarPic} alt="" className="altar" />
      </div>
      <hr className="footerDivide" />
      <p className="copyright">Copyright&copy;2024 | HOM CHAPEL</p>
    </footer>
  );
};

export default Footer;
