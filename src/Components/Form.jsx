import React from "react";
import { useState } from 'react';
import Card from "./Card";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    nombre: '',
    email: '',
});

const [show, setShow] = useState(false)
const [err, setErr] = useState('')


const handleSubmit = (event) => {

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    event.preventDefault();
        if(user.nombre.length <=5 && !regex.test(email)) {
        setErr('Por favor verifique su información nuevamente')
        ;setShow(true);
        return;    
      }
      setErr('');
      setShow(false);
      alert(
        `Gracias ${user.nombre}, te contactaremos cuando antes vía mail`) 
      };     

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Nombre completo :</label>
            <input type="text" value={user.nombre} onChange={(event) => setUser({...user, nombre: event.target.value})}/>
            
            <label>Correo electronico : </label>
            <input type="text" value={user.email} onChange={(event) => setUser({...user, email: event.target.value})}/>
            
            <button type="submit">Enviar</button>
            {show && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {show ? <Card nombre={user.nombre}  email={user.email}/> : null }
    </div>
  );
}
export default Form;
