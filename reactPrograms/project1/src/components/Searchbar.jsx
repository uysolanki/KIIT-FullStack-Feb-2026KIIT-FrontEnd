import React from 'react'
import './Searchbar.css'
const Searchbar = ({handleOnChange}) => {
  return (
    <>
    <input type="text" onChange={handleOnChange}/>
    </>
  )
}

export default Searchbar