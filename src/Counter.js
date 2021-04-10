import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const plusNumber = () => setNumber((prev) => prev + 1);
  const minusNumber = () => setNumber((prev) => prev - 1);

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
