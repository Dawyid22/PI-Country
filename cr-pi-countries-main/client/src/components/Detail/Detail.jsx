import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()

  const detail = useSelector((state) => state.detail)
  
  useEffect(() => {
    dispatch(getDetail(id))
  }, []);
  
  return (
    <div>
      <NavLink to='/home'>Back</NavLink>
      <img src={detail?.flag} alt={detail?.name} />
      <h2>{detail?.id}</h2>
      <h2>{detail?.name + ", " + detail?.capital}</h2>
      <h2>{detail?.continent}</h2>
      <h2>population: {detail?.population}</h2>
      <a target="_blank" href={detail?.maps} rel="noreferrer">Ubication</a>
      <h2>languages: {detail?.lenguajes}</h2>
    </div>
  );
};

export default Detail;
