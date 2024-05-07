import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Mission from "../components/mission/Mission";
import altarPic from "../../public/photos/567A9715.jpg";
import "./AboutPage.css";
import AboutCard from "../components/mission/AboutCard";
import Beliefs from "../components/beliefs/Beliefs";
import { Link } from "react-router-dom";
import visionpic from "../assets/binoculars.png";
import missionpic from "../assets/target.png";
import valuespic from "../assets/values.png";

const allstatements = [
  {
    id: 1,
    icon: visionpic,
    title: "Our Vision",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem distinctio ab dolorem quibusdam aut repellendus alias fugit corrupti iste sapiente.",
  },
  {
    id: 2,
    icon: missionpic,
    title: "Our Mision",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem distinctio ab dolorem quibusdam aut repellendus alias fugit corrupti iste sapiente.",
  },
  {
    id: 3,
    icon: valuespic,
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
          <h2>Our Beliefs</h2>
          <Beliefs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
