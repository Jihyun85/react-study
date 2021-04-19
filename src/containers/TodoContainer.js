import React, { useReducer, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const initialState = {
  todos: [],
  value: "",
  nextId: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "TODO_INPUT":
      return {
        ...state,
        value: action.payload,
      };
    case "TODO_SUBMIT":
      return {
        todos: state.todos.concat({
          id: state.nextId,
          text: state.value,
          done: false,
        }),
        value: "",
        nextId: state.nextId++,
      };
    case "TODO_TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "TODO_EDIT":
      return {
        ...state,
        value: state.todos.find((todo) => todo.id === action.id).text,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "TODO_REMOVE":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => Number(todo.id) !== Number(action.id)
        ),
      };
    default:
      throw new Error("Unhandled action");
  }
}

function TodoContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    const payload = e.target.value;
    dispatch({ type: "TODO_INPUT", payload });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "TODO_SUBMIT" });
  };

  const onRemove = (id) => {
    dispatch({ type: "TODO_REMOVE", id });
  };

  const onEdit = (id, value) => {
    dispatch({ type: "TODO_EDIT", id, payload: value });
  };

  const onToggle = (id) => {
    dispatch({ type: "TODO_TOGGLE", id });
  };

  return (
    <Container>
      <Title>My To-Do-List</Title>
      <TodoInput value={state.value} onChange={onChange} onSubmit={onSubmit} />
      <TodoList
        todos={state.todos}
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
