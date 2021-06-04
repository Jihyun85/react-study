import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import styled from "styled-components";

function TodoList({ todos, onToggle, onEdit, onRemove }) {
  if (todos.length === 0) return null;
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
  onToggle: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
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
