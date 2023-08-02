import classes from "./Header2.module.css";

const Header2 = (props) => {
  const classNames = [classes.header, props.dark ? classes.night : null].join(
    " "
  );

  return <h2 className={classNames}>{props.children}</h2>;
};

export default Header2;
