import "./contact.css";
import contactImg from "../../../../img/contact-img.png";
import { ContactForm } from "./component/import";

const Contact = ({ showImg }) => {
  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="contact__header">
          <p className="first"> Contact Us </p>
          <h2> Let us know about your Ideas</h2>
          <p>
            We are glad to hear from you and we will be honored to work with you
            and your creative ideas . Together we can make that dream into
            reality.
          </p>
        </div>

        <div className={!showImg ? "contact__body" : "contact_form_only"}>
          {!showImg && (
            <div className="contact__img">
              <img src={contactImg} alt="" />
            </div>
          )}
          <div className="contact__form">
            <ContactForm noShowImg={showImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
