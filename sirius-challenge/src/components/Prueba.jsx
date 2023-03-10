import React, {useState, useEffect} from 'react';
import axios from 'axios';
import OnePoke from './home/OnePoke';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const Prueba = () => {
  
  const[poke, setPoke] = useState(null);

  useEffect(()=>{
    axios.get(baseURL).then((res)=>{
      setPoke(res.data);
      console.log(res.data)
    });
  }, []);


  if(!poke) return <h1>Nada para ver</h1>;
  return (
    
    <div>{poke.results.map((pers)=>(
      <div key={pers.url}>
        <OnePoke name = {pers.name}
        />
      </div>
    ))}</div>
  )
}

export default Prueba;