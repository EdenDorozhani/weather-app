import { useSelector } from "react-redux";
import classes from "./Title.module.css";

const Title = (props) => {
  const state = useSelector((state) => state.mode);

  const classNames = [classes.title, state ? classes.night : null].join(" ");
  return <h4 className={classNames}>{props.children}</h4>;
};

export default Title;
