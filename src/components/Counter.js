import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";

function Counter() {
  const { count } = useSelector((state) => ({ count: state.counter.count }));
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(increase());
  const decreaseCount = () => dispatch(decrease());

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={increaseCount}>
        +
      </button>
      <button type="button" onClick={decreaseCount}>
        -
      </button>
    </div>
  );
}

export default Counter;
