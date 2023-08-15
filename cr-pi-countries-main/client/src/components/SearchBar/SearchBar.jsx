import { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredCountriesByName } from "../../redux/actions/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    dispatch(filteredCountriesByName(event.target.value));
  };

  return (
    <div className={style.container}>
      <input
        placeholder="Enter country..."
        type="search"
        onChange={handleChange}
        value={name}
      ></input>

    </div>
  );
};

export default SearchBar;
