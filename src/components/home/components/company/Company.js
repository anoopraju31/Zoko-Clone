import { Link } from "react-router-dom";
import { Button } from "../../../import";
import "./company.css";

const Company = ({ img, subHeading, bg }) => {
  return (
    <div className={`company ${bg ? "company_bg" : "company_bg_white"}`}>
      <div className="company__container container">
        <div className="company__content">
          <p className="first"> {subHeading} </p>
          <h2> Innovative Web Service All Over the World </h2>
          <p>
          It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
          </p>
          <p className="last">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.
          </p>
          <Link to="/about">
            <Button text="Know More" pseudoElementColor link="/about" />
          </Link>
        </div>

        <div className="company__img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
