import classes from "./DropDown.module.css";
import DropDownItem from "./DropDownItem";

const DropDown = ({ dropDownData, dropDownValue, dark }) => {
  const classNames = [classes.dropDown, dark ? classes.night : null].join(" ");

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
              dark={dark}
            />
          );
        })}
    </div>
  );
};

export default DropDown;
