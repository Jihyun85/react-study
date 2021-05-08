import React, { useContext } from "react";
import { TodoStateContext } from "../contexts/TodoProvider";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoStateContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.text} />
      ))}
    </ul>
  );
}

export default TodoList;
