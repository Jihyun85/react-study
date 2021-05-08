import React, { useContext, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoContainer() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default TodoContainer;
