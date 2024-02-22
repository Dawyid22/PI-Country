import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from './NavBar.module.css'

const NavBar = () => {
  
  return (
    <div className={style.containerNavBar}>
      <div className={style.containerLanding}>
      <NavLink to={'/'} className={style.buttonLanding}><img src='https://www.gifcen.com/wp-content/uploads/2021/04/earth-day-gif-11.gif' alt='Landing'
      className={style.landingGif}
      /></NavLink>
        </div>
        <div className={style.inputsContainer}>
      <SearchBar/>
        </div>
    </div>
  )
}

export default NavBar