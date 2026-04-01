import React from 'react'
import { useState } from 'react';
import Button from './Button';
import Button1 from './Button1';

const Counter1 = () => {
    // let count=0;
    let [count, setCount] = useState(0)
    function modify(value) {
        setCount(count+=value)
    }
    return (
        <>
            <Button1 text="Increment By 1" handleclick={modify} num="1"/>
            <Button text="Increment By 2" handleclick={modify} num="2"/>
            <Button text="Decrement By 1" handleclick={modify} num="-1"/>

            <span>{count}</span>
        </>
    )
}

export default Counter1