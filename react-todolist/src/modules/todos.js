// 액션
const TODO_INPUT = "TODO_INPUT";
const TODO_SUBMIT = "TODO_SUBMIT";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_EDIT = "TODO_EDIT";
const TODO_REMOVE = "TODO_REMOVE";

// 액션함수
export const todoInput = (value) => ({ type: TODO_INPUT, payload: value });
export const todoSubmit = () => ({ type: TODO_SUBMIT });
export const todoToggle = (id) => ({ type: TODO_TOGGLE, id });
export const todoEdit = (id, value) => ({
  type: TODO_EDIT,
  id,
  payload: value,
});
export const todoRemove = (id) => ({ type: TODO_REMOVE, id });

// initialState
const initialTodos = {
  value: "",
  todos: [],
  nextId: 0,
};

// reducer
export default function reducer(state = initialTodos, action) {
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
        nextId: (state.nextId += 1),
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
      return state;
  }
}
