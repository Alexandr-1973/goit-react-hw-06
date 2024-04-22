import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  return (
    <div className={css["search-div"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        autoComplete="off"
        id={searchId}
        className={css.search}
        type="text"
        value={nameFilter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
