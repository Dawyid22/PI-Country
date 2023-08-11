import { NavLink } from 'react-router-dom'
import SearcBar from '../SearchBar/SearchBar'

const NavBar = () => {
  
  return (
    <div>
      <SearcBar/>
      <NavLink to={'/'}><img src='https://www.gifcen.com/wp-content/uploads/2021/04/earth-day-gif-11.gif' alt='Landing'/></NavLink>
    </div>
  )
}

export default NavBar