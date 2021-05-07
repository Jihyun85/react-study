import React, { useReducer } from "react";

const initialCount = 0;

function reducer(state, action) {
  switch(action.type) {
    case ("INCREASE"):
      return state + 1;
    case ("DECREASE"):
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const increaseCount = () => dispatch({type: "INCREASE"});
  const decreaseCount = () => dispatch({type: "DECREASE"});

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={increaseCount}>+</button>
      <button type="button" onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter;