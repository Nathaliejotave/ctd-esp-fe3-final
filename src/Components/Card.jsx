import React from "react";
import { useNavigate } from 'react-router-dom';
import { useContextGlobal } from '../utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = ({ name, username, id }) => {
const navigate= useNavigate();
const { state,dispatch } = useContextGlobal();
const {favs} = state;

const isFav = favs.some((fav) => fav.id ===id)
const newFav = {name,username,id}

const addFav = () =>{
  if(!isFav){
  favDispatch({type: 'ADD_FAV', payload: newFav})
}}

const handleCardClick = () =>{
  navigate(`/dentist/${id}`)
}

  return (
    <div className="card" onClick={handleCardClick}>
<img src={process.env.PUBLIC_URL + '/images/doctor.jpg'} alt="dentist-detail" />
      <h3>{name}</h3>
      <p>{username}</p>
      <p>Id : {id}</p>
      {!isFav &&(
      <button className="favButton" onClick={addFav}>
        <FontAwesomeIcon icon={faStar} className="star-icon" />
      </button>
        )}
      </div>
  );
};

export default Card;
