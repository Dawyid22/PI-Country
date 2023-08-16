/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterByContinents,
  filterByPopulation,
  filteredByName,
} from "../../redux/actions/actions";
import style from "./Cards.module.css";

function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.copyCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const numberOfCountries = 10;

  const totalPages = Math.ceil(countries.length / numberOfCountries);
  const start = (currentPage - 1) * numberOfCountries;
  const end = start + numberOfCountries;
  const numberOfPage = countries.slice(start, end);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilterCountries = (event) => {
    dispatch(filterByContinents(event.target.value));
  };

  const handleFilterPopulation = (event) => {
    dispatch(filterByPopulation(event.target.value));
  };

  const handleFilterName = (event) => {
    dispatch(filteredByName(event.target.value));
  };

  return (
    <div className={style.container}>
      <div>
      <select onChange={handleFilterCountries}>
        <option value="Default">Default</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select onChange={handleFilterPopulation}>
        <option value="Default">Default</option>
        <option value="Mayor">Mayor</option>
        <option value="Menor">Minor</option>
      </select>

      <select onChange={handleFilterName}>
        <option value="Default">Default</option>
        <option value="A">A - Z</option>
        <option value="Z">Z - A</option>
      </select>
    </div>

      <div className={style.cards}>
        {numberOfPage.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
            capital={country.capital}
            population={country.population}
            maps={country.maps}
            lenguajes={country.lenguajes}
          />
        ))}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.border} onClick={handlePreviousPage}>⬅️</button>
        <h2 className={style.colorH2}>{currentPage}</h2>
        <button className={style.border} onClick={handleNextPage}>➡️</button>
      </div>
    </div>
  );
}

export default Cards;




