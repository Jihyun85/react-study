import React, { useReducer } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const initialState = {
  value: "",
  todos: [],
  nextId: 0,
};

function todoReducer(state, action) {
  switch (action.type) {
    case "CHANGE_TODO":
      return {
        ...state,
        value: action.payload.text,
      };
    case "SUBMIT_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            text: state.value,
            done: false,
          },
        ],
        value: "",
        nextId: state.nextId + 1,
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === Number(action.payload.id)
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };
    default:
      throw new Error("Unhandled event");
  }
}

function TodoContainer() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const { value, todos } = state;

  //입력 이벤트
  const onChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "CHANGE_TODO", payload: { text: value } });
  };

  // form 제출 이벤트
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_TODO" });
  };

  // todo 실행여부 체크 이벤트
  const onToggle = (e) => {
    const { id } = e.target;
    console.log(id);
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  return (
    <>
      <TodoForm onChange={onChange} onSubmit={onSubmit} value={value} />
      <TodoList todos={todos} onToggle={onToggle} />
    </>
  );
}

export default TodoContainer;
