import "./processCard.css";
import nextImg from "../../../../../../img/next.png";
const ProcessCard = ({ title, processImg, last, desc }) => {
  return (
    <div className="processCard">
      <div className="processCard__img">
        <img src={processImg} alt="" />
        {!last && (
          <span>
            <img src={nextImg} alt="" />
          </span>
        )}
      </div>

      <div className="processCard__content">
        <h4> {title} </h4>
        <p> {desc} </p>
      </div>
    </div>
  );
};

export default ProcessCard;
