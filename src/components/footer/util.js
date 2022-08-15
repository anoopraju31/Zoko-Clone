import footerLogo from "../../img/logo2.png";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
export const footerDetails = {
  social: {
    logo: footerLogo,
  },
  services: {
    title: "Our Service",
    items: [
      { title: "Web Development", link: "/solutions/webDevelopment" },
      { title: "App Development", link: "/solutions/appDevelopment" },
      { title: "E.Com Website", link: "/solutions/ecomWebsite" },
      { title: "Graphic Designing", link: "/solutions/graphicDesigning" },
      { title: "Web Designing", link: "/solutions/webDesigning" },
      { title: "Digital Marketing", link: "/solutions/digitalMarketing" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    items: [
      { title: "About", link: "/about" },
      { title: "services", link: "/solutions" },
      { title: "fAQs", link: "/faq" },
      // { title: "Blogs", link: "/blogs" },
      { title: "Contact Us", link: "/contact" },
    ],
  },
  contact: {
    title: "contact",
    items: [
      {
        icon: <AiOutlinePhone size={20} />,
        title: " +1 975 456 789",
        link: "tel:+1 975 456 789",
      },
      {
        icon: <IoMdMail size={20} />,
        title: "Support@zoko.com",
        link: "mailto:support@zoko.com",
      },
      {
        icon: <ImLocation size={20} />,
        title: "28/A street, New York, USA",
      },
    ],
  },
};
