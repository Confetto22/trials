import "./CardDepartment.css";

const CardDepartment = (props) => {
  return (
    <div className="department_card" id={props.cardNo} style={props.styling}>
      <div className="card_content" id="card_content">
        <h5 className="department_name">{props.name}</h5>

        <h6 className="department_desc">{props.desc}</h6>
        <button className="right_arrow">
          {" "}
          <i className="fa-solid fa-arrow-right-long"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default CardDepartment;
