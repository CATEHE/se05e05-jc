import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useNameContext } from '../contexts/nameContext'
import Search from '../components/pokedex/Search'
import Filters from '../components/pokedex/Filters'
import PokemonList from '../components/pokedex/PokemonList'
import PokemonCard from '../components/pokedex/PokemonCard'
import '../styles/pokedex.css'


function Pokedex() {
  const [name] = useNameContext()
  const [pokemons, setPokemons] = useFetch()
  const [pokemonUrl, setPokemonUrl] = useState(null)
  const [isFiltering,setisFiltering] = useState(false)

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    setPokemons('https://pokeapi.co/api/v2/pokemon')
  }

  const handleSearch = (value) => {
    if (!value) {
      setisFiltering(false)
      setPokemonUrl(null)
      setPokemons('https://pokeapi.co/api/v2/pokemon')
    } else {
      setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}/`)
    }
  }

  const handleTypeFilter = (type) => {
    if (!type) {
      setisFiltering(false)
      setPokemons('https://pokeapi.co/api/v2/pokemon')
    } else{
      setisFiltering(true)
      setPokemons(`https://pokeapi.co/api/v2/type/${type}`)
    }
  }

  const onNext = () => {
    setPokemons(pokemons?.next)
  }

  const onPrev = () => {
    setPokemons(pokemons?.previous)
  }

const pokemonsArray = isFiltering ? pokemons?.pokemon : pokemons?.results

  return (
    <div className='pokedex'>
      <Link to="/">{'⬅️'} Volver</Link>

      <div className='pokedex__container'>
        <div className='pokedex__header'>
          <span>Bienvenido Entrenador </span>
          <span className='training_name'>{name}</span> 
          <span>. Aquí podrás encontrar tu pokemón favorito</span>
        </div>
        <div className='pokedex__form'>
          <Search handleSearch={handleSearch}/>
          <Filters handleTypeFilter={handleTypeFilter} />
          <span>👈</span>
        </div>
      </div>
      
      

    <div>
      <button onClick={onPrev} disabled={!pokemons?.previous}>Anterior</button>
      <button onClick={onNext} disabled={!pokemons?.next}>Siguiente</button>
      <br />
      <br />
    </div>


      <div className='pokedex__cards'>
        {pokemonUrl ? (
          <PokemonCard url={pokemonUrl} />
        ) : (
          <PokemonList pokemons={pokemonsArray} isFiltering={isFiltering}/>
        )}

          
      </div>


    </div>

  )
}

export { Pokedex } 