/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {filterActivitiesByName} from "../../redux/actions/actions";
import { NavLink } from 'react-router-dom'
import style from './Activities.module.css'

const Activities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const activities = useSelector((state) => state.allActivities);
  const copyActivities = useSelector((state) => state.copyAllActivities);

  const createActivities = () => {
    return activities?.map((activity) => {
      return (
        <div className={style.cardContainer} key={activity.id}>
          <div className={style.cardContainer}>
          <h2>{activity.name}</h2>
          <h2>{activity.difficulty}</h2>
          <h2>{activity.season}</h2>
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
      <h1>🏃🏻Here you can see all the activities🏃🏻</h1>
      <div className={style.cardContainer}>
      <NavLink to={'/home'}><button className={style.buttonBack}>⬅️</button></NavLink>
      <select onClick={handleClick}>
        <option value="Default">Default</option>
        {copyActivities?.map((elem) => {
          return <option key={elem.id}>{elem.name}</option>;
        })}
      </select>
      </div>

      {createActivities()}
    </div>
  );
};

export default Activities;
