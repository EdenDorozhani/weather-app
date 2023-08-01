import { useSelector } from "react-redux";
import classes from "./Paragraph.module.css";

const Paragraph = (props) => {
  const state = useSelector((state) => state.mode);

  const classNames = [classes.paragraph, state ? classes.night : null].join(
    " "
  );

  return <p className={classNames}>{props.children}</p>;
};

export default Paragraph;
