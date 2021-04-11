import React, { useCallback, useMemo, useReducer, useRef } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
    age: "",
  },
  users: [
    {
      id: 1,
      username: "Suho",
      age: 31,
      email: "jm@exo.com",
      active: true,
    },
    {
      id: 2,
      username: "Xiumin",
      age: 32,
      email: "xiuxiu@exo.com",
      active: false,
    },
    {
      id: 3,
      username: "Baekhyun",
      age: 30,
      email: "kyung@exo.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_ACTIVE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email, age } = state.inputs;

  const nextId = useRef(4);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        age,
      },
    });
    nextId.current += 1;
  }, [username, email, age]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        age={age}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
