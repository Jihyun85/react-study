import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styled from "styled-components";

function TodoList({ todos, onEdit, onRemove, onToggle }) {
  if (todos.length === 0) return null;
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50rem;
  background-color: white;
  border: 0.2rem solid #575fcf;
  border-radius: 0.3rem;
`;

export default React.memo(TodoList);
