import classes from "./Header2.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header2 = (props) => {
  const state = useSelector((state) => state.mode);

  const classNames = [classes.header, state ? classes.night : null].join(" ");

  return <h2 className={classNames}>{props.children}</h2>;
};

export default Header2;
