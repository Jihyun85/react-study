import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import styled from "styled-components";

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: id,
      text: value,
      done: false,
    };
    setId(id + 1);
    setTodos(todos.concat(newTodo));
    setValue("");
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onEdit = (id, value) => {
    setValue(value);
    onRemove(id);
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Container>
      <Title>My To-Do-List</Title>
      <TodoInput value={value} onChange={onChange} onSubmit={onSubmit} />
      <TodoList
        todos={todos}
        onEdit={onEdit}
        onRemove={onRemove}
        onToggle={onToggle}
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

export default TodoContainer;
