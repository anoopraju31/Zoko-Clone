import "./sectionItem.css";

const SectionItem = ({ Icon, title, link }) => {
  return (
    <div className="sectionItem">
      {Icon && <div className="icon"> {Icon} </div>}
      <a href={link}>
        <p className="button_stretch"> {title} </p>
      </a>
    </div>
  );
};

export default SectionItem;
