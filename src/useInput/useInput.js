import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue, validator);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Ms.", maxLength);
  return (
    <div className="App">
      <h1>Hello!</h1>
      <input type="text" placeholder="Name" {...name} />
    </div>
  );
};

export default App;
