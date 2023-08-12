/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { postActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.allActivities);
  console.log(activities);

  const countries = useSelector((state) => state.countries);
  console.log(countries);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    season: "",
    idPais: [],
  });

  const handleChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  };

  const handleIdPais = (event) => {
    setActivity({
      ...activity,
      idPais: [...activity.idPais, event.target.value]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivities(activity));
  };

  console.log(activity);
  return (
    <form>
      <label>Name your activity</label>
      <input
        name="name"
        type="text"
        placeholder="Name your activity"
        value={activity.name}
        onChange={handleChange}
      />

      <select onChange={handleChange} name="difficulty">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <select onChange={handleChange} name="season">
        <option value="Default">Select...</option>
        <option value="Verano">Summer</option>
        <option value="Otoño">Autumn</option>
        <option value="Invierno">Winter</option>
        <option value="Primavera">Spring</option>
      </select>

      <select onChange={handleIdPais} name="idPais">
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
//! FALTA LA VALIDACION DEL INPUT 
      <button onClick={handleSubmit} type="submit">Create Activity</button>
      <ul>
        {activity.idPais?.map(elem =>{
          return (
            <li key={elem}>{elem}</li>
          )
        })}
      </ul>
    </form>
  );
};

export default Form;
