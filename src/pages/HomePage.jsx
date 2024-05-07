import Hero from "../components/hero/Hero";
import Overseer from "../components/overseer/Overseer";
import Departments from "../components/departments/Departments";
import YouTube from "../components/youtubevid/YouTube";
import Footer from "../components/footer/Footer";
import "../App.css";
import UpcomingEvents from "../components/upcomingevents/UpcomingEvents";

const socialVideos = [
  {
    id: 1,
    source: "https://www.youtube.com/embed/Ty0OfddxCm0?si=IApJKdLyFPQ522CZ",
    styles: {},
  },
  {
    id: 2,

    source: "https://www.youtube.com/embed/tHV8ZQQorbs?si=Afoy-OSrLzw6KbVi",
    styles: {},
  },
];

function createSocialVideo(singleSocialVideo) {
  return (
    <YouTube
      link={singleSocialVideo.source}
      styling={singleSocialVideo.styles}
    />
  );
}

const HomePage = () => {
  return (
    <>
      <Hero />
      <Overseer />
      <Departments />
      <hr className="secDivide" />
      <UpcomingEvents />
      <hr className="secDivide" />
      <section className="social_videos">
        {socialVideos.map(createSocialVideo)}
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
