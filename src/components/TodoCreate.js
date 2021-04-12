import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatchContext, useTodoNextIdContext } from "../TodoContext";

const TodoCreateBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const CreateButton = styled.button`
  position: absolute;
  left: calc(50% - 2.5rem);
  bottom: -2rem;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  color: white;
  background-color: #27ae60;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: transform 0.5s linear;
  &:hover {
    background-color: #ee5253;
  }
  &:active {
    background-color: #ee5253;
  }
  ${(props) =>
    props.open &&
    css`
      background-color: #ee5253;
      &:hover {
        background-color: #27ae60;
      }
      &:active {
        background-color: #27ae60;
      }
      transform: rotate(45deg);
    `}
`;

const TodoForm = styled.form`
  padding: 32px 32px 72px 32px;
  background-color: #d9e4ec;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const TodoInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);

  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  const dispatch = useTodoDispatchContext();
  const nextId = useTodoNextIdContext();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    nextId.current += 1;
  };

  return (
    <TodoCreateBlock>
      <CreateButton onClick={onClick} open={open}>
        <MdAdd />
      </CreateButton>
      {open && (
        <TodoForm onSubmit={onSubmit}>
          <TodoInput
            autoFocus
            placeholder="Enter를 누르면 제출됩니다."
            onChange={onChange}
            value={value}
          />
        </TodoForm>
      )}
    </TodoCreateBlock>
  );
};

export default TodoCreate;
