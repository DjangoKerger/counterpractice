import React from 'react'
import { useState } from 'react/cjs/react.development';

import "./Counter1.css";

const Counter1 = () => {

    const [counter1, setCounter] = useState(0)
    
    function increment(){
        setCounter(counter1+1)
    }
    function decrease(){
        setCounter(counter1-1)
    }
    
    return (
        <div className="counter1Container">
        <div className="number">
            {counter1}
        </div>
        <button className="plus" onClick={increment}> + </button>
        <button className="minus" onClick={decrease}> - </button>
        </div>
    )
}

export default Counter1;
