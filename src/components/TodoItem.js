import React from "react";
import styled, { css } from "styled-components";
import { MdCheck, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  color: #c8d6e5;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  transition: color 0.5s ease-in-out;
  transition: display 0.5s ease-in-out;

  &:hover {
    color: #ee5253;
  }
`;

const TodoContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 1rem;
  border: 1px solid #c8d6e5;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      color: #27ae60;
      border: 1px solid #27ae60;
    `}
`;

const Text = styled.div`
  flex: 1;
  color: black;
  font-size: 1.6rem;
  ${(props) =>
    props.done &&
    css`
      color: #c8d6e5;
    `}
`;

const TodoItem = ({ id, text, done }) => {
  return (
    <>
      <TodoContainer>
        <CheckButton done={done}>{done && <MdCheck />}</CheckButton>
        <Text done={done}>{text}</Text>
        <Remove>
          <MdDelete />
        </Remove>
      </TodoContainer>
    </>
  );
};

export default TodoItem;
