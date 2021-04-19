import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  todoEdit,
  todoInput,
  todoRemove,
  todoSubmit,
  todoToggle,
} from "../modules/todos";

function TodoContainer() {
  const { todos, value } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const payload = e.target.value;
    dispatch(todoInput(payload));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoSubmit());
  };

  const onToggle = (id) => dispatch(todoToggle(id));

  const onEdit = (id, value) => dispatch(todoEdit(id, value));

  const onRemove = (id) => dispatch(todoRemove(id));

  return (
    <Container>
      <Title>My To-Do-List</Title>
      <TodoInput value={value} onChange={onChange} onSubmit={onSubmit} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onEdit={onEdit}
        onRemove={onRemove}
      />
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

export default React.memo(TodoContainer);
