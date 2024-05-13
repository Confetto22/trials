import Hero from "../components/hero/Hero";
import Overseer from "../components/overseer/Overseer";
import Departments from "../components/departments/Departments";
import YouTube from "../components/youtubevid/YouTube";
import Footer from "../components/footer/Footer";
import "../App.css";
import UpcomingEvents from "../components/upcomingevents/UpcomingEvents";
import Navbar from "../components/navbar/Navbar";

const socialVideos = [
  {
    id: 1,
    source: "https://www.youtube.com/embed/Ty0OfddxCm0?si=IApJKdLyFPQ522CZ",
    styles: {},
  },
];

function createSocialVideo(singleSocialVideo) {
  return (
    <YouTube
      link={singleSocialVideo.source}
      styling={singleSocialVideo.styles}
      key={singleSocialVideo.id}
    />
  );
}

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overseer />
      <Departments />
      <hr className="secDivide" />
      <UpcomingEvents />
      <hr className="secDivide" />
      <section className="social_videos">
        <div className="socialVideo_text">
          <h2 className="latest_upload">Latest Upload</h2>
          <p>
            {/* All our most recent posts are published here. From sermons to short
            videos to music vieos, all can be found here! This is the latest
            upload from House of Mystery Chapel International */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            provident obcaecati consectetur corrupti, rerum cum at! Commodi
            eligendi quia quas consectetur quae nulla harum porro, aliquam error
            dolorem, vitae perferendis autem odio maxime rem cum deleniti
            incidunt, doloribus laboriosam amet. Officiis molestiae, numquam
            eius cupiditate, illo, at illum nobis voluptatum possimus ut dolor
            voluptates quaerat eligendi culpa. Ut, tempora. Quaerat ducimus
            quisquam dolore, magnam reprehenderit sit vero consequuntur earum?
            Perspiciatis? <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex
            at repudiandae, hic, consequatur qui soluta expedita cupiditate
            numquam sed dolorum ipsam pariatur harum aliquam nisi unde similique
            magnam ut, voluptatum necessitatibus quidem? Quo distinctio
            laboriosam ipsa ratione, tempore laborum.
          </p>
        </div>
        {socialVideos.map(createSocialVideo)}
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
