import React, { useContext } from "react";
import styled from "styled-components";
import { TodoDispatchContext, TodoStateContext } from "../TodoProvider";

function TodoInput() {
  const { value } = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  const onChange = (e) => {
    const payload = e.target.value;
    dispatch({ type: "TODO_INPUT", payload });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "TODO_SUBMIT" });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} value={value} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  width: 50rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;
  height: 4rem;
  padding: 0.5rem 2rem;
  border: 0.2rem solid #575fcf;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  font-size: 1.8rem;
  &:focus {
    border-color: #3c40c6;
  }
`;

const Button = styled.button`
  width: 8rem;
  height: 4rem;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  color: white;
  background-color: #575fcf;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: #3c40c6;
  }
`;

export default TodoInput;
