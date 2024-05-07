import "./Map.css";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.08910526808!2d-0.3208213256454878!3d5.553808433673038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sHouse%20of%20Mystery%20Chapel%20International!5e0!3m2!1sen!2sgh!4v1714967786927!5m2!1sen!2sgh"
      width="80%"
      height="250"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="map"
    ></iframe>
  );
};

export default Map;
