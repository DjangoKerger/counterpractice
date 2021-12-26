import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter+1)
    }

    function decrease(){
        setCounter(counter-1)
    }

    return (
        <div>
            <div className="theCount"> {counter}</div>
            
            <button className="positive" onClick={increment}> + </button>
            <button className="negative" onClick={decrease}> - </button>
        </div>
    )
}

export default Counter;
