import {createContext, useState} from "react";

// const initialCount = 0;

// function Reducer(state, action) {
//   switch(action.type) {
//     case ("INCREASE"):
//       return state + 1;
//     case ("DECREASE"):
//       return state - 1;
//     default:
//       return state;
//   }
// }

export const CounterContext = createContext();
// export const CounterDispatchContext = createContext();

export const CounterProvider = ({children}) => {
  const increase = () => {
    setState(prevState => {
      return {
        ...prevState,
        number: prevState.number + 1
      }
    })
  }

  const decrease = () => {
    setState(prevState => {
      return {
        ...prevState,
        number: prevState.number - 1
      }
    })
  }

  const initialState = {
    number: 0,
    increase,
    decrease
  }
  const [state, setState] = useState(initialState);


  return (
    <CounterContext.Provider value={state}>
        {children}
    </CounterContext.Provider>
  )
}