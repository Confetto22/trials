import "./CardEvent.css";
const CardEvent = (props) => {
  return (
    <div className="event_card" style={props.cardStyling}>
      <img
        src={props.image}
        alt=""
        className="cardImage"
        style={props.flyerStyling}
      />
      <div className="card_details">
        <p className="venue">
          <i className="fa-solid fa-church"></i> {props.venue}
        </p>
        <p className="eventTime">
          <i className="fa-regular fa-clock"></i>
          {props.time}
        </p>
        <h4 className="eventName"> {props.name} </h4>
        <a href={props.streamLink} target="_blank" className="watch_link">
          <button className="watch_live">
            {props.liveStream} <i className="fa-solid fa-chevron-right"></i>
          </button>
        </a>
        {/* <button className="watch_live">
          {props.liveStream} <i className="fa-solid fa-chevron-right"></i>
        </button> */}
      </div>
    </div>
  );
};

export default CardEvent;
