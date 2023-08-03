import classes from "./Title.module.css";

const Title = (props) => {
  const classNames = [classes.title, props.dark ? classes.night : null].join(
    " "
  );
  return <h4 className={classNames}>{props.children}</h4>;
};

export default Title;
