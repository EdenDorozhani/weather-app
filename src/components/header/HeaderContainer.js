import Container from "../Wrapers/Container";
import classes from "./HeaderContainer.module.css";
import Header2 from "../Wrapers/Header2";
import { useDispatch, useSelector } from "react-redux";
import { modeAction } from "../../store";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mode);

  const changeThemeHandler = () => {
    dispatch(modeAction.changeTheme());
  };

  const classNames = [classes.changeTheme, state ? classes.night : null].join(
    " "
  );

  return (
    <Container>
      <div className={classes.header}>
        <Header2>React Weather</Header2>
        <button className={classNames}>
          <div
            onClick={changeThemeHandler}
            className={state ? classes.move : ""}
          ></div>
        </button>
      </div>
    </Container>
  );
};

export default HeaderContainer;
