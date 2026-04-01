import React from 'react'
import './Navbar.css'
import menus from '../data/mydata.js'
const Navbar3 = () => {

  function display(value)
  {
    alert(value)
  }
   
    return (
        <>
        <ol id="menubar">
          {menus.map(
            (menu,index)=><li key={index} onClick={()=>display(menu)}>{menu}</li>
          )} 
        </ol> 
        </>
    )
}

export default Navbar3