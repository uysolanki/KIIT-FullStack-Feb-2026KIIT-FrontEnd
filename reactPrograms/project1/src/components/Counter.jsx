import React from 'react'
import { useState } from 'react';

const Counter = () => {
    // let count=0;
    let [count, setCount] = useState(0)
    function modify(value) {
        setCount(count+=value)
    }
    return (
        <>
            <button onClick={()=>modify(1)}>Increment</button>
            <button onClick={()=>modify(2)}>Increment By 2</button>
            <button onClick={()=>modify(-1)}>Decrement</button>
            <button onClick={()=>modify(-2)}>Decrement By 2</button>
            <span>{count}</span>
        </>
    )
}

export default Counter