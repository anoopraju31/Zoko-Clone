import "./contact.css";
import { BlogHeader } from "../blog/components/import";
import { Card } from "./components/import";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineAddLocation } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { ContactForm } from "../home/components/contact/component/import";

const Contact = () => {
  return (
    <div>
      <BlogHeader title="Contact" />
      <div className="contact_page container">
        <div className="contact_cardContainer">
          <Card
            Icon={<AiOutlineClockCircle size={20} />}
            title="Opening Hours"
            subTitle="Sun - Thu : 10:00 AM - 06:00 PM"
          />
          <Card
            Icon={<MdOutlineAddLocation size={20} />}
            title="Address"
            subTitle="28/A Street, New York City, USA"
          />
          <a href="tel:+918949313448" style={{ color: "#7a7e9a" }}>
            <Card
              className="last"
              Icon={<FiPhoneCall size={20} />}
              title="Phone"
              subTitle="+1 (321) 984 754"
            />
          </a>
        </div>

        <div className="contact__header">
          <p className="first"> Contact Us </p>
          <h2> Let Us Know About Your Ideas </h2>
          <p> It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more. </p>
        </div>

        <div className="contact_page_form">
          <ContactForm />
          <div className="contactPage_form_img"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
