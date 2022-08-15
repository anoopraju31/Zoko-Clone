import { Button } from "../../../import";
import heroImg from "../../../../img/banner-img-1.png";
import shape1 from "../../../../img/shape1.png";
import shape2 from "../../../../img/shape2.png";
import shape3 from "../../../../img/shape3.png";
import shape4 from "../../../../img/shape4.png";
import shape5 from "../../../../img/shape5.png";
import shape6 from "../../../../img/shape6.png";
import "./heroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSection__shapeContainer">
        <div className="shape1">
          <img src={shape1} alt="" />
        </div>

        <div className="shape2">
          <img src={shape2} alt="" />
        </div>

        <div className="shape3">
          <img src={shape3} alt="" />
        </div>

        <div className="shape4">
          <img src={shape4} alt="" />
        </div>

        <div className="shape5">
          <img src={shape5} alt="" />
        </div>

        <div className="shape6">
          <img src={shape6} alt="" />
        </div>
      </div>

      <div className="heroSection__container container">
        <div className="heroSection__contents">
          <h1> Get Started Trusted Effective Service and Solutions </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, et sed do eiusmod tempor incididunt labore dolore magna aliqua. Quis ipsum suspendisse. </p>

          <div className="heroSection__buttons">
            <Link to="/contact">
              <Button text="Contact Us" link="/contact" />
            </Link>
            <Link to="/about">
              <Button text="Know More" backgroundDark link="/about" />
            </Link>
          </div>
        </div>

        <div className="heroSection__imgContainer">
          <div className="heroSection__heroImg">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
