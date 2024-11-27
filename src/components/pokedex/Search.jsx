import React from 'react'
import { useRef } from 'react'
import { FaSearchPlus } from "react-icons/fa";
import '../../styles/search.css'


function Search({handleSearch}) {
  const inputRef = useRef()

  const onSearch = () => {
    handleSearch(inputRef.current.value.toLowerCase().trim())
    inputRef.current.value = ''
  }

  return (
    <div className='search'>
      <div className='search__input'>
        <FaSearchPlus />
        <input type='text' placeholder='Buscar un pokemón' ref={inputRef}></input>
      </div>
      <button 
        onClick={onSearch}
        className='search__btn'
      >Buscar
      </button>

    </div>
  )
}

export default Search