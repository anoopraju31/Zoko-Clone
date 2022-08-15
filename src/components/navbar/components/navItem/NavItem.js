import { Link } from "react-router-dom";
import "./navItem.css";

const NavItem = ({ title, items, link }) => {
  return (
    <div className="navItem">
      <div className="navItem__link">
        {link && <Link to={link}> {title} </Link>}
        {items && <p>{title}</p>}
        {items && <span> + </span>}
      </div>

      {items && (
        <div className="navItem__dropdown">
          {items.map((item, idx) => (
            <div key={idx} className="navItem__dropdownItem">
              {" "}
              <Link to={item.link}> {item.title} </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
