/* eslint-disable no-unused-vars */
import { useState } from "react";
import { postActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Validation from "../Validation/Validation";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  
  const countries = useSelector((state) => state.countries);

  // Mi estado local para gestionar errores en el formulario.
  const [errors, setErrors] = useState({});

  // Mi estado local para almacenar los datos del formulario.
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    season: "",
    idPais: [],
  });

  // Controlador de cambio para los campos del formulario.
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

  // Controlador de selección de país.
  const handleIdPais = (event) => {
    if (activity.idPais.includes(event.target.value)) {
      return alert("Country cannot be repeated");
    }

    setActivity({
      ...activity,
      idPais: [...activity.idPais, event.target.value],
    });
  };

  // Controlador para enviar el formulario.
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivities(activity));
    // Reiniciamos los valores del formulario.
    setActivity({
      name: "",
      difficulty: "",
      season: "",
      idPais: [],
    });
  };

  // Función para verificar si el formulario está completo.
  const isFormComplete = () => {
    return (
      activity.name.length > 0 &&
      activity.difficulty.length > 0 &&
      activity.season.length > 0 &&
      activity.idPais.length > 0
    );
  };

  
  return (
    <form className={style.container}>
      <h2>🛠️Create your activity favorite🛠️</h2>
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
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>

        <div>
          <h2>Select a difficulty: </h2>
          <select onChange={handleChange} name="difficulty">
            <option value="" disabled hidden>Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && <p className={style.error}>{errors.difficulty}</p>}
        </div>

        <div>
          <h2>Select a season: </h2>
          <select onChange={handleChange} name="season">
            <option value="" disabled hidden>Select...</option>
            <option value="Verano">Summer</option>
            <option value="Otoño">Autumn</option>
            <option value="Invierno">Winter</option>
            <option value="Primavera">Spring</option>
          </select>
          {errors.season && <p className={style.error}>{errors.season}</p>}
        </div>

        <div>
          <h2>Select a country: </h2>
          <select onChange={handleIdPais} name="idPais">
            <option value="" disabled hidden>Select...</option>
            {countries.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Botón para enviar el formulario */}
        <button
          className={style.buttonCreate}
          onClick={handleSubmit}
          disabled={!isFormComplete()}
          type="submit"
        >
          Create Activity 🛠️
        </button>

        {/* Lista de países seleccionados */}
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
