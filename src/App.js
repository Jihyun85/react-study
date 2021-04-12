import React from "react";
import { GlobalStyles } from "./components/Globalstyles";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
};

export default App;
