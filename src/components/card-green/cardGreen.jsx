import "./cardGreen.css";

const CardGreen = ({ bg, icon, description }) => {
  return (
    <div className="card__green">
      <img id="bg" src={bg} alt="" srcset="" />
      <img src={icon} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default CardGreen;
