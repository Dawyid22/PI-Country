import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>🌎Bienvenidos al mundo🌍</h1>
      <button>
        <NavLink to='/home'>Ingresa</NavLink>
      </button>
    </div>

  )
}

export default Landing