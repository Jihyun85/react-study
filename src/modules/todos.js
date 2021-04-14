const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: { id: nextId++, text },
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

/* 리듀서의 초기 상태가 꼭 객체일 필요는 없음. 숫자, 문자열, 불리언 상관 없음. */
const initialState = [
  // {
  //   id: 1,
  //   text: "예시1",
  //   done: false,
  // }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
