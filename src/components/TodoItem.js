import React, { useContext } from "react";
import { TodoDispatchContext, TOGGLE_TODO } from "../contexts/TodoProvider";

function TodoItem({ id, todo }) {
  const dispatch = useContext(TodoDispatchContext);

  const onToggle = (e) => {
    const { id: todoId } = e.target;
    dispatch({ type: TOGGLE_TODO, payload: { id: todoId } });
  };

  return (
    <li id={id} onClick={onToggle}>
      {todo}
    </li>
  );
}

export default React.memo(TodoItem);
