import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({id, flag, name, continent}) => {
  
    return (
    <div>
        <NavLink to={`/detail/${id}`}>
      <img src={flag} alt={name}/>
        </NavLink>
        <h2>{name}</h2>
        <h2>{continent}</h2>
    </div>
  );
};

export default Card;
