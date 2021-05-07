import React, { useContext } from "react";
import {CounterDispatchContext, CounterContext} from "./contexts/CounterProvider";


function Counter() {
  const state = useContext(CounterContext);
  const dispatch = useContext(CounterDispatchContext);
  const increaseCount = () => dispatch({type: "INCREASE"});
  const decreaseCount = () => dispatch({type: "DECREASE"});

  return (
    <div>
      <p>Count: {state}</p>
      <button type="button" onClick={increaseCount}>+</button>
      <button type="button" onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter;