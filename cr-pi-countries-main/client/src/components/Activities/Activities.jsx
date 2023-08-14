/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getActivities } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {filterActivitiesByName} from "../../redux/actions/actions";

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
        <div key={activity.id}>
          <h2>{activity.name}</h2>
          <h2>{activity.difficulty}</h2>
          <h2>{activity.season}</h2>
          <ul>
            {activity.Countries?.map((countries) => {
              return <li key={countries.id}>{countries.name}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  const handleClick = (event) => {
    dispatch(filterActivitiesByName(event.target.value));
  };

  return (
    <div>
      <select onClick={handleClick}>
        <option value="Default">Default</option>
        {copyActivities?.map((elem) => {
          return <option key={elem.id}>{elem.name}</option>;
        })}
      </select>

      {createActivities()}
    </div>
  );
};

export default Activities;
