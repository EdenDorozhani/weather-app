import Paragraph from "../paragraph/Paragraph";
import classes from "./DropDownItem.module.css";

const DropDownItem = ({ data, index, dropDownValue, dark }) => {
  const onClickHandler = (data) => {
    dropDownValue(data.name);
  };

  const classNames = [classes.content, dark ? classes.night : null].join(" ");

  return (
    <div onClick={() => onClickHandler(data, index)} className={classNames}>
      <Paragraph dark={dark}>{data.name}</Paragraph>
    </div>
  );
};

export default DropDownItem;
