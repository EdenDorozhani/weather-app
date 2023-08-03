import classes from "./Paragraph.module.css";

const Paragraph = (props) => {
  const classNames = [
    classes.paragraph,
    props.dark ? classes.night : null,
  ].join(" ");

  return <p className={classNames}>{props.children}</p>;
};

export default Paragraph;
