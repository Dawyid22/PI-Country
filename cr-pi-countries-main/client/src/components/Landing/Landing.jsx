import { NavLink } from "react-router-dom";
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <h1 className={style.customHeading}>🌎Welcome to all countries in the world🌍</h1>
      <div className={style.buttonContainer}>
      <button>
        <NavLink to='/home'>Enter</NavLink>
      </button>
      </div>
        </div>
  )
}

export default Landing