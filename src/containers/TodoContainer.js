import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { changeTodo, submitTodo, toggleTodo } from "../modules/todo";

function TodoContainer() {
  const { value, todos } = useSelector((state) => ({
    value: state.todo.value,
    todos: state.todo.todos,
  }));

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { value: text } = e.target;
    dispatch(changeTodo(text));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTodo());
  };
  const onToggle = (e) => {
    const { id } = e.target;
    dispatch(toggleTodo(id));
  };

  useEffect(() => console.log(todos), [todos]);

  return (
    <>
      <TodoForm value={value} onChange={onChange} onSubmit={onSubmit} />
      <TodoList todos={todos} onToggle={onToggle} />
    </>
  );
}

export default TodoContainer;
