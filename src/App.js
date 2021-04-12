import React from "react";
import { GlobalStyles } from "./components/Globalstyles";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
};

export default App;
