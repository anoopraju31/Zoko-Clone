import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FooterSection, NewsLetterForm } from "./components/import";
import footerLogo from "../../img/logo2.png";
import { footerDetails } from "./util";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <div className="footer__img">
            <img src={footerLogo} alt="" />
          </div>

          <div className="footer__social_text">
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>

          <div className="footer__searchBox">
            <NewsLetterForm />
          </div>

          <div className="footer__socialContainer">
            <div className="icon">
              <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                <FaFacebookF size={20} />
              </a>
            </div>

            <div className="icon">
              <a href="https://twitter.com" rel="noreferrer" target="_blank">
                <FaTwitter size={20} />
              </a>
            </div>

            <div className="icon">
              <a 
                href="https://www.instagram.com" 
                rel="noreferrer" 
                target="_blank"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            <div className="icon">
              <a
                href="https://in.linkedin.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.youtube.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__service">
          <FooterSection details={footerDetails.services} />
        </div>

        <div className="footer__quikLink">
          <FooterSection details={footerDetails.quickLinks} />
        </div>

        <div className="footer__contact">
          <FooterSection details={footerDetails.contact} />
        </div>
      </div>

      <div className="footer__hr" />
      <div className="footer__bottom  container">
        <div className="footer__nav">
          {/* <p> Home </p>
          <p> About </p>
          <p> Solutions </p>
          <p> Case Studies </p>
          <p> Blog </p>
          <p> Contact </p> */}
        </div>
        <div className="footer__copyright">
          <p>
            {" "}
            Copyright @2022 Zoko. All Rights Reserved by{" "}
            <span> Zoko.com </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
