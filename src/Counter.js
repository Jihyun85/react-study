import React from "react";
import { useCount, useDispatch } from "./contexts/CounterProvider";

function Counter() {
  const state = useCount();
  const dispatch = useDispatch();

  const increase = () => dispatch({ type: "INCREASE" });
  const decrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
