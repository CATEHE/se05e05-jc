import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { tipos } from '../utils/helpers.js'
import '../styles/details.css'

function Details() {
  const params = useParams()
  const [pokemon, setPokemon] = useFetch()

  useEffect(() => {
    if (params.name) getPokemon()
  }, [params.name])

  const getPokemon = () => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  }

  const types = pokemon?.types.map(type => type.type.name)

  return (
   <>
    <br></br>
    <Link to="/pokedex">{'⬅️'} Volver</Link>
    <div className='container_pincipal'>
      

      <div className='container'>
        <div>
          <img className='img_pokemon' src={pokemon?.sprites?.other?.showdown?.front_default} alt="" />
        </div>
        <div>
          <span className='container__number'>#{pokemon?.id?.toString().padStart(3, '0')}</span>
          <h2>{pokemon?.name}</h2>

          <div className='container_peso_altura'>
            <span>
              <span>Peso </span>
              <span className='habilidades--item'>
                {pokemon?.weight}
              </span>
            </span>

            <span>
              <span className='point'> . </span>
              <span> Altura </span >
                <span className='habilidades--item'>
                {pokemon?.height}
                </span>  
            </span>
          </div>

          <div>
            <div>
              <h3>Tipo</h3>
              <div>
                {types?.map(type => (
                  <span key={type}>{tipos[type]}</span>
                ))}
              </div>

            </div>
            <div>
            <h3>Habilidades</h3>
              <div>
                {pokemon?.abilities?.map(data => (
                  <span className='habilidades--item' key={data.ability.name}>{data.ability.name}</span>
                ))}
              </div>
   
            </div>
            <h3>Estadisticas</h3>
            <div>
              <span>HP: </span>
              <span className='habilidades--item' >{pokemon?.stats[0]?.base_stat}</span>
            </div>

            <div>
              <span>Ataque: </span>
              <span className='habilidades--item' >{pokemon?.stats[1]?.base_stat}</span>
            </div>

            <div>
              <span>Defensa: </span>
              <span className='habilidades--item' >{pokemon?.stats[2]?.base_stat}</span>
            </div>

            <div>
              <span>Velocidad: </span>
              <span className='habilidades--item' >{pokemon?.stats[5]?.base_stat}</span>
            </div>
                <br></br>
          </div>
        </div>
      </div>
    </div>
    </> 
  )
}

export { Details } 