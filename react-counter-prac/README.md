## React 연습

- [x] Counter - useState
- [x] Counter - useReducer
- [x] Counter - context API
- [x] Counter - redux

### 👩‍🎓 Counter - useState

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={increaseCount}>
        +
      </button>
      <button type="button" onClick={decreaseCount}>
        -
      </button>
    </div>
  );
}
```

### 👩‍🎓 Counter - useReducer

```javascript
const initialCount = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const increaseCount = () => dispatch({ type: "INCREASE" });
  const decreaseCount = () => dispatch({ type: "DECREASE" });

······
```

### 👩‍🎓 Counter - context API + useReducer

#### CounterProvider.js

```javascript
import { createContext, useReducer } from "react";

const initialCount = 0;

function Reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

export const CounterContext = createContext();
export const CounterDispatchContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialCount);
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};
```

#### App.js

- Counter에서 CounterContext를 사용할 수 있또록 CounterProvider로 감싸주었다.

```javascript
function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
```

#### Counter.js

```javascript
function Counter() {
  const state = useContext(CounterContext);
  const dispatch = useContext(CounterDispatchContext);

  const increaseCount = () => dispatch({type: "INCREASE"});
  const decreaseCount = () => dispatch({type: "DECREASE"});

  return (······)
}
```

### 👩‍🎓 Counter - Redux

#### index.js

```javascript
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

#### modules/counter.js

```javascript
// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션함수 생성
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// initialCounter
const initialCount = 0;

// reducer 생성
export function counter(state = initialCount, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
```

#### modules/index.js

- 지금은 reducer가 하나지만 늘어날 경우 이 파일에서 combine 작업을 해주면 된다.

```javascript
import { combineReducers } from "redux";
import { counter } from "./counter";

const rootReducer = combineReducers({ counter });

export default rootReducer;
```

#### Counter.js

- useSelector를 통해 state에 접근할 수 있다.
- useDispatch를 통해 action을 전달할 수 있다.

```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./modules/counter";

function Counter() {
  const { count } = useSelector((state) => ({ count: state.counter }));
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(increase());
  const decreaseCount = () => dispatch(decrease());

  return (······)
```
