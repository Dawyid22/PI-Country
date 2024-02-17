/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import style from './Card.module.css'

// eslint-disable-next-line react/prop-types
const Card = ({id, flag, name, continent}) => {
  
    return (
    <div className={style.border}>
      <div>
        <NavLink to={`/detail/${id}`}>
      <img className={style.imagen} src={flag} alt={name}/>
        </NavLink>
      </div>
      <div className={style.textH2}>
        <h2>{name.length > 10 ? name.slice(0, 10) + "..." : name}</h2>
        <h2>{continent}</h2>
      </div>
    </div>
  );
};

export default Card;
