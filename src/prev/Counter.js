import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const plusNumber = () => setNumber(number + 1); // number + 1이라는 값을 새로 넣어줌
  const minusNumber = () => setNumber((prev) => prev - 1); // 기존 값에서 1을 빼줌

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
