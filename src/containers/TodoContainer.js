import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import styled from "styled-components";

function TodoContainer() {
  return (
    <Container>
      <Title>My To-Do-List</Title>
      <TodoInput />
      <TodoList />
    </Container>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #3c40c6;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TodoContainer;
