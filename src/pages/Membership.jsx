// import comingSoon from "../../public/photos/03092022_rorozoa_10.jpg";
import MemberForm from "../components/memberForm/MemberForm";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Badge from "../assets/rewards.png";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className="membership">
        <div className="membership_intro">
          <div className="intro_content">
            <h2 className="membership_heading">
              <img src={Badge} className="badge" />
              Citizenship
            </h2>
            <q className="membership_quote">
              I was glad when they said unto me, Let us go into the house of the
              Lord. Our feet shall stand within thy gates, O Jerusalem.
            </q>
          </div>
        </div>
        <div className="member_form">
          <p className="form_head">
            Kindly fill out and submit the form below. <br /> A representative
            will reach out to you in 12-24hrs.
          </p>
          <MemberForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
