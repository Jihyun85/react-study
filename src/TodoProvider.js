import { createContext, useReducer } from "react";

// 액션 정의
const TODO_INPUT = "TODO_INPUT";
const TODO_SUBMIT = "TODO_SUBMIT";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_EDIT = "TODO_EDIT";
const TODO_REMOVE = "TODO_REMOVE";

// 초기state
const initialState = {
  todos: [],
  value: "",
  nextId: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case TODO_INPUT:
      return {
        ...state,
        value: action.payload,
      };
    case TODO_SUBMIT:
      return {
        todos: state.todos.concat({
          id: state.nextId,
          text: state.value,
          done: false,
        }),
        value: "",
        nextId: state.nextId++,
      };
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case TODO_EDIT:
      return {
        ...state,
        value: state.todos.find((todo) => todo.id === action.id).text,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => Number(todo.id) !== Number(action.id)
        ),
      };
    default:
      throw new Error("Unhandled action");
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default TodoProvider;
