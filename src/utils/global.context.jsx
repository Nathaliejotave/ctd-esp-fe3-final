import { response } from "msw";
import { createContext, useContext, useState,useEffect, useReducer } from "react";

  export const initialState = {
    themeState: "light", 
    favState: JSON.parse(localStorage.getItem('favs')) || [],
    data:[]
  }

const ContextGlobal = createContext()

const themes = {
  dark:{
    bgColor: '#000000',
    textColor: '#ffffff',
    buttonColor: '#00c2ff',

},
light: {
    bgColor: '#ffffff',
    textColor: '#000000',
    buttonColor: '#0084ff',
  }}


  //const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const initialThemeState = themes.light
  const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

//const DentistState = createContext()//

const initialApiState = []

const apiReducer = (state, action) => {
  switch(action.type){
    case'GET_DENTIST' :
      return[action.payload]
      default:
        throw new Error
  }
}

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error
  }
}

const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
      default:
          throw new Error
  }
}
function initFav(initialFavState) {
      return localStorage.getItem('favs') ? 
          JSON.parse(localStorage.getItem('favs')) : 
          initialFavState
  }

const ContextProvider = ({ children }) => {
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  
  //Aqui deberan' implementar la logica propia del Context, utilizando el hook useMemo

  const[dentistList, setDentistList] = useState([])

  
  const url = ' https://jsonplaceholder.typicode.com/users'
  
  
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => apiDispatch({type: 'GET_DENTIST', payload: data.results}))
  }, [])
  
  return (
    <ContextGlobal.Provider value={{apiState,theme, themeState, toggleTheme, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
}
}; 

export default ContextGlobal

export const useContextGlobal = () => useContext(ContextGlobal)


