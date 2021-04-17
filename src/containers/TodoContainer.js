import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

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
  return (
    <div>
      <TodoInput value={value} onChange={onChange} onSubmit={onSubmit} />
      <TodoList todos={todos} onEdit={onEdit} onRemove={onRemove} />
    </div>
  );
}

export default TodoContainer;
