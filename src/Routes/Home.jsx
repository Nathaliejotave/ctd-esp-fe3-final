import React, { useEffect} from 'react'
import { useContextGlobal } from '../utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const{apiState} = useContextGlobal()
const{dentist, theme} = 

useEffect(() => {
  if (dentist.length === 0) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }));
  }
}, [dentists, dispatch]);

return (
    <main className={`home-page ${theme}`} >
      <h1>Home</h1>
      <div className="card-grid">
        {apiState.map((dentist) => ( 
          <Card>
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            </Card>
        ))}
        </div>
      </main>
      )
}

export default Home