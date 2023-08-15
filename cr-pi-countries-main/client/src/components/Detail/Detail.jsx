import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        <NavLink to="/home" >
          <button className={style.buttonX}>X</button>
        </NavLink>
        <img className={style.flag} src={detail?.flag} alt={detail?.name} />
        <div className={style.details}>
          <h2>{detail?.name}</h2>
          <p>
            Capital: {detail?.capital} | Continent: {detail?.continent} |
            Population: {detail?.population} | Languages: {detail?.lenguajes}
          </p>
          <button className={style.buttonLocation}>
            <a target="_blank" href={detail?.maps} rel="noreferrer">
              Location
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
