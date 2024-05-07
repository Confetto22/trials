import CardDepartment from "../components/departments/CardDepartment";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
// import deptImg from "../../public/photos/567A9657.jpg";
import cardBg from "../../public/photos/hero2.jpeg";
import Akwaabapic from "../../public/photos/567A9657.jpg";

const departmentDetails = [
  {
    id: 1,
    image: "../../../public/icons/guard.png",
    name: "Protocol",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "first",
    style: {
      backgroundImage: `url(${cardBg})`,
    },
  },
  {
    id: 2,

    name: "Custodians",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "second",
    style: {
      backgroundImage: `url(${cardBg})`,
    },
  },
  {
    id: 3,

    name: "Music",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "third",
    style: {
      backgroundImage: `url(${cardBg})`,
    },
  },
  {
    id: 4,
    name: "Media",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "fourth",
    style: {
      backgroundImage: `url(${cardBg})`,
    },
  },
  {
    id: 5,
    name: "Pastors & Stewards",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "fifth",
    style: {
      backgroundImage: `url(${cardBg})`,
    },
  },
  {
    id: 6,
    name: "Akwaaba",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque eligendi voluptate repellat aperiam veniam.",
    cardNumber: "sixth",
    style: {
      backgroundImage: `url(${Akwaabapic})`,
    },
  },
];

function createdeptCard(singleCard) {
  return (
    <CardDepartment
      icon={singleCard.image}
      name={singleCard.name}
      desc={singleCard.desc}
      cardNo={singleCard.cardNumber}
      styling={singleCard.style}
      key={singleCard.id}
    />
  );
}

const ViewDepartments = () => {
  return (
    <>
      <Navbar />
      {/* <img src={deptImg} alt="" className="head_bg" /> */}
      <div className="allDepartments_head">
        <div className="dept_content">
          <h2 className="content_head">Departments</h2>
        </div>
      </div>
      <p className="partname">
        {" "}
        <Link to="/" className="secName">
          Home
        </Link>{" "}
        | <span className="secPart">Departments</span>
      </p>
      <div className="all_departments">
        {departmentDetails.map(createdeptCard)}
      </div>
      <Footer />
    </>
  );
};

export default ViewDepartments;
