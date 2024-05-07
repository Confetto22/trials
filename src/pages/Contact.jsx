import SendMail from "../components/sendmail/SendMail";
import "./Contact.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Map from "../components/map/Map";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact_sec">
        <p className="partName">
          <Link to="/" className="pageName">
            Home
          </Link>
          | Contact
        </p>
        <h4 className="contact_heading">
          Have A Question? <br /> Get In Touch with us
        </h4>

        <div className="form_location">
          <SendMail />
          <Map />
        </div>
        <h2 className="send_whatsapp">
          You could also send us a WhatsApp message!
        </h2>
        <a href="#" className="whatsappBt">
          <i className="fa-brands fa-whatsapp"></i>
          whatsapp us
        </a>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
