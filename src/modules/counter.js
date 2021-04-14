// 액션
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// (getState) => (dispatch) => {} 이지만 getState를 쓰지 않으므로 그냥 비워둔 것
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초기값
const initialState = 0;

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
