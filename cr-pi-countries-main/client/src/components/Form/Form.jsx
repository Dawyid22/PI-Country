import { useState } from "react";
import { postActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Validation from "../Validation/Validation";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.allActivities);
  console.log(activities);

  const countries = useSelector((state) => state.countries);
  console.log(countries);

  const [errors, setErrors] = useState({});

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

    setErrors(
      Validation({
        ...activity,
        [event.target.name]: event.target.value,
      })
    );
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

  return (
    <form className={style.container}>
      <h1>🛠️Create your activity favorite🛠️</h1>
      <div className={style.formContainer}>
        <NavLink to={"/home"}>
          <button className={style.buttonBack}>⬅️</button>
        </NavLink>
        <div>
          <h2>Name your activity: </h2>
          <input
            name="name"
            type="text"
            placeholder="Name your activity"
            value={activity.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <h2>Select a difficulty: </h2>
          <select onChange={handleChange} name="difficulty">
            <option value="Default">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>

        <div>
          <h2>select a season: </h2>
          <select onChange={handleChange} name="season">
            <option value="Default">Select...</option>
            <option value="Verano">Summer</option>
            <option value="Otoño">Autumn</option>
            <option value="Invierno">Winter</option>
            <option value="Primavera">Spring</option>
          </select>
          {errors.season && <p>{errors.season}</p>}
        </div>

        <div>
          <h2>Select a countries: </h2>
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

        <button className={style.buttonCreate} onClick={handleSubmit} type="submit">
          Create Activity 🛠️
        </button>
        <ul>
          {activity.idPais?.map((elem) => {
            return <li key={elem}>{elem}</li>;
          })}
        </ul>
      </div>
    </form>
  );
};

export default Form;
