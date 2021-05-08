import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.text}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default TodoList;
