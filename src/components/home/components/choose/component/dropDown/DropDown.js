import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputChoose } from "../../../../../../features/choose/choose";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./dropDown.css";

const DropDown = ({ idx, Que, Ans }) => {
  const [isOpen, setIsOpen] = useState(false);
  const choose = useSelector((state) => state.choose.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(choose[idx]);
  }, [choose, idx]);

  const handleClick = () => {
    let chooseArray = [false, false, false, false];
    chooseArray[idx] = true;
    dispatch(inputChoose(chooseArray));
  };

  return (
    <div className="dropDown" onClick={handleClick}>
      <div className="dropDown__header">
        <MdKeyboardArrowRight
          className={`icon ${isOpen ? "icon__rotate" : ""}`}
          size={20}
        />
        <p>{Que}</p>
      </div>

      <div
        className={
          isOpen
            ? "dropDown__body dropDown__show"
            : "dropDown__body dropDown__hide"
        }
      >
        <p>{Ans}</p>
      </div>
    </div>
  );
};

export default DropDown;
