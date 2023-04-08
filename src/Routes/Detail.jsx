import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [Dentist, setDentist] = useState(null)
  const{id} = useParams()
  const {theme} = state;
  const {state} = useContextGlobal()
  
  const url= 'https://jsonplaceholder.typicode.com/users/:id'
  const fav = localStorage.getItem('favs') ||[]
  
useEffect(() => {
  fetch(url)
  .then((response) => response.json())
  .then(data => setDentist(data))
  },[id])

  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={`detail-page ${theme}`}>
      <h1>Detail Dentist id {id}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) }
///* aqui deberan renderizar la informacion en detalle de un user en especifico */
///* Deberan mostrar el name - email - phone - website por cada user en especifico */
export default Detail;