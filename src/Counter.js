import React, { useContext } from "react";
import {CounterContext} from "./contexts/CounterProvider";


function Counter() {
  const {number, increase, decrease} = useContext(CounterContext)

  return (
    <div>
      <p>Count: {number}</p>
      <button type="button" onClick={increase}>+</button>
      <button type="button" onClick={decrease}>-</button>
    </div>
  )
}

export default Counter;