import "./Mission.css";

const AboutCard = (props) => {
  return (
    <div className="about_card" id="about_card">
      <div className="cardIcon">
        <img src={props.icon} alt="" />
      </div>
      <h5 className="cardTitle"> {props.title} </h5>
      <h6 className="card_desc">{props.deescription}</h6>
    </div>
  );
};

export default AboutCard;
