import comingSoon from "../../public/photos/03092022_rorozoa_10.jpg";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <img src={comingSoon} alt="" className="comingSoon" />
      <Footer />
    </>
  );
};

export default Gallery;
