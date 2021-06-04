import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const plusNumber = () => dispatch({ type: "INCREASE" }); // number + 1이라는 값을 새로 넣어줌
  const minusNumber = () => dispatch({ type: "DECREASE" }); // 기존 값에서 1을 빼줌

  return (
    <div>
      <h2>{number}</h2>
      <button type="button" onClick={plusNumber}>
        +
      </button>
      <button type="button" onClick={minusNumber}>
        -
      </button>
    </div>
  );
}
