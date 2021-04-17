import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, onEdit, onRemove }) {
  if (todos.length === 0) return null;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
};

export default React.memo(TodoList);
