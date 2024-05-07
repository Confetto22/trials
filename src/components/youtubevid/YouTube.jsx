import "./YouTube.css";

const YouTube = (props) => {
  return (
    <iframe
      width="300px"
      height="315"
      src={props.link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="ytVideo"
      style={props.styling}
    ></iframe>
  );
};

export default YouTube;


{/* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/tHV8ZQQorbs?si=Afoy-OSrLzw6KbVi"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */}
