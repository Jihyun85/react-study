import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { TodoStateContext } from "../TodoProvider";

function TodoList() {
  const { todos } = useContext(TodoStateContext);
  if (todos.length === 0) return null;
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50rem;
  background-color: white;
  border: 0.2rem solid #575fcf;
  border-radius: 0.3rem;
`;

export default React.memo(TodoList);
