import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { MdModeEdit, MdDelete } from "react-icons/md";
import styled from "styled-components";
import { TodoDispatchContext } from "../TodoProvider";

function TodoItem({ todo }) {
  const ref = useRef();

  const dispatch = useContext(TodoDispatchContext);
  const onToggle = (id) => dispatch({ type: "TODO_TOGGLE", id });
  const onEdit = (id, value) =>
    dispatch({ type: "TODO_EDIT", id, payload: value });
  const onRemove = (id) => dispatch({ type: "TODO_REMOVE", id });

  return (
    <Item>
      <Checkbox
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <Text ref={ref} done={todo.done}>
        {todo.text}
      </Text>
      <BtnContainer>
        <EditBtn onClick={() => onEdit(todo.id, ref)}>
          <MdModeEdit />
        </EditBtn>
        <DeleteBtn onClick={() => onRemove(todo.id)}>
          <MdDelete />
        </DeleteBtn>
      </BtnContainer>
    </Item>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
};

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  font-size: 1.6rem;
  &:hover {
    background-color: #e7f2f8;
  }
`;

const Checkbox = styled.input``;

const Text = styled.p`
  flex: 1;
  margin-left: 2rem;
  color: ${(props) => (props.done ? "grey" : "black")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const BtnContainer = styled.div`
  display: flex;
  font-size: 2rem;
`;

const EditBtn = styled.div`
  cursor: pointer;
  &:hover {
    color: #05c46b;
  }
`;

const DeleteBtn = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    color: #ff3f34;
  }
`;

export default React.memo(TodoItem);
