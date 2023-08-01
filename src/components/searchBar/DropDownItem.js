import Paragraph from "../Wrapers/Paragraph";
import classes from "./DropDownItem.module.css";
import { useSelector } from "react-redux";
const DropDownItem = ({ data, index, dropDownValue }) => {
  const state = useSelector((state) => state.mode);

  const onClickHandler = (data) => {
    dropDownValue(data.name);
  };

  const classNames = [classes.content, state ? classes.night : null].join(" ");

  return (
    <div onClick={() => onClickHandler(data, index)} className={classNames}>
      <Paragraph>{data.name}</Paragraph>
    </div>
  );
};

export default DropDownItem;
