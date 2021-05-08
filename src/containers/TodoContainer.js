import React, { useRef, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoContainer() {
  // form -input[type="text"]에 보일 text
  const [value, setValue] = useState("");
  // todo의 목록
  const [todos, setTodos] = useState([]);

  // todoId
  let nextId = useRef(0);

  //입력 이벤트
  const onChange = (e) => {
    const { value: inputValue } = e.target;
    setValue(inputValue);
  };

  // form 제출 이벤트
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    const newTodo = {
      id: nextId.current,
      text: value,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setValue("");
    nextId.current += 1;
  };

  // todo 실행여부 체크 이벤트
  const onClick = (e) => {
    const { id: listId } = e.target;
    setTodos(
      todos.map((todo) =>
        todo.id === Number(listId) ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <TodoForm onChange={onChange} onSubmit={onSubmit} value={value} />
      <TodoList todos={todos} onClick={onClick} />
    </>
  );
}

export default TodoContainer;
