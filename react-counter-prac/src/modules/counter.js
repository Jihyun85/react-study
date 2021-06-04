// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션함수 생성
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// initialCounter
const initialCount = { count: 0 };

// reducer 생성
export function counter(state = initialCount, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
