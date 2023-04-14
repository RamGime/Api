import React, { useState } from 'react'
import './css/Listado.css'
import './css/Botton.css'

function Listado() {


                  const [pokemones, setPokemones] = useState();

                  const handleClick = async () => {
                    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
                    const data = await response.json();
                    setPokemones(data);
                  };

                  const handleEliminar = (nombre) => {
                      const nuevosPokemones = pokemones.results.filter(person => person.name !== nombre);
                      setPokemones({
                          ...pokemones,
                          results: nuevosPokemones
                      });
                  }

                return (
                  <div>
                      <div>
                          <h1 className='container'>POKEMONES</h1>
                      </div>
                    <button onClick={handleClick} className='boton'>Liberar Pokedex</button>
                    {pokemones && (
                      <div>
                        <ul className='centro'>
                          {pokemones.results.map((person) => (
                            <li key={person.name}>
                              {person.name}
                              <button className='eliminar' onClick={() => handleEliminar(person.name)}>Eliminar</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
}

export default Listado;