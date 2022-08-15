import "./feature.css";
import featureImg from "../../../../img/feature-img.png";
import { FeatureItem } from "./components/import";
import { Button } from "../../../import";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature__container container">
        <div className="feature__content">
          <p className="first"> Features </p>
          <h2> We Have Also Some Features That Provided by Zoko </h2>
          <p className="last">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero
          </p>
          <div className="features">
            <FeatureItem feat="Freelancing Training Course" />
            <FeatureItem feat="Technological Consultation" />
            <FeatureItem feat="Monthly Paid Workspace" />
            <FeatureItem feat="IT Learning Institute" />
            <FeatureItem feat="Digital Marketing" />
          </div>
          <Link to="/contact">
            <Button
              className="feature__button"
              text="Let's Talk"
              pseudoElementColor
              link="/feature"
            />
          </Link>
        </div>

        <div className="feature__img">
          <img src={featureImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
