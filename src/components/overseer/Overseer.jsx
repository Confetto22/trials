import overseerPic from "../../../public/photos/567A0086.jpg";
import "./Overseer.css";

const OverSeer = () => {
  return (
    <section className="overseer">
      <div className="overseerCard">
        <img src={overseerPic} className="overseerPic" />
        <h5 className="overseerName">Apostle Dr. Cloudio</h5>
      </div>
      <div className="welcome_text">
        <h3 className="welcome_heading">
          {" "}
          MAZAL TOV! <br />
          WELCOME TO HOM CHAPEL
        </h3>
        <div className="welcome_details">
          <div className="paragraphs">
            <p className="first_paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              praesentium ad eveniet saepe, minus officia atque architecto error
              illo quod accusamus? Beatae nisi facilis exercitationem sapiente
              velit officia sunt ut!
            </p>
            <br />
            <p className="second_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              impedit necessitatibus, nemo, facere veniam dicta sed, sapiente
              porro perferendis ex reprehenderit odit facilis veritatis
              distinctio et fugit laudantium optio repellendus.
            </p>
          </div>
          {/* <button className="overseerBt">General Overseer</button> */}
        </div>
      </div>
    </section>
  );
};

export default OverSeer;
