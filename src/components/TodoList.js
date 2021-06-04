import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            onToggle={onToggle}
          />
        ))}
    </ul>
  );
}

export default TodoList;
