import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Mission from "../components/mission/Mission";
import altarPic from "../assets/567A9715.jpg";
import "./AboutPage.css";
import AboutCard from "../components/mission/AboutCard";
import Beliefs from "../components/beliefs/Beliefs";
import { Link } from "react-router-dom";
import visionIcon from "../assets/binoculars.png";
import missionIcon from "../assets/target.png";
import valuesIcon from "../assets/values.png";
import Decrees from "../components/decrees/Decrees";

const allstatements = [
  {
    id: 1,
    icon: visionIcon,
    title: "Our Vision",
    desc: "To build a Kingdom Conscious, spirit filled, faith based, word centered, engracement, divine restoration and to multiply disciples.",
  },
  {
    id: 2,
    icon: missionIcon,
    title: "Our Mision (5 I's)",
    desc: "To Inspire, Insight, Impact, Impart and Invest",
  },
  {
    id: 3,
    icon: valuesIcon,
    title: "Core Values",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem distinctio ab dolorem quibusdam aut repellendus alias fugit corrupti iste sapiente.",
  },
];

function createStatementCard(singleCard) {
  return (
    <AboutCard
      icon={singleCard.icon}
      title={singleCard.title}
      deescription={singleCard.desc}
    />
  );
}

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <p id="partName">
          {" "}
          <Link to="/" className="page">
            Home
          </Link>{" "}
          | About
        </p>
        <div className="introduction_box">
          <div className="introduction">
            <img src={altarPic} alt="" className="aboutImg" />
            <Mission />
          </div>
        </div>
        <hr className="secDivide" />
        <div className="statements">
          {allstatements.map(createStatementCard)}
        </div>
        <hr className="secDivide" />

        <div className="our_beliefs">
          <h2>Statement Of Faith</h2>
          <p className="we_believe">We believe:</p>
          <Beliefs />
        </div>
        <Decrees />
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
