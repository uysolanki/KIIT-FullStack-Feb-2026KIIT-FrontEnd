import React from 'react'
import './Navbar.css'
const Navbar = () => {

    let a = 10
    let b = 20
    let c = a + b

    return (
        <>
           <ul id='menubar'>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            </ul>  
        </>
    )
}

export default Navbar