import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={increaseCount}>+</button>
      <button type="button" onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter;