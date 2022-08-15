import { SectionItem } from "../import";
import "./footerSection.css";

const FooterSection = ({ details }) => {
  return (
    <div className="footerSection">
      <h3> {details.title} </h3>
      {details.items.map((item, idx) => (
        <SectionItem
          link={item.link}
          key={idx}
          Icon={item?.icon}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default FooterSection;
