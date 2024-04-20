import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);


  const handleSearchChange = (event) => {
    const action = {
      type: "searchText/changeSearchText",
      payload: event.target.value,
    };

    dispatch(action);
  };


  return (
    <div className={css["search-div"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        className={css.search}
        type="text"
        value={searchText}
        onChange={(event) => handleSearchChange(event)}
      />
    </div>
  );
};

export default SearchBox;
