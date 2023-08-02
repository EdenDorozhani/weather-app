import Container from "../Wrapers/Container";
import classes from "./HeaderContainer.module.css";
import Header2 from "../Wrapers/Header2";
const HeaderContainer = ({ passChangeTheme, dark }) => {
  const changeThemeHandler = () => {
    passChangeTheme();
  };

  const classNames = [classes.changeTheme, dark ? classes.night : null].join(
    " "
  );

  return (
    <Container>
      <div className={classes.header}>
        <Header2 dark={dark}>React Weather</Header2>
        <button className={classNames}>
          <div
            onClick={changeThemeHandler}
            className={dark ? classes.move : ""}
          ></div>
        </button>
      </div>
    </Container>
  );
};

export default HeaderContainer;
