import "./featureItem.css";
import { FcApproval } from "react-icons/fc";

const FeatureItem = ({ feat }) => {
  return (
    <div className="featureItem">
      <FcApproval className="icon" />
      <p> {feat} </p>
    </div>
  );
};

export default FeatureItem;
