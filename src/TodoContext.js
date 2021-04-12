import React, { createContext, useContext, useReducer, useRef } from "react";

const initialState = [
  {
    id: 1,
    text: "1번 문제 풀기",
    done: true,
  },
  {
    id: 2,
    text: "2번 문제 풀기",
    done: false,
  },
  {
    id: 3,
    text: "3번 문제 풀기",
    done: true,
  },
  {
    id: 4,
    text: "4번 문제 풀기",
    done: false,
  },
];

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return new Error("Error!!");
  }
};

// context 생성 - todos와 dispatch를 따로 전달하기 위해 나눈다. 불필요한 렌더링을 방지하기 위함.
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const ContextProvider = ({ children }) => {
  // reducer 생성
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
