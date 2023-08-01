import { useSelector } from "react-redux";
import classes from "./DropDown.module.css";
import DropDownItem from "./DropDownItem";

const DropDown = ({ dropDownData, dropDownValue }) => {
  const state = useSelector((state) => state.mode);
  const classNames = [classes.dropDown, state ? classes.night : null].join(" ");

  return (
    <div className={classNames}>
      {dropDownData &&
        dropDownData.map((data, index) => {
          return (
            <DropDownItem
              dropDownValue={dropDownValue}
              key={index}
              data={data}
              index={index}
            />
          );
        })}
    </div>
  );
};

export default DropDown;
