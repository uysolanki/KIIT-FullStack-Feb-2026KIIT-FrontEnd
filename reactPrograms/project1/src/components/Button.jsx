import React from 'react'

const Button = (props) => {
   // console.log(typeof(props.num))
  return (
    <>
    <button onClick={()=>props.handleclick(parseInt(props.num))}>{props.text}</button>
    </>
  )
}

export default Button