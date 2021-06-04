// 액션
const CHANGE_TODO = "CHANGE_TODO";
const SUBMIT_TODO = "SUBMIT_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// 액션 함수
export const changeTodo = (text) => {
  return { type: CHANGE_TODO, payload: { text } };
};

export const submitTodo = () => {
  return { type: SUBMIT_TODO };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: { id } };
};

// 초기값
const initialState = {
  value: "",
  todos: [],
  nextId: 0,
};

export function todo(state = initialState, action) {
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
            id: state.nextId,
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
      return state;
  }
}
