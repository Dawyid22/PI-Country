import { useEffect } from "react";
import { getActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  filterActivitiesByName,
  deleteActivity,
} from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";
import style from "./Activities.module.css";

const Activities = () => {
  const dispatch = useDispatch();

  //Uso el useEffect para obtener las actividades al montar el componente.
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  // Uso el useSelector para obtener las actividades del estado global.
  const activities = useSelector((state) => state.allActivities);
  console.log("activities", activities);

  // Uso el useSelector para obtener una copia de las actividades para filtrar.
  const copyActivities = useSelector((state) => state.copyAllActivities);
  console.log("copyActivities", copyActivities);

  // Hago un controlador para el botón "Delete" para eliminar una actividad.
  const handleDelete = (event) => {
    // Despacho la acción
    dispatch(deleteActivity(event.target.value));
    // Renderizo las actividades sin la actividad eliminada .
    setTimeout(() => {
      dispatch(getActivities());
    }, 1000);
  };

  // Hago un controlador para el selector de filtrado por nombre.
  const handleClick = (event) => {
    // Despacho la acción para filtrar actividades por nombre.
    dispatch(filterActivitiesByName(event.target.value));
  };

  return (
    <div className={style.div_main}>
      <div className={style.title}>
        <h1>🏃🏻Here you can see all the activities🏃🏻</h1>
        <NavLink to={"/home"}>
          <button>⬅️</button>
        </NavLink>
      </div>

      <div className={style.filter}>
        {/* Selector para filtrar actividades por nombre */}
        <select onClick={handleClick}>
          <option value="Default">Select...</option>
          {copyActivities?.map((elem) => {
            return <option key={elem.id}>{elem.name}</option>;
          })}
        </select>
      </div>

      {/* Contenedor para las tarjetas de actividades */}
      <div className={style.cardContainer}>
        {activities?.map((activity) => {
          return (
            <div key={activity.id} className={style.card}>
              <button
                className={style.buttonClosed}
                onClick={handleDelete}
                value={activity.id}
              >
                ❌
              </button>
              <h2>Name: {activity.name}</h2>
              <h2>Difficulty: {activity.difficulty}</h2>
              <h2>Season: {activity.season}</h2>
              <div className={style.list}>
                <ul>
                  <h3>Countries List</h3>
                  {activity.Countries?.map((countries) => {
                    return <li key={countries.id}>{countries.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
