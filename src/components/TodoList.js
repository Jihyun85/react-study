import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="1번" done={false} />
      <TodoItem text="2번" done={true} />
      <TodoItem text="3번" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
