import "./Hero.css";
// import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        {/* <Navbar /> */}
        <div className="hero_content">
          <h1>
            HOUSE OF MYSTERY <br /> CHAPEL INTERNATIONAL
          </h1>
          <p className="hero_smalltext">
            HOME FOR THE LOST AND BROKEN... <br />
            BUILDING SPIRITUAL COLOSSAL
          </p>
          <Link to="/membership">
            <button className="about_us">
              Become A Citizen
              <i className="bx bx-badge-check"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
