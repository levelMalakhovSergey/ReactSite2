import React from "react";
import { useState } from "react";


const Counter   = function () 
{
   
    const [state,   setState] = useState(0)
  const [value,   setValue] = useState("sdasdsa")
    function increment()
 {
   setState(state+1)
 }
 function decrement()
 {
  setState(state-1)
 }
  
    return(
        <div >
        <h1> {state} </h1>
        <h1> {value} </h1>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}  ></input>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    )
}

export default Counter;