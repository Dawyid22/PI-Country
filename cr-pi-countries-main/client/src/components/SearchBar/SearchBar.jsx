import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (newName !== "") {
      onSearch(newName); 
    } else {
      setCountries([]); 
      setSearched(false);
    }
  };

  const onSearch = async (searchName) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/name?name=${searchName}`
      );
      console.log("Data from server:", data);
      setCountries(data);
      setSearched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Enter country..."
        type="search"
        onChange={handleChange}
        value={name}
      ></input>

      {searched && countries.length > 0 && (
        <div>
          <ul>
            {countries.map(country => (
              <li key={country.id}><Link to={`/detail/${country.id}`}>{country.name}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
