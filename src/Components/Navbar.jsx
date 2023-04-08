import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {useContextGlobal} from "../utils/global.context"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const { theme} =state;
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });
    document.documentElement.className = newTheme;
  };
  return (
    <nav className={`navbar ${theme}`}>
      <div lassName="nav-links">
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        <Link to='/detail'><h3>Detail</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
    </div>
    <button onClick={toggleTheme}>Cambiar tema </button>
    </nav>
  )
}

export default Navbar

//{* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
//* Deberan implementar ademas la logica para cambiar de Theme con el button */