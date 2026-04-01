import React from 'react'
import './FilterBar.css'
const FilterBar = ({handleClick,list}) => {
  return (
    <>
    <ul className='filterbar'>
        {list.map(
            (item,index)=><li key={index} onClick={()=>handleClick(item)}>{item}</li>
        )}
    </ul>
    </>
  )
}

export default FilterBar