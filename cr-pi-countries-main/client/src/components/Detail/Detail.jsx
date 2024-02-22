/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions/actions";
import style from "./Detail.module.css";

const Detail = () => {
  // Obtengo el id que recibo en el parametro 
  const { id } = useParams();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        <div className={style.buttonX}>
        <NavLink to="/home" >
          <button >⬅️</button>
        </NavLink>
        </div>
        <img className={style.flag} src={detail?.flag} alt={detail?.name} />
        <div className={style.details}>
          <h1>{detail?.name}</h1>
          <h2>Capital: {detail?.capital}</h2>
          <h2>Continent: {detail?.continent}</h2>
          <h2>Population: {detail?.population}</h2>
          <h2>Languages: {detail?.lenguajes}</h2>
          <div>
          <button>
            <a target="_blank" href={detail?.maps} rel="noreferrer">
              Location
            </a>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
