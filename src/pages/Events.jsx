import CardEvent from "../components/upcomingevents/CardEvent";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import mainevent from "../assets/restorationhour.jpg";
import event3 from "../assets/businesssummit.jpg";
import event4 from "../assets/graceexploits.jpg";

const allEvents = [
  {
    id: 1,
    flyer: mainevent,
    venue: "Mystery Temple",
    time: "07:30AM - 10:45AM",
    name: "Restoration Hour Service",
    liveStream: "Watch live",
    link: "https://www.facebook.com/homchapel?mibextid=ZbWKwL",
    cardStyles: {
      height: "400px",
    },
    flyerStyles: {
      height: "200px",
    },
  },
  {
    id: 2,
    flyer: event3,
    venue: "Mystery Temple",
    time: "06:00PM - 08:45PM",
    name: "Business Summit",
    liveStream: "Watch live",
    link: "https://www.facebook.com/homchapel?mibextid=ZbWKwL",
    cardStyles: {
      height: "400px",
    },
    flyerStyles: {
      height: "200px",
    },
  },
  {
    id: 3,
    flyer: event4,
    venue: "Mystery Temple",
    time: "08:00AM & 06:00PM",
    name: "2 Days Of Grace To Do Exploits",
    liveStream: "Watch live",
    link: "https://www.facebook.com/homchapel?mibextid=ZbWKwL",
    cardStyles: {
      height: "430px",
    },
    flyerStyles: {
      height: "200px",
    },
  },
];

function createAllEvents(singleEventCard) {
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

const Events = () => {
  return (
    <div className="eventsPage">
      <Navbar />
      <p id="partName">
        {" "}
        <Link to="/" className="page">
          Home
        </Link>{" "}
        | Events
      </p>
      <h2 className="evntspg_head">All our upcoming events</h2>
      <section className="fullEvents">
        <div className="all_events">{allEvents.map(createAllEvents)}</div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
