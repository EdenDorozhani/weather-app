import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.css";
import { useState } from "react";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";

const SearchBar = ({
  getOnSubmitValue,
  getOnChangeValue,
  dropDownData,
  setDropDownData,
}) => {
  const [value, setValue] = useState("");

  const state = useSelector((state) => state.mode);

  const classNames = [classes.icon, state ? classes.night : null].join(" ");
  const classNamess = [classes.searchBar, state ? classes.night : null].join(
    " "
  );

  const valueController = (value) => {
    getOnSubmitValue(value);
    setValue("");
    setDropDownData([]);
  };

  const onChangeHanlder = (e) => {
    setValue(e.target.value);
    getOnChangeValue(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    valueController(value);
  };

  const dropDownValue = (data) => {
    valueController(data);
  };

  return (
    <div className={classes.searchBarContainer}>
      <form onSubmit={submitHandler}>
        <div className={classes.searchContainer}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classNames} />
          <input
            value={value}
            onChange={onChangeHanlder}
            className={classNamess}
          />
        </div>
        {dropDownData.length > 0 && value.length > 3 && (
          <DropDown dropDownData={dropDownData} dropDownValue={dropDownValue} />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
