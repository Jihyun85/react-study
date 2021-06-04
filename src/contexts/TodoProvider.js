import { createContext, useReducer, useRef } from "react";

// 액션
export const CHANGE_TODO = "CHANGE_TODO";
export const SUBMIT_TODO = "SUBMIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const initialState = {
  value: "",
  todos: [],
  nextId: 0,
};

function todoReducer(state, action) {
  switch (action.type) {
    case CHANGE_TODO:
      return {
        ...state,
        value: action.payload.text,
      };
    case SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: state.value,
            done: false,
          },
        ],
        value: "",
        nextId: state.nextId + 1,
      };
    case TOGGLE_TODO:
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const nextId = useRef(0);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
