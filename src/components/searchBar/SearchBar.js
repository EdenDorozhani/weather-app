import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.css";
import { useState } from "react";
import DropDown from "./DropDown";

const SearchBar = ({
  getOnSubmitValue,
  getOnChangeValue,
  dropDownData,
  setDropDownData,
  dark,
}) => {
  const [value, setValue] = useState("");

  const classNames = [classes.icon, dark ? classes.night : null].join(" ");
  const classNamess = [classes.searchBar, dark ? classes.night : null].join(
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
        {dropDownData.length > 0 && value.length > 2 && (
          <DropDown
            dark={dark}
            dropDownData={dropDownData}
            dropDownValue={dropDownValue}
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
