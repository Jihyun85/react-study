import { createContext, useContext, useReducer } from "react";

const initialState = { count: 0 };

function Reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const CounterContext = createContext();
export const CounterDispatchContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

// state를 불러오는 hook
export const useCount = () => {
  const state = useContext(CounterContext);
  return state;
};

// dispatch를 불러오는 hook
export const useDispatch = () => {
  const dispatch = useContext(CounterDispatchContext);
  if (!dispatch) {
    throw new Error("dispatch가 없습니다.");
  }
  return dispatch;
};
