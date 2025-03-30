import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector, useDispatch } from "react-redux";



export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleFilterChange = (filter) => {dispatch(changeFilter(filter))}

  return (
    <div className={css.container}>
      <p className={css.p}>Search contacts by name:</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(evt) => handleFilterChange(evt.target.value)}
      />
    </div>
  );
}
