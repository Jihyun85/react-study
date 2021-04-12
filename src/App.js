import React from "react";
import { GlobalStyles } from "./components/Globalstyles";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { ContextProvider } from "./TodoContext";

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </ContextProvider>
  );
};

export default App;
