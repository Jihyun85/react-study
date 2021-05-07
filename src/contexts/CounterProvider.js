import {createContext, useReducer} from "react";

const initialCount = 0;

function Reducer(state, action) {
  switch(action.type) {
    case ("INCREASE"):
      return state + 1;
    case ("DECREASE"):
      return state - 1;
    default:
      return state;
  }
}

export const CounterContext = createContext();
export const CounterDispatchContext = createContext();

export const CounterProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialCount)
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  )
}