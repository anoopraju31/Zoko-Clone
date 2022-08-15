import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import tribl from "../../../../img/logo.png";
import "./navbarTop.css";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="navbarTop">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={tribl} alt="" />{" "}
        </Link>
      </div>

      <div className="navbarTop__contact_container">
        <div className="navbarTop__contacts">
          <div className="navbarTop__contact">
            <CgPhone className="icon" />
            <p>
              <a href="tel:+918949313448">  +1 123 456 789</a>
            </p>
          </div>
          <div className="navbarTop__contact">
            <MdEmail className="icon" />
            <p>
              <a href="mailto:info@zoko.com">hello@zoko.com</a>
            </p>
          </div>
        </div>

        <div className="navbarTop__seperator" />

        <div className="navbarTop__socialMedia_container">
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
            <AiFillInstagram className="icon" />
          </a>
          <a href="https://twitter.com" rel="noreferrer" target="_blank">
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://in.linkedin.com/"
            rel="noreferrer" 
            target="_blank"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            href="https://www.youtube.com"
            rel="noreferrer" 
            target="_blank"
          >
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
