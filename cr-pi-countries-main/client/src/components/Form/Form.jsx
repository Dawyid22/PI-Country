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
      idPais: [...activity.idPais, event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivities(activity));
  };

  //! FALTA LA VALIDACION DEL INPUT
  return (
    <form>
      <div>
        <label>Name your activity: </label>
        <input
          name="name"
          type="text"
          placeholder="Name your activity"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Select a difficulty: </label>
        <select onChange={handleChange} name="difficulty">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div>
        <label>select a season: </label>
        <select onChange={handleChange} name="season">
          <option value="Default">Select...</option>
          <option value="Verano">Summer</option>
          <option value="Otoño">Autumn</option>
          <option value="Invierno">Winter</option>
          <option value="Primavera">Spring</option>
        </select>
      </div>
      
      <div>
      <select onChange={handleIdPais} name="idPais">
        <option value="Default">Default</option>
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
      </div>
      
      <button onClick={handleSubmit} type="submit">
        Create Activity
      </button>
      <ul>
        {activity.idPais?.map((elem) => {
          return <li key={elem}>{elem}</li>;
        })}
      </ul>
    </form>
  );
};

export default Form;
