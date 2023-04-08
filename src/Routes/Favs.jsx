import React, { useContext } from "react";
import Card from "../Components/Card";
import {useContextGlobal} from '../utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const {state} = useContextGlobal()
    const {theme} =state;
    const favs = localStorage.getItem()
      let parsedFav = JSON.parse(favs) || []

      return (
      <div className={`"card-grid" ${theme}`}>
      {parsedFav.map(Dentists)}
      <h1>Dentists Favs</h1>
      <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
      </div> 
  );
};

export default Favs;
