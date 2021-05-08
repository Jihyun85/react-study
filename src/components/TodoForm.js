import React, { useContext } from "react";
import {
  CHANGE_TODO,
  SUBMIT_TODO,
  TodoDispatchContext,
  TodoNextIdContext,
  TodoStateContext,
} from "../contexts/TodoProvider";

function TodoForm() {
  const { value } = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);
  const nextId = useContext(TodoNextIdContext);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SUBMIT_TODO, payload: { id: nextId.current } });
    nextId.current += 1;
  };

  const onChange = (e) => {
    const { value: text } = e.target;
    dispatch({ type: CHANGE_TODO, payload: { text } });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="오늘 할 일을 적어주세요!"
        onChange={onChange}
        value={value}
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default TodoForm;
