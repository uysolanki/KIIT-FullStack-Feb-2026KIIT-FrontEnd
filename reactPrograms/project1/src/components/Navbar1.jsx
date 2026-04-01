import React from 'react'
import './Navbar.css'
const Navbar1 = () => {

   let menus=["Go","Run","Terminal","Help"]

    return (
        <>
        <ol id="menubar">
          {menus.map(
            (menu)=><li>{menu}</li>
          )} 
        </ol> 
        </>
    )
}

export default Navbar1