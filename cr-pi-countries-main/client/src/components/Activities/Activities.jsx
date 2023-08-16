/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {filterActivitiesByName, deleteActivity } from "../../redux/actions/actions";
import { NavLink } from 'react-router-dom'
import style from './Activities.module.css'

const Activities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const activities = useSelector((state) => state.allActivities);

  const copyActivities = useSelector((state) => state.copyAllActivities);

  const handleDelete = (event) => {
    dispatch(deleteActivity(event.target.value))
  }

  const createActivities = () => {
    return activities?.map((activity) => {
      return (
        <div key={activity.id}>
          <div>
          <h2>Name: {activity.name}</h2>
          <h2>Difficulty: {activity.difficulty}</h2>
          <h2>Season: {activity.season}</h2>
            <button onClick={handleDelete} value={activity.id}>Delete</button>
          <ul>
            {activity.Countries?.map((countries) => {
              return <li key={countries.id}>{countries.name}</li>;
            })}
          </ul>
          </div>
        </div>
      );
    });
  };

  const handleClick = (event) => {
    dispatch(filterActivitiesByName(event.target.value));
  };

  return (
    <div className={style.container}>
  <div>
    <h1 className={style.h1}>🏃🏻Here you can see all the activities🏃🏻</h1>
    <NavLink to={'/home'}><button className={style.buttonBack}>⬅️</button></NavLink>
    <select className={style.inputSelect} onClick={handleClick}>
      <option value="" disabled hidden>Select...</option>
      {copyActivities?.map((elem) => {
        return <option key={elem.id}>{elem.name}</option>;
      })}
    </select>
  </div>
  <div className={style.cardGrid}>{createActivities()}</div>
</div>
  );
};

export default Activities;


