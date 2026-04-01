import React from 'react'

const Button1 = ({handleclick,num,text}) => {
   // console.log(typeof(props.num))
  return (
    <>
    <button onClick={()=>handleclick(parseInt(num))}>{text}</button>
    </>
  )
}

export default Button1