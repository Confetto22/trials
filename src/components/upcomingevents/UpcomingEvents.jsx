import "./UpcomingEvents.css";
import { Link } from "react-router-dom";
import CardEvent from "./CardEvent";

const events = [
  {
    id: 1,
    flyer: "../../../public/photos/restorationhour.jpg",
    venue: "Mystery Temple",
    time: "07:30AM - 10:45AM",
    name: "Restoration Hour Service",
    liveStream: "Watch live",
    link: "https://www.facebook.com/homchapel?mibextid=ZbWKwL",
    cardStyles: {},
    flyerStyles: {},
  },
  {
    id: 2,
    flyer: "../../../public/photos/wordtheatre.jpg",
    venue: "Mystery Temple",
    time: "07:30AM - 10:45AM",
    name: "Restoration Hour Service",
    liveStream: "Watch live",
    link: "https://www.facebook.com/homchapel?mibextid=ZbWKwL",
    cardStyles: {},
    flyerStyles: {
      aspectRatio: "16/10.3",
      objectFit: "contain",
    },
  },
];

function createEventCard(singleEventCard) {
  return (
    <CardEvent
      image={singleEventCard.flyer}
      venue={singleEventCard.venue}
      time={singleEventCard.time}
      name={singleEventCard.name}
      liveStream={singleEventCard.liveStream}
      streamLink={singleEventCard.link}
      cardStyling={singleEventCard.cardStyles}
      flyerStyling={singleEventCard.flyerStyles}
      key={singleEventCard.id}
    />
  );
}

const UpcomingEvents = () => {
  return (
    <section className="upcoming">
      <p className="upcoming_heading">Upcoming Events</p>

      <div className="preview">{events.map(createEventCard)}</div>
      <Link to="/events">
        <button className="see_all_events">see all events</button>
      </Link>
    </section>
  );
};

export default UpcomingEvents;
