import Card from "../Card/Card";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from "../../redux/actions/actions";
import style from './Cards.module.css'

function Cards() {
  
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)
  
  useEffect(() => {
    dispatch(getCountries())
  }, [])
 
  
  return (
    <div>
      <div className={style.container}>
        {countries.map((country) => (
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
    </div>
  );
}

export default Cards;

